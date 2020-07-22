<template>
    <div>
      <div class="article-container">
        <div class="article-head fb">
          <div class="head-tab">
            <tab
              default-color="#666666"
              active-color="#000000"
              custom-bar-width="80px"
              bar-active-color="#517af7"
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
          <div class="head-search" @click="articleSelect = true">
            <p>
              <i class="iconfont iconsousuo"></i>课程搜索
            </p>
          </div>
        </div>
        <div class="article-center">
          <div class="article-list">
            <article-item :articleData="articleList"></article-item>
          </div>
        </div>
      </div>
      <div v-transfer-dom>
        <popup
          position="right"
          :hide-on-blur="false"
          v-model="articleSelect">
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
  import articleItem from '@/components/articleItem'
  import {TransferDom} from 'vux'
  export default {
    name: "articleList",
    components: {
      'article-item': articleItem
    },
    directives: {TransferDom},
    data() {
        return {
          tabIndex: 0,
          tabList: [
            {
              name: '好文推荐',
              id: 0
            }, {
              name: '最新文章',
              id: 1
            }
          ],
          articleList: [
            {
              icon: require('../../../assets/images/artise_pic1.jpg'),
              name: '人类身体情绪地图',
              belong: '情绪科学',
              author: '王战',
              read: '1000',
              praise: 999
            },
            {
              icon: require('../../../assets/images/artise_pic2.jpg'),
              name: '虚拟爱之疗法',
              belong: '情绪科学',
              author: '王战',
              read: '1000',
              praise: 999
            },
            {
              icon: require('../../../assets/images/artise_pic3.jpg'),
              name: '回来吧，幸福的内在小孩',
              belong: '情绪科学',
              author: '王战',
              read: '1000',
              praise: 999
            }
          ],
          articleSelect: true,
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
        }
    },
    methods: {
      switchTabItem(index) {
        this.$vux.loading.show({
          text: 'loading'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.tabIndex = index
        }, 1000)
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
        this.articleSelect = false;
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
    },
    mounted() {
        
    },
    created() {
          
      },
      
  }
</script>

<style scoped lang="less">
  .article-container {
    .article-head {
      padding: 10px 0;
      box-sizing: border-box;
      border-bottom: 1px solid #efefef;
      .head-tab {
        width: 68%;
        .vux-tab .vux-tab-item {
          background: none !important;
        }
      }

      .head-search {
        padding-right: 20px;

        * {
          vertical-align: middle;
        }

        p {
          color: #ff9712;
          font-size: 14px;

          i {
            color: #ff9712;
            margin-right: 6px;
            font-size: 18px;
          }
        }
      }
    }
    .article-center {
      padding: 15px;
      background-color: white;
      .article-list {

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
