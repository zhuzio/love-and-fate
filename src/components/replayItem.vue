<template>
  <div class="qa-replay-container">
    <div class="qa-replay-list">
      <div class="qa-r-l flex" v-for="(r, i) of replays" :key="i">
        <p>{{r.replayUser}}
          <span class="to" v-if="r.type === 1"><i>回复</i> {{r.to}}</span>：
          <span class="text">{{r.replayContain}}</span> <button class="replay" @click="replay(r)">回复</button>
        </p>
      </div>
    </div>
    <div class="qa-replay-total" @click="replayToDetail">
      <p class="qa-replay-more" v-if="len > 4 && shrink">共 {{len}} 条回复 ></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "replayItem",
    props: {
      replayData: {
        type: Array,
        default: []
      },
      needReplay: {
        type: Boolean,
        default: false
      },
      types: {
        type: Boolean, // true 需要收缩, false 不需要
        default: false
      }
    },
    watch: {
      replayData: {
        handler(a) {
          this.len = a.length;
          this.replays = [];
          if (this.shrink) {
            if (a.length > 4) {
              for (var i = 0; i < 4 ; i++) {
                this.replays.push(a[i])
              }
            } else {
              this.replays = a;
            }
          }  else {
            this.replays = a;
          }

        },
        deep: true
      },
      needReplay: {
        handler(a) {
          this.needReplays = a;
        },
        deep: true
      }
    },
    data() {
      return {
        replays: [],
        needReplays: false,
        len: 0,
        shrink: false
      }
    },
    methods: {
      replay(ele) {
        this.$emit('replayIt', ele)
      },
      replayToDetail() {
        this.$emit('toDetail')
      }
    },
    mounted() {
      this.len = this.replayData.length;
      this.shrink = this.types;
      if (this.shrink) {
        if (this.replayData.length > 4) {
          for (var i = 0; i < 4 ; i++) {
            this.replays.push(this.replayData[i])
          }
        } else {
          this.replays = this.replayData;
        }
      } else {
        this.replays = this.replayData;
      }

      this.needReplays = this.needReplay
    }
  }
</script>

<style scoped lang="less">
  .qa-replay-container{
    .qa-replay-list{
      padding: 10px;
      background-color: #fbfaf8;
      font-size: 12px;
      border-radius: 10px;
      .qa-r-l{
        margin-bottom: 10px;
        p{
          color: #f9725c;
          line-height: 20px;
          span{
            &.to{
              i{
                color: #393937;
              }
            }
            &.text{
              color: #1b1c4c;
              margin-right: 5px;
            }
          }
          button{
            border: 1px solid #ccc;
            background-color: white;
            padding: 1px 7px;
            border-radius: 15px;
            color: #666a76;
            font-size: 11px;

          }
        }
      }
    }
    .qa-replay-total{
      .qa-replay-more{
        padding:10px 20px;
        background-color: #f4f4f4;
        border-radius: 8px;
        font-size: 12px;
        color: #197fff;
        margin-top: 10px;
      }
    }
  }
</style>
