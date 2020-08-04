<template>
  <div>
    <x-header>{{ele.commentUser}} 的回复详情</x-header>
    <div>
      <div class="qa-comment">
        <div class="qa-comment-list">
          <div class="comment-info fb">
            <div class="comment-info-name flex">
              <div class="comment-info-head fm">
                <img v-if="ele.commentUserHeadImg" :src="ele.commentUserHeadImg" :alt="ele.commentUser">
                <img v-else src="../../../assets/images/default_head_img.png" alt="">
              </div>
              <p>{{ele.commentUser}} 的回答</p>
            </div>
            <p>{{ele.commentTime}}</p>
          </div>
          <div class="qa-comment-text">
            <p>{{ele.commentContain}}</p>
          </div>
          <div class="qa-comment-operation fb">
            <p @click="addCommentToComment"><i class="iconfont iconxinxi"></i><span>评论 {{ele.replay.length}}</span></p>
            <p @click="addPraise">
              <i class="iconfont iconzan" :class="{'have-praise': ele.isPraise}"></i>
              <span>有用 {{ele.commentUseful}}</span>
            </p>
            <p><i class="iconfont iconweb-icon-"></i><span>分享</span></p>
          </div>
          <div class="qa-replay">
            <replay-item
              :replayData="ele.replay"
              :types="false"
              @replayIt="userReplay"></replay-item>
          </div>
        </div>
      </div>
    </div>
    <replay-input
      :replayModule="replayFocus"
      :placeholder="replayPlaceholder"
      @replay="replayConfirm"></replay-input>
  </div>
</template>

<script>
  import replayItem from '@/components/replayItem'
  import replayInput from '@/components/replayInput'
  export default {
    name: "replayDetail",
    components: {
      'replay-item': replayItem,
      'replay-input': replayInput
    },
    data() {
      return {
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
      addPraise() {
        let a = this.ele.isPraise;
        this.ele.isPraise = !a;
        if (!a) {
          this.ele.commentUseful += 1
        } else {
          this.ele.commentUseful -= 1
        }
      },
      // 添加评论回复
      addCommentToComment(b) {
        this.replayFocus = true;
        this.replayPlaceholder = '评论 ' + this.ele.commentUser;
        this.replayDegree = 1;
      },
      userReplay(e) {
        this.replayDegree = 2;
        this.replayObject.object = e;
        this.replayFocus = true;
        this.replayPlaceholder = '回复 ' + e.replayUser;
      },
      // 添加评论内容
      replayConfirm(e) {
        let c = parseInt(this.replayDegree);
        // debugger
        switch (c) {
          case 1: // 评价用户的评论
            let reps = {
              replayContain:e,
              replayUser: "Admin",
              to: '',
              type: 0,
            }
            this.ele.replay.unshift(reps)
            break;
          case 2: // 回复评论
            let rep = {
              replayContain:e,
              replayUser: "Admin",
              to: this.replayObject.object.replayUser,
              type: 1,
            }
            this.ele.replay.push(rep)
            break;
        }
        this.replayFocus = false;
      },
    },
    created() {
      this.ele = JSON.parse(localStorage.getItem('qaDe'))
    }
  }
</script>

<style scoped lang="less">
  .qa-comment{
    margin-top: 20px;
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
        p{
          text-align: left;
          font-size: 14px;
          line-height: 21px;
          color: black;
        }
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
</style>
