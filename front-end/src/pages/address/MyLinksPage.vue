<template>
  <div class="main-container">
    <div>
      <h1>Seus Links</h1>

      <div class="rank" v-for="(short, index) in myLinks" :key="index">
        <div class="top-container">
          <label :style="{color: '#42b983'}">
            URL LONGA: <a :href="short.url">{{short.url}}</a>
          </label>
          <label :style="{color: 'red'}"> SHORT URL: <a> {{ short.short_url }}</a> </label>
        </div>
        <div class="top-container">  
          <label> CONTADOR DE VISITAS </label>
          <label :style="{color: 'red'}">{{ short.count }}</label>
        </div>
        <button @click="deleteUrl(short.short_url,index)" >&#128465;</button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "MyLinksPage",
  components: {},
  data() {
    return {
      myLinks: [],
    };
  },
  methods:{
      teste(){
          console.log('Test');
      },
      deleteUrl(id,index){
          const payload = {
              id,
              token:this.$store.getters.hasToken
          }
          this.$store.dispatch("ActionDeleteLink",payload);

          const newArray = [...this.myLinks]

          newArray.splice(index,1)

          this.myLinks = newArray;
      }
  },
  mounted() {
    const getData = async () => {
      this.myLinks = await this.$store.dispatch(
        "ActionGetMyLinks",
        this.$store.getters.hasToken
      );
    }
    getData();
  },
};
</script >

<style lang="scss" scoped>
#top-hundred {
  display: flex;
  flex-direction: column;
}
.rank {
  display: flex;
  justify-content: center;
}
.top-container {
  margin: 0 auto 20px auto;
  max-width: 758px;
  box-shadow: 0 1px 4px #ccc;
  border-radius: 2px;
  padding: 10px 30px 5px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  max-width: 400px;
  a{
    color: #00a0db;
  }
  label{
    font-weight: bold;
  }
}

.visit-count {
  display: flex;
  flex-direction: column;

  background: green;
}
button{
    font-size: 1.5rem;
    width: 30px;
    height: 100%;
    font-weight: bold;
}
</style>