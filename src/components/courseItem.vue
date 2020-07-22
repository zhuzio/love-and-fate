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
          <div class="course-price fb">
            <p class="price">
              共<span> {{cd.section}} </span>讲 <i> / </i> <b>¥</b> <span>{{cd.price}}</span>
            </p>
            <p><button>立即报名</button></p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "courseItem",
    props: ['courseData'],
    data() {
      return {
        courseItemWidth: 0
      }
    },
    methods: {
      courseJump(ele) {
        this.$emit('jump', ele)
      }
    },
    mounted() {
      this.courseItemWidth = parseInt(this.$refs.courseItemContainer.clientWidth * 0.3)
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
    }
  }
</style>
