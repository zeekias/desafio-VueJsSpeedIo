
<template>
    <div class="message-container">
       <p>{{msg}}</p>
    </div>
</template>

<script>

export default {
    name: "MessageComponent",
    props:{
        msg: String
    }
}

</script>

<style lang="scss" scoped>
.message-container{
    color: red;
    font-weight: bold;
    border: 2px solid #000;
    border-radius: 5px;
    padding: 10px;
    max-width: 400px;
    margin: 30px auto;
}
</style>