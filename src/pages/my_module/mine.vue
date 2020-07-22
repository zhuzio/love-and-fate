<template>
    <div>个人中心
        <tab-foot></tab-foot>
    </div>
     
</template>
<script>
 import tabFoot from '@/components/tabfoot.vue'
export default {
    name: 'mine',
     components: {
        'tab-foot': tabFoot
      },
    data() {
        return {}
    }
}
</script>

<style scoped lang="less">

</style>