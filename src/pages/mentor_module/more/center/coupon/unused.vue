<template>
  <div class="unused-container">
    <div>
      <no-data
        text="暂无未使用优惠券"
        noType="coupon"></no-data>
    </div>
  </div>
</template>

<script>
  import noData from '@/components/noData'
  export default {
    name: "unused",
    components: {
      'no-data': noData,
    },
    methods: {
      /*getCP() {
        this.$router.replace('/myCoupons/get')
      }*/
    }
  }
</script>

<style scoped>

</style>
