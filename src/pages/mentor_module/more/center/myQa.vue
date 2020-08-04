<template>
  <div>
    <x-header>我的问答</x-header>
    <div class="qa-container">
      <mine-head-tab :tab="tabData" :tabIndex="tabIdx" @on-change="tabClick"></mine-head-tab>
      <div class="my-qa-container" v-show="tabIdx === 0">
        <div class="my-qa-item bs" v-for="(qd, index) in qaData" :key="index">
          <p class="qa-title">{{qd.qaTitle}}</p>
          <div class="qa-user flex">
            <div class="head-img-box">
              <img :src="qd.qaUserImg" :alt="qd.qaUser">
            </div>
            <div class="qa-user-name flex"><p>{{qd.qaUser}}</p> <p><span>{{qd.focus}}</span> 人关注了TA</p></div>
          </div>
          <p class="qa-desc">{{qd.qaDesc}}</p>
          <p class="qa-others">
            <span><i class="iconfont iconzan"></i>{{qd.praise}} 人觉得很赞</span>
            <span><i class="iconfont iconxinxi"></i>{{qd.comment}} 人进行了评论</span>
          </p>
          <p class="qa-belong fb"><span># {{qd.belong}}</span> <span>{{qd.qaData}}</span></p>
        </div>
      </div>
      <div class="my-qa-drafts-container" v-show="tabIdx === 1">
        <no-data text="暂无相关数据"></no-data>
      </div>
    </div>
  </div>
</template>

<script>
  import mineHeadTab from '@/components/mineHeadTab'
  import noData from '@/components/noData'
  export default {
    name: "myQa",
    components: {
      'mine-head-tab': mineHeadTab,
      'no-data': noData,
    },
    data() {
      return {
        tabData: ['我的回答', '草稿箱'],
        tabIdx: 0,
        qaData: [
          {
            qaUser: '爱到深处丶情难拔',
            qaUserImg: require('@/assets/images/comment_img.jpg'),
            qaData: '2020-06-15',
            qaTitle: '天心情愉悦第二天就心情沉闷要怎么回事呢?',
            qaDesc: '天心情愉悦第二天就心asdfas情沉闷要怎么回事呢?天心情愉悦第二天就心情沉闷要怎么回事呢?天心情愉悦第二天就心情沉闷要怎么回事呢?',
            praise: 4265,
            comment: 45661,
            focus: 325,
            belong: '日常生活',
          },
          {
            qaUser: '小小小小鸟',
            qaUserImg: require('@/assets/images/s4.jpg'),
            qaData: '2020-06-15',
            qaTitle: '我爱她，虽然她绿我，但是我还是爱她，我是不是有病？',
            qaDesc: '绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿',
            praise: 2365,
            comment: 3,
            focus: 5,
            belong: '情感倾诉',
          }
        ]
      }
    },
    methods: {
      tabClick(e) {
        this.tabIdx = e;
      }
    }
  }
</script>

<style scoped lang="less">
  .qa-container{
    .my-qa-container{
      padding: 20px 10px;
      text-align: left;
      .my-qa-item{
        margin-bottom: 20px;
        padding: 15px;
        .qa-title{
          font-size: 14px;
          font-weight: bold;

        }
        .qa-user{
          padding: 10px 0;
          .head-img-box{
            width: 25px;
            height: 25px;
          }
        }
        .qa-user-name{
          font-size: 12px;
          margin-left: 10px;
          color: #5a5a5a;
          p{
            margin-right: 25px;
            span{
              color: #1296db;
              font-size: 14px;
            }
          }
        }
        .qa-desc{
          font-size: 14px;
          letter-spacing: 1.5px;
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .qa-others{
          padding: 10px 0;
          *{
            vertical-align: middle;
          }
          span{
            i{
              color: #8b8b8b;
              margin-right: 5px;
            }
            font-size: 12px;
            margin-right: 20px;
          }
        }
        .qa-belong{
          span:nth-child(1){
            display: inline-block;
            background-color: #ccc;
            border-radius: 2px;
            padding: 1px 5px;
            font-size: 12px;
          }
          span:nth-child(2) {
            font-size: 12px;
            color: #979797;
          }
        }
      }
    }
  }
</style>
