<template>
  <div>
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">我的创作</x-header>
    <div class="creation-container">
      <mine-head-tab :tab="tabData" :tabIndex="tabIdx" @on-change="tabClick"></mine-head-tab>
      <div class="c-box">
        <div class="article-box" v-show="tabIdx === 0">
          <div class="article-item"
               v-for="(ai, index) in articleList"
               :key="index">
            <div class="article-img fm">
              <img :src="ai.icon" :alt="ai.name" :style="`width: ${articleItemImgWidth}px`">
            </div>
            <div class="article-info fc">
              <div class="article-title-belong fb">
                <p class="title">{{ai.name}}</p>
              </div>
              <div class="article-other fb">
                <p class="belong"># <span>{{ai.belong}}</span></p>
                <p class="read"><span>{{ai.read}}次阅读</span> <i class="iconfont iconchangyongicon-"></i></p>
                <p class="praise"><span>{{ai.praise}}</span><img src="@/assets/images/icon/praise_color.png" alt=""></p>
              </div>
              <div class="article-author-read-praise fb">
                <button @click="deleteArticle(index)">删除</button>
                <button>编辑</button>
              </div>
            </div>
          </div>
          <no-data
            v-show="articleList.length === 0"
            text="暂无相关数据"
            noType="data"
            @next-do="releaseSth(0)"
            btn="去发布文章"></no-data>
        </div>
        <div class="qa-box" v-show="tabIdx === 1">
          <div class="my-qa-item bs" v-for="(qd, index) in qaData" :key="index">
            <p class="qa-title">{{qd.qaTitle}}</p>
            <p class="qa-desc">{{qd.qaDesc}}</p>
            <p class="qa-belong fb"><span># {{qd.belong}}</span> <span>{{qd.qaData}}</span></p>
            <p class="qa-others fb">
              <span><i class="iconfont iconzan"></i>{{qd.praise}}</span>
              <span><i class="iconfont iconxinxi"></i>{{qd.comment}}</span>
              <button @click="deleteQa(index)">删除</button>
            </p>
          </div>
          <no-data
            v-show="qaData.length === 0"
            text="暂无相关数据"
            noType="data"
            @next-do="releaseSth(1)"
            btn="去发布问答"></no-data>
        </div>
      </div>
    </div>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel @on-click-menu="releaseSth"></actionsheet>
    </div>
  </div>
</template>

<script>
  import mineHeadTab from '@/components/mineHeadTab'
  import noData from '@/components/noData'
  export default {
    name: "myCreation",
    components: {
      'mine-head-tab': mineHeadTab,
      'no-data': noData,
    },
    data() {
      return {
        tabData: ['文章', '问答'],
        tabIdx: 0,
        articleItemImgWidth: 0,
        articleList: [
          {
            icon: require('@/assets/images/artise_pic1.jpg'),
            name: '人类身体情绪地图',
            belong: '情绪科学',
            author: '王战',
            read: '1000',
            praise: 999,
            id: 0
          },
          {
            icon: require('@/assets/images/artise_pic2.jpg'),
            name: '虚拟爱之疗法',
            belong: '情绪科学',
            author: '王战',
            read: '1000',
            praise: 999,
            id: 1
          },
          {
            icon: require('@/assets/images/artise_pic3.jpg'),
            name: '回来吧，幸福的内在小孩',
            belong: '情绪科学',
            author: '王战',
            read: '1000',
            praise: 999,
            id: 2
          }
        ],
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
        ],
        showMenus: false,
        menus: ['发布文章', '添加问答']
      }
    },
    methods: {
      tabClick(e) {
        this.tabIdx = e;
      },
      deleteQa(idx) {
        const _this = this
        this.$vux.confirm.show({
          title: '确定删除该条动态？',
          onCancel () {
            _this.$vux.toast.text('取消删除', 'middle')
          },
          onConfirm () {
            _this.qaData.splice(idx, 1);
            _this.$vux.toast.text('删除成功', 'middle')
          }
        })
      },
      deleteArticle(idx) {
        const _this = this
        this.$vux.confirm.show({
          title: '确定删除该条动态？',
          onCancel () {
            _this.$vux.toast.text('取消删除', 'middle')
          },
          onConfirm () {
            _this.articleList.splice(idx, 1);
            _this.$vux.toast.text('删除成功', 'middle')
          }
        })
      },
      releaseSth(idx) {
        switch (idx) {
          case 0:
            this.$router.push('/releaseArticle')
            break;
          case 1:
            this.$router.push('/release')
            break
        }
      },
    },
    mounted() {
      this.articleItemImgWidth = parseInt(document.body.clientWidth * 0.27)
    }
  }
</script>

<style scoped lang="less">
  .creation-container{
    text-align: left;
    .c-box{
      >div{
        padding: 15px;
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
            }
            .article-other{
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
              button{
                font-size: 14px;
                &:nth-child(1){
                  color: #959595;
                }
              }
            }
          }
        }
        .my-qa-item{
          margin-bottom: 20px;
          padding: 15px;
          .qa-title{
            font-size: 14px;
            font-weight: bold;

          }
          .qa-desc{
            padding: 10px 0;
            font-size: 14px;
            letter-spacing: 1.5px;
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
            button{
              padding: 3px 10px;
              font-size: 13px;
              color: #ababab;
            }
          }
          .qa-belong{
            span:nth-child(1){
              display: inline-block;
              background-color: #eaeaea;
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
  }

</style>
