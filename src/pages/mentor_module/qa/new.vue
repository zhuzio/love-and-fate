<template>
  <div @touchstart="touchIt">
    <div class="qa-center">
      <div class="qa-list" v-for="(ql, index) of questionList" :key="index">
        <p class="qa-question" @click="linkToDetail(ql, index)">{{ql.title}}</p>
        <p class="qa-belong"><span># {{ql.belong}}</span></p>
        <div class="qa-comment">
          <div class="qa-comment-list" v-for="(qlc, idx) of ql.comments" :key="idx">
            <div class="comment-info fb">
              <div class="comment-info-name flex">
                <div class="comment-info-head fm">
                  <img v-if="qlc.commentUserHeadImg" :src="qlc.commentUserHeadImg" :alt="qlc.commentUser">
                  <img v-else src="../../../assets/images/default_head_img.png" alt="">
                </div>
                <p>{{qlc.commentUser}} 的回答</p>
              </div>
              <p>{{qlc.commentTime}}</p>
            </div>
            <div class="qa-comment-text">
              <text-unfold-shrink :text="qlc.commentContain" bgColor="#fbfaf8"></text-unfold-shrink>
            </div>
            <div class="qa-comment-operation fb">
              <p @click="addCommentToComment(index, idx)"><i class="iconfont iconxinxi"></i><span>评论 {{qlc.replay.length}}</span></p>
              <p @click="addPraise(index, idx)">
                <i class="iconfont iconzan" :class="{'have-praise': qlc.isPraise}"></i>
                <span>有用 {{qlc.commentUseful}}</span>
              </p>
              <p><i class="iconfont iconweb-icon-"></i><span>分享</span></p>
            </div>
            <div class="qa-replay" @click="getReplayItem(index, idx)">
              <replay-item
                :replayData="qlc.replay"
                :types="true"
                @toDetail="toDe(qlc)"
                @replayIt="userReplay"></replay-item>
            </div>
          </div>
        </div>
        <p class="qa-more-comments" @click="linkToDetail(ql, index)">查看更多评论 >></p>
      </div>
      <p class="qa-more" @click="addMoreQuestion">
        <i class="iconfont iconicon-angle-double-bottom"></i><span>点击查看更多问答</span>
      </p>
    </div>
    <replay-input
      :replayModule="replayFocus"
      :placeholder="replayPlaceholder"
      @replay="replayConfirm">
    </replay-input>
  </div>
</template>

