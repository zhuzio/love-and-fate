<template>
  <div>
    <div>
      <div style="height:44px;">
        <sticky
          ref="sticky"
          :offset="0"
          :check-sticky-support="false"
          :disabled="disabled">
          <tab
            default-color="#c0c0c0"
            active-color="#178eea"
            custom-bar-width="60px"
            button-tab-border-color="red"
            bar-active-color="#527af8"
            v-model="_tabIndex">
            <tab-item
              @on-item-click="tabChanges"
              v-for="(td, index) of tabData"
              :selected="index === _tabIndex"
              :key="index">{{td}}</tab-item>
          </tab>
        </sticky>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mineHeadTab",
    props: {
      tab:{
        type: Array,
        default: []
      },
      tabIndex:{
        type: Number,
        default: 0
      },
    },
    watch: {
      tab: {
        handler(e) {
          console.info(e)
        },
        deep:true
      },
      tabIndex: {
        handler(e) {
          this._tabIndex = e;
        },
        deep:true
      }
    },
    data () {
      return {
        tabData: [],
        _tabIndex: 0,
        showSpace: false,
        disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) &&
          /ucbrowser/i.test(navigator.userAgent),
      }
    },
    methods: {
      tabChanges(e) {
        this.$emit('on-change', e)
      }
    },
    created() {
      this._tabIndex = this.tabIndex;
      this.tabData = this.tab;
    }
  }
</script>

<style scoped>
</style>
