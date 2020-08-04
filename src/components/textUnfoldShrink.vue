<template>
  <div>
    <div class="unfold-shrink" :class="isOverFlow ? 'unfold' : 'shrink'">
      <div
        class="content"
        id="content"
        :title="txt"
        style="line-height: 21px"
        ref="content">
        <span class="content-text">{{txt}}</span>
        <button
          class="unfold-shrink-button"
          @click="showTotalIntro"
          v-show="showExchangeButton">{{exchangeButton ? '展开' : '收起'}}</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "textUnfoldShrink",
    data() {
      return {
        isOverFlow: true,
        exchangeButton: true,
        showExchangeButton: true,
        txt: '',
        color: 'red'
      }
    },
    props: ['text', 'bgColor'],
    watch: {
      'txt': function () {
        this.$nextTick(function () {
          var rowNum=Math.round(this.$refs.content.clientHeight/parseFloat(this.$refs.content.style.lineHeight));

          if (rowNum > 3) {
            this.showExchangeButton = true;
            this.exchangeButton = true;
            this.isOverFlow = false;
          } else {
            this.showExchangeButton = false;
            this.isOverFlow = true;
          }

        }.bind(this));
      }
    },
    methods: {
      showTotalIntro () {
        this.isOverFlow = !this.isOverFlow;
        this.exchangeButton = !this.exchangeButton;
      },
    },
    mounted () {
      document.styleSheets[0].addRule('#content::before', `background-color: ${this.bgColor || 'white'};`);
      document.styleSheets[0].addRule('#content::after', `background-color: ${this.bgColor || 'white'};`);
      this.txt = this.text;
    },
  }
</script>

<style scoped lang="less">
  .unfold-shrink{
    text-align: left;
    .content{
      position: relative;
      span{
        font-size: 14px;
        line-height: 21px;
      }
      .unfold-shrink-button{
        z-index: 99;
        position: absolute;
        display: inline-block;
        right: 0;
        bottom: 0;
        height: 21px;
        line-height: 21px;
        font-size: 14px;
        color: #f9725c;
      }
    }
    &.unfold{
      /*展开样式*/
    }
    &.shrink{
      /*收起样式*/
      .content{
        max-height: 42px;
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        &:before,
        &:after{
          content: attr(title);
          left: 0;
          top: 0;
          line-height: 21px;
          position: absolute;
          font-size: 14px;
        }
        &:before{
          max-height: 21px;
          overflow: hidden;
          display: block;
          z-index: 9;

        }
        &:after{
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          -webkit-box-sizing: border-box;
          line-height: 21px;
          /*行首缩进字符数，值为[(截取行数-1)*尾部留空字符数]*/
          text-indent: -5em;
          /*尾部留空字符数*/
          padding-right: 5em;
        }
      }
    }
  }
</style>