<script>
  import textUnfoldShrink from '@/components/textUnfoldShrink'
  import replayItem from '@/components/replayItem'
  import replayInput from '@/components/replayInput'
  export default {
    name: "new",
    components: {
      'text-unfold-shrink': textUnfoldShrink,
      'replay-item': replayItem,
      'replay-input': replayInput
    },
    data() {
      return {
        tabList: ['最新', '热搜'],
        tabIndex: 0,
        questionList: [
          {
            title: '天心情愉悦第二天就心情沉闷要怎么回事呢?',
            belong: '情绪管理',
            comments: [
              {
                commentUser: 'ZHUQIANG',
                commentUserHeadImg: require('../../../assets/images/comment_img.jpg'),
                commentTime: '12-17',
                commentContain: '如果这是医生已经做出的诊断,或许我们可以听\n' +
                  '从医嘱进行相应的治疗,相应的治疗,不要害怕,这会好起来\n' +
                  '的,面对情绪的起伏不定我们可以保持内心的淡\n',
                commentCount: 10,
                commentUseful: 352,
                isPraise: false,
                replay: [
                  {
                    type: 0,
                    replayContain: '谢谢~',
                    replayUser: '楼主',
                    to:'',
                    id: 0
                  },
                  {
                    type: 1,
                    replayContain: '*✧⁺˚⁺ପ(๑･ω･)੭ु⁾⁾ 好好学习天天向上',
                    replayUser: '凉城',
                    to:'楼主',
                    id: 0
                  },
                  {
                    type: 0,
                    replayContain: '好好啊, 这句话讲的真好',
                    replayUser: '青草淡菊',
                    to:'',
                    id: 0
                  },
                  {
                    type: 1,
                    replayContain: '昨夜雨疏风骤，浓睡不消残酒，试问卷帘人，却道海棠依旧！！！',
                    replayUser: '青草淡菊',
                    to:'凉城',
                    id: 0
                  },
                  {
                    type: 1,
                    replayContain: '？？？什么玩意儿？',
                    replayUser: '凉城',
                    to:'青草淡菊',
                    id: 0
                  }
                ]
              },
              {
                commentUser: '老王头',
                commentUserHeadImg: require('../../../assets/images/mentor1.jpg'),
                commentTime: '12-17',
                commentContain: '举头望明月，低头思故乡。',
                commentCount: 10,
                commentUseful: 352,
                isPraise: true,
                replay: [
                  {
                    type: 0,
                    replayContain: '不觉得这是一首很美好的诗吗？',
                    replayUser: '楼主',
                    to:'',
                    id: 0
                  },
                  {
                    type: 1,
                    replayContain: '就这？？？？？？？？',
                    replayUser: '网咖小贾',
                    to:'楼主',
                    id: 0
                  },
                  {
                    type: 0,
                    replayContain: '诗句人人都会，大哥你偏题了哇~~~~~~',
                    replayUser: '往事随风',
                    to:'',
                    id: 0
                  },
                  {
                    type: 1,
                    replayContain: '正解！！！！',
                    replayUser: '好人一生平安',
                    to:'往事随风',
                    id: 0
                  }
                ]
              }
            ]
          },
          {
            title: '项目中时常会需要用到使用JavaScript来动态控制为元素(:before,:after)的样式，但是我们都知道JavaScript或jQuery并没有伪类选择器。这里总结一下几种常见的方法。\n' +
              '\n?',
            belong: '学术研究',
            comments: [
              {
                commentUser: '江湖丶客人',
                commentTime: '12-17',
                commentContain: '这是一道“送命题”！！！！',
                commentCount: 10,
                commentUseful: 352,
                isPraise: false,
                replay: [
                  {
                    type: 0,
                    replayContain: '切，辣鸡！',
                    replayUser: '昙花一现',
                    to:'',
                    id: 0
                  }
                ]
              }
            ]
          },
        ],
        replayFocus: false,
        replayPlaceholder: '',
        replayObject: {
          grandpaIndex: 0,
          parentIndex: 0,
          object: {},
        },
        replayDegree: 0,
      }
    },
    methods: {
      // 跳转详情
      toDe(ele) {
        localStorage.setItem('qaDe', JSON.stringify(ele))
        this.$router.push(`/replayDetail/0`)
      },
      // 添加评论回复
      addCommentToComment(a, b) {
        this.replayObject.grandpaIndex = a;
        this.replayObject.parentIndex = b;
        this.replayFocus = true;
        this.replayPlaceholder = '评论 ' + this.questionList[a].comments[b].commentUser;
        this.replayDegree = 1;
      },
      // 获取回复评论Index
      getReplayItem(a, b) {
        this.replayObject.grandpaIndex = a;
        this.replayObject.parentIndex = b;
        this.replayDegree = 2;
      },
      // 回复评论
      userReplay( e) {
        this.replayObject.object = e;
        this.replayFocus = true;
        this.replayPlaceholder = '回复 ' + e.replayUser;
      },
      // 添加评论内容
      replayConfirm(e) {
        let a = this.replayObject.grandpaIndex;
        let b = this.replayObject.parentIndex;
        let c = parseInt(this.replayDegree);
        console.info(this.questionList[a].comments[b])
        switch (c) {
          case 0:
            break;
          case 1: // 评价用户的评论
            let reps = {
              replayContain:e,
              replayUser: "Admin",
              to: '',
              type: 0,
            }
            this.questionList[a].comments[b].replay.unshift(reps)
            break;
          case 2: // 回复评论
            let rep = {
              replayContain:e,
              replayUser: "Admin",
              to: this.replayObject.object.replayUser,
              type: 1,
            }
            this.questionList[a].comments[b].replay.push(rep)
            break;
        }
        this.replayFocus = false
      },
      // 隐藏评论
      touchIt() {
        if (this.replayFocus) this.replayFocus = false;
      },
      // 点赞
      addPraise(index, idx) {
        let a = this.questionList[index].comments[idx].isPraise;
        this.questionList[index].comments[idx].isPraise = !a;
        if (!a) {
          this.questionList[index].comments[idx].commentUseful += 1
        } else {
          this.questionList[index].comments[idx].commentUseful -= 1
        }
      },
      // 获得更多问答
      addMoreQuestion() {
        this.$vux.toast.text('正在加载更多问答, 请稍等..........')
      },
      // 跳转问答详情
      linkToDetail(ele, idx) {
        localStorage.setItem('qa', JSON.stringify(ele))
        this.$router.push(`/qaDetail/${idx}`)
      }
    }
  }
</script>

<style scoped lang="less">
  .qa-contain{
    background-color: white;

    color: black;
    .qa-center{
      .qa-list{
        padding: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ccc;
        text-align: left;
        .qa-question{
          font-size: 16px;
          font-weight: bold;
        }
        .qa-belong{
          color: #797979;
          margin: 12px 0 25px;
          font-size: 12px;
        }
        .qa-comment{
          .qa-comment-list{
            padding:0 10px 10px;
            border-radius: 10px;
            margin-bottom: 15px;
            .comment-info{
              font-size: 13px;
              .comment-info-name{
                .comment-info-head{
                  width: 30px;
                  height: 30px;
                  overflow: hidden;
                  border-radius: 50%;
                  img{
                    display: block;
                    width: 100%;
                  }
                }
                >p{
                  margin-left: 15px;
                }
              }
              >p{}
            }
            .qa-comment-text{
              margin: 16px auto;
              padding: 10px 10px;
              background-color: #fbfaf8;
              border-radius: 10px;
            }
            .qa-comment-operation{
              width: 80%;
              margin: 16px auto;
              p{
                *{
                  vertical-align: middle;
                }
                i{
                  font-size: 22px;
                  color: #8a8a8a;
                  &.have-praise{
                    color: red;
                  }
                }
                span{
                  font-size: 13px;
                  margin-left: 5px;
                }
              }
            }
            .qa-replay{
              .qa-replay-more{
                padding:10px 20px;
                background-color: #f4f4f4;
                border-radius: 8px;
                font-size: 12px;
                color: #197fff;
                margin-top: 10px;
              }
            }
          }
        }
        .qa-more-comments{
          text-align: right;
          background-color: #f4f4f4;
          font-size: 10px;
          padding: 5px 0;
          color: #ababab;
          padding-right: 15px;
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
  }
</style>
