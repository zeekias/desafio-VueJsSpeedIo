<template>
  <div class="main-container">
    <div class="container">
      <NavbarLoginRegister />
      <MessageComponent v-show="this.error" :msg="error"/>
      <div class="register-box">
        <form @submit.prevent="submit()">
          <div class="user-box">
            <input type="text" required v-model="form.username" />
            <label>Nome</label>
          </div>
          <div class="user-box">
            <input type="email" required v-model="form.email" />
            <label>Email</label>
          </div>
          <div class="user-box">
            <input type="password" required v-model="form.password" />
            <label>Senha</label>
          </div>
          <div class="user-box">
            <input type="password" required v-model="confirmedPassword" />
            <label>Repetir senha</label>
          </div>
          <button>Registra-se</button>
        </form>
        <span>
          Já possui uma conta? <router-link to="/login">Login</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import MessageComponent from "../../components/MessageComponent.vue";
import { ActionToRegister } from '@/modules/store/actions';
import {mapActions} from 'vuex'
import NavbarLoginRegister from "../../components/NavbarLoginRegister";
export default {
  name: "RegisterPage",
  components: {
    NavbarLoginRegister,MessageComponent
  },
  data(){
      return{
          error:'',
          form:{
              username:'',
              email:'',
              password:'',
            },
            confirmedPassword:''
      }
  },
  methods:{
      ...mapActions(['ActionToRegister']),
      async submit(){
          try{
            if(!this.checkform()){
              this.error='Senhas devem ser Iguais'
              return;
            }
            await ActionToRegister('ActionToRegister', this.form);
            this.$router.push({ path: '/login' });
          }catch(e){
              console.log(e);
          }
      },
      checkform(){
        return(this.form.password && this.form.password === this.confirmedPassword);
      }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 5vh;
}
.register-box {
  h2 {
    padding-top: 20px;
    color: #42b983;
    text-align: center;
    font-size: 25px;
  }
  .user-box {
    position: relative;
    padding: 20px;
    input {
      width: 100%;
      padding: 10px 0;
      font-size: 16px;
      color: #212529;
      margin-bottom: 30px;
      border: none;
      border-bottom: 1px solid #212529;
      outline: none;
      background: transparent;
    }
    label {
      font-family: "Maven Pro", sans-serif;
      font-weight: bold;
      position: absolute;
      top: 0px;
      left: 20px;
      padding: 20px 0;
      font-size: 16px;
      color: #3e454d;
      pointer-events: none;
      transition: 0.5s;
    }
    input:focus ~ label,
    input:valid ~ label {
      top: -20px;
      left: 20px;
      color: #212529;
      font-size: 12px;
    }
  }
  form button {
    font-family: "Maven Pro", sans-serif;
    position: relative;
    display: inline-block;
    padding: 15px 20px;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-bottom: 40px;
    letter-spacing: 4px;
    background: #42b983;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
  }
  form button:hover {
    background: #35795a;
  }
}
</style>