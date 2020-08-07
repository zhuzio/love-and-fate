<template>
    <div>
      <x-header>导师详情</x-header>
      <div class="mentor-detail-container">
        <div class="mentor-head">
          <div class="head-img">
            <img src="@//assets/images/mentor_detail.jpg" alt="">
          </div>
          <div class="mentor-base-info">
            <p class="info-name-degree">
              <span class="name">赵立新</span>
              <span class="degree">心理学硕士</span>
            </p>
            <div class="work-experience flex">
              <p><span>8年</span>从业经验</p>
              <p><span>3256人</span>咨询</p>
            </div>
            <div class="good-at fa">
              <p class="major"><span>情绪管理</span><span>婴幼教育</span><span>职场发展</span></p>
              <p class="detail"><i class="iconfont iconicon-angle-double-bottom"></i>详细资料</p>
              <p class="fans-visitors">
                <span class="fans">粉丝 512</span>|<span class="visitors">访客 512054</span>
              </p>
            </div>
          </div>
        </div>
        <div class="mentor-others">
          <div class="mentor-others-list">
            <h2>咨询服务</h2>
            <div class="consult-service">
              <div class="cs-center fa">
                <div v-for="(si, index) in service" :key="index" :class="'cs-list' + index" class="cs-list">
                  <div class="cs-icon fm">
                    <img :src="si.icon" :alt="si.name">
                  </div>
                  <p class="cs-name"><input type="radio" name="type" :id="'radio'+si.id"><label :for="'radio'+si.id">{{si.name}}</label></p>
                  <p class="cs-charge"><span>¥</span>{{si.charge}}</p>
                </div>
              </div>
              <div class="cs-chose-container">
                <div class="fb chose-list" @click="timePicker">
                  <p >预约时长</p>
                  <!--@click="popChoseDate = true"-->
                  <p class="chose-value chose-time" >
                    <span>{{showSelectDate}}</span><i class="iconfont iconyou"></i>
                  </p>
                </div>
                <div class="fb chose-list">
                  <p>咨询时长</p>
                  <p class="chose-value chose-hour">
                    <span
                      v-for="(ch, index) in choseHour"
                      :class="{'chose-hour-on': choseHourIdx === index}"
                      @click="choseHours(ch, index)">{{ch}}分钟</span>
                  </p>
                </div>
                <div class="fb chose-list">
                  <p>咨询次数</p>
                  <div class="chose-value chose-count">
                    <p>
                      <i class="iconfont iconjianshao" @click="countNumber(0)"></i>
                      <input type="number" disabled v-model="choseCount">
                      <i class="iconfont iconzengjia" @click="countNumber(1)"></i>
                    </p>
                  </div>
                </div>
                <div class="fb chose-list">
                  <p>合&nbsp;计</p>
                  <p class="chose-value chose-charge middle">¥ <span>{{choseCharge}}</span></p>
                </div>
                <div class="chose-leave-message">
                  <textarea placeholder="请输入您要咨询的内容（仅咨询师可见）"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="mentor-others-list">
            <h2>评价</h2>
            <div class="evaluation-container">
              <scroller lock-y :scrollbar-x=false>
                <ul :style="`width:${evaluationList.length * (elementWidth + 20)}px`">
                <li class="bs" v-for="(el, index) in evaluationList" :key="index" :style="`width: ${elementWidth}px;`">
                  <div class="e-user fb">
                    <div class="info flex">
                      <div class="head-img-box"><img :src="el.headImg" :alt="el.name"></div>
                      <span>{{el.name}}</span>
                    </div>
                    <!--<p class="praise"><i class="iconfont"></i><span>{{el.praise}}</span></p>-->
                  </div>
                  <p class="e-text">{{el.evaluation}}</p>
                </li>
              </ul>
              </scroller>
            </div>
          </div>
          <div class="mentor-others-list">
            <h2>动态</h2>
            <div class="dynamic-container">
              <div class="dynamic-list">
                <div class="dynamic-head fb">
                  <p class="head-title">
                    <img src="@/assets/images/icon/answer.png" alt=""><span>Ta回答了这个问题</span></p>
                  <p class="head-time"><span>2019-10-10</span></p>
                </div>
                <h3>20岁的弟弟好像得了抑郁症，该怎么让他去看心理医生？</h3>
                <p class="dynamic-answer">你好,如果你希望弟弟接受专业治疗或者咨询,建
                  议你直接带弟弟去当地医院临床心理科就诊,根据
                  医生的诊断和治疗方案,一方面专业评估弟弟的情....</p>
                <div class="dynamic-praise flex">
                  <p class="use"><img src="@//assets/images/icon/praise.png" alt=""><span>18人写得有用</span></p>
                  <p class="consult"><img src="@//assets/images/icon/comments.png" alt=""><span>3人评论</span></p>
                </div>
              </div>
              <div class="dynamic-list">
                <div class="dynamic-head fb">
                  <p class="head-title">
                    <img src="@/assets/images/icon/answer.png" alt=""><span>Ta回答了这个问题</span></p>
                  <p class="head-time"><span>2019-10-10</span></p>
                </div>
                <h3>12岁女生,一两年前,失眠</h3>
                <p class="dynamic-answer">你好,同学,基于你的描述,建议你让家长带你去
                  当地医院的临床心理科或者精神科就诊,医生会根
                  据你的情况进行诊断,可能包含药物治疗和心理咨
                  咨询师专栏</p>
                <div class="dynamic-praise flex">
                  <p class="use"><img src="@//assets/images/icon/praise.png" alt=""><span>18人写得有用</span></p>
                  <p class="consult"><img src="@//assets/images/icon/comments.png" alt=""><span>3人评论</span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="mentor-others-list" style="padding: 0">
            <h2 style="padding: 20px 15px;">咨询师专栏</h2>
            <div class="artist-container">
              <div class="artist-list" v-for="(al, index) in artistList" :key="index">
                <div class="artist-img">
                  <img :style="`width: ${(elementWidth / 0.68) * 0.22}px`" :src="al.img" :alt="al.title">
                </div>
                <div class="artist-info fc">
                  <p class="artist-title">{{al.title}} {{(elementWidth / 0.68)}}</p>
                  <div class="artist-read-praise flex">
                    <p><span>{{al.read}}</span>次阅读</p>
                    <p><span>{{al.praise}}</span>个赞</p>
                  </div>
                  <div class="artist-author flex">
                    <p class="author">作者: <span>{{al.author}}</span></p>
                    <p class="belong"><span v-for="bl in al.belong">#{{bl}}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mentor-detail-bottom fb">
          <div class="to-top mentor-icon"  @click="backtop">
            <p><i class="iconfont icondingbu"></i></p>
            <p>顶部</p>
          </div>
          <div class="like mentor-icon">
            <p><i class="iconfont iconxihuan"></i></p>
            <p>喜欢</p>
          </div>
          <div class="contact mentor-button"><button>联系顾问</button></div>
          <div class="consult mentor-button"><button>预约咨询</button></div>
        </div>
      </div>
      <div v-transfer-dom>
        <popup v-model="popChoseDate" position="bottom">
          <group>
          </group>
          <div style="padding: 15px;">
            <x-button @click.native="popChoseDate = false" plain type="primary"> Close Me </x-button>
          </div>
        </popup>
      </div>
    </div>
