<template>
<nav id="navBar-login-register">
   <span id="navbar">
    <router-link to="/register">Registre-se</router-link> agora ou    
    <router-link to="/login">Faça Login</router-link> 
    </span>
</nav>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    nav {
        font-size: 2.5em;
        padding-bottom:20px;
    a {
        font-weight: bold;
        color: #000;
        padding: 0px;
        text-decoration: none;
        transition: 0.5s;
        &.router-link-exact-active {
        color: #42b983;
        }
    }
    a:hover{
        color: #00a0db;
        }
    }
</style>