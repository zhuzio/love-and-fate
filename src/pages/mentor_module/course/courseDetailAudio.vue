<template>
  <div>
    <x-header>视频课程详情</x-header>
    <div class="course-detail-container">
      <audio-player :audioInfo="audioInfo"></audio-player>
      <div class="course-author fb">
        <div class="author flex">
          <div class="author-head-img fc">
            <img src="@/assets/images/default_head_img.png" alt="">
          </div>
          <div class="author-info">
            <p class="name">胡慎之</p>
            <div class="position">
              <p class="degree">关系心理学家 / 自身精神分析师</p>
              <p class="good-at"><span>#人际关系</span><span>#情绪管理</span><span>#两性情感</span></p>
            </div>
          </div>
        </div>
        <div class="focus">
          <button><i class="iconfont iconadd"></i>关注</button>
        </div>
      </div>
      <div class="course-list">
        <p class="course-list-mark fb">
          <span>全部合集</span>
          <span><i class="iconfont iconadd"></i>收藏</span>
        </p>
        <div>
          <scroller lock-y :scrollbar-x=false>
            <div class="course-item-container fb" :style="`width: ${140 * chapter.length}px`">
              <div class="course-item" :class="{'course-item-on': nowChapter === index}" v-for="(ct, index) in chapter" :key="index" @click="changeChapter(index)">
                <div class="course-item-center fc">
                  <p class="course-chapter-title">{{ct.title}}</p>
                  <p class="course-chapter-play fb">
                    <span><span v-show="nowChapter === index">正在播放 <i class="iconfont iconcaret-right"></i></span></span>
                    <span>{{timeFormat(ct.duration)}}</span>
                  </p>
                </div>
              </div>
            </div>
          </scroller>
        </div>
      </div>
      <div class="course-introduction">
        <div class="course-introduction-title fb">
          <p class="title">课程<span>|</span>如何控制负面情绪</p>
          <p>989 人已学习</p>
        </div>
        <text-unfold-shrink :text="textContain"></text-unfold-shrink>
      </div>
      <div class="course-comments">
        <div>
          <p class="course-comments-title">全部评论</p>
          <comment-item :data="commentData"></comment-item>
        </div>
      </div>
      <div class="related-recommend">
        <p class="related-recommend-title">相关推荐</p>
        <div>
          <course-item :courseData="courseList" @jump="courseListJump"></course-item>
        </div>
      </div>
    </div>
    <div class="course-detail-foot fb" v-if="!isBuy">
      <div class="foot-left fb">
        <p class="gift" @click="goPay(1)"><i class="iconfont iconhuodongliwu"></i><span>赠送好友</span></p>
        <p class="collection" @click="collection"><i class="iconfont iconruntongyiyaoyihuifu_xingxing" :class="{'is-collection': isCollection}"></i></p>
        <p class="share"><i class="iconfont iconweb-icon-"></i></p>
      </div>
      <div class="foot-right flex">
        <span class="course-price"><i>¥</i>993.00</span>
        <button @click="goPay(0)">立即报名</button>
      </div>
    </div>
    <div class="course-detail-foot-comment" v-else>
      <div>
        <input type="text" placeholder="您一定有很多想说的......" v-model="userComments">
        <x-button mini type="primary" @click.native="sendComments">发送</x-button>
      </div>
    </div>
    <pay
      @pay="overPay"
      :isShow="payPop"
      :isSend="whetherSend"
      @close="cancelPay"></pay>
  </div>
</template>