</template>

<script>
  import {TransferDom} from 'vux'
    export default {
      name: "mentorInfo",
      directives: { TransferDom },
      data() {
        return {
          service: [
            {
              icon: require('@/assets/images/icon/onlineConsult.png'),
              name: '在线咨询',
              charge: '300元 / 小时',
              id: 0
            },
            {
              icon: require('@/assets/images/icon/mike.png'),
              name: '语音咨询',
              charge: '500 / 小时',
              id: 1
            },
            {
              icon: require('@/assets/images/icon/faceToFace.png'),
              name: '面对面咨询',
              charge: '900 / 小时',
              id: 2
            }
          ],
          evaluationList: [
            {
              headImg:require('@/assets/images/mentor1.jpg'),
              name: '阿梁',
              praise: 33,
              evaluation: '会有很多收获，很有启发。有一种被理解的感觉，被读懂的感觉，也是被不断赋能，增加信心',
              id: 0
            },
            {
              headImg:require('@/assets/images/mentor2.jpg'),
              name: '阿娇',
              praise: 45,
              evaluation: '讲的特别好，我真的是非常的喜欢，对我的帮助很大，非常感谢老师的细心讲解，给我的生活带来很大的帮助！',
              id: 1
            },
            {
              headImg:require('@/assets/images/mentor1.jpg'),
              name: '霏霏',
              praise: 3,
              evaluation: '就这？我的钱啊........能不能讲清楚一点？',
              id: 2
            },
            {
              headImg:require('@/assets/images/mentor2.jpg'),
              name: '大斌',
              praise: 300,
              evaluation: '我的天哪，简直棒极了',
              id: 3
            }
          ],
          artistList: [
            {
              img: require('@/assets/images/artise_pic1.jpg'),
              title: '人类身体情绪的地图',
              read: 1120,
              praise: 200,
              author: '赵立新',
              belong: ['情绪管理']
            },
            {
              img: require('@/assets/images/artise_pic2.jpg'),
              title: '虚拟爱之疗法',
              read: 330,
              praise: 82,
              author: '赵立新',
              belong: ['婚恋情感']
            },
            {
              img: require('@/assets/images/artise_pic3.jpg'),
              title: '回来吧,幸福的内在小孩',
              read: 289,
              praise: 53,
              author: '赵立新',
              belong: ['心灵感悟']
            },
          ],
          elementWidth: document.body.clientWidth * 0.68,
          choseHour: [30, 60],
          choseHourIdx: -1,
          choseCount: 1,
          choseCharge: '100.00',
          selectDate: '',
          showSelectDate: '选择时间段',
          popChoseDate: false,
          choseDateList: [
            {

            }
          ]
        }
      },
      mounted() {
        window.addEventListener("scroll",this.showbtn,true);
      },
      methods: {
        // 选择咨询时长
        choseHours(ele, idx) {
          this.choseHourIdx = idx
        },
        // 咨询次数
        countNumber(e) {
          switch (parseInt(e)) {
            case 0:
              if (this.choseCount === 1) {
                this.choseCount = 1
              } else {
                this.choseCount -= 1;
              }
              break;
            case 1:
              this.choseCount += 1;
              break;
            default:
              return false;
          }
        },
        // 选择预约时间段
        onChange (val) {
          console.log('on change', val)
        },
        /**
         * 回到顶部功能实现过程：
         * 1. 获取页面当前距离顶部的滚动距离（虽然IE不常用了，但还是需要考虑一下兼容性的）
         * 2. 计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
         * 3. 用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
         * 4. 最后记得在移动到顶部时，清除定时器
         */
        backtop(){
          var timer = setInterval(function(){
            let osTop = document.documentElement.scrollTop || document.body.scrollTop;
            let ispeed = Math.floor(-osTop / 5);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
            if(osTop === 0){
              clearInterval(timer);
            }
          },30)
        },
        timePicker() {
          this.$router.push('/timeSet')
        }
      },
      created() {
      }
    }
