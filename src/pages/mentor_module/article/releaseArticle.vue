<template>
    <div>
      <x-header>发布文章</x-header>
      <div class="ra-container">
        <div class="ra-title">
          <span>请输入文章标题：</span>
          <input type="text" placeholder="请输入文章标题" v-model="ATitle">
        </div>
        <vue-html5-editor :content="content" :height="500" @change="updateInfo" class="fuck-it"></vue-html5-editor>
        <button @click="confirmRelease">确认发布</button>
      </div>
    </div>
</template>

<script>
  export default {
    name: "releaseArticle",
    data() {
      return {
        content: '',
        ATitle: ''
      }
    },
    methods: {
      updateInfo(e) {
        this.content = e;
      },
      confirmRelease() {
        if (!this.ATitle) {
          this.$vux.toast.text('请输入文章标题', 'middle')
          return false;
        }
        if (!this.content) {
          this.$vux.toast.text('文章内容不能为空', 'middle')
          return false;
        }
        this.$vux.toast.text('发布成功，请等待审核......', 'middle')
      }
    }
  }
</script>
<style scoped lang="less">
  .ra-container{
    .ra-title{
      text-align: left;
      padding: 15px;
      span{
        font-size: 13px;
        display: inline-block;
        width: 35%;
      }
      input{
        font-size: 16px;
        font-weight: bold;
        border-radius: 5px;
        border: 1px #e7e7e7 solid;
        padding: 10px;
        width: 60%;
        &::placeholder{
          font-weight: normal;
        }
      }
    }
    button{
      width: 95%;
      margin: 20px auto;
      padding: 10px 0;
      background-color: #2893e3;
      color: white;
      font-size: 16px;
      border-radius: 8px;
    }
  }

</style>
<style lang="less">
  .fuck-it{
    .toolbar{
      ul{
        li{
         span{
           width: auto!important;
           height: auto!important;
         }
        }
      }
    }
  }
</style>
