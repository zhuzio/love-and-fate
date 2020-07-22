<template>
  <div class="chat-container">
   首页
    <div id="mse" style="height: 200px"></div>
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
          videoUrl: require('@/assets/images/video.mp4'),
          Player:null
        }
      },

      mounted () {
        this.getData()
      },

      methods: {
        initPlayer(url){
          this.Player = new Player({
            el: document.querySelector('#mse'),
            "url": "//s1.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
            "fluid": true,
            "width": "375",
            "height": "200",
            "x5-video-player-type": 'h5-page',
            "x5-video-player-fullscreen": false
          });
        },
        getData() {
          this.initPlayer(this.videoUrl)
        }
      },
    }
</script>

<style scoped lang="less">

</style>
