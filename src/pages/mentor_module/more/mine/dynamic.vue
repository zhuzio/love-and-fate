<template>
  <div >
    <x-header>我的动态</x-header>
    <div class="dynamic-container" @touchstart="touchIt">
      <mine-head-tab :tab="tabData" @on-change="tabClick"></mine-head-tab>
      <div class="dynamic-item-box">
        <div class="dynamic-item" v-for="(dd, index) of dynamicData[tabIdx]" :key="index">
          <div class="dynamic-user-img">
           <div class="fm">
             <img v-if="dd.img" :src="dd.img" :alt="dd.nickname">
             <img v-else src="@/assets/images/default_head_img.png" alt="">
           </div>
          </div>
          <div class="dynamic-info">
            <p class="dynamic-user-name">{{dd.nickname}}</p>
            <p class="dynamic-text">{{dd.text}}</p>
            <div class="dynamic-pic" v-show="dd.dynamicType === 0">
              <ul>
                <li class="fm" v-for="(p,idx) in dd.picture" :key="idx" :class="`pic-list` + (dd.picture.length > 3 ? 3 : dd.picture.length) ">
                  <img :src="p" alt="">
                </li>
              </ul>
            </div>
            <div class="dynamic-link" v-show="dd.dynamicType === 1">
              <div class="link-box flex">
                <div class="fm"> <img :src="dd.linkInfo.pic" alt=""></div>
                <p>{{dd.linkInfo.desc}}</p>
              </div>
            </div>
            <div class="dynamic-operation fb">
              <p class="dynamic-time">{{getDateDiff(new Date(dd.time).getTime())}}
                <span @click="deleteDynamic(index)"  v-show="tabIdx !== 0">删除</span></p>
              <p class="dynamic-op" v-show="tabIdx===0">
                <span><i class="iconfont iconxihuan" :class="{'like': dd.isPraise}"></i></span>
                <span class="msg" @click="addComment(dd, index)"><i class="iconfont iconxinxi"></i><u v-show="dd.comments.length !== 0">{{dd.comments.length}}</u></span>
              </p>
            </div>
            <div class="dynamic-comment" v-show="dd.comments.length !== 0">
              <div class="comment-box">
                <replay-item
                  :data-index="index"
                  :replayData="dd.comments"
                  :types="true"
                  @toDetail="toDe(dd)"
                  @replayIt="userReplay"></replay-item>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="qa-more" @click="addMoreDynamic">
        <i class="iconfont iconicon-angle-double-bottom"></i><span>点击查看更多动态</span>
      </p>
    </div>
    <replay-input
      :replayModule="replayFocus"
      :placeholder="replayPlaceholder"
      @replay="replayConfirm">
    </replay-input>
  </div>
</template>

