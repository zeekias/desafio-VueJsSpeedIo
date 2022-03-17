<template>
    <div class="main-container">
        <div>
        <h1> Desafio VueJs - SpeedIo </h1>
        <UrlBox/>
        </div>
    </div>
</template>

<script>
import UrlBox from '../../components/UrlBox.vue'
export default {
    name: 'HomePage',
    components:{
        UrlBox
    }
}
</script >

<style lang="scss" scoped>

</style>