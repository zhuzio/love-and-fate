<template>
  <div class="tab-container">
    <tabbar style="position: fixed" class="tab-item-box">
      <tabbar-item
      v-for="(item, index) in tabItem"
      :key="index"
      :selected="item.active"
      :link="item.link">
          <i slot="icon" class="iconfont" :class="item.icon"></i>
         <span slot="label">{{item.name}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
export default {
  name: 'tabfoot',
  data () {
    return {
      tabItem: [
        {
          name: '聊天',
          icon: 'iconweixin',
          link: '/index',
          active: false
        },
        {
          name: '征婚',
          icon: 'iconzhaoshengtongji',
          link: '/seek',
          active: false
        },
        {
          name: '导师',
          icon: 'iconzhinanzhenfaxiandaohangdizhiweizhi',
          link: '/mentor',
          active: false
        },
        {
          name: '我的',
          icon: 'icongeren',
          link: '/mine',
          active: false
        }
      ]
    }
  },
  created() {
    let path = this.$route.path;
    this.tabItem.forEach((item, index) => {
      if(path.indexOf(item.link) !== -1) {
        item.active = true
      }
    })
  }
}
</script>

<style scoped lang="less">
 .tab-item-box{

 }
</style>
