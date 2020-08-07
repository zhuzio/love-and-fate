<template>
  <div>
    <div class="course-container">
      <div class="course-head fb">
        <div class="head-tab">
          <tab
            default-color="#666666"
            active-color="#000000"
            custom-bar-width="60px"
            prevent-default
            @on-before-index-change="switchTabItem"
            v-model="tabIndex">
            <tab-item
              class="vux-center"
              v-for="(item, index) in tabList"
              :selected="tabIndex === index"
              :key="index">{{item.name}}
            </tab-item>
          </tab>
        </div>
        <div class="head-search" @click="courseSelect = true">
          <p>
            <i class="iconfont iconsousuo"></i>课程搜索
          </p>
        </div>
      </div>
      <div class="course-center">
        <div class="course-list">
          <course-item :courseData="courseList[tabIndex]"  @jump="courseListJump"></course-item>
        </div>
      </div>
    </div>
    <div v-transfer-dom>
      <popup
        position="right"
        :hide-on-blur="false"
        v-model="courseSelect">
        <div :style="`width: ${elementWidth }px`" class="select-container" ref="selectContainer">
          <div class="select-center" :style="`height: ${elementHeight - 50}px`">
            <div class="select-list" v-for="(select, index) in selectInfo" :key="index">
              <p class="select-name">{{select.name}}</p>
              <p class="select-item">
                <span
                  v-for="(item, idx) in select.value"
                  :key="idx"
                  :class="{'select-item-on': item.selected}"
                  @click="choseSelect(select, index, item, idx)">{{item.name}}</span>
              </p>
            </div>
            <div class="select-list" v-show="tabIndex == 1">
              <p class="select-name">地区</p>
              <group>
                <x-address
                  @on-hide="courseSelect = true"
                  @on-show="courseSelect = false"
                  title="地区"
                  v-model="addressValue"
                  :list="addressData"
                  @on-shadow-change="onShadowChange"
                  placeholder="请选择地址"
                  :show.sync="showAddress"></x-address>
              </group>
            </div>
            <div class="select-list" v-show="tabIndex == 1">
              <p class="select-name">时间</p>
              <group>
                <calendar
                  @on-hide="courseSelect = true"
                  @on-show="courseSelect = false"
                  @on-change="timeChange"
                  v-model="timeValue"
                  title="时间"
                  placeholder="请选择时间"
                  disable-past></calendar>
              </group>
            </div>
          </div>
          <div class="select-button fb" :style="` padding: 5px ${elementWidth * 0.025}px`" id="selectButton">
            <button @click="resetSelect">重置</button>
            <button @click="confirmSelect">确认</button>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  import courseItem from '@/components/courseItem'
  import {TransferDom, ChinaAddressV4Data} from 'vux'

  export default {
    name: "course",
    components: {
      'course-item': courseItem
    },
    directives: {TransferDom},
    data() {
      return {
        tabIndex: 0,
        tabList: [
          {
            name: '视频学习',
            id: 0
          }, {
            name: '线下课程',
            id: 1
          }, {
            name: '聆听·FM',
            id: 2
          }
        ],
        courseList: [
          [
            {
              img: require('@/assets/images/teacher1.jpg'),
              title: '视频-21天从自卑到自信蜕变计划',
              author: '张现利',
              position: '心理学硕士研究生 精神分析师',
              learnAmount: 10420,
              section: 30,
              price: '100.00',
              type: 0,
              id: 1
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
              id: 2
            }
          ],
          [
            {
              img: require('@/assets/images/teacher2.jpg'),
              title: '线下课程-21天从自卑到自信蜕变计划',
              author: '张现利',
              position: '心理学硕士研究生 精神分析师',
              learnAmount: 10420,
              section: 30,
              price: '100.00',
              type: 1,
              id: 3
            },
            {
              img: require('@/assets/images/teacher1.jpg'),
              title: '线下课程-性学大师李银河:教你破解无性婚姻',
              author: '李银河',
              position: '中国性学研究大师',
              learnAmount: 167,
              section: 10,
              price: '88.90',
              type: 1,
              id: 4
            }
          ],
          [
            {
              img: require('@/assets/images/teacher1.jpg'),
              title: 'FM-21天从自卑到自信蜕变计划',
              author: '张现利',
              position: '心理学硕士研究生 精神分析师',
              learnAmount: 10420,
              section: 30,
              price: '100.00',
              type: 2,
              id: 5
            },
            {
              img: require('@/assets/images/teacher2.jpg'),
              title: 'FM-性学大师李银河:教你破解无性婚姻',
              author: '李银河',
              position: '中国性学研究大师',
              learnAmount: 167,
              section: 10,
              price: '88.90',
              type: 2,
              id: 6
          }
          ],
        ],
        courseSelect: false,
        elementWidth: document.body.clientWidth * 0.75,
        elementHeight: document.body.clientHeight,
        selectInfo: [
          {
            name: '类别',
            id: '0',
            value: [
              {
                name: '亲子教育',
                id: 0,
                selected: false
              },
              {
                name: '家庭关系',
                id: 1,
                selected: false
              },
              {
                name: '婆媳处理',
                id: 2,
                selected: false
              }
            ]
          }
        ],

        beforeEleIndex: -1,
        beforeItemIndex: -1,

        addressValue: [],
        addressData: ChinaAddressV4Data,
        showAddress: false,
        timeValue: ''
      }
    },
    methods: {
      // 课程切换
      switchTabItem(index) {
        this.$vux.loading.show({
          text: 'loading'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.tabIndex = index
        }, 1000)
        // this.tabIndex = index
      },
      // 重置筛选条件
      resetSelect() {
        this.selectInfo.forEach(ele => {
          ele.value.forEach(item => {
            item.selected = false
          })
        })
        this.addressValue = [];
        this.timeValue = '';
      },
      // 确认筛选条件
      confirmSelect() {
        this.courseSelect = false;
        let selectResult = []
        this.selectInfo.forEach((ele, index) => {
          ele.value.forEach((item, idx) => {
            if (item.selected) {
              selectResult.push(
                {'name': ele.name, 'value': item.name}
              )
            }
          })
        })
      },
      // 筛选条件选择
      choseSelect(ele, index, item, idx) {
        ele.value.forEach(item => {
          item.selected = false
        });
        item.selected = !item.selected;
        this.beforeEleIndex = index;
        this.beforeItemIndex = idx;
      },

      onShadowChange(ids, names) {
        // console.log(ids, names)
        // console.log(this.addressValue)
      },
      timeChange(time) {
        // console.log(this.timeValue)
      },
      courseListJump(ele){
        let type = parseInt(this.tabIndex)
        switch (type) {
          case 0:
            this.$router.push(`/courseDetailVideo/${ele.id}`)
            break;
          case 1:
            this.$router.push(`/courseDetailOffline/${ele.id}`)
            break;
          case 2:
            this.$router.push(`/courseDetailAudio/${ele.id}`)
            break;
        }
        // this.$router.push(`/courseDetailVideo/${ele.id}`)
      }
    }
  }
