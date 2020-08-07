<template>
  <div class="used-container">
    <div>
      <no-data
        text="暂无已使用优惠券"
        noType="coupon"></no-data>
    </div>
  </div>
</template>

<script>
  import noData from '@/components/noData'
  export default {
    name: "used",
    components: {
      'no-data': noData,
    },
  }
</script>

<style scoped>

</style>
