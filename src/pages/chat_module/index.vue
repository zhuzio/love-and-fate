<template>
  <div class="chat-container">
   首页微信聊天
    <tab-foot></tab-foot>
  </div>
</template>

<script>
  import Player from 'xgplayer';
  import tabFoot from '@/components/tabfoot.vue'
    export default {
      name: "index",
      components: {
        'tab-foot': tabFoot
      },
      data () {
        return {
        }
      },

      mounted () {},

      methods: {},
    }
</script>

<style scoped lang="less">

</style>