</script>

<style scoped lang="less">
  .course-container {
    .course-head {
      padding: 10px 0 0 0;

      .head-tab {
        width: 72%;
      }

      .head-search {
        padding-right: 20px;

        * {
          vertical-align: middle;
        }

        p {
          color: #41c241;
          font-size: 14px;

          i {
            color: #ff9712;
            margin-right: 6px;
            font-size: 18px;
          }
        }
      }
    }

    .course-center {
      padding: 15px;
      background-color: white;

      .course-list {

      }
    }
  }

  .select-container {
    .select-center {
      padding: 10px;
      overflow: scroll;

      .select-list {
        margin-bottom: 15px;

        .select-name {
          font-weight: bold;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .select-item {
          span {
            display: inline-block;
            padding: 3px 10px;
            border-radius: 20px;
            border: 1px solid #ccc;
            font-size: 12px;
            margin: 0 10px 10px 0;

            &.select-item-on {
              border-color: #1196db;
              color: #1196db;
            }
          }
        }
      }
    }

    .select-button {
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
      padding: 5px 0;
      border-top: 1px solid #c7c7c7;

      button {
        border: 1px solid #c7c7c7;
        border-radius: 20px;
        width: 48%;
        padding: 10px 0;
        font-size: 12px;
      }
    }
  }
</style>
<style lang="less">
  .head-tab{
    .vux-tab .vux-tab-item {
      background: none !important;
    }

    .vux-tab-bar-inner {
      position: relative;
      border-radius: 10px;
      background: none !important;
      overflow: hidden;
    }

    .vux-tab-bar-inner:before {
      position: absolute !important;
      content: '';
      display: block;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background-color: #0fa3fd;
    }

    .vux-tab-bar-inner:after {
      position: absolute !important;
      content: '';
      display: block;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background-color: #0ee3c7;
    }
  }

</style>
