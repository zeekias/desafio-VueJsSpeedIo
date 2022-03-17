<template>
<section id="urlbox">

    <h1>Sua a url encurtada</h1>
    <div>
        <div id="formurl">
            <input type="text" name="url" :value=" 'localhost:8080/#/'+ shortUrl.short_url" placeholder="Sua Url Encurtada">
            <div id="formbutton">
                <button @click="copy"> Copiar URL </button>
            </div>
        </div>
    </div>
    <p id="boxtextcenter">
        URL Longa: <a :href="shortUrl.url">{{shortUrl.url}}</a>
         
    </p>
</section>    
</template>

<script>
export default {
    name:'EncurtedUrlBox',
    data(){
        return{
            copyUrl:''            
        }
    },
    props:{
        shortUrl: Object
    },
    methods:{
        copy(){
            navigator.clipboard.writeText('localhost:8080/#/' + this.shortUrl.short_url);
        }
    }
}
</script>

<style lang="scss" scoped>

#urlbox{
    word-break: break-all;
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
        button{
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