<script>
  import replayItem from '@/components/replayItem'
  import replayInput from '@/components/replayInput'
  import mineHeadTab from '@/components/mineHeadTab'
  export default {
    name: "dynamic",
    components: {
      'replay-item': replayItem,
      'replay-input': replayInput,
      'mine-head-tab': mineHeadTab
    },
    data() {
      return {
        tabData: ['关注的人', '我的动态'],
        dynamicData: [
          [
            {
              nickname: '刘家栋',
              img: require('@/assets/images/teacher1.jpg'),
              dynamicType: 0, // 0图片 1链接
              text: '我自横刀向天笑,去留肝胆两昆仑!',
              time: '2020-08-01 15:30',
              isPraise: false,
              linkInfo: {
                pic: '',
                desc: ''
              },
              picture: [],
              comments: [
                {
                  type: 0,
                  replayContain: '好湿好诗啊! 我为刘雄举杯！！！！',
                  replayUser: '凉城',
                  to:'',
                  id: 0
                },
                {
                  type: 0,
                  replayContain: '好好啊, 这句话讲的真好',
                  replayUser: '青草淡菊',
                  to:'',
                  id: 0
                },
                {
                  type: 1,
                  replayContain: '注意言辞兄弟！！！',
                  replayUser: '青草淡菊',
                  to:'凉城',
                  id: 0
                },
                {
                  type: 1,
                  replayContain: '关你屁事！！！',
                  replayUser: '凉城',
                  to:'青草淡菊',
                  id: 0
                },
                {
                  type: 1,
                  replayContain: '咋这？不服管教？打一架来哦啊！！！',
                  replayUser: '青草淡菊',
                  to:'凉城',
                  id: 0
                },
              ]
            },
            {
              nickname: '风中花蕊',
              img: require('@/assets/images/teacher2.jpg'),
              dynamicType: 1, // 0图片 1链接
              text: '最近总是失眠',
              time: '2020-07-21 18:34',
              isPraise: false,
              linkInfo: {
                pic: require('@/assets/images/artise_pic2.jpg'),
                desc: '失眠有多可怕,只有经历过的人才知道。'
              },
              picture: '',
              comments: [
                {
                  type: 0,
                  replayContain: '我太难了啊....',
                  replayUser: '风中花蕊',
                  to:'',
                  id: 0
                },
                {
                  type: 1,
                  replayContain: '没事, 我陪着你',
                  replayUser: '青草淡菊',
                  to:'风中花蕊',
                  id: 1
                }
              ]
            },
            {
              nickname: '好人一生平安',
              img: '',
              dynamicType: 0, // 0图片 1链接
              text: '八月，愿所有美好如期而至......',
              time: '2020-03-21 18:34',
              isPraise: true,
              linkInfo: {
                pic: '',
                desc: ''
              },
              picture: [
                require('@/assets/images/teacher2.jpg'),
                require('@/assets/images/we.jpg'),
                // require('@/assets/images/artise_detail.jpg'),
                // require('@/assets/images/mentor_detail.jpg'),
                // require('@/assets/images/teacher1.jpg'),
              ],
              comments: [
                {
                  type: 0,
                  replayContain: '加油！！！！！',
                  replayUser: '风中花蕊',
                  to:'',
                  id: 0
                },
              ]
            }
          ],
          [
            {
              nickname: '蓝鲸鱼',
              img: require('@/assets/images/comment_img.jpg'),
              dynamicType: 0, // 0图片 1链接
              text: '七月再见，八月你好~~~~~',
              time: '2020-07-31 23:59',
              isPraise: false,
              linkInfo: {
                pic: '',
                desc: ''
              },
              picture: [],
              comments: [
                {
                  type: 0,
                  replayContain: '加油！！！！',
                  replayUser: '路人甲',
                  to:'',
                  id: 0
                },
                {
                  type: 0,
                  replayContain: '加油！！！！',
                  replayUser: '路人乙',
                  to:'',
                  id: 0
                },
                {
                  type: 0,
                  replayContain: '加油！！！！',
                  replayUser: '路人丙',
                  to:'',
                  id: 0
                },
              ]
            },
            {
              nickname: '蓝鲸鱼',
              img: require('@/assets/images/comment_img.jpg'),
              dynamicType: 0, // 0图片 1链接
              text: '牛批牛批，惹不起我得躲得起！！！卧艹！！！！',
              time: '2020-03-21 18:34',
              isPraise: true,
              linkInfo: {
                pic: '',
                desc: ''
              },
              picture: [
                require('@/assets/images/s1.jpg'),
                require('@/assets/images/s2.jpg'),
              ],
              comments: [
                {
                  type: 0,
                  replayContain: '加油！！！！！',
                  replayUser: '风中花蕊',
                  to:'',
                  id: 0
                },
              ]
            },
            {
              nickname: '蓝鲸鱼',
              img: require('@/assets/images/comment_img.jpg'),
              dynamicType: 0, // 0图片 1链接
              text: '',
              time: '2019-12-21 10:34',
              isPraise: true,
              linkInfo: {
                pic: '',
                desc: ''
              },
              picture: [
                require('@/assets/images/s3.jpg'),
                require('@/assets/images/s4.jpg'),
                require('@/assets/images/s5.jpg'),
              ],
              comments: []
            }
          ]
        ],
        replayFocus: false,
        replayPlaceholder: '',
        replayIndex: -1,
        replayObject: {},
        replayType: -1,
        tabIdx: 0
      }
    },
    methods: {
      // 获得更多问答
      addMoreDynamic() {
        this.$vux.toast.text('正在加载更多动态, 请稍等..........')
      },
      tabClick(e) {
        this.tabIdx = e
      },
      deleteDynamic(idx) {
        const _this = this
        this.$vux.confirm.show({
          title: '确定删除该条动态？',
          onCancel () {
            _this.$vux.toast.text('取消删除', 'middle')
          },
          onConfirm () {
            _this.dynamicData[1].splice(0, idx);
            _this.$vux.toast.text('删除成功', 'middle')
          }
        })
      },
      getDateDiff (dateTimeStamp) {
        var result = ''
        var minute = 1000 * 60
        var hour = minute * 60
        var day = hour * 24
        var month = day * 30
        var now = new Date().getTime()
        var diffValue = now - dateTimeStamp
        if (diffValue < 0) return
        var monthC = diffValue / month
        var weekC = diffValue / (7 * day)
        var dayC = diffValue / day
        var hourC = diffValue / hour
        var minC = diffValue / minute
        if (monthC >= 1) {
          result = "" + parseInt(monthC) + "个月前"
        }
        else if (weekC>=1) {
          result = "" + parseInt(weekC) + "周前"
        }
        else if (dayC >= 1) {
          result = ""+ parseInt(dayC) + "天前"
        }
        else if (hourC >= 1){
          result = "" + parseInt(hourC) + "小时前"
        }
        else if (minC >= 1) {
          result = ""+ parseInt(minC) + "分钟前"
        } else {
          result = "刚刚"
        }
        return result
      },
      addComment(ele, idx) {
        this.replayIndex = idx;
        this.replayType = 0;
        this.replayFocus = true;
        this.replayPlaceholder = '评论 ' + ele.nickname;
      },
      replayConfirm(e) {
        switch (parseInt(this.replayType)) {
          case 0:
            let reps = {
              replayContain:e,
              replayUser: "Admin",
              to: '',
              type: 0,
            }
            this.dynamicData[this.tabIdx][this.replayIndex].comments.push(reps)
            break;
          case 1:
            let rep = {
              replayContain:e,
              replayUser: "Admin",
              to: this.replayObject.replayUser,
              type: 1,
            }
            this.dynamicData[this.tabIdx][this.replayIndex].comments.push(rep)
            break;
        }
        this.replayFocus = false
      },
      userReplay(e) {
        this.replayObject = e;
        this.replayType = 1;
        this.replayIndex = event.path[4].dataset.index;
        this.replayFocus = true;
        this.replayPlaceholder = '回复 ' + e.replayUser;
      },
      toDe(e) {
        console.info(e)
      },
      // 隐藏评论
      touchIt() {
        if (this.replayFocus) this.replayFocus = false;
      },
    },
    created() {
    }
  }
