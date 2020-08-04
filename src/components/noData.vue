<template>
  <div class="no-data-container">
    <div class="no-data-img fm">
      <img src="../assets/images/icon/no_data.png" alt="">
    </div>
    <div v-show="txt"><p>{{txt}}</p></div>
    <div v-show="btnTxt"><button @click="doSth">{{btnTxt}}</button></div>
  </div>
</template>

<script>
  export default {
    name: "noData",
    props: {
      text:{
        type: String,
        default: ''
      },
      btn: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        txt: '',
        btnTxt: ''
      }
    },
    methods: {
      doSth() {
        this.$emit('next-do')
      }
    },
    created() {
      this.txt = this.text;
      this.btnTxt = this.btn;
    }
  }
</script>

<style scoped lang="less">
  .no-data-container{
    width: 65%;
    margin: 120px auto 0;
    .no-data-img{
      img{
        display: block;
        width: 100%;
      }
    }
    p{
      font-size: 18px;
      margin: 25px auto;
    }
    button{
      padding: 10px 0;
      width: 90%;
      border-radius: 30px;
      font-size: 18px;
      background-color: #6982f7;
      color: white;
    }
  }
</style>
