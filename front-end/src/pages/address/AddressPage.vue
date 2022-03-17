<template>
    <div class="main-container">
        <div>
        <h1> Adress SpeedIo </h1>
        <EncurtedUrlBox :shortUrl="this.shortUrl"/>
        </div>
    </div>
</template>

<script>
import EncurtedUrlBox from '../../components/EncurtedUrlBox .vue';
export default {
    name: 'AdressPage',
    components:{
        EncurtedUrlBox
    },
    data(){
        return{
            shortUrl:{}
        }
    },
    created(){
        const getData = async()=>{
        const {short} = this.$route.params;
        this.shortUrl = await this.$store.dispatch('ActionGetData', short)
        }
        getData();
    }    
}
</script >

<style lang="scss" scoped>

</style>