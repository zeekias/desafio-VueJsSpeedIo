<template>
<section id="urlbox">
    
    <h1>Cole a url para ser encurtada</h1>
    <form @submit.prevent="encurtar">
        <div id="formurl">
            <input type="text" name="u" v-model="url" placeholder="Cole o link aqui">
            <div id="formbutton">
                <input type="submit" value="Encurtar URL">
            </div>
        </div>
    </form>
    <p id="boxtextcenter">
        O Encurtador de URL permite diminuir um link longo tornando-o fácil de lembrar<br>
    </p>
</section>    
</template>

<script>
import axios from 'axios';
export default {
    name:'UrlBox',
    data(){
        return{
            url:'',
            errors:[]
        }
    },
    methods:{
        isHttp(url){
            const urlFixed = /https/.test(url) ? url :"https://" + url;
            return urlFixed;
        },
        checkForm(){
            if(this.url) return true;

            this.errors = [];

            if(!this.url){
                this.errors.push('Url é obrigatoria!');
            }
        },
        async encurtar(){
            this.checkForm();

            if(this.errors.length>0) return;
            const response = await axios.post('http://localhost:3072/address',{
                url: this.isHttp(this.url),
                userId:  this.$store.getters.hasUserId
            });
            this.$router.push(`/address/${response.data.short_url}`);
        },
    }
}
</script>

<style lang="scss" scoped>

#urlbox{
    h1{
        font-size: 36px;
    }
    p{
        padding: 20px;
        a{
            color: #006cff;
            text-decoration: none;
        }
    }
    display: block;
    margin: 0 auto 20px auto;
    max-width: 758px;
    box-shadow: 0 1px 4px #ccc;
    border-radius: 2px;
    padding: 10px 30px 5px;
    background: #fff;
    text-align: center;
    
    #formurl{
        display: table;
        max-width: 600px;
        margin: 0 auto;

        input[type=text]{
            display: table-cell;
            width: 100%;
            height: 56px;
            padding: 10px 16px;
            font: 17px lato,arial;
            color: #000;
            background: #fff;
            border: 1px solid #bbb;
            border-right: 0;
            border-radius: 3px;
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
            box-sizing: border-box;
        }   
    }
    #formbutton{
        display: table-cell;
        width: 1%;
        box-sizing: border-box;
        vertical-align: middle;
        input[type=submit]{
            height: 56px;
            padding: 10px 16px;
            font: bold 17px lato,arial;
            color: #fff;
            background-color: #2c87c5;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            white-space: nowrap;
            border: 0;
            border-radius: 3px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            margin-left: -1px;
            -webkit-appearance: button;
            margin: 0;
        }
    }
}

</style>