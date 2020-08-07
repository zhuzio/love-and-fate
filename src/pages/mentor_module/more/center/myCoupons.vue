<template>
  <div>
    <x-header>我的优惠券</x-header>
    <div class="my-cou-container">
      <mine-head-tab :tab="tabData" :tabIndex="tabIdx" @on-change="tabClick"></mine-head-tab>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import mineHeadTab from '@/components/mineHeadTab'
  export default {
    name: "myCoupons",
    components: {
      'mine-head-tab': mineHeadTab
    },
    watch: {
      $route: {
        handler: function(val){
          let path = val.path.split('/')[2];
          this.judge(path)
        },
        // 深度观察监听
        deep: true
      }
    },
    data() {
      return {
        tabData: ['领取优惠券', '未使用', '已使用', '已失效'],
        tabIdx: 0,
      }
    },
    methods: {
      tabClick(e) {
        this.tabIdx = e;
        switch (parseInt(this.tabIdx)) {
          case 0:
            this.$router.replace('/myCoupons/get')
            break;
          case 1:
            this.$router.replace('/myCoupons/unused')
            break;
          case 2:
            this.$router.replace('/myCoupons/used')
            break;
          case 3:
            this.$router.replace('/myCoupons/failure')
            break;
        }
      },
      judge(route) {
        let that = this;
        switch (route) {
          case 'get':
           // debugger
            that.tabIdx = 0;
            break;
          case 'unused':
            that.tabIdx = 1;
            break;
          case 'used':
            that.tabIdx = 2;
            break;
          case 'failure':
            that.tabIdx = 3;
            break;
        }
      }
    },

    beforeCreate() {


    },
    created() {
      let path = (this.$route.path).split('/')[2];
      this.judge(path)
    }
  }
</script>

<style scoped>

</style>
