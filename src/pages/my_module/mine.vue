<template>
    <div>
      <div class="box">
        <div class="text" style="line-height: 21px" :title="text" ref="abc">
          <span>{{text}}</span>
          <button>aaaa</button>
        </div>
      </div>
        <tab-foot></tab-foot>
    </div>
     
</template>
<script>
 import tabFoot from '@/components/tabfoot.vue'
export default {
    name: 'mine',
     components: {
        'tab-foot': tabFoot,

      },
    data() {
        return {
          text: '如果这是医生已经做出的诊断,或许我们可以听\n' +
            '从医嘱进行相应的治疗,不要害怕,这会好起来\n' +
            '的,面对情绪的起伏不定我们可以保持内心的淡\n' +
            '定,能够应对不同的情况做好准备哦\n' +
            '这是你的情感你的一部分,不是你的敌人。'
        }
    },
  mounted() {
      console.info(this.$refs.abc.clientHeight)
      console.info(this.$refs.abc.style.lineHeight)
    var rowNum=Math.round(this.$refs.abc.clientHeight/parseFloat(this.$refs.abc.style.lineHeight));
    console.info("当前有"+rowNum+"行");

  }
}
</script>

<style scoped lang="less">
  .box{
    text-align: left;
    padding: 15px;
    .text{
      position: relative;
      min-height: 42px;
      &:before,
      &:after{
        content: attr(title);
        left: 0;
        top: 0;
        position: absolute;
        font-size: 14px;

      }
      &:before{
        background-color: #abd1ff;
        max-height: 21px;
        line-height: 21px;
        overflow: hidden;
        display: block;
        z-index: 9;
      }
      &:after{
        background-color: #f3ffb8;
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
      span{
        font-size: 14px;
      }
    }
  }
</style>
