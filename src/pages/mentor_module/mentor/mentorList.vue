<template>
  <div>
    <div class="consult-container">
      <div class="consult-head fb" ref="selectButton">
        <div class="head-title fb">
          <img src="@/assets/images/icon/message.png" alt="">
          <p>资讯 · 倾诉</p>
        </div>
        <div class="head-search" @click="mentorSelect = true">
          <span>搜索</span>
          <i class="iconfont iconsousuo"></i>
        </div>
      </div>
      <div
        class="consult-list"
        v-for="(list, index) in mentorList"
        @click="toMentorDetail(list)"
        :key="index">
        <div class="mentor-list-item flex">
          <div class="mentor-head-img fm">
            <img :src="list.headImg" :alt="list.name">
          </div>
          <div class="mentor-info fc">
            <div class="mentor-name-amount flex">
              <p class="name">{{list.name}} <i class="iconfont iconrenzhengguanli"></i></p>
              <p class="amount">{{list.amount}} <span>人</span></p>
              <img src="@/assets/images/icon/specialMentor.png" alt="">
            </div>
            <div class="mentor-major fm">
              <p><span v-for="m in list.major">{{m}}</span></p>
            </div>
            <div class="mentor-charge fb">
              <p class="charge"><span>¥</span>{{list.charge}}</p>
              <button>预定</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-transfer-dom>
      <popup
        position="right"
        :hide-on-blur="false"
        v-model="mentorSelect">
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
  import {TransferDom} from 'vux'
  export default {
    name: "consult-list",
    directives: { TransferDom },
    data() {
      return {
        mentorList: [
          {
            headImg: require('../../../assets/images/mentor1.jpg'),
            name: '王俊涛',
            amount: 7726,
            major: ['情绪管理', '婴幼教育', '职场发展', '国家二级心理咨询师', 'EAP咨询师'],
            charge: '300',
            status: 0
          },
          {
            headImg: require('../../../assets/images/mentor2.jpg'),
            name: '赵立新',
            amount: 2342,
            major: ['情绪管理', '婴幼教育', '职场发展', '国家二级心理咨询师', 'EAP咨询师'],
            charge: '500',
            status: 0
          },
          {
            headImg: require('../../../assets/images/mentor1.jpg'),
            name: '王明旭',
            amount: 123,
            major: ['情绪管理', '婴幼教育', '职场发展', '国家二级心理咨询师', 'EAP咨询师'],
            charge: '600',
            status: 0
          },
          {
            headImg: require('../../../assets/images/mentor2.jpg'),
            name: '周振杰',
            amount: 47456,
            major: ['情绪管理', '婴幼教育', '职场发展', '国家二级心理咨询师', 'EAP咨询师'],
            charge: '400',
            status: 0
          },
        ],
        mentorSelect: false,
        elementWidth: document.body.clientWidth * 0.75,
        elementHeight: document.body.clientHeight,
        selectInfo: [
          {
          "name": "身份",
          "id": 0,
          "value": [{"name": "不限", "id": "0", "selected": false}, {
            "name": "知音",
            "id": "1",
            "selected": false
          }, {"name": "专家", "id": "2", "selected": false}, {
            "name": "导师",
            "id": "3",
            "selected": false
          }, {"name": "中级咨询师", "id": "4", "selected": false}, {"name": "高级咨询师", "id": "5", "selected": false}]
        }, {
          "name": "擅长",
          "id": "1",
          "value": [{"name": "家庭关系", "id": "0", "selected": false}, {
            "name": "婚姻情感",
            "id": "1",
            "selected": false
          }, {"name": "亲子教育", "id": "2", "selected": false}, {"name": "职场发展", "id": "3", "selected": false}]
        }, {
          "name": "性别",
          "id": "2",
          "value": [{"name": "男", "id": "1", "selected": false}, {"name": "女", "id": "2", "selected": false}]
        }, {
          "name": "年龄",
          "id": "3",
          "value": [{"name": "20 ~ 30", "id": "0", "selected": false}, {
            "name": "30 ~ 40",
            "id": "1",
            "selected": false
          }, {"name": "40 ~ 50", "id": "2", "selected": false}, {"name": "50岁以上", "id": "3", "selected": false}]
        }, {
          "name": "收费",
          "id": "4",
          "value": [{"name": "1 ~ 100元 / 小时", "id": "0", "selected": false}, {
            "name": "101 ~ 500元 / 小时",
            "id": "1",
            "selected": false
          }, {"name": "501 ~ 900元 / 小时", "id": "2", "selected": false}, {
            "name": "900元以上 / 小时",
            "id": "3",
            "selected": false
          }]
        }, {
          "name": "形式",
          "id": "5",
          "value": [{"name": "文字", "id": "0", "selected": false}, {
            "name": "电话",
            "id": "1",
            "selected": false
          }, {"name": "面对面咨询", "id": "2", "selected": false}]
        }],
        beforeEleIndex: -1 ,
        beforeItemIndex: -1
      }
    },
    mounted() {
      this.$nextTick(() => {
      })
    },
    methods: {
      // 重置筛选条件
      resetSelect() {
        this.selectInfo.forEach(ele => {
          ele.value.forEach(item => {
            item.selected = false
          })
        })
      },
      // 确认筛选条件
      confirmSelect() {
        this.mentorSelect = false;
        let selectResult = []
        this.selectInfo.forEach((ele, index) => {
          ele.value.forEach((item, idx) => {
             if (item.selected) {
               selectResult.push(
                 { 'name' : ele.name, 'value' : item.name}
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
      // 跳转详情
      toMentorDetail(ele) {
        this.$router.push('/mentorInfo')
      }
    },
    created() {}
  }
</script>

<style scoped lang="less">
  .consult-container {
    .consult-head {
      padding: 30px 14px 15px;

      .head-title {
        img {
          width: 40px;
          height: auto;
          display: block;
        }

        p {
          font-size: 14px;
          font-weight: bold;
          color: black;
          margin-left: 16px;
        }
      }

      .head-search {
        * {
          vertical-align: middle;
          color: #808080;
        }
      }
    }

    .consult-list {
      padding: 0 14px;
      .mentor-list-item {
        padding: 16px 15px;
        box-shadow: 1px 3px 5px 0px rgba(6, 33, 74, 0.25);
        border: 1px solid #f4f4f4;
        box-sizing: border-box;
        border-radius: 10px;
        margin-bottom: 16px;

        .mentor-head-img {
          img {
            display: block;
            width: 95px;
            height: auto;
          }
        }
      }

      .mentor-info {
        height: 95px;
        margin-left: 15px;

        .mentor-name-amount {
          .name {
            font-size: 14px;
            font-weight: bolder;

            .iconrenzhengguanli {
              color: #edce35;
              font-size: 18px;
            }
          }

          .amount {
            margin-left: 16px;
            font-size: 9px;
          }

          img {
            display: block;
            width: 45px;
            margin-left: 20px;
          }
        }

        .mentor-major {
          p {
            text-align: left;

            span {
              display: inline-block;
              background-color: #e6e6e6;
              margin: 0 6px 6px 0;
              font-size: 9px;
              padding: 1px 2px;
              border-radius: 5px;
            }
          }
        }

        .mentor-charge {
          .charge {
            color: #f75151;
            font-size: 14px;

            span {
              font-size: 16px;
              color: #da0400;
              margin-right: 4px;
            }
          }

          button {
            border: none;
            background-color: #ffdd33;
            border-radius: 16px;
            font-size: 12px;
            padding: 5px 15px;
          }
        }
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
