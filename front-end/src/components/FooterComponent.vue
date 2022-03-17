<template>
<footer> 
    <p>@Desafio VueJs - SpeedIo by Ezequiel Magalhães Moraes</p>
</footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>


footer{
  height: 10vh;  
  padding: 20px;
  background: #000;
  border-top: 5px solid #00a0db;
  
  p{
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }
}

</style>