<script>
  import audioPlay from '@/components/audioPlayer'
  import textUnfoldShrink from '@/components/textUnfoldShrink'
  import commentItem from '@/components/commentItem'
  import courseItem from '@/components/courseItem'
  import pay from '@/components/pay'
  export default {
    name: "courseDetailAudio",
    components: {
      'audio-player': audioPlay,
      'text-unfold-shrink': textUnfoldShrink,
      'comment-item': commentItem,
      'course-item': courseItem,
      'pay': pay
    },
    data() {
      return {
        params: this.$route.params,
        audioInfo: {
          src: require('../../../assets/images/aimei.mp3'),
          poster: require('../../../assets/images/offline_cover.jpg'),
          name: '测试音频',
          videoTime: '119',
        },
        chapter: [
          {
            title: '第一课 你属于哪种焦虑人群?',
            duration: 59
          },
          {
            title: '第二课 从自卑到自信',
            duration: 221
          },
          {
            title: '第三课 走出原生家01',
            duration: 1823
          },
          {
            title: '第四课 走出原生家02',
            duration: 3721
          },
          {
            title: '第五课 走出原生家03',
            duration: 3345
          }
        ],
        nowChapter: 0,
        textContain: '拥有财富、名声、权力，这世界上的一切的男人--哥尔·D·罗杰，在被行刑受死之前说了一句话，让全世界的人都涌向了大海。“想要我的宝藏吗？如果想要的话，那就到海上去找吧，我全部都放在那里。”，世界开始迎接“大海贼时代”的来临。拥有财富、名声、权力，这世界上的一切的男人 “海贼王”哥尔·D·罗杰，在被行刑受死之前说了一句话，让全世界的人都涌向了大海。“想要我的宝藏吗？如果想要的话，那就到海上去找吧，我全部都放在那里。”，世界开始迎接“大海贼时代”的来临。',
        commentData: [
          {
            userName: '张优秀同学',
            userHeadImg: require('../../../assets/images/comment_img.jpg'),
            comments: '山不在高，有仙则灵；水不在深，有龙则灵，斯是陋室，惟吾德馨。',
            isPraise: false,
            commentTime: '06-22 12:05',
            praiseCount: 1245,
            id: 0
          },
          {
            userName: '小不点嘚吧嘚啊',
            userHeadImg: require('../../../assets/images/default_head_img.png'),
            comments: '18日下午，北京空中出現日晕园林景观，更让人惊讶的是，焦距附近也有此外一道七彩七色彩虹，群众游人竞相赞不绝口、看热闹照相。',
            isPraise: true,
            commentTime: '04-18 12:05',
            praiseCount: 2,
            id: 0
          },
          {
            userName: '不吃薄荷喵的阿喵',
            userHeadImg: require('../../../assets/images/mentor2.jpg'),
            comments: '　一声呼唤背后的回乡驰援，是同舟共济的家国担当；无数普通人的挺身而出，是不畏艰险、共克时艰的中国精神。做好防汛抗洪抢险救灾工作，本就是一场硬仗。面对疫情，我们众志成城；面对洪水，我们亦是如此。戮力同心、全力以赴、协同作战，形成抗洪抢险的强大合力；纾解险情，最大程度减少各种损失，筑起守卫生命的“铜墙铁壁”，我们必将打赢防汛抗洪抢险救灾这场硬仗。',
            isPraise: false,
            commentTime: '02-12 12:05',
            praiseCount: 66882,
            id: 0
          }
        ],
        courseList: [
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
        userComments: '',
        isBuy: false,
        isCollection: false,
        payPop: false,
        whetherSend: false,
      }
    },
    methods: {
      // 秒转时分秒
      timeFormat(time){
        let result = parseInt(time)
        if( result >= 3600 ){
          let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600)
          let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60))
          let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60))
          result = `${h}:${m}:${s}`;
        }else if ( result < 3600 ){
          let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60))
          let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60))
          result = `${m}:${s}`;
        }
        return result;
      },
      // 更换章节
      changeChapter(idx) {
        this.nowChapter = idx
      },
      // 相关课程操作
      courseListJump(ele){
        console.info(ele)
      },
      // 发表评论
      sendComments() {
        if (!this.userComments) {
          this.$vux.toast.text('请输入您的看法', 'middle');
          return false;
        } else {
          this.$vux.toast.text('您的评论已提交，等待审核中！', 'middle');
          this.userComments = ''
        }
      },
      // 确定支付
      overPay(e) {
        this.$vux.toast.text('报名(购买)成功！', 'middle');
        this.payPop = false
      },
      // 取消支付
      cancelPay() {
        this.payPop = false
      },
      // 去支付
      goPay(idx) {
        switch (idx) {
          case 0:
            this.whetherSend = false
            break;
          case 1:
            this.whetherSend = true
            break;
        }
        this.payPop = true
      },
      // 收藏
      collection() {
        this.isCollection = !this.isCollection
      }
    },

    created() {
    }
  }
</script>

