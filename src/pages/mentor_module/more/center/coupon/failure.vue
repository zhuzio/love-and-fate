<template>
  <div class="failure-container">
    <div>
      <no-data text="暂无失效优惠券" noType="coupon"></no-data>
    </div>
  </div>
</template>

<script>
  import noData from '@/components/noData'
  export default {
    name: "failure",
    components: {
      'no-data': noData,
    },
  }
</script>

<style scoped>

</style>
