<template>
    <div>
      <x-header>文章详情</x-header>
      <div class="article-detail-container">
        <div class="ad-title">
          <p class="fb thetitle">
            <span class="title">非暴力沟通:好好说话很重要</span>
            <span class="focus"><i class="iconfont iconadd"></i>关注</span>
          </p>
          <p class="subtitle"><span>悟通心理工作室-赵明</span><span>202-02-21</span><span>5613次阅读</span></p>
        </div>
        <div class="ad-content" v-html="content"></div>
        <div class="ad-praise">
          <div class="praise-img fm">
            <img src="../../../assets/images/icon/praise_color1.png" alt="">
          </div>
          <p><span>46546</span>人点赞</p>
        </div>
        <div class="ad-add-focus fb">
          <div class="focus-info flex">
            <div class="user-head fm">
              <img src="../../../assets/images/default_head_img.png" alt="">
            </div>
            <div class="user-info fc">
              <p class="name"><span>张立新</span><span>资深精神分析师</span></p>
              <p class="position"><span>亲子教育</span><span>人际关系</span></p>
            </div>
          </div>
          <div class="focus-add">
            <button><i class="iconfont iconadd"></i><span>关注</span></button>
          </div>
        </div>
        <div class="ad-comment">
          <div class="comment-center">
            <p class="comment-title"><i class="iconfont iconxinxi"></i><span>精选评论</span></p>
            <div class="comment-list">
              <comment-item :data="commentData"></comment-item>
            </div>
          </div>
        </div>
      </div>
      <div class="ad-add-comment fb">
        <input type="text" placeholder="您一定有很多想说的......" v-model="comments">
        <button @click="submitComment">提交</button>
        <span class="collection"  @click="collection"><i class="iconfont iconruntongyiyaoyihuifu_xingxing":class="{'is-collection': isCollection}"></i></span>
        <span class="share"><i class="iconfont iconweb-icon-"></i></span>
      </div>
    </div>
</template>

<script>
  import commentItem from '@/components/commentItem'
  export default {
    name: "articleDetail",
    components: {
      'comment-item': commentItem
    },
    data() {
      return {
        content: '<div style="padding: 0px; margin: 0px; font-size: 10px; line-height: 2;"><img src="data:image/jpeg;base64,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" style="font-size: 14px;"><span style="font-size: 14px;">&nbsp;</span></div><div style="padding: 0px; margin: 0px; font-size: 10px; line-height: 2;"><span style="font-size: 14px;">&nbsp; &nbsp; &nbsp; &nbsp;非暴力是避免恶语伤人，避免异化的沟通方式，采用核心四点进行沟通。</span><br></div><div style="padding: 0px; margin: 0px; font-size: 10px; line-height: 2;"><span style="font-size: 14px;">&nbsp; &nbsp; &nbsp; &nbsp;化沟通方式有以下几种：</span></div><div style="padding: 0px; margin: 0px; font-size: 10px; line-height: 2;"><span style="font-size: 12px;"></span><span style="font-size: 18px;"><b style="font-size: 14px;">&nbsp; &nbsp; &nbsp; &nbsp;以已度人。</b></span><span style="font-size: 14px;">用道德标准来评判别人,如果别人</span><span style="font-size: 14px;">的行为不符合我的价值观，那他就是不道德，比</span><span style="font-size: 14px;">如同事注重细节,就是有强症,如果我注重细</span><span style="font-size: 14px;">节,对方则是马虎。将价值观和道德评判分开,说</span><span style="font-size: 14px;">出自己的价值观而不是批评他人。</span></div><div style="padding: 0px; margin: 0px; font-size: 10px; line-height: 2;"><span style="font-size: 12px;"><span style="font-size: 14px;">&nbsp; &nbsp; &nbsp; &nbsp;</span><b style="font-size: 14px;">擅加比较。</b><span style="font-size: 14px;">人比人得死,货比货得仍,如果想</span></span><span style="font-size: 14px;">快速变惨,就和他人比较。别人家的孩子,别人家</span><span style="font-size: 14px;">的老公,是多少人挥之不去的阴影。人外有人,天</span><span style="font-size: 14px;">外有天,你如有非得和别人比,那么你很难获得</span><span style="font-size: 14px;">成就感。比如有些孩子已经在音乐上小有所成</span><span style="font-size: 14px;">但却和莫扎特比音乐成就,那失望可能就是必然</span><span style="font-size: 14px;">的。我们可以选择和昨天的自己比,而不要擅自</span><span style="font-size: 14px;">和别人比。</span></div>',
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
        isCollection:true,
        comments: ''
      }
    },
    methods: {
      // 收藏
      collection() {
        this.isCollection = !this.isCollection
      },
      // 提交评论
      submitComment() {
        if (!this.comments) {
          this.$vux.toast.text('请输入您的看法', 'middle');
          return false;
        } else {
          this.$vux.toast.text('您的评论已提交，等待审核中！', 'middle');
          this.comments = ''
        }
        // todo
      }
    }
  }
