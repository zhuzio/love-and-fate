<template>
  <div>
    <x-header>课程赠送</x-header>
    <div class="mcs-container">
      <mine-head-tab :tab="tabData" :tabIndex="tabIdx" @on-change="tabClick"></mine-head-tab>
      <div class="mcs-item-box" v-show="tabIdx === 0">
        <div class="msc-p" v-for="(cl, index) of courseList" :key="index">
          <div class="msc-p-img" :style="`width: ${courseItemWidth}px`">
            <img :src="cl.img" alt="">
          </div>
          <div class="msc-p-info fc">
            <div class="top">
              <p class="title">{{cl.title}}</p>
              <p class="position"><span>{{cl.author}}</span>{{cl.position}}</p>
              <p class="learning"> <span>{{cl.learnAmount}}</span>人加入学习  </p>
            </div>
            <div class="btom fb"><p>{{cl.section}}讲 <span>¥ {{cl.price}}</span></p><p>对象@{{cl.target}}</p></div>
          </div>
        </div>
      </div>
      <div class="mcs-item-box" v-show="tabIdx === 1">
        <div class="msc-p" v-for="(cl, index) of courseList" :key="index">
          <div class="msc-p-img" :style="`width: ${courseItemWidth}px`">
            <img :src="cl.img" alt="">
          </div>
          <div class="msc-p-info fc">
            <div class="top">
              <p class="title">{{cl.title}}</p>
              <p class="position"><span>{{cl.author}}</span>{{cl.position}}</p>
              <p class="learning"> <span>{{cl.learnAmount}}</span>人加入学习  </p>
            </div>
            <div class="btom1 fb">
              <span>{{cl.section}}讲 </span>
              <span>¥ {{cl.price}}</span>
              <span>对象@{{cl.target}}</span>
              <button>去支付</button>
            </div>
          </div>
        </div>
      </div>
      <div class="mcs-item-box" v-show="tabIdx === 2">
        <div class="msc-p" v-for="(cl, index) of courseList" :key="index">
          <div class="msc-p-img" :style="`width: ${courseItemWidth}px`">
            <img :src="cl.img" alt="">
          </div>
          <div class="msc-p-info fc">
            <div class="top">
              <p class="title">{{cl.title}}</p>
              <p class="position"><span>{{cl.author}}</span>{{cl.position}}</p>
              <p class="learning"> <span>{{cl.learnAmount}}</span>人加入学习  </p>
            </div>
            <div class="btom2 fb"><span>{{cl.section}}讲</span><span>来自@{{cl.target}}</span><button>开始学习</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mineHeadTab from '@/components/mineHeadTab'
    export default {
      name: "myCourseSend",
      components: {
        'mine-head-tab': mineHeadTab
      },
      data() {
          return {
            tabData: ['已赠出', '未赠送', '已收到'],
            tabIdx: 2,
            courseItemWidth: 0,
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
                id: 1,
                target: '心心相印'
              },
              {
                img: require('@/assets/images/teacher2.jpg'),
                title: '视频-性学大师李银河:教你破解无性婚姻',
                author: '李银河',
                position: '中国性学研究大师',
                learnAmount: 167,
                section: 10,
                price: '88.90',
                target: '小可爱'
              }
            ],
          }
      },
      mounted() {
        this.courseItemWidth = parseInt(document.body.clientWidth * 0.27)
      },
      methods: {
        tabClick(e) {
          this.tabIdx = e;
        }
      }
    }
</script>

<style scoped lang="less">
  .mcs-container{
    text-align: left;
    .mcs-item-box{
      .msc-p{
        display: -webkit-box;
        padding: 15px 10px;
        border-bottom: 1px solid #e2e2e2;
        .msc-p-img{
          width: 16%;
          img{
            display: block;
            max-width: 100%;
          }
        }
        .msc-p-info{
          margin-left: 15px;
          .top{
            .title{
              font-weight: bold;
              font-size: 15px;
              margin-bottom: 10px;
            }
            .position{
              color: #7e7e7e;
              font-size: 11px;
              margin-bottom: 5px;
              span{
                font-size: 13px;
                margin-right: 5px;
              }
            }
            .learning{
              font-size: 11px;
              span{
                font-size: 14px;
              }
            }
          }
          .btom{
            padding: 5px 0 5px 0;
            p{
              font-size: 14px;
              color: #7e7e7e;
              &:nth-child(1) {
                span{
                  margin-left: 25px;
                  color: red;
                }
              }
              &:nth-child(2) {
                color: red;
              }
            }
          }
          .btom1{
            *{
              vertical-align: middle;
            }
            span{
              font-size: 13px;
              &:nth-child(2),
              &:nth-child(3){
                color: red;
              }
            }
            button{
              padding: 3px 8px;
              background-color: #eeb173;
              color: white;
              border-radius: 3px;
            }
          }
          .btom2{
            *{
              vertical-align: middle;
            }
            span{
              font-size: 13px;
              &:nth-child(1){

              }
              &:nth-child(2){
                color: #2893e3;
              }
            }
            button{
              padding: 3px 8px;
              background-color: #eeb173;
              color: white;
              border-radius: 3px;
            }
          }
        }
      }
    }
  }
</style>
