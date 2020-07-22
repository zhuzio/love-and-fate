<template>
  <div>
    <div :class="showTotal ? 'total-introduce' : 'detailed-introduce'">
      <div class="intro-content" :title="introduce" ref="desc">
        <span class="merchant-desc" v-if="introduce">{{introduce}}</span>
        <div class="unfold" @click="showTotalIntro" v-if="showExchangeButton">
          <p>{{exchangeButton ? '展开' : '收起'}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "textUnfoldShrink",
    data() {
      return {
        title: '演示展开收起',
        introduce: '',
        // 是否展示所有文本内容
        showTotal: true,
        // 显示展开还是收起
        exchangeButton: true,
        // 是否显示展开收起按钮
        showExchangeButton: false,
        rem: ''
      }
    },
    props: ['text'],
    watch: {
      'introduce': function () {
        this.$nextTick(function () {
          // 判断介绍是否超过四行
          let rem = parseFloat(this.getRem());
          if (!this.$refs.desc) {
            return;
          }
          let descHeight = window.getComputedStyle(this.$refs.desc).height.replace('px', '');
          if (descHeight > 5.25 * rem) {
            // 显示展开收起按钮
            this.showExchangeButton = true;
            this.exchangeButton = true;
            // 不是显示所有
            this.showTotal = false;
          } else {
            // 不显示展开收起按钮
            this.showExchangeButton = false;
            // 没有超过2行就显示所有
            this.showTotal = true;
          }
        }.bind(this));
      }
    },
    methods: {
      getRem () {
        const defaultRem = 16;
        let winWidth = window.innerWidth;
        let rem = winWidth / 375 * defaultRem;
        return rem;
      },
      init () {
        this.introduce = this.text
      },
      showTotalIntro () {
        this.showTotal = !this.showTotal;
        this.exchangeButton = !this.exchangeButton;
      },
    },
    mounted () {
      this.init();
    },
  }
</script>

<style scoped lang="less">
  .total-introduce {
    height: auto;
    overflow: hidden;
    font-size: 12px;
    color: #434343;
    margin: 10px;
    text-align: left;
    .intro-content {
      .merchant-desc {
        width: 100%;
      }
    }
    .unfold {
      display: block;
      z-index: 11;
      float: right;
      width: 40px;
      height: 21px;
      font-size: 14px;
      text-align: center;
      p {
        font-size: 12px;
        line-height: 21px;
        color: #ff8146;
      }
    }
  }
  .detailed-introduce {
    font-size: 12px;
    color: #434343;
    position: relative;
    overflow: hidden;
    margin: 10px;
    .intro-content {
      // 最大高度设为4倍的行间距
      max-height: 42px;
      line-height: 21px;
      word-wrap: break-word;
      /*强制打散字符*/
      word-break: break-all;
      background: #ffffff;
      /*同背景色*/
      color: #ffffff;
      overflow: hidden;
      .merchant-desc {
        width: 100%;
        font-size: 12px;
        line-height: 21px;
      }
      &:after,
        // 这是展开前实际显示的内容
      &:before {
        content: attr(title);
        position: absolute;
        left: 0;
        top: 0;
        font-size: 12px;
        width: 100%;
        color: #434343
        // overflow: hidden;
      }
      // 把最后最后一行自身的上面三行遮住
      &:before {
        display: block;
        overflow: hidden;
        z-index: 1;
        text-align: left;
        max-height: 21px;
        background: #ffffff;
      }
      &:after {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: 40px;
        /*截取行数*/
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        /*行首缩进字符数，值为[(截取行数-1)*尾部留空字符数]*/
        text-indent: -3em;
        /*尾部留空字符数*/
        padding-right: 3em;
      }
      .unfold {
        z-index: 11;
        width: 40px;
        height: 21px;
        outline: 0;
        position: absolute;
        right: 0;
        bottom: 0;
        p {
          margin: 0;
          line-height: 21px;
          color: #ff8146;
        }
      }
    }
  }
  .bottom-prove {
    height: 100px;
    width: 100%;
    background: #dddddd;
    text-align: center;
    line-height: 100px;
  }
  .change-buttom {
    font-size: 14px;
    color: #2371be;
    .long {
      text-align: center;
      height: 21px;
    }
    .short {
      text-align: center;
      height: 20px;
    }
  }
</style>
