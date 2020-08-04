<template>
    <div>
      <div class="qa-head-container">
        <div class="qa-head fb">
          <div class="qa-left fb">
            <div v-for="(tab, index) in tabList" :key="index" @click="tabChange(index)">
              <p :class="{'active': tabIndex === index}">{{tab}}</p>
            </div>
          </div>
          <div class="qa-right">
            <p>
              <i class="iconfont iconsousuo"></i>搜索问题
            </p>
          </div>
        </div>
        <div class="qa-contain">
          <router-view></router-view>
        </div>
      </div>

      <div class="qa-ask" @click="$router.push('/release')">
        <img src="../../../assets/images/icon/ask.png" alt="">
        <p>我也提问</p>
      </div>
    </div>
</template>

<script>

  export default {
    name: "qa",
    data() {
        return {
          tabList: ['最新', '热搜'],
          tabIndex: 0
        }
    },
    methods: {
      // 隐藏评论
      tabChange(idx) {
        this.tabIndex = idx;
        console.info(idx)
        switch (idx) {
          case 0:
            this.$router.replace('/mentor/qa/new')
            break;
          case 1:
            this.$router.replace('/mentor/qa/hot')
            break;
        }
      },
    }
  }
</script>

<style scoped lang="less">
  .qa-head-container{
    .qa-head{
      padding: 20px 15px;
      >div{
        width: 50%;
        text-align: right;
        &.qa-left{
          padding-left: 20px;
          font-size: 16px;
          >div{
            p{
              position: relative;
              color: #666666;
              &.active{
                color: black;
              }
              &.active::after{
                content: '';
                display: block;
                width: 150%;
                height: 75%;
                background-color: #3ed574;
                position: absolute;
                left: -25%;
                bottom: -15%;
                z-index: -9;
                border-radius: 3px;
              }
            }
          }
        }
        &.qa-right{
          * {
            vertical-align: middle;
          }

          p {
            color: #ff9712;
            font-size: 14px;

            i {
              color: #ff9712;
              margin-right: 6px;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
  .qa-ask{
    position: fixed;
    right: 20px;
    bottom: 20%;
    background-color: #fff;
    padding: 5px;
    border-radius: 10px;
    img{
      display: block;
      width: 25px;
      height: auto;
      margin: 0 auto;
    }
    p{
      color: #ffad5b;
      font-size: 12px;
    }
  }
</style>