</script>

<style scoped lang="less">
  .article-detail-container{
    margin-bottom: 50px;
    .ad-title{
      padding: 30px 15px;
      background-color: white;
      text-align: left;
      .thetitle{
        .title{
          font-size: 16px;
          font-weight: bold;
        }
        .focus{
          display: inline-block;
          padding: 3px 10px;
          border-radius: 30px;
          border: 1px solid #d51e06;
          color: #d51e06;
          font-size: 12px;
          font-weight: bold;
          *{
            vertical-align: middle;
          }
          i{
            margin-right: 3px;
          }
        }
      }
      .subtitle{
        color: #808080;
        font-size: 11px;
        margin-top: 12px;
        span{
          margin-right: 15px;
        }
      }
    }
    .ad-content{
      padding: 0 20px;
    }
    .ad-praise{
      margin-top: 60px;
      .praise-img{
        border: 2px solid #c9c9c9;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin: 0 auto;
        img{
          display: block;
          width: 60%;
        }
      }
      p{
        margin-top: 10px;
        font-size: 14px;
        color: #8d8d8d;
      }
    }
    .ad-add-focus{
      width: 85%;
      padding: 10px 14px;
      background-color: white;
      border: 1px solid #919191;
      margin: 60px auto;
      .focus-info{
        .user-head{
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          img{
            display: block;
            width: 100%;
          }
        }
        .user-info{
          text-align: left;
          margin-left: 15px;
          p{
            font-size: 12px;
            span{
              margin-right: 12px;
            }
            &.name{
              color: #56108a;
            }
            &.position{
              padding-top: 8px;
              color: #666666;
            }
          }

        }
      }
      .focus-add{
        button{
          *{
            vertical-align: middle;
          }
          border: 1px solid #969696;
          padding: 3px 5px;
          font-size: 12px;
        }
      }
    }
    .ad-comment{
      padding: 12px 0 0;
      background-color: #f8f8f8;
      .comment-center{
        background-color: white;
        text-align: left;
        .comment-title{
          *{
            vertical-align: middle;
          }
          padding: 10px 10px 0;
          font-size: 16px;
          i{
            font-weight: bold;
            font-size: 22px;
            margin-right: 5px;
          }
        }
        .comment-list{
          background-color: white;
          padding: 20px 15px;
        }
      }
    }
  }
  .ad-add-comment{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 15px;
    z-index: 99;
    background-color: white;
    border-top: 1px solid #e8e8e8;
    input{
      width: 50%;
      border: none;
      background-color: #ededed;
      padding: 10px;
      font-size: 12px;
      border-radius: 5px;
    }
    button{
      background-color: #1296db;
      color: white;
      font-size: 12px;
      padding: 7px 15px;
      border-radius: 5px;
      border: none;
    }
    span{
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
  }
</style>
<style type="text/css">
  .ad-content{
    text-align: left;
  }
  .ad-content img{
    display: block;
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
</style>
