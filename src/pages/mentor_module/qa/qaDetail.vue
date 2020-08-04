<template>
  <div>
    <x-header>问答详情</x-header>
    <div class="qa-detail-container" @touchstart="touchIt">
      <div class="qa-contain">
        <div class="qa-center">
          <div class="qa-list" >
            <p class="qa-question">{{ele.title}}</p>
            <p class="qa-belong"><span># {{ele.belong}}</span></p>
            <div class="qa-comment">
              <div class="qa-comment-list" v-for="(qlc, idx) of ele.comments" :key="idx">
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
                  <p @click="addCommentToComment(idx)"><i class="iconfont iconxinxi"></i><span>评论 {{qlc.replay.length}}</span></p>
                  <p @click="addPraise(idx)">
                    <i class="iconfont iconzan" :class="{'have-praise': qlc.isPraise}"></i>
                    <span>有用 {{qlc.commentUseful}}</span>
                  </p>
                  <p><i class="iconfont iconweb-icon-"></i><span>分享</span></p>
                </div>
                <div class="qa-replay" @click="getReplayItem(idx)" >
                  <replay-item
                    :replayData="qlc.replay"
                    :types="true"
                    @replayIt="userReplay"
                    @toDetail="toDe(qlc)"
                    v-show="qlc.replay.length !==0"></replay-item>
                </div>
              </div>
            </div>
            <p class="qa-more" @click="addMoreComment">
              <i class="iconfont iconicon-angle-double-bottom"></i><span>查看更多评论</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <replay-input
      :replayModule="replayFocus"
      :placeholder="replayPlaceholder"
      @replay="replayConfirm"></replay-input>
    <div class="qa-detail-operation fb">
      <p class="invite"><i class="iconfont iconyaoqing"></i><span>邀请回答</span></p>
      <p @click="answerIt"><i class="iconfont iconxinxi"></i><span>我来回答</span></p>
    </div>
  </div>
</template>

<script>
  import textUnfoldShrink from '@/components/textUnfoldShrink'
  import replayItem from '@/components/replayItem'
  import replayInput from '@/components/replayInput'
  export default {
    name: "qaDetail",
    components: {
      'text-unfold-shrink': textUnfoldShrink,
      'replay-item': replayItem,
      'replay-input': replayInput
    },
    data() {
      return {
        id: this.$route.params.id,
        ele: {},
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
      // 隐藏评论
      touchIt() {
        if (this.replayFocus) this.replayFocus = false;
      },
      // 跳转详情
      toDe(ele) {
        localStorage.setItem('qaDe', JSON.stringify(ele))
        this.$router.push(`/replayDetail/0`)
      },
      // 我来回答
      answerIt() {
        this.replayFocus = true;
        this.replayPlaceholder = '评论 ';
        this.replayDegree = 0;
      },
      // 添加评论回复
      addCommentToComment(b) {
        this.replayObject.parentIndex = b;
        this.replayFocus = true;
        this.replayPlaceholder = '评论 ' + this.ele.comments[b].commentUser;
        this.replayDegree = 1;
      },
      // 获取回复评论Index
      getReplayItem(b) {
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
        let b = this.replayObject.parentIndex;
        let c = parseInt(this.replayDegree);
        // debugger
        switch (c) {
          case 0:
            let myRep = {
              commentContain: e,
              commentCount: 0,
              commentTime: "07-29",
              commentUseful: 0,
              commentUser: 'Admin',
              commentUserHeadImg: '',
              isPraise: false,
              replay: []
            }
            this.ele.comments.push(myRep)
            break;
          case 1: // 评价用户的评论
            let reps = {
              replayContain:e,
              replayUser: "Admin",
              to: '',
              type: 0,
            }
            this.ele.comments[b].replay.unshift(reps)
            break;
          case 2: // 回复评论
            let rep = {
              replayContain:e,
              replayUser: "Admin",
              to: this.replayObject.object.replayUser,
              type: 1,
            }
            this.ele.comments[b].replay.push(rep)
            break;
        }
        this.replayFocus = false;
        console.info(this.ele)
      },
      // 隐藏评论
      touchIt() {
        if (this.replayFocus) this.replayFocus = false;
      },
      // 点赞
      addPraise(idx) {
        let a = this.ele.comments[idx].isPraise;
        this.ele.comments[idx].isPraise = !a;
        if (!a) {
          this.ele.comments[idx].commentUseful += 1
        } else {
          this.ele.comments[idx].commentUseful -= 1
        }
      },
      // 加载更多评论
      addMoreComment() {
        this.$vux.toast.text('请稍等')
      }
    },
    created() {
      this.ele = JSON.parse(localStorage.getItem('qa'))
    }
  }
</script>

<style scoped lang="less">
  .qa-detail-container{
    margin-bottom: 55px;
    .qa-contain{
      background-color: white;
      text-align: left;
      color: black;
      .qa-center{
        .qa-list{
          padding: 15px;
          margin-bottom: 15px;
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
      }
    }
  }
  .qa-detail-operation{
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 10px;
    background-color: white;
    z-index: 9;
    border-top: 1px solid #ccc;
    p{
      width: 50%;
      text-align: center;
      position: relative;
      padding: 5px 0;
      font-size: 14px;
      *{
        vertical-align: middle;
      }
      i{
        font-size: 24px;
        margin-right: 5px;
      }
      &.invite{
        &.invite ::after {
          content: '';
          display: block;
          width: 1px;
          height: 100%;
          border-right: 1px solid #e0e0e0;
          position: absolute;
          right: 0;
          top: 0;
        }
        i{
          color: #1296db;
        }
      }
    }
  }
</style>
