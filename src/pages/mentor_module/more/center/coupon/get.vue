<template>
  <div class="get-coupons-container">
    <div class="get-c-head fb">
      <input type="text" placeholder="请输入优惠码" v-model="exchange">
      <button :class="{'c-i-btn': exchange}">兑换</button>
    </div>
    <div class="coupon-item-box">
      <scroller lock-y :scrollbar-x=false>
        <div class="fb" :style="`width: ${190 * couponData.length}px`">
          <div
            class="coupon-item fm"
            :class="{'coupon-item-get': cd.isGet}"
            v-for="(cd, index) of couponData"
            @click="getCoupon(cd, index)"
            :key="index">
            <div>
              <p class="c-i-title">{{cd.title}}</p>
              <p class="c-i-limit">全场商品</p>
              <p class="c-i-deadline">领取后{{cd.deadline}}天内有效</p>
              <button>{{cd.isGet ? '已领取':'立即领取'}}</button>
            </div>
          </div>
        </div>
      </scroller>
    </div>
  </div>
</template>

<script>
  export default {
    name: "get",
    data() {
      return {
        couponData: [
          {
            title:"满399减30元",
            limit: false,
            deadline: 15,
            isGet: false
          },
          {
            title:"满199减10元",
            limit: false,
            deadline: 15,
            isGet: false
          },
          {
            title:"满260减5元",
            limit: false,
            deadline: 15,
            isGet: true
          },
          {
            title:"满399减30元",
            limit: false,
            deadline: 15,
            isGet: false
          }
        ],
        exchange: ''
      }
    },
    methods: {
      getCoupon(ele, idx) {
        if (ele.isGet) {
          this.$vux.toast.text('您已经领取过了, 看看其他的优惠券吧', 'middle');
          return false
        } else {
          this.$vux.toast.text('领取成功', 'middle');
          this.couponData[idx].isGet = !ele.isGet
        }
      }
    },
    created() {

    }
  }
</script>

<style scoped lang="less">
  .get-coupons-container{
    .get-c-head{
      padding: 10px 15px;
      border-bottom: 1px solid #e7e7e7;
      input{
        border: 1px solid #e7e7e7;
        width: 75%;
        height: 40px;
        padding-left: 15px;
        border-radius: 5px;
      }
      button{
        width: 23%;
        height: 38px;
        background-color: #cccccc;
        color: white;
        border-radius: 5px;
        font-size: 14px;
        &.c-i-btn{
          background-color: #ffdd9c;
          color: #7a6a46;
        }
      }
    }
    .coupon-item-box{
      padding: 10px 15px;
      .coupon-item{
        width: 180px;
        height: 126px;
        background: url("../../../../../assets/images/icon/coupon_bg.png") no-repeat center;
        background-size: 100% 100%;
        text-align: center;
        .c-i-title{
          color: #7a6a46;
          font-size: 16px;
        }
        .c-i-limit{
          font-size: 14px;
          color: #6f6f6d;
          padding: 5px 0;
        }
        .c-i-deadline{
          font-size: 13px;
          color: #8c8c8a;
        }
        button{
          margin-top: 5px;
          background-color: #cbad6d;
          padding: 5px 15px;
          border-radius: 5px;
          font-size: 14px;
          color: white;
        }
        &.coupon-item-get{
          .c-i-title{color: #cfcfcf}
          .c-i-limit{color: #cfcfcf}
          .c-i-deadline{color: #cfcfcf}
          button{
            background-color: #cfcfcf;
            color: white;
          }
        }
      }
    }
  }
</style>
