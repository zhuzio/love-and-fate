<template>
    <div class="course-item-container" ref="courseItemContainer">
      <div class="course-item"
           v-for="(cd, index) in courseData"
           :key="index"
           @click="courseJump(cd)">
        <div class="course-img fm" :style="`width: ${courseItemWidth}px`">
          <img :src="cd.img" alt="">
        </div>
        <div class="course-info fc">
          <div class="course-title-author">
            <p class="course-title">{{cd.title}}</p>
            <div class="course-author">
              <p class="author">
                <span class="author-name">{{cd.author}}</span>
                <span class="author-position">{{cd.position}}</span>
              </p>
              <p class="learning">
                <span>{{cd.learnAmount}}</span>人加入学习
              </p>
            </div>
          </div>
          <div class="course-price fb" v-show="itemType === 0">
            <p class="price">
              共<span> {{cd.section}} </span>讲 <i> / </i> <b>¥</b> <span>{{cd.price}}</span>
            </p>
            <p><button>立即报名</button></p>
          </div>
          <div class="course-opera fb" v-show="itemType === 1">
            <p class="aa">共<span> {{cd.section}} </span>讲
              <span class="status-yes status" v-if="cd.isStudy">已学习 <i>{{cd.progress}}%</i></span>
              <span class="status-no status" v-else>未学习</span>
            </p>
            <p class="bb" @click="courseOp(cd, index)"><i class="iconfont iconcaozuo-gengduo"></i></p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "courseItem",
    props: {
      courseData: {
        type: Array,
        default: []
      },
      types: {
        type: Number,
        default: 0
      }
    },
    watch: {
      courseData: {
        handler(e) {
          console.info(e)
        },
        deep: true
      },
    },
    data() {
      return {
        courseItemWidth: 0,
        itemType: 0
      }
    },
    methods: {
      courseJump(ele) {
        this.$emit('jump', ele)
      },
      courseOp(ele, idx) {
        let params = {
          ele: ele,
          idx: idx
        }
        this.$emit('opera', params)
      }
    },
    mounted() {
      this.courseItemWidth = parseInt(document.body.clientWidth * 0.27)
      console.info(this.courseItemWidth)
    },
    created() {
      console.info(this.courseData)
      this.itemType = this.types
    }
  }
</script>

<style scoped lang="less">
  .course-item{
    display: -webkit-box;
    padding: 15px 0;
    .course-img{
      width: 16%;
      img{
        display: block;
        max-width: 100%;
      }
    }
    .course-info{
      margin-left: 15px;
      text-align: left;
      .course-title-author{
        .course-title{
          font-weight: bold;
          font-size: 15px;
          margin-bottom: 15px;
        }
        .course-author{
          color: #7e7e7e;
          .author{
            font-size: 13px;
            margin-bottom: 5px;
            .author-name{}
            .author-position{
              font-size: 11px;
            }
          }
          .learning{
            font-size: 11px;
            span{
              font-size: 14px;
            }
          }
        }
      }
      .course-price{
        color: #83822f;
        font-size: 15px;
        .price{
          span{
          }
          b{
            font-weight: normal;
          }
        }
        button{
          border: none;
          background-color: #3dd372;
          color: white;
          padding: 3px 12px;
          font-size: 11px;
          border-radius: 10px;
        }
      }
      .course-opera{
        padding: 5px 0;
        font-size: 14px;
        *{
          vertical-align: middle;
        }
        .aa{
          color: #7e7e7e;
          .status{
            margin-left: 25px;
            &.status-yes{
              i{
                color: red;
              }
            }
          }
        }
        .bb{
          i{
            font-size: 22px;
          }
        }
      }
    }
  }
</style>
