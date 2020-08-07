<template>
  <div>
    <x-header>我的收藏</x-header>
    <div class="collection-container">
      <mine-head-tab :tab="tabData" :tabIndex="tabIdx" @on-change="tabClick"></mine-head-tab>
      <div class="collection-box">
        <div v-show="tabIdx === 0">
          <article-item :articleData="articleList"></article-item>
        </div>
        <div v-show="tabIdx === 1">
          <div class="hot-item fb" v-for="(ah, index) of askHot" :key="index">
            <div class="hot-qa">
              <p class="hot-qa-title">{{ah.question}}</p>
              <div class="hot-qa-other flex">
                <div class="hot-qa-other-head fm"><img :src="ah.usefulUserImg || defaultImg" :alt="ah.usefulUserName"></div>
                <p>{{ah.usefulUserName}}<i>的回答有用（有用{{ah.useful}}）</i></p>
              </div>
            </div>
            <div class="hot-arrow">
              <p class="fm"><i class="iconfont iconyou"></i></p>
            </div>
          </div>
        </div>
        <div v-show="tabIdx === 2">
          <course-item :courseData="courseList"  @jump="courseListJump"></course-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mineHeadTab from '@/components/mineHeadTab'
  import articleItem from '@/components/articleItem'
  import courseItem from '@/components/courseItem'
  export default {
    name: "myCollection",
    components: {
      'mine-head-tab': mineHeadTab,
      'article-item': articleItem,
      'course-item': courseItem
    },
    data() {
      return {
        tabData: ['文章', '问答', '课程'],
        tabIdx: 0,
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
        askHot: [
          {
            id: 0,
            question: '我向一个女孩子表白，女孩子一直犹豫不决，她说2个原因，第一是她本人没准备好要结婚（因为她之前跟我说过，想通了要结婚才会答应跟我在一起）第二是因为我家和她家关系比较熟，她怕跟我在一起没有走到婚姻这一步，会影响两家的关系。请问我现在该怎么处理啊？',
            useful: 7788,
            usefulUserName: '张峰',
            usefulUserImg: require('@/assets/images/mentor1.jpg'),
          },
          {
            id: 0,
            question: '思想不能集中,做任何事情, 只要中间一有事情耽误, 就很难集中注意力再去处理!',
            useful: 305,
            usefulUserName: '王莽',
            usefulUserImg: require('@/assets/images/mentor2.jpg'),
          },
          {
            id: 0,
            question: '总是爱为别人考虑, 从来不注重自己的感受, 不知道如何拒绝别人....',
            useful: 860,
            usefulUserName: '昨夜南风',
            usefulUserImg: require('@/assets/images/comment_img.jpg'),
          },
          {
            id: 0,
            question: '我是一个十二岁的女生, 不知道什么时候, 就有了手淫的习惯, 请问这种情况怎么解决 ?',
            useful: 123,
            usefulUserName: '安丶详',
            usefulUserImg: '',
          }
        ],
        courseList:  [
          {
            img: require('@/assets/images/teacher1.jpg'),
            title: '视频-21天从自卑到自信蜕变计划',
            author: '张现利',
            position: '心理学硕士研究生 精神分析师',
            learnAmount: 10420,
            section: 30,
            price: '100.00',
            type: 0,
            id: 1
          },
          {
            img: require('@/assets/images/teacher2.jpg'),
            title: '视频-性学大师李银河:教你破解无性婚姻',
            author: '李银河',
            position: '中国性学研究大师',
            learnAmount: 167,
            section: 10,
            price: '88.90',
            type: 0,
            id: 2
          }
        ],
        defaultImg: require('@/assets/images/default_head_img.png')
      }
    },
    methods: {
      tabClick(e) {
        this.tabIdx = e;
      },
      courseListJump(ele) {
        console.info(ele)
        /*let type = parseInt(this.tabIndex)
        switch (type) {
          case 0:
            this.$router.push(`/courseDetailVideo/${ele.id}`)
            break;
          case 1:
            this.$router.push(`/courseDetailOffline/${ele.id}`)
            break;
          case 2:
            this.$router.push(`/courseDetailAudio/${ele.id}`)
            break;
        }*/
      }
    }
  }
</script>

<style scoped lang="less">
  .collection-container{
    .collection-box{
      >div{
        padding: 15px;
        .hot-item{
          padding: 20px 15px;
          background-color: #fbfaf8;
          border-radius: 15px;
          margin-bottom: 15px;
          .hot-qa{
            .hot-qa-title{
              word-break: break-all;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
              font-size: 14px;
              color: #4a5160;
              letter-spacing: 1px;
              margin-bottom: 14px;
            }
            .hot-qa-other{
              color: #f96e54;
              font-size: 13px;
              span{
                margin-right: 15px;
              }
              i{
                color: black;
              }
              .hot-qa-other-head{
                width: 35px;
                height: 35px;
                border-radius: 50%;
                overflow: hidden;
                margin-right: 15px;
                img{
                  display: block;
                  width: auto;
                  height: 100%;
                }
              }

            }
          }
          .hot-arrow{
            margin-left: 15px;
            p{
              width: 30px;
              height: 30px;
              border-radius: 8px;
              border: 1px solid #e8e8e8;
              i{
                font-size: 18px;
                color: #4a5160;
              }
            }
          }
        }
      }
    }
  }
</style>
