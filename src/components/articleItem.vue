<template>
  <div class="article-item-container" ref="articleItemContainer">
    <div class="article-item"
         v-for="(ai, index) in articleData"
         :key="index"
         @click="articleJump(ai)">
      <div class="article-img fm">
        <img :src="ai.icon" :alt="ai.name" :style="`width: ${articleItemImgWidth}px`">
      </div>
      <div class="article-info fc">
        <div class="article-title-belong fb">
          <p class="title">{{ai.name}}</p>
          <p class="belong"># <span>{{ai.belong}}</span></p>
        </div>
        <div class="article-author-read-praise fb">
          <p class="author">作者：<span>{{ai.author}}</span></p>
          <p class="read"><span>{{ai.read}}次阅读</span> <i class="iconfont iconchangyongicon-"></i></p>
          <p class="praise"><span>{{ai.praise}}</span><img src="../assets/images/icon/praise_color.png" alt=""></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "articleItem",
    props: ['articleData'],
    data() {
      return {
        articleItemImgWidth: 0
      }
    },
    methods: {
      articleJump(ele) {
        this.$router.push('/articleDetail/'+ele.id)
      }
    },
    mounted() {
      this.articleItemImgWidth = parseInt(this.$refs.articleItemContainer.clientWidth * 0.3)
    }
  }
</script>

<style scoped lang="less">
  .article-item{
    display: -webkit-box;
    padding: 15px 0;
    border-bottom: 1px solid #efefef;
    .article-img{
      img{
        display: block;
        width: 100%;
      }
    }
    .article-info{
      margin-left: 15px;
      text-align: left;
      padding: 3px 0;
      .article-title-belong{
        .title{
          font-size: 15px;
        }
        .belong{
          display: inline-block;
          padding: 2px 5px;
          background-color: #ededed;
          border-radius: 5px;
          font-size: 9px;
          color: #666666;
        }
      }
      .article-author-read-praise{
        p{
          *{
            vertical-align: middle;
          }
          &.author{
            font-size: 11px;
          }
          &.read{
            font-size: 10px;
            i{
              color: #0cc4e0;
              font-size: 18px;
            }
          }
          &.praise{
            font-size: 10px;
            img{
              display: inline-block;
              width: 12px;
              padding-bottom: 5px;
              margin-left: 3px;
            }
          }
        }
      }
    }
  }
</style>
