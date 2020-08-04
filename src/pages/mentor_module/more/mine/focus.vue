<template>
  <div>
    <x-header>我的关注</x-header>
    <div>
      <mine-head-tab :tab="tabData" @on-change="tabClick"></mine-head-tab>
      <div v-show="tabIdx === 0" class="focus-box">
        <p class="total">共 {{myFocus.length}} 位</p>
        <div class="focus-item-box">
          <div class="focus-item fb" v-for="(mf, index) of myFocus" :key="index">
            <div class="f-u-info flex" @click="foc(mf, index)">
              <div class="f-u-img fm">
                <img :src="mf.img" :alt="mf.name">
              </div>
              <div class="f-u-name">
                <p class="name">{{mf.name}}</p>
                <p class="position">{{mf.position}}</p>
              </div>
            </div>
            <div class="f-u-btn">
              <button>私信</button>
            </div>
          </div>
        </div>
      </div>
      <div v-show="tabIdx === 1" class="focus-box">
        <p class="total">共 {{focusMy.length}} 位</p>
        <div class="focus-item-box">
          <div class="focus-item fb" v-for="(fm, index) of focusMy" :key="index">
            <div class="f-u-info flex" @click="foc(fm, index)">
              <div class="f-u-img fm">
                <img :src="fm.img" :alt="fm.name">
              </div>
              <div class="f-u-name">
                <p class="name">{{fm.name}}</p>
                <p class="position">{{fm.position}}</p>
              </div>
            </div>
            <div class="f-u-btn">
              <button>私信</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <actionsheet v-model="focusPop" :menus="focusOperation" @on-click-menu="operationClick" show-cancel></actionsheet>
  </div>
</template>

<script>
  import mineHeadTab from '@/components/mineHeadTab'
  export default {
    name: "focus",
    components: {
      'mine-head-tab': mineHeadTab
    },
    data() {
      return{
        tabData: ['我的关注', '关注我的'],
        tabIdx: 0,
        focusPop: false,
        focusOperation: ['查看详情', '取消关注'],
        myFocus: [
          {
            id: 0,
            name: '胡秀琴',
            img: require('@/assets/images/comment_img.jpg'),
            position: '清华大学心理学博士,国家一级心理专家'
          },
          {
            id: 1,
            name: '张阳聪',
            img: require('@/assets/images/mentor1.jpg'),
            position: '中国知名三级心理学专家'
          }
        ],
        focusMy: [
          {
            id: 0,
            name: '张彩霞',
            img: require('@/assets/images/mentor2.jpg'),
            position: '听说吧心理咨询中心主任, 心理咨询师'
          },
          {
            id: 1,
            name: '胡光照',
            img: require('@/assets/images/teacher2.jpg'),
            position: '广州市人民第一医院心理科室主任'
          },
          {
            id: 1,
            name: '曾选武',
            img: require('@/assets/images/teacher1.jpg'),
            position: '国际EUS人格与心理分析师'
          }
        ],
        opObj: {}
      }
    },
    methods:{
      tabClick(e) {
        this.tabIdx = e
      },
      foc(ele, idx) {
        this.opObj = ele;
        this.focusPop = true
      },
      operationClick(e) {
        console.info(e)
      }
    }
  }
</script>

<style scoped lang="less">
  .focus-box{
    color: black;
    text-align: left;
    .total{
      padding: 10px 15px;
      background-color: #f7f7f7;
      font-size: 14px;
    }
    .focus-item-box{
      .focus-item{
        padding: 15px;
        border-bottom: 1px solid #efefef;
        .f-u-info{
          .f-u-img{
            width: 45px;
            height: 45px;
            border-radius: 50%;
            overflow: hidden;
            img{
              display: block;
              width: 100%;
              height: auto;
            }
          }
          .f-u-name{
            margin-left: 8px;
            .name{
              font-size: 14px;
              margin-bottom: 5px;
            }
            .position{
              font-size: 12px;
              color: #a7a7a7;
              word-break: break-all;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
            }
          }
        }
        .f-u-btn{
          button{
            border-radius: 15px;
            padding: 3px 15px;
            border: 1px solid #5b9fff;
            color: #8045d4;
            font-size: 13px;
          }
        }
      }
    }
  }
</style>
