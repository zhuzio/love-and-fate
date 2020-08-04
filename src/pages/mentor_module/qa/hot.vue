<template>
  <div>
    <div class="hot-container">
      <p class="hot-change">
        <span
          v-for="(tab, index) in tabList"
          :key="index"
          @click="tanChange(index)"
          :class="{'tab-on': tabIndex === index}">{{tab}}</span>
      </p>
      <div class="hot-list-container">
        <div class="hot-list" v-show="tabIndex===0">
          <div class="hot-item fb" v-for="(an, index) of askNew" :key="index">
            <div class="hot-qa">
              <p class="hot-qa-title">{{an.question}}</p>
              <p class="hot-qa-other"><span>回答{{an.answer}}</span><span>访问{{an.access}}</span></p>
            </div>
            <div class="hot-arrow">
              <p class="fm"><i class="iconfont iconyou"></i></p>
            </div>
          </div>
        </div>
        <div class="hot-list" v-show="tabIndex===1">
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
      </div>
      <p class="qa-more" @click="addMoreQuestion">
        <i class="iconfont iconicon-angle-double-bottom"></i><span>点击查看更多问答</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "hot",
    data() {
      return {
        tabList: ['热搜问题','高赞回答'],
        tabIndex: 0,
        askNew: [
          {
            id: 0,
            question: '绿妻癖特别严重,诱导妻子和陌生人发生关系!!!',
            answer: 17,
            access: 19376,
            useful: 7788,
            usefulUserName: '李彦斌',
            usefulUserImg: '',
          },
          {
            id: 0,
            question: '23岁,刚和父母断绝关系,心里很寂寞,我该怎么办?',
            answer: 662,
            access: 1937645,
            usefulUserName: '王莽',
            usefulUserImg: '',
          },
          {
            id: 0,
            question: '难受,手淫5年,有4年都在尝试戒掉,可是每次都以失败告终, 该怎么办?',
            answer: 37,
            access: 8542,
            usefulUserName: '昨夜南风',
            usefulUserImg: '',
          },
          {
            id: 0,
            question: '16岁女生,很久,想要把我当中心的阅览,不想与别人分享我的喜怒哀乐,只想活在我自己的世界里.',
            answer: 32,
            access: 8321,
            usefulUserName: '安丶详',
            usefulUserImg: '',
          }
        ],
        askHot: [
          {
            id: 0,
            question: '我向一个女孩子表白，女孩子一直犹豫不决，她说2个原因，第一是她本人没准备好要结婚（因为她之前跟我说过，想通了要结婚才会答应跟我在一起）第二是因为我家和她家关系比较熟，她怕跟我在一起没有走到婚姻这一步，会影响两家的关系。请问我现在该怎么处理啊？',
            useful: 7788,
            usefulUserName: '张峰',
            usefulUserImg: require('../../../assets/images/mentor1.jpg'),
          },
          {
            id: 0,
            question: '思想不能集中,做任何事情, 只要中间一有事情耽误, 就很难集中注意力再去处理!',
            useful: 305,
            usefulUserName: '王莽',
            usefulUserImg: require('../../../assets/images/mentor2.jpg'),
          },
          {
            id: 0,
            question: '总是爱为别人考虑, 从来不注重自己的感受, 不知道如何拒绝别人....',
            useful: 860,
            usefulUserName: '昨夜南风',
            usefulUserImg: require('../../../assets/images/comment_img.jpg'),
          },
          {
            id: 0,
            question: '我是一个十二岁的女生, 不知道什么时候, 就有了手淫的习惯, 请问这种情况怎么解决 ?',
            useful: 123,
            usefulUserName: '安丶详',
            usefulUserImg: '',
          }
        ],
        defaultImg: require('../../../assets/images/default_head_img.png')
      }
    },
    methods: {
      tanChange(idx) {
        this.tabIndex = idx
      },
      addMoreQuestion() {
        this.$vux.toast.text('请稍等, 正在加载更过问答....')
      }
    }
  }
</script>

<style scoped lang="less">
  .hot-container{
    text-align: left;
    .hot-change{
     padding: 35px 15px;
      span{
        display: inline-block;
        margin-right: 15px;
        padding: 5px 15px;
        border-radius: 20px;
        background-color: #bbc1d1;
        color: white;
        font-size: 14px;
        &.tab-on{
          background-color: #ff6b5a;
        }
      }
    }
    .hot-list-container{
      padding: 0 15px;
      .hot-list{
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
    .qa-more{
      text-align: center;
      background-color: #f4f4f4;
      font-size: 14px;
      padding: 5px 0;
      color: #ababab;
      *{
        vertical-align: middle;
      }
      i{
        font-size: 22px;
      }
    }
  }
</style>