<style scoped lang="less">
  .course-detail-container{
    margin-bottom: 60px;
    .course-author{
      padding: 30px 14px;
      .author{
        .author-head-img{
          width: 56px;
          height: 56px;
          overflow: hidden;
          img{
            display: block;
            width: 100%;
          }
        }
        .author-info{
          text-align: left;
          margin-left: 10px;
          .name{
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 6px;
          }
          .position{
            .degree{
              font-weight: bold;
              font-size: 10px;
            }
            .good-at{
              span{
                font-size: 10px;
                color: #666;
                margin-right: 6px;
              }
            }
          }
        }
      }
      .focus{
        button{
          display: inline-block;
          border: 1px solid #b5b5b5;
          color: #b5b5b5;
          padding: 3px 5px;
          border-radius: 5px;
          font-size: 14px;
          *{
            vertical-align: middle;
          }
          i{
            font-weight: bold;
            font-size: 13px;
            margin-right: 5px;
          }
        }
      }
    }
    .course-list{
      border-top: 1px solid #eeeeee;
      padding: 25px 10px;
      .course-list-mark{
        margin-bottom: 14px;
        span:nth-child(1){
          font-size: 16px;
          font-weight: bold;
        }
        span:nth-child(2){
          border: 1px solid #b5b5b5;
          color: #b5b5b5;
          padding: 3px 5px;
          border-radius: 15px;
          font-size: 12px;
          *{
            vertical-align: middle;
          }
          i{
            font-size: 13px;
            margin-right: 2px;
          }
        }
      }
      .course-item-container{
        .course-item{
          width: 128px;
          height: 85px;
          border: 1px solid #f0f0f0;
          border-radius: 10px;
          padding: 10px 6px 5px;
          text-align: left;
          &.course-item-on{
            border: 1px solid #3bb172;
            .course-chapter-play{
              color: #3bb172;
            }
          }
          .course-item-center{
            position: relative;
            width: 100%;
            height: 100%;
            p{
              font-size: 12px;
              &.course-chapter-title{
              }
              &.course-chapter-play{
                font-size: 10px;
                *{
                  vertical-align: middle;
                }
                i{
                  font-size: 13px;
                }
              }
            }
          }
        }
      }
    }
    .course-introduction{
      border-top: 1px solid #eeeeee;
      padding: 15px;
      .course-introduction-title{
        font-size: 12px;
        color: #6c6c6c;
        *{
          vertical-align: top;
        }
        .title{
          color: black;
          font-size: 16px;
          font-weight: bold;
          span{
            padding: 0 5px;
          }
        }
      }
    }
    .course-comments{
      text-align: left;
      padding: 3px 0;
      background-color: #8a8a8a;
      border-top: 1px solid #eeeeee;
      >div{
        padding: 10px 15px;
        background-color: white;
        .course-comments-title{
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
    .related-recommend{
      text-align: left;
      padding: 15px;
      .related-recommend-title{
        font-size: 16px;
        font-weight: bold;
      }

    }
  }
  .course-detail-foot{
    padding:10px 15px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: white;
    border-top: 1px solid #eeeeee;
    z-index: 99;
    >div{
      &.foot-left{
        width: 45%;
      }
      >p{
        color: #8d8d8d;
        &.gift{
          *{
            vertical-align: middle;
          }
          i{
            font-size: 35px;
          }
          span{
            display: inline-block;
            font-size: 10px;
            width: 24px;
            padding-left: 3px;
          }
        }
        &.collection{
          i{
            font-size: 28px;
            &.is-collection{
              color: #049ded;
            }
          }
        }
        &.share{
          i{
            font-size: 28px;
          }
        }
      }
      .course-price{
        font-size: 20px;
        font-weight: bold;
        color: #ff8146;
        margin-right: 15px;
        i{
          font-weight: normal;
          color: #de571f;
          padding-right: 5px;
        }
      }
      button{
        border: none;
        background-color: #3dd372;
        color: white;
        padding: 5px 15px;
        font-size: 13px;
        border-radius: 10px;
      }
    }
  }
  .course-detail-foot-comment{
    padding:10px 15px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: white;
    border-top: 1px solid #eeeeee;
    z-index: 99;
    >div{
      input{
        width: 75%;
        margin-right: 10px;
        border: 1px solid #c2c2c2;
        font-size: 12px;
        padding: 8px 10px;
        border-radius: 10px;
      }
    }
  }
</style>
