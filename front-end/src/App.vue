<template>
  <div id="app">
  <NavBar/>
  
  <div id="container">
  <router-view/>
  </div>

  <FooterComponent/>
  </div>
</template>

<script>
import NavBar from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  name: 'app',
  components:{
    NavBar, FooterComponent
  },
  mounted(){
    const data = localStorage.getItem('state');
    if(data){
      this.$store.dispatch('ActionLoadState', JSON.parse(data))
    }
  }
}
</script>

<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;700&display=swap');

*,body,html{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Maven Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}
h1{
    font-size: 3em;
    padding: 20px;
}
.main-container{
  margin: auto;
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#container{
  height: 80vh;
  overflow:scroll;
}
</style>
