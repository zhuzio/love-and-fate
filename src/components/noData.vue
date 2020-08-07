<template>
  <div class="no-data-container">
    <div class="no-data-img fm">
      <img :src="showImg" alt="">
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
      },
      noType: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        txt: '',
        btnTxt: '',
        imgArr: [
          require('@/assets/images/icon/no_coupons.png'),
          require('@/assets/images/icon/no_integral.png'),
          require('@/assets/images/icon/no_data.png'),
          require('@/assets/images/icon/no_money.png'),
          require('@/assets/images/icon/no_recharge.png'),
        ],
        showImg: ''
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
      switch (this.noType) {
        case 'coupon':
          this.showImg = this.imgArr[0];
          break;
        case 'integral':
          this.showImg = this.imgArr[1];
          break;
        case 'data':
          this.showImg = this.imgArr[2];
          break;
        case 'money':
          this.showImg = this.imgArr[3];
          break;
        case 'recharge':
          this.showImg = this.imgArr[4];
          break;
      }
    }
  }
</script>

<style scoped lang="less">
  .no-data-container{
    width: 65%;
    margin: 120px auto 0;
    text-align: center;
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
