<template>
  <div>
    <div class="more-container">
      <div class="more-head">
        <div class="head-center">
          <div class="user-info fb">
            <div class="info flex">
              <div class="info-img fm">
                <img src="../../../assets/images/comment_img.jpg" alt="">
              </div>
              <div class="info-other">
                <p class="name">蓝鲸鱼 <span class="id">（ID：2021）</span> <span></span></p>
                <p class="introduce">请简单的描述一下自己~</p>
              </div>
            </div>
            <div class="edit">
              <p>编辑个人资料</p>
            </div>
          </div>
          <div class="user-data fb">
            <div @click="userDataLink(0)">
              <p>210</p>
              <p>获赞</p>
            </div>
            <div @click="userDataLink(1)">
              <p>0</p>
              <p>关注</p>
            </div>
            <div @click="userDataLink(2)">
              <p>0</p>
              <p>动态</p>
            </div>
            <div @click="userDataLink(3)">
              <p>0</p>
              <p>资讯</p>
            </div>
          </div>
        </div>
      </div>
      <div class="more-body">
        <div class="body-center">
          <div class="top fb">
            <div v-for="(ot, index) of opT" :key="index" class="op-item" @click="moreJump(ot)">
              <div class="op-img">
                <img :src="ot.icon" :alt="ot.name">
              </div>
              <p>{{ot.name}}</p>
            </div>
          </div>
          <div class="bottom fb">
            <div v-for="(ob, index) of opB" :key="index" class="op-item" @click="moreJump(ob)">
              <div class="op-img">
                <img :src="ob.icon" :alt="ob.name">
              </div>
              <p>{{ob.name}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="more-foot">
        <div class="foot-center">
          <div class="foot-item fb">
            <p class="foot-title"><img src="../../../assets/images/icon/location.png" alt=""><span>浏览足迹</span></p>
            <span><i class="iconfont iconyou"></i></span>
          </div>
          <div class="foot-item fb">
            <p class="foot-title"><img src="../../../assets/images/icon/service.png" alt=""><span>在线客服</span></p>
            <span><i class="iconfont iconyou"></i></span>
          </div>
          <div class="foot-item fb">
            <p class="foot-title"><img src="../../../assets/images/icon/help.png" alt=""><span>帮助与反馈</span></p>
            <span><i class="iconfont iconyou"></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "more",
    data() {
      return {
        opT: [
          {
            name: '我的咨询',
            icon: require('../../../assets/images/icon/consult.png'),
            link: '/myConsult'
          },
          {
            name: '我的测评',
            icon: require('../../../assets/images/icon/measurement.png'),
            link: '/myTest'
          },
          {
            name: '我的课程',
            icon: require('../../../assets/images/icon/course_my.png'),
            link: '/myCourse'
          },
          {
            name: '我的问答',
            icon: require('../../../assets/images/icon/ask_my.png'),
            link: '/myQa'
          }
        ],
        opB: [
          {
            name: '优惠券',
            icon: require('../../../assets/images/icon/coupons.png'),
            link: '/myCoupons'
          },
          {
            name: '课程赠送',
            icon: require('../../../assets/images/icon/gift.png'),
            link: '/myCourseSend'
          },
          {
            name: '我的收藏',
            icon: require('../../../assets/images/icon/collection_my.png'),
            link: '/myCollection'
          },
          {
            name: '内容创作',
            icon: require('../../../assets/images/icon/creation.png'),
            link: '/myCreation'
          }
        ]
      }
    },
    methods: {
      userDataLink(idx) {
        switch (parseInt(idx)) {
          case 0:
            break;
          case 1:
            this.$router.push('/focus')
            break;
          case 2:
            this.$router.push('/dynamic')
            break;
          case 3:
            this.$router.push('/information')
            break;
        }
      },
      moreJump(ele) {
        this.$router.push(ele.link)
      }
    }
  }
</script>

<style scoped lang="less">
  .more-container{
    .more-head{
      background-color: #e6e6e6;
      padding-top: 5px;
      .head-center{
        text-align: left;
        background-color: white;
        .user-info{
          padding: 15px 0;
          margin-left: 16px;
          .info{
            .info-img{
              width: 45px;
              height: 45px;
              border-radius: 50%;
              overflow: hidden;
              img{
                display: block;
                height: 100%;
              }
            }
            .info-other{
              margin-left: 6px;
              .name{
                font-size: 16px;
                margin-bottom: 4px;
              }
              .introduce{
                font-size: 12px;
                color: #c0c0c0;
              }
            }
          }
          .edit{
            p{
              background-color: #7dc5eb;
              color: white;
              font-size: 14px;
              padding: 5px 10px 5px 20px;
              border-radius: 15px 0 0 15px;
            }
          }
        }
        .user-data{
          text-align: center;
          padding: 25px 0;
          font-size: 14px;
          >div{
            width: 25%;
            position: relative;
            p{
              color: black;
              &:nth-child(1) {
                margin-bottom: 10px;
                font-weight: bold;
              }
              &:nth-child(2) {
                letter-spacing: 2px;
              }
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
      }
    }
    .more-body{
      background-color: #f3f5f5;
      padding: 6px 8px;
      .body-center{
        background-color: white;
        border-radius: 10px;
        padding: 25px 15px;
        .top,
        .bottom{
          padding: 30px 10px;
          .op-item{
            .op-img{
              width: 30px;
              height: 30px;
              margin: 0 auto;
              img{
                display: block;
                max-width: 30px;
                max-height: 30px;
                width: auto;
                height: auto;
              }
            }
            p{
              font-size: 13px;
              margin-top: 15px;
            }
          }
        }
        .bottom{
          border-top: 1px solid #ececec;
        }
      }
    }
    .more-foot{
      padding: 15px;
      .foot-center{
        .foot-item{
          border-bottom: 1px solid #efefef;
          padding: 10px;
          .foot-title{
            *{
              vertical-align: middle;
            }
            img{
              display: inline-block;
              width: 30px;
            }
            span{
              font-size: 14px;
              margin-left: 10px;
            }
          }
          i{
            font-size: 22px;
            color: #5d5d5d;
          }
        }
      }
    }
  }
</style>
