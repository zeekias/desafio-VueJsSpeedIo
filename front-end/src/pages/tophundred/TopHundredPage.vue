<template>
  <div class="main-container" id="top-hundred">
    <div>
      <h1>&#128293; Top 100 URL VISITADAS! &#128293;</h1>
    </div>
    <div class="rank" v-for="(short, index) in shortUrl" :key="index">
      <div class="top-container">
        <label>
          URL LONGA: <a :href="short.url">{{short.url}}</a>
        </label>
        <label :style="{color: 'red'}"> SHORT URL: <a>localhost:8080/#/{{short.short_url}}</a> </label>
      </div>
      <div class="top-container">
        <label> CONTADOR DE VISITAS </label>
        <label :style="{color: 'red'}">{{ short.count }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TopHundreView",
  data() {
    return {
      shortUrl: {},
    };
  },
  created() {
    const getData = async () => {
      const response = await axios("http://localhost:3072/address/top");
      this.shortUrl = response.data;
    };
    getData();
  },
};
</script >

<style lang="scss">
#top-hundred {
  display: flex;
  flex-direction: column;
}
.rank {
  display: flex;
  justify-content: space-between;
  a{
    color: #00a0db;
  }
  label{
    font-weight: bold;
    text-align: left;
  }
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
  word-break: break-all;
  justify-content: center;
  align-items: center;
  max-width: 600px;
}

.visit-count {
  display: flex;
  flex-direction: column;
}
</style>