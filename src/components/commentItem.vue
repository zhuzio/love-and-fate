<template>
  <div>
    <div class="comments-list">
      <div class="comments-box" v-for="(da, index) in data" :key="index">
        <div class="comments-user-head fa">
          <img :src="da.userHeadImg" :alt="da.userName">
        </div>
        <div class="comments" :style="`width: ${elementWidth - 55}px`">
          <p class="comments-user-name">{{da.userName}}</p>
          <p class="comments-text">{{da.comments}}</p>
          <div class="comments-time-praise fb">
            <p class="time">{{da.commentTime}}</p>
            <p class="praise">
              <i class="iconfont iconzan"
                 :class="{'haveiconzan': da.isPraise}"
                 @click="givePraise(da)"></i>
              <span>{{da.praiseCount}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "commentItem",
    data() {
      return {
        elementWidth: document.body.clientWidth
      }
    },
    props: ['data'],
    methods: {
      // 点赞
      givePraise(ele) {
        ele.isPraise = !ele.isPraise
        if (ele.isPraise) ele.praiseCount +=1; else ele.praiseCount -=1
      }
    },
  }
</script>

<style scoped lang="less">
  .comments-list{
    padding: 15px 0 0;
    background-color: white;
    .comments-box{
      display: flex;
      margin-bottom: 25px;
      .comments-user-head{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        img{
          display: block;
          width: 100%;
        }
      }
      .comments{
        text-align: left;
        margin-left: 10px;
        font-size: 13px;
        border-bottom: 1px solid #f0f0f0;
        .comments-user-name{
          color: #ff8146;
        }
        .comments-text{
          color: black;
          margin: 5px 0;
          letter-spacing: 1px;
        }
        .comments-time-praise{
          padding: 10px 5px;
          font-size: 12px;
          color: rgba(100,100,100,0.5);
          .time{}
          .praise{
            color: rgba(75,75,75,0.5);
            span{
              margin-left: 5px;
            }
            .haveiconzan{
              color: #ff8146;
            }
          }
        }
      }
    }
  }
</style>
