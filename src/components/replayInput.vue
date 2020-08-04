<template>
  <div v-show="isReplay">
    <div class="replay-input-container fb" >
      <input
        type="text"
        id="replayInput"
        ref="replayInput"
        :placeholder="placeholderText"
        v-model="replayContent">
      <button @click="replayEmit" :class="{'replay-button': replayContent}">回复</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "replayInput",
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      replayModule: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      placeholder: {
        handler(e) {
          this.placeholderText = e;
        }
      },
      replayModule: {
        handler(e) {
          this.isReplay = e;
          if (e) {
            this.replayIt()
          } else {
            this.replayContent = ''
          }
        }
      }
    },
    data() {
      return {
        replayContent: '',
        isReplay: false,
        placeholderText: ''
      }
    },
    methods: {
      replayIt() {
        this.$nextTick((x)=>{
          this.$refs.replayInput.focus();
        })
      },
      init() {
        this.isReplay = this.replayModule;
        this.placeholderText = this.placeholder;
      },
      replayEmit() {
        if (!this.replayContent) {
          this.$vux.toast.text('评论不能为空！', 'middle');
          this.$refs.replayInput.focus();
          return false
        }
        this.$emit('replay', this.replayContent)
      }
    },
    mounted() {
      this.init()
    }
  }
</script>

<style scoped lang="less">
  .replay-input-container{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #ececef;
    padding: 10px;
    border-top: 1px solid #ccc;
    z-index: 9999;
    input{
      width: 75%;
      height: 35px;
      background-color: white;
      border: none;
      border-radius: 6px;
      padding-left: 10px;
      font-size: 16px;
    }
    button{
      width: 20%;
      height: 35px;
      border: 1px solid #ccc;
      font-size: 16px;
      box-sizing: border-box;
      border-radius: 5px;
      color: #535353;
      &.replay-button{
        color: #3ed574;
        border: 1px solid #3ed574;
      }
    }
  }
</style>
