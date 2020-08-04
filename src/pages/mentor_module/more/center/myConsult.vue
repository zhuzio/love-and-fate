<template>
  <div>
    <x-header>我的咨询</x-header>
    <div class="consult-container">
      <mine-head-tab :tab="tabData" @on-change="tabClick"></mine-head-tab>
      <div class="course-ing" v-show="tabIdx === 0">
        <div class="ing-item-box">
          <div class="ing-head">
            <div class="ing-head-center fb">
              <div class="i-h-l flex">
                <div class="hourglass-box fm">
                  <div class="hourglass fm">
                    <i class="iconfont iconshalou"></i>
                  </div>
                </div>
                <div class="info">
                  <p class="status">进行中</p>
                  <p class="date"><span>2020-05-06</span><span>14:00 - 15:00</span></p>
                </div>
              </div>
              <div class="i-h-r">
                <button>已支付</button>
              </div>
            </div>
          </div>
          <div class="order-info c-list">
            <p class="order-num"><span>订单编号</span><span>202008020001563</span></p>
            <p class="order-time"><span>创建时间</span><span><i>2020-08-01</i><i>12:00</i></span></p>
          </div>
          <div class="consult-info c-list">
            <p class="c-i-title fb">
              <span>线上咨询</span><span>亲子教育</span>
            </p>
            <p class="c-i-msg">
              <span>咨询留言：</span>自从生了二儿子，跟大女儿的沟通出现了问题，她的脾气自从二儿子出生以后，变得异常暴躁，以前还能
              和我打成一片，芜无话不说，但是现在，她有什么问题从来不和我沟通，以前和父亲的感情也很好，父女关系非常融洽。现在呢，也是
              不和父亲沟通，有问题了只会把自己锁在屋里，一个人慢慢愈合，看着她这个样子我是真的很心疼，请问这种情况，我应该如何和
              女儿从新建立起沟通的桥梁？
            </p>
            <p class="c-i-time fb"><span>预约咨询时间：<i>2020-08-02 14:00-15:00</i></span><span><button>修改</button></span></p>
          </div>
          <div class="mentor-info c-list">
            <div class="m-i-head fb">
              <div class="m-i-info flex">
                <div class="m-img fm head-img-box">
                  <img src="@/assets/images/mentor2.jpg" alt="">
                </div>
                <div class="m-i">
                  <p class="name">咨询导师 - 黄诗琪</p>
                  <p class="pos">国家二级心理咨询师</p>
                </div>
              </div>
              <div class="m-i-status"><p>已接受咨询</p></div>
            </div>
            <div class="m-i-msg">
              <p>咨询导师：</p>
              <p>你好，我已收到您的私信留言，我们将在预约的时间进行咨询，很期待和您的畅谈！</p>
            </div>
            <div class="m-i-btn"><button>立即咨询</button></div>
          </div>
          <div class="order-other c-list">
            <p class="oo-title">客服帮助</p>
            <p class="a"><span>微信：</span>133 3333 0312</p>
            <p class="a"><span>热线：</span>020 - 3720 7689</p>
          </div>
        </div>
      </div>
      <div class="course-over" v-show="tabIdx === 1">
        <div class="over-item-box">
          <div class="over-item" v-for="i in 8">
            <div class="over-title">
              <p><span>订单编号：</span>2020080232323</p>
            </div>
            <div class="over-info">
              <p><span class="o-i-title">服务类型：</span><span class="info">心理咨询 - 亲子教育</span></p>
              <p><span class="o-i-title">咨询形式：</span><span class="info">线上咨询</span></p>
              <p><span class="o-i-title">咨询导师：</span><span class="info">张毅</span></p>
              <p><span class="o-i-title">咨询费用：</span><span class="info">300.00元</span></p>
              <p><span class="o-i-title">咨询时段：</span><span class="info"><i>2020-07-15</i><i>12:00 - 13: 00</i></span></p>
            </div>
            <div class="over-op fb">
              <button class="over-del">删除订单</button>
              <button class="over-aga">再次咨询</button>
              <button class="over-cou">立即评价</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mineHeadTab from '@/components/mineHeadTab'
  export default {
    name: "myConsult",
    components: {
      'mine-head-tab': mineHeadTab
    },
    data() {
      return {
        tabData: ['进行中', '已结束'],
        tabIdx: 0,
      }
    },
    methods: {
      tabClick(e) {
        this.tabIdx = e
      },
    }
  }
</script>

