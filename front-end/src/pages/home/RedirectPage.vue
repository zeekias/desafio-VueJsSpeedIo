<template>
    <div class="main-container">
        <h1>Estamos te Redirecionando!</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'RedirectPage',
    created(){
        const getData = async ()=>{
        const {short} = this.$route.params;
        const response = await axios(`http://localhost:3072/address/${short}/visit`);
        const url = response.data;
        window.location.replace(url.url)
        }
        getData();
    }
}
</script >

<style lang="scss" scoped>

</style>