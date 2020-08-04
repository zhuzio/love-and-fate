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
        handler: function(val, oldVal){
          console.log(val);
        },
        // 深度观察监听
        deep: true
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
      }
    },
    data() {
      return {
        tabData: ['领取优惠券', '未使用', '已使用', '已失效'],
        tabIdx: 0,
      }
    },
    beforeCreate() {
      let path = (this.$route.path).split('/')[2];
      switch (path) {
        case 'get':
          this.$router.replace('/myCoupons/get')
          break;
        case 'unused':
          this.$router.replace('/myCoupons/unused')
          break;
        case 'used':
          this.$router.replace('/myCoupons/used')
          break;
        case 'failure':
          this.$router.replace('/myCoupons/failure')
          break;
      }

    },
    created() {

    }
  }
</script>

<style scoped>

</style>
