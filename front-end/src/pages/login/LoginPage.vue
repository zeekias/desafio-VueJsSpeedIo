<template>
  <div class="main-container">
    <div class="container">
      <NavbarLoginRegister />
      <MessageComponent :msg="error" v-show="this.error"/>
      <div>
    <div class="login-box">
        <form @submit.prevent="submit()">
            <div class="user-box">
                <input type="email" v-model="form.email" required="">
                <label>Email</label>
            </div>
            <div class="user-box">
                <input type="password" v-model="form.password" required="">
                <label>Senha</label>
            </div>
            <button>
                ENTRAR
            </button>
        </form>
        <span> Ainda não possui uma conta? <router-link to="/register">Registrar-se</router-link>   </span>
    </div>
</div>

    </div>
  </div>
</template>

<script>
import MessageComponent from "../../components/MessageComponent.vue";
import NavbarLoginRegister from "../../components/NavbarLoginRegister.vue";

import { mapActions } from "vuex";

export default {
  name: "LoginPage",
  components: {
    NavbarLoginRegister,
    MessageComponent,
  },
  data(){
      return{
          error:'',
          form:{
              email:'',
              password:''
          }
      }
  }
  ,
  methods: {
    ...mapActions(['ActionToLogin']),
    async submit(){
        try{
            await this.ActionToLogin(this.form);
            this.$router.push({ path: '/' });
        }catch(e){
            this.error = 'Usuário ou Senha Inválida';
        }
    }
  },
};
</script>

<style lang="scss" scoped>
.login-box{
    h2{
        padding-top: 20px;
        color: #42b983;
        text-align: center;
        font-size: 25px;
    }
    a{
        color: #006cff;
    }
    .user-box{
        position: relative;
        padding: 20px;
        input{
            width: 100%;
            padding: 10px 0;
            font-size: 16px;
            color:#212529; 
            margin-bottom: 30px;
            border: none;
            border-bottom: 1px solid #212529;
            outline: none;
            background: transparent;
       }
       label{
           font-family: "Maven Pro", sans-serif;
           font-weight: bold;
           position: absolute;
           top:0;
           left: 20px;
           padding: 20px 0;
           font-size: 16px;
           color: #3e454d;
           pointer-events: none;
           transition: .5s;
       }
       input:focus ~ label, input:valid ~ label{
           top:-20px;
           left: 20px;
           color: #212529;
           font-size: 12px;
       }

    }
    form button{
        font-family: "Maven Pro", sans-serif;
        position: relative;
        display: inline-block;
        padding: 15px 20px;
        color: #fff;
        font-size: 16px;
        text-transform: uppercase;
        overflow: hidden;
        transition: .5s;
        margin-bottom: 40px;
        letter-spacing: 4px;
        background:#42b983;
        width: 100%;
        border-radius: 10px;
        cursor: pointer;

    }
    form button:hover{
        background:#35795a;
    }
}

</style>