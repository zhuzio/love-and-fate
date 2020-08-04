<template>
  <div>
    <x-header>我的资讯</x-header>
    <div class="information-container">
        <sticky
          ref="sticky"
          :offset="0"
          :check-sticky-support="false"
          v-model="tabIndex"
          :disabled="disabled">
          <div class="information-head">
            <button-tab>
              <button-tab-item
                v-for="(ti, index) of tabItem"
                :selected="index === tabIndex"
                @on-item-click="itemChange"
                :key="index">{{ti}}</button-tab-item>
            </button-tab>
          </div>
        </sticky>
      <div class="information-body">
        <div v-show="tabIndex === 0" class="system-info-container">
          <div class="system-info-box">
            <div class="system-info-item">
              <div class="system-info-head-img">
                <div class="fm">
                  <img src="@/assets/images/default_head_img.png" alt="">
                </div>
              </div>
              <div class="system-info-text">
                <p class="title fb"><span>系统消息</span><span>2020-03-21</span></p>
                <div class="text">近日，教育部和国家邮政局联合印发《关于进一步做好2020年高
                  校录取通知书寄递工作的通知》，从加强组织领导、规范寄递管理、确保精准投递、
                  优化新生服务、做好防疫消杀、加强监督检查等方面对各地教育、邮政等部门和高校、
                  邮政企业提出明确工作要求，确保录取通知书寄递的安全、及时、准确。</div>
              </div>
            </div>
            <div class="system-info-item">
              <div class="system-info-head-img">
                <div class="fm">
                  <img src="@/assets/images/default_head_img.png" alt="">
                </div>
              </div>
              <div class="system-info-text">
                <p class="title fb"><span>系统消息</span><span>2020-08-03</span></p>
                <div class="text">据央视报道，8月3日，党和国家功勋荣誉表彰工作委员会办公室发布公示，
                  为隆重表彰在抗击新冠肺炎疫情斗争中作出杰出贡献的功勋模范人物，决定开展“共和国勋章”和国家
                  荣誉称号评选颁授，产生1名“共和国勋章”建议人选，3名国家荣誉称号建议人选。
                  其中，钟南山成为“共和国勋章”建议人选。对此，网友纷纷点赞，“实至名归”！共和国勋章，是中
                  华人民共和国的最高荣誉勋章。此次评选是我国继2019年首次开展国家勋章评选颁授之后，第二次向个人授予“共和国勋章”。据悉，
                  国家勋章和国家荣誉称号一般每5年授予1次，在中华人民共和国成立“逢五、逢十”周年时进行，有需要时可以及时授予。                  此外，张伯礼、张定宇、陈薇3人成为国家荣誉称号建议人选。</div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="tabIndex === 1" class="your-info-container">
          <div class="your-info-box">
            <div class="your-info-item fb" v-for="(y, index) in ym" :key="index">
              <div class="your-info-base flex">
                <div class="head-img"><img :src="y.img" alt=""></div>
                <div class="text fc">
                  <p class="text-name"><span>{{y.name}}</span><span>{{y.position}}</span></p>
                  <p class="text-txt">{{y.msg}}</p>
                </div>
              </div>
              <div class="your-info-time"><span>{{time(y.time)}}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { updateTimeShow } from '@/assets/js/base'
  export default {
    name: "information",
    data() {
      return {
        disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) &&
          /ucbrowser/i.test(navigator.userAgent),
        tabItem: ['系统通知', '私信'],
        tabIndex: 0,
        ym: [
          {
            name: '张冬玲',
            position: '国家一级心理咨询师',
            img: require('@/assets/images/teacher1.jpg'),
            msg: '你好, 我想咨询一下心理测试的费用问题',
            time: (new Date().getTime())-60,
          },
          {
            name: '赵金涛',
            position: '心理辅导师',
            img: require('@/assets/images/teacher2.jpg'),
            msg: '请问您的问题得到解决了吗?',
            time: (new Date().getTime())-(60*60*60*20),
          },
          {
            name: '黄坚',
            position: '心理辅导师',
            img: require('@/assets/images/artise_pic2.jpg'),
            msg: '请问您的问题得到解决了吗请问您的问题得到解决了吗请问您的问题得到解决了吗请问您的问题得到解决了吗?',
            time: (new Date().getTime())-(60*60*60*20*30*1000),
          }
        ]
      }
    },
    methods: {
      itemChange(e) {
        this.tabIndex = e;
      },
      time(e) {
        return updateTimeShow(e , false)
      }
    },
    created() {
      let a = new Date('2020-08-03 15:26:30').getTime()
      console.info(updateTimeShow(a , false))
    }
  }
</script>

<style scoped lang="less">
  .information-container{
    .information-head{
      background-color: #f8f8f8;
      padding: 10px 20%;
    }
    .information-body{
      text-align: left;
      .system-info-container{
        .system-info-box{
          padding: 15px 0;
          .system-info-item{
            display: flex;
            padding: 15px;
            margin-bottom: 10px;
            .system-info-head-img{
              >div{
                width: 45px;
                height: 45px;
                overflow: hidden;
                border-radius: 50%;
                >img{
                  display: block;
                  width: 100%;
                }
              }
            }
            .system-info-text{
              margin-left: 10px;
              width: 100%;
              padding-bottom: 15px;
              border-bottom: 1px #e7e7e7 solid;
              .title{
                margin-top: 5px;
                span{
                  display: block;
                  &:nth-child(1) {
                    font-size: 16px;
                    color: black;
                  }
                  &:nth-child(2) {
                    font-size: 13px;
                    color: #767676;
                  }
                }
              }
              .text{
                font-size: 14px;
                letter-spacing: 1px;
                margin-top: 10px;
              }
            }
          }
        }
      }
      .your-info-container{
        .your-info-box{
          .your-info-item{
            padding: 15px;
            border-bottom: 1px #e7e7e7 solid;
            .your-info-base{
              width: 80%;
              .head-img{
                width: 45px;
                height: 45px;
                overflow: hidden;
                border-radius: 50%;
                >img{
                  display: block;
                  width: 100%;
                }
              }
              .text{
                margin-left: 10px;
                height: 45px;
                p{
                  word-break: break-all;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 1;
                  overflow: hidden;
                  &.text-name{
                    font-size: 15px;
                    color: black;
                    span{
                      margin-right: 5px;
                    }
                  }
                  &.text-txt{
                    font-size: 13px;
                    color: #7c7c7c;
                    word-break: break-all;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                  }
                }
              }
            }
            .your-info-time{
              width: 20%;
              font-size: 13px;
              color: #c7c7c7;
              position: relative;
              span{
                display: block;
                position: absolute;
                width: 500%;
                top: -15px;
                right: 0;
                text-align: right;
              }
            }
          }
        }
      }
    }
  }
</style>