<style scoped lang="less">
  .consult-container{
    text-align: left;
    .course-ing{
      padding: 20px 0;
      background-color: #faf4fb;
      .ing-item-box{
        .c-list{
          width: 95%;
          margin: 10px auto;
          background-color: white;
          padding: 10px 0;
          border-radius: 8px;
          box-shadow:1px 0px 17px 0px rgba(6,33,74,0.25);
        }
        .ing-head{
          background-color: #50e6c0;
          padding: 10px;
          border-radius: 6px;
          .ing-head-center{
            background-color: white;
            padding: 12px 10px;
            border-radius: 6px;
            .i-h-l{
              .hourglass-box{
                .hourglass{
                  width: 45px;
                  height: 45px;
                  border-radius: 50%;
                  border: 6px solid #50cdfd;
                  animation: rotating 10s linear 1s infinite alternate;
                  i{
                    color: #50cdfd;
                    display: inline-block;
                    font-weight: bold;
                    font-size: 22px;
                  }
                }
              }
              .info{
                margin-left: 10px;
                .status{
                  font-size: 14px;
                  color: #937dd6;
                  margin-bottom: 5px;
                }
                .date{
                  font-size: 12px;
                  color: black;
                  span{
                    margin-right: 20px;
                  }
                }
              }
            }
            .i-h-r{
              button{
                padding: 6px 12px;
                background-color: #7dc5eb;
                border-radius: 5px;
                color: white;
                font-size: 13px;
              }
            }
          }
        }
        .order-info{
          p{
            font-size: 14px;
            padding: 10px 5px;
            &.order-num{
              border-bottom: 1px solid #d7d7d7;
              span:nth-child(2) {
                color: #937dd6;
              }
            }
            &.order-time{
              span{
                i{
                  margin-right: 20px;
                }
              }
            }
            span{
              margin-right: 25px;
              &:nth-child(1) {
                color: #cfced0;
              }
              &:nth-child(2) {
                font-size: 16px;
                letter-spacing: 1px;
              }
            }
          }
        }
        .consult-info{
          p{
            padding: 10px;
            font-size: 14px;
            &.c-i-title{
              span{
                &:nth-child(1){
                  font-size: 16px;
                }
              }
            }
            &.c-i-msg{
              border-top: 1px solid #d7d7d7;
              border-bottom: 1px solid #d7d7d7;
              padding: 10px 13px;
              letter-spacing: 1.5px;
              font-size: 13px;
              span{
                padding-right: 5px;
                font-size: 14px;
              }
            }
            &.c-i-time{
              span{
                i{
                  color: #3982f1;
                  font-weight: normal;
                }
                button{
                  font-size: 12px;
                  color: #3982f1;
                }
              }
            }
            span{
              &:nth-child(1){
                font-weight: bold;
              }
            }
          }
        }
        .mentor-info{
          padding: 10px 10px;
          .m-i-head{
            border-bottom: 1px solid #d7d7d7;
            padding:0 5px 10px;
            .m-i-info{
              .m-img{
                width: 60px;
                height: 60px;
              }
              .m-i{
                margin-left: 10px;
                color: black;
                .name{
                  font-size: 16px;
                  padding-bottom: 10px;
                }
                .pos{
                  font-size: 14px;
                }
              }
            }
            .m-i-status{
              p{
                color: #ff2020;
                font-size: 14px;
              }
            }
          }
          .m-i-msg{
            font-size: 15px;
            padding: 10px;
            p:nth-child(2){
              margin-top: 10px;
              font-size: 14px;
            }
          }
          .m-i-btn{
            text-align: right;
            button{
              padding: 10px 15px;
              background-color: #7dc5eb;
              border-radius: 5px;
              color: white;
              font-size: 15px;
            }
          }
        }
        .order-other{
          padding: 10px 15px;
          p{
            color: black;
            padding: 10px 0 0;
            &.oo-title{
              font-size: 15px;
              margin-bottom: 15px;
            }
            &.a{
              font-size: 14px;
            }
          }
        }
      }
    }
    .course-over{
      padding: 20px 10px;
      background-color: #faf4fb;
      .over-item-box{
        .over-item{
          background-color: white;
          border-radius: 8px;
          box-shadow:1px 0px 17px 0px rgba(6,33,74,0.25);
          padding: 15px;
          margin-bottom: 20px;
          .over-title{
            p{
              font-size: 16px;
              border-bottom: 1px solid #d7d7d7;
              padding: 0 0 10px;
            }
          }
          .over-info{
            font-size: 14px;
            padding: 10px 0;
            background: url("../../../../assets/images/over.png") no-repeat 90% 50%;
            background-size: 100px auto;
            p{
              padding:0 0 10px 10px;
             .o-i-title{
               letter-spacing: 1px;
             }
              .info{
                i{
                  margin-right: 20px;
                }
              }
            }
          }
          .over-op{
            button{
              font-size: 15px;
              padding: 5px 15px;
              border-radius: 5px;
              &.over-del{
                color: #959595;
                border: 1px solid #7bc4ea;
              }
              &.over-aga{
                color: black;
                background-color: #e6e6e6;
              }
              &.over-cou{
                color: white;
                background-color: #7bc4ea;
              }
            }
          }
        }
      }
    }
  }
  @keyframes rotating{
    0%{
      transform: rotate(0deg);
    }
    25%{
      transform: rotate(90deg);
    }
    50%{
      transform: rotate(180deg);
    }
    75%{
      transform: rotate(270deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>
