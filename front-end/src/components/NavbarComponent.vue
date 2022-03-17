<template>

<header id="header">
  <router-link to="/" id="home">&#9751; Home</router-link>
<nav id="navBar" :class="{active: isActive}">
  <button id="btn-mobile" @click="isActive=!isActive"> Menu <span id="burguer-btn"></span> </button>
  <ul id="menu">

    <li><router-link v-show="this.$store.getters.hasToken" to="/address/mylinks">Minhas url</router-link> </li>
    <li><router-link to="/top100">&#128293;Top100</router-link> </li>
    <li><router-link to="/about">Sobre</router-link> </li>
    <li v-if="!this.$store.getters.hasToken"><router-link  id="login-signup" to="/login">Login/Registrar-se</router-link></li>
    <li v-else><a id="login-signup" @click="logout()">Logout</a></li>
  
  </ul>
</nav>
</header>

</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'NavbarComponent',
  data(){
    return{
      isActive:false
    }
  },
  methods:{
    ...mapActions(['ActionToLogout']),
    logout(){
      this.ActionToLogout();
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss">
#header{
  box-sizing: border-box;
  display: flex;
  height: 10vh;
  width: 100%;
  padding: 1rem;
  background: #000;
  border-bottom: 5px solid #00a0db;
  align-items: center;
  justify-content: space-between;
}
  #menu{
    width: 100%;
    list-style: none;
    display: flex;
    gap: 40px;
    a{
      display: block;
      padding: 0.5rem;
    }
  }
#home{
  font-size:1.5em;
} 
#menu{
  font-size: 1.3em;
}
a{
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    transition: 0.5s;
    cursor: pointer;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
    a:hover{
        color: #00a0db;
      }
#btn-mobile{
  display: none;
}

@media (max-width: 700px){
  #menu{
      display: none ;
      position: absolute;
      width: 100%;
      top: 70px;
      right: 0px;
      background: #000;
      z-index: 1000;
    }
  .active {
    #menu{
      display: block;
      a{
        padding: 1rem 0;;
        margin: 0 1rem;
        border-bottom: 2px solid #00a0db;
      #burguer-btn{
        border-top: 2px solid;
        width: 20px;
      }
      }  

    }
  }
  #btn-mobile{
    display: flex;
    padding: .5rem 1rem;
    font-size: 1rem;
    color: #fff;
    font-weight: bold;
    border: none;
    background: none;
    cursor: pointer;
    gap: 0.5rem;
  }
  #burguer-btn{
    display: block;
    border-top: 2px solid;
    width: 20px;
  }
  #burguer-btn::after,#burguer-btn::before{
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background: currentColor;
    margin-top: 5px;
    transition: .3s;
    position: relative;
  }
  .active{
    #burguer-btn{
      border-top-color: transparent;
    }
    #burguer-btn::before{
      transform: rotate(135deg);
    }
    #burguer-btn::after{
      transform: rotate(-135deg);
      top: -7px;
    }
  }

}

</style>