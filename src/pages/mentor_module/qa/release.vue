<template>
  <div>
    <x-header>我要提问</x-header>
    <div class="release-container">
      <div class="release-head">
        <p><input type="text" placeholder="请输入您的标题" v-model="releaseTitle"></p>
      </div>
      <div class="release-content">
        <x-textarea
          :max="1000"
          :height="150"
          :rows="8"
          :cols="30"
          v-model="releaseContent"
          style="padding: 10px; font-size: 13px;border-bottom: 1px solid #e2e2e2; color: black"
          placeholder="请输入您的问题"></x-textarea>
      </div>
      <div class="release-type">
        <div class="fb">
          <p class="release-type-title">话题类型</p>
          <div class="flex" @click="choseTypePop = true">
            <p class="release-type-item" v-show="choseTypeName1 !== '' && choseTypeName2 !== ''">
              <span>{{choseTypeName1}}</span>
              <span>{{choseTypeName2}}</span>
            </p>
            <p class="release-type-placeholder">
              <span v-show="choseTypeName1 === '' && choseTypeName2 === ''">请选择</span>
              <i class="iconfont iconyou"></i>
            </p>
          </div>
        </div>
      </div>
      <div class="release-button">
        <button @click="release">发布</button>
      </div>
    </div>
    <div v-transfer-dom>
      <popup
        v-model="choseTypePop"
        :hide-on-blur="false"
        height="50%">
        <div class="release-type-chose">
          <div class="release-type-head fb">
            <button class="cancel" @click="choseTypePop = false">取消</button>
            <p>请选择话题类型</p>
            <button class="confirm" @click="choseTypeConfirm">确定</button>
          </div>
          <div class="release-type-body fb" :style="`height: ${parseInt((bodyHeight / 2) - 50)}px`">
            <!--左侧-->
            <div style="border-right: 1px solid #b5b5b5;">
              <ul>
                <li
                  v-for="(rt, index) of releaseTypeData"
                  :key="index"
                  :class="{'tl': index === RTIndex}"
                  @click="choseType(0, index)">
                  {{rt.name}}
                </li>
              </ul>
            </div>
            <!--右侧-->
            <div style="background-color: #ececec">
              <ul>
                <li
                  v-for="(rd, index) of RTData"
                  :key="index"
                  :class="{'tl': index === RTIdx}"
                  @click="choseType(1, index)">
                  {{rd.name}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
  import { TransferDom } from 'vux'
  import releaseType from '../../../assets/js/base'
  export default {
    name: "release",
    directives: {
      TransferDom
    },
    data() {
      return {
        releaseTitle: '',
        releaseContent: '',
        choseTypePop: false,
        releaseTypeData: releaseType,
        bodyHeight: document.body.clientHeight,
        RTIndex: -1,
        RTIdx: -1,
        RTData: [],
        choseTypeName1: '',
        choseTypeName2: ''
      }
    },
    methods: {
      release() {
        if (!this.releaseTitle) {
          this.$vux.toast.text('请填写标题！', 'middle');
          return false;
        }
        if (!this.releaseContent) {
          this.$vux.toast.text('请填写内容！','middle');
          return false;
        }
        if (this.choseTypeName1 === '' || this.choseTypeName2 === '') {
          this.$vux.toast.text('请选择话题类型！','middle');
          return false;
        }
        this.$vux.toast.text('发布成功,等待审核中......','middle');
        setTimeout(() => {
          this.$router.go(-1)
        }, 1500)
      },
      choseType(type, idx) {
        let a = parseInt(type)
        switch (a) {
          case 0:
            this.RTIndex = idx;
            this.RTData = this.releaseTypeData[idx].child;
            this.RTIdx = -1;
            break;
          case 1:
            this.RTIdx = idx;
            break;
        }
      },
      choseTypeConfirm() {
        if (this.RTIdx === -1) {
          this.$vux.toast.text('请正确选择！','middle');
          return false
        } else {
          this.choseTypeName1 = this.releaseTypeData[this.RTIndex].name;
          this.choseTypeName2 = this.RTData[this.RTIdx].name;
          this.choseTypePop = false
        }
        console.info(this.RTIndex)
      }
    },
    mounted() {

    },
    created() {
      console.info()
    }
  }
</script>

<style scoped lang="less">
  .release-container{
    padding: 25px;
    background-color: white;
    text-align: left;
    .release-head{
      p{
        position: relative;
        input{
          width: 100%;
          padding: 5px 0 5px 15px;
          border-bottom: 2px solid #16abe3;
          font-size: 14px;
          font-weight: bold;
          &::placeholder{
            font-weight: normal;
          }
        }
        &:before{
          content: '';
          display: block;
          width: 5px;
          height: 85%;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          background-color: #16abe3;
          border-radius: 4px;
        }
      }
    }
    .release-content{
      margin-top: 30px;
      textarea{
        font-size: 14px;
      }
    }
    .release-type{
      margin-top: 45px;
      padding: 15px 0;
      border-bottom: 1px solid #e2e2e2;
      border-top: 1px solid #e2e2e2;
      font-size: 13px;
      color: black;
      .release-type-title{
        font-weight: bold;
      }
      .release-type-item{
        margin-right: 10px;
        span{
          display: inline-block;
          border: 1px solid #f0b847;
          border-radius: 15px;
          padding: 3px 10px;
          margin-right: 5px;
          font-size: 12px;
        }
      }
      .release-type-placeholder{
        *{
          vertical-align: middle;
        }
        span{
          color: #bbbbbb;
        }
        i{
          font-size: 18px;
        }
      }
    }
    .release-button{
      margin-top: 80px;
      button{
        display: block;
        width: 99%;
        background-color: #7dc5eb;
        color: white;
        font-size: 16px;
        margin: 0 auto;
        padding: 10px 0;
        border-radius: 15px;
      }
    }
  }
  .release-type-chose{
    width: 100%;
    height: 100%;
    background-color: white;
    .release-type-head{
      padding:0 15px;
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      .cancel{
        color: #4b4b4b;
      }
      .confirm{
        color: #31c7e2;
      }
    }
    .release-type-body{
      border-top: 1px solid #b5b5b5;
      >div{
        width: 50%;
        height: 100%;
        text-align: center;
        overflow: scroll;
        padding: 0 15px;
        ul{
          li{
            border-bottom: 1px solid #c9c9c9;
            height: 45px;
            line-height: 45px;
            font-size: 14px;
            letter-spacing: 5px;
            &.tl{
              border-color: #1c9e9e;
              color: #1c9e9e;
            }
          }
        }
      }
    }
  }
</style>
