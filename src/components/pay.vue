<template>
  <div>
    <div v-show="show" class="pay-container fm">
      <div class="pay-center">
        <p class="pay-title fb">
          <span class="pay-title-name">课程：《性格重塑》</span>
          <span class="pay-title-close" @click="close">关闭</span>
        </p>
        <div class="pay-way">
          <div class="pay-list fb">
            <div class="pay-item" v-for="(pw, index) in payWay" :key="index" @click="chosePayWay(index)">
              <div class="pay-icon fm">
                <img :src="pw.icon" :alt="pw.name">
              </div>
              <p :class="{'chose': params.payChoseIndex === index}">{{pw.name}}</p>
            </div>
          </div>
        </div>
        <p class="pay-price">
          支付金额：<span><i>¥</i>99.00</span>
        </p>
        <p class="pay-send" v-if="send"><span>赠送对象ID：</span><input type="number" v-model="params.sendUserId" placeholder="请输入赠送人的ID"></p>
        <p class="pay-agreement">
          <input type="radio" id="payRadio" value="read" v-model="payAgreement">
          <label for="payRadio">我已阅读并同意</label><span>《知心港湾网站付费服务协议》</span>
        </p>
        <div class="pay-button fb">
          <button @click="confirmPay">确认支付</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pay",
    props: {
      isShow: {
        type: Boolean,
        default: false
      },
      isSend: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      isShow: {
        handler(a) {
          this.show = a;
        },
        deep: true
      },
      isSend: {
        handler(a) {
          this.send = a;
        },
        deep: true
      }
    },
    data() {
      return{
        payWay: [
          {
            name: '微信',
            id: 0,
            icon: require('@/assets/images/icon/wechat.png')
          },
          {
            name: '支付宝',
            id: 1,
            icon: require('@/assets/images/icon/alipay.png')
          },
          {
            name: '积分',
            id: 2,
            icon: require('@/assets/images/icon/integral.png')
          }
        ],
        params: {
          sendUserId: '', // 赠送人ID
          payChoseIndex: -1, // 支付方式 0 微信 1 支付宝 2 积分
        },
        send: false, // 是否赠送
        payAgreement: '', //是否同意协议
        show: false, // 是否展示弹出框
      }
    },
    methods: {
      // 选择支付方式
      chosePayWay(idx) {
        this.params.payChoseIndex = idx;
      },
      // 确认支付
      confirmPay() {
        if (this.params.payChoseIndex === -1) {
          this.$vux.toast.text('请选择支付方式！', 'middle');
          return false;
        }
        if (this.send && !this.params.sendUserId) {
          this.$vux.toast.text('请输入赠送对象ID！', 'middle');
          return false;
        }
        if (!this.payAgreement) {
          this.$vux.toast.text('请先阅读并同意协议！', 'middle');
          return false;
        }
        this.$emit('pay', this.params);
      },
      close() {
       this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="less">
  .pay-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0,0,0,0.51);
    .pay-center{
      width: 95%;
      padding: 20px 0;
      background-color: white;
      border-radius: 10px;
      text-align: left;
      .pay-title{
        padding:0px  15px 15px;
        font-size: 14px;
        border-bottom: 1px solid #8c8c8c;
        .pay-title-name{
          font-weight: bold;
          color: #ff6820;
        }
        .pay-title-close{
          font-size: 12px;
          padding: 5px 10px;
          background-color: #fc689a;
          color: white;
          border-radius: 5px;
        }
      }
      .pay-way{
        padding: 30px 20px;
        .pay-list{
          .pay-item{
            .pay-icon{
              width: 50px;
              height: 50px;
              margin: 0 auto;
              img{
                display: block;
                width: 100%;
              }
            }
            p{
              font-size: 16px;
              text-align: center;
              padding: 3px 15px;
              border: 1px solid #cecece;
              margin: 15px 0;
              border-radius: 3px;
              &.chose{
                color: #ffa42a;
                border: 1px solid #ffa42a;
                background: url("../assets/images/icon/chose.png") no-repeat right bottom;
                background-size:auto 10px;
              }
            }
          }
        }
      }
      .pay-price{
        font-size: 16px;
        text-align: left;
        padding: 0 30px 20px;
        span{
          color: #ffa42a;
          font-weight: bold;
          font-size: 18px;
          i{
            font-size: 16px;
            font-weight: normal;
            color: #1fff30;
            padding-right: 5px;
          }
        }
      }
      .pay-send{
        padding: 0 0 20px 30px ;
        color: #ffa42a;
        font-size: 14px;
        input{
          border: none;
          border-bottom: 1px solid #18ac18;
          padding: 5px 10px;
        }
      }
      .pay-agreement{
        padding: 0 30px 20px;
        span{
          font-size: 13px;
          color: #3843cd;
        }
      }
      .pay-button{
        width: 85%;
        margin: 0 auto;
        button{
          width: 100%;
          color: white;
          padding: 12px 0;
          border-radius: 5px;
          border: none;
          font-size: 16px;
          background-color: #18ac18;
        }
      }
    }
  }
</style>
