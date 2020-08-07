<template>
  <div>
    <x-header>我的课程</x-header>
    <div class="mc-container">
      <mine-head-tab :tab="tabData" @on-change="tabClick"></mine-head-tab>
      <div class="mc-item-box" v-show="tabIdx === 0">
        <course-item
          :courseData="courseList"
          @opera="mcOp"
          :types="1" ></course-item>
      </div>
      <div class="mc-item-pay-box"  v-show="tabIdx === 1">
        <div class="mc-pay" v-for="(cl, index) in courseList" :key="index">
          <p class="mc-pay-order fb">
            <span>订单编号：23136541146546</span><span class="status">待付款</span>
          </p>
          <div class="mc-pay-box">
            <div class="mc-p">
              <div class="mc-p-img" :style="`width: ${courseItemWidth}px`">
                <img :src="cl.img" alt="">
              </div>
              <div class="mc-p-info fc">
                <div class="top">
                  <p class="title">{{cl.title}}</p>
                  <p class="position"><span>{{cl.author}}</span>{{cl.position}}</p>
                  <p class="learning"> <span>{{cl.learnAmount}}</span>人加入学习  </p>
                </div>
                <div class="btom"><p>{{cl.section}}讲</p></div>
              </div>
            </div>
          </div>
          <p class="mc-pay-btn fb">
            <button class="c">取消订单</button>
            <span>¥ <i>1920.00</i></span>
            <button class="j">立即支付</button>
          </p>
        </div>
      </div>
      <!--<no-data text="暂无相关订单" btn="去看看"></no-data>-->
    </div>
    <div v-transfer-dom>
      <popup v-model="mcStatus" is-transparent :hide-on-blur="false">
        <div style="width: 95%;
        background-color:#fff;
        margin:0 auto 15px;
        border-radius:5px;
        padding-top:10px;">
          <div class="mc-op-box fb">
            <div class="mc-op-item" v-for="(o, index) in op" :key="index">
              <p><i class="iconfont" :class="o.icon"></i></p>
              <p>{{o.name}}</p>
            </div>
          </div>
          <div style="padding:10px 15px;">
            <x-button @click.native="mcStatus = false">取消</x-button>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  import noData from '@/components/noData'
  import mineHeadTab from '@/components/mineHeadTab'
  import courseItem from '@/components/courseItem'
  export default {
    name: "myCourse",
    components: {
      'no-data': noData,
      'mine-head-tab': mineHeadTab,
      'course-item': courseItem
    },
    data() {
      return {
        tabData: ['学习中', '待付款'],
        tabIdx: 0,
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
            isStudy: true,
            progress: 30
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
            id: 2,
            isStudy: false,
            progress: 0
          }
        ],
        mcStatus: false,
        op: [
          {
            name: '置顶',
            icon: 'iconzhidingtop',
            id: 0
          },
          {
            name: '详情',
            icon: 'icon16',
            id: 1
          },
          {
            name: '赠送',
            icon: 'iconhuodongliwu',
            id: 2
          },
          {
            name: '分享',
            icon: 'iconweb-icon-',
            id: 3
          }
        ]
      }
    },
    methods: {
      tabClick(e) {
        this.tabIdx = e
      },
      mcOp(e) {
        this.mcStatus = true
      }
    },
    mounted() {
      this.courseItemWidth = parseInt(document.body.clientWidth * 0.3)
    },
  }
</script>

<style scoped lang="less">
  .mc-container{
    .mc-item-box{
      padding: 15px;
    }
    .mc-item-pay-box{
      padding: 15px;
      text-align: left;
      .mc-pay{
        border-radius: 10px;
        padding: 0 15px 15px;
        box-shadow:1px 0px 17px 0px rgba(6,33,74,0.25);
        margin-bottom: 20px;
        .mc-pay-order{
          padding: 15px 0;
          font-size: 15px;
          span{
            &:nth-child(2) {
              color: red;
            }
          }
        }
        .mc-pay-box{
          .mc-p{
            display: -webkit-box;
            padding: 15px 0;
            border-bottom: 1px solid #e2e2e2;
            border-top: 1px solid #e2e2e2;
            .mc-p-img{
              width: 16%;
              img{
                display: block;
                max-width: 100%;
              }
            }
            .mc-p-info{
              margin-left: 15px;
              .top{
                .title{
                  font-weight: bold;
                  font-size: 15px;
                  margin-bottom: 15px;
                }
                .position{
                  color: #7e7e7e;
                  font-size: 11px;
                  margin-bottom: 5px;
                  span{
                    font-size: 13px;
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
                padding: 5px 0;
                p{
                  font-size: 14px;
                  color: #7e7e7e;
                }
              }
            }
          }
        }
        .mc-pay-btn{
          padding-top: 15px;
          button{
            font-size: 14px;
            padding: 5px 15px;
            border: 1px solid;
            border-radius: 5px;
            &.c{
              border-color: #bdbdbd;
              color: #bdbdbd;
            }
            &.j{
              color:#ff2a2a;
              border-color: #ff2a2a;
              font-weight: bold;
            }
          }
          span{
            font-size: 14px;
            color: #ff2a2a;
            i{
              font-weight: bold;
            }
          }
        }
      }
    }
  }
  .mc-op-box{
    margin: 0 auto;
    padding: 20px 5%;
    border-bottom: 1px solid #c2c2c2;
    .mc-op-item{
      position: relative;
      width: 25%;
      p{
        i{
          font-size: 22px;
        }
        font-size: 14px;
        text-align: center;
        margin-bottom: 5px;
      }
      &:after{
        content: '';
        display: block;
        width: 1px;
        height: 80%;
        border-right: 1px solid #d7d7d7;
        position: absolute;
        top: 10%;
        right: 0;
      }
      &:last-child{
        &:after{
          display: none;
        }
      }
    }
  }
</style>