</script>

<style scoped lang="less">
  .dynamic-container{
    text-align: left;
    .dynamic-item-box{
      .dynamic-item{
        display: flex;
        padding: 10px 20px 10px 15px;
        margin-bottom: 10px;
        border-bottom: 1px solid #eeeeee;
        .dynamic-user-img{
          >div{
            width: 40px;
            height: 40px;
            overflow: hidden;
            border-radius: 50%;
            img{
              display: block;
              width: 100%;
              height: auto;
            }
          }
        }
        .dynamic-info{
          margin-left: 10px;
          width: 100%;
          .dynamic-user-name{
            margin: 10px 0 10px;
            font-size: 13px;
            color: #464f5d;
          }
          .dynamic-text{
            font-size: 14px;
          }
          .dynamic-pic{
            margin-top: 15px;
            ul{
              display: flex;
              justify-content: flex-start;
              flex-wrap: wrap;
              li{
                background-color: #b6b6b6;
                overflow: hidden;
                margin-bottom: 8px;
                &.pic-list1{
                  width: 60%;
                }
                &.pic-list2{
                  width: 47%;
                  height: 200px;
                  margin-right: 3%;
                }
                &.pic-list3{
                  width: 31%;
                  height: 150px;
                  margin-right: 2%;
                }
                img{
                  display: block;
                  width: 150%;
                  height: auto;
                }
              }
            }
          }
          .dynamic-link{
            margin-top: 15px;
            .link-box{
              padding: 10px;
              background-color: #f1f4f9;
              border-radius: 10px;
              >div{
                width: 100px;
                max-height: 80px;
                overflow: hidden;
                img{
                  display: block;
                  width: 120%;
                  height: auto;
                }
              }
              p{
                font-size: 14px;
                margin-left: 10px;
              }
            }
          }
          .dynamic-operation{
            margin: 10px 0;
            .dynamic-time{
              font-size: 13px;
              color: #bfc4d1;
              letter-spacing: 2px;
              span{
                letter-spacing: 0;
                margin-left: 20px;
                color: black;
              }
            }
            .dynamic-op{
              padding-right: 10px;
              span{
                margin-left: 25px;
                i{
                  font-size: 22px;
                  &.like{
                    color: red;
                  }
                  &.iconxinxi{
                    font-size: 25px;
                  }
                }
                &.msg{
                  display: inline-block;
                  position: relative;
                  u{
                    display: inline-block;
                    position: absolute;
                    right: -25%;
                    top: -10%;
                    background-color: #fb4d6c;
                    color: white;
                    font-size: 11px;
                    padding: 1px 8px;
                    text-decoration: none;
                    border-radius: 15px;
                  }
                }
              }
            }
          }
          .dynamic-comment{

          }
        }
      }

    }
    .qa-more{
      text-align: center;
      background-color: #f4f4f4;
      font-size: 14px;
      padding: 5px 0;
      color: #ababab;
      margin: 25px auto;
      width: 95%;
      *{
        vertical-align: middle;
      }
      i{
        font-size: 22px;
      }
    }
  }
</style>