</script>

<style scoped lang="less">
  .mentor-detail-container{
    .mentor-head{
      position: relative;
      .head-img{
        img{
          display: block;
          width: 100%;
          height: auto;
        }
      }
      .mentor-base-info{
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        padding: 10px;
        color: white;
        .info-name-degree{
          text-align: left;
          .name{
            font-size: 18px;
            margin-right: 20px;
            font-weight: bold;
          }
        }
        .work-experience{
          margin: 10px 0;
          p{
            margin-right: 20px;
            span{
              font-size: 14px;
            }
          }
        }
        .good-at{
          .major{
            width: 45%;
            text-align: left;
            span{
              display: inline-block;
              background-color: #cbcbcb;
              margin:0 10px 10px 0;
              padding: 0 3px;
              border-radius: 2px;
              font-size: 10px;
            }
          }
          .detail{
            width: 17%;
            *{
              vertical-align: middle;
            }
            i{
              transform: rotate(180deg);
            }
          }
          .fans-visitors{
            width: 38%;
            color: black;
            span{
              margin: 0 10px;
              color: white;
              font-size: 10px;
            }
          }
        }
      }
    }
    .mentor-others{
      .mentor-others-list{
        padding: 0 15px;
        h2{
          font-size: 20px;
          font-weight: bold;
          color: black;
          text-align: left;
          padding: 20px 0;
        }
        .consult-service{
          box-shadow: 1px 3px 5px 3px rgba(204, 204, 204, 0.22);
          border-radius: 10px;
          overflow: hidden;
          .cs-center{
            padding: 20px 0;
            text-align: center;
            .cs-list{
              position: relative;
              .cs-icon{
                img{
                  display: block;
                  width: 30px;
                }
              }
              .cs-name{
                margin: 10px 0 8px;
              }
              .cs-charge{
                font-size: 12px;
                span{
                  font-size: 16px;
                  color: #6a6a6a;
                  padding-right: 4px;
                }
              }
            }
            .cs-list1::before{
              content: '';
              display: block;
              width: 1px;
              height: 80%;
              background-color: #f5f5f5;
              left: -20%;
              top: 10%;
              position: absolute;
            }
            .cs-list1::after{
              content: '';
              display: block;
              width: 1px;
              height: 80%;
              background-color: #ececec;
              right: -20%;
              top: 10%;
              position: absolute;
            }
          }
          .cs-chose-container{
            border-top: 2px solid #dfdfdf;
            border-bottom: 2px solid #dfdfdf;
            text-align: left;
            padding: 0 15px;
            .chose-list{
              border-bottom: 1px solid #dfdfdf;
              padding: 10px 0;
              font-size: 13px;
              font-weight: bold;
              position: relative;
              p{
                &.chose-value{
                  font-weight: normal;
                  *{
                    vertical-align: middle;
                  }
                }
                &.chose-time{
                  color: #fbbe7c;
                }
                &.chose-hour{
                  span{
                    font-size: 11px;
                    display: inline-block;
                    padding: 2px 5px;
                    border: 1px solid #e1e1e1;
                    margin-left: 15px;
                    color: #8d8d8d;
                    box-sizing: border-box;
                    &.chose-hour-on{
                      border-color: #3ed574;
                      color: #3ed574;
                    }
                  }
                }
                &.chose-charge{
                  color: #fbbe7c;
                  font-size: 14px;

                  span{
                    font-size: 18px;
                  }
                }
              }
              .chose-count{
                *{
                  vertical-align: middle;
                }
                .iconfont{
                  font-size: 20px;
                }
                input{
                  width: 20px;
                  height: 20px;
                  border: none;
                  text-align: center;
                  font-size: 20px;
                  margin: 0 15px;
                }
              }
            }
            .chose-leave-message{
              padding: 15px 0;
              textarea{
                display: block;
                width: 100%;
                border: none;
                min-height: 150px;
                font-size: 14px;
              }
            }
          }
        }
        .evaluation-container{
          overflow: scroll;
          ul{
            display:-webkit-box;
            display:box;
            padding: 10px;
            li{
              border-radius: 10px;
              padding: 20px 15px;
              margin-right: 20px;
              .e-user{
                margin-bottom: 10px;
                .info{
                  .head-img-box{
                    margin-right: 10px;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                  }
                  span{
                    color: #c6c9d3;
                    font-size: 14px;
                  }
                }
              }
              .e-text{
                font-size: 14px;
                text-align: left;
              }
            }
          }
        }
        .dynamic-container{
          padding: 0 0 15px 0;
          .dynamic-list{
            box-shadow: 1px 3px 5px 5px rgba(204, 204, 204, 0.2);
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 10px;
            .dynamic-head{
              .head-title{
                img{
                  display: inline-block;
                  width: 20px;
                }
                span{
                  margin-left: 5px;
                  color: #8d8d8d;
                  font-size: 12px;
                }
              }
              .head-time{
                color: #c3c4ce;
                font-size: 11px;
              }
            }
            h3{
              font-size: 14px;
              font-weight: bold;
              color: black;
              text-align: left;
              margin: 15px 0;
            }
            .dynamic-answer{
              text-align: left;
              color: #768193;
              font-size: 13px;
              letter-spacing: 1px;
            }
            .dynamic-praise{
              margin-top: 15px;
              p{
                *{
                  vertical-align: middle;
                }
                img{
                  display: inline-block;
                  margin-right: 5px;
                }
                span{
                  font-size: 11px;
                  color: #666666;
                }
              }
              .use{
                img{
                  height: 20px;
                }
              }
              .consult{
                margin-left: 32px;
                img{
                  width: 15px;
                }
              }
            }
          }
        }
        .artist-container{
          padding: 0 15px;
          border-top: 1px solid #f3f3f3;
          .artist-list{
            border-bottom: 1px solid #f3f3f3;
            padding: 12px 0;
            display:-webkit-box;
            display:box;
            text-align: left;
            .artist-img{
              img{
                display: block;
              }
            }
            .artist-info{
              margin-left: 15px;
              .artist-title{
                color: #3d3d3d;
                font-size: 16px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              }
              .artist-read-praise{
                color: #666666;
                font-size: 12px;
                p{
                  margin-right: 40px;
                }
              }
              .artist-author{
                .author{
                  margin-right: 15px;
                  font-size: 13px;
                  color: #666;
                }
                .belong{
                  span{
                    font-size: 10px;
                    display: inline-block;
                    background-color: #ededed;
                    padding: 1px 3px;
                    border-radius: 3px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .mentor-detail-bottom{
      width: 100%;
      background-color: white;
      padding: 6px 15px;
      .mentor-icon{
        width: 15%;
        p{
          font-size: 11px;
          i{
            font-size: 22px;
            margin-bottom: 3px;
          }
        }
      }
      .mentor-button{
        height: 50px;
        button{
          height: 100%;
          border: none;
          color: white;
          width: 100%;
          border-radius: 100px;
        }
        &.contact{
          width: 30%;
          margin: 0 1% 0 4%;
          button{
            background-color: #718aff;
          }
        }
        &.consult{
          width: 35%;
          button{
            background-color: #ffa203;
          }
        }
      }
    }
  }
</style>
