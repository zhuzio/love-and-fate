<template>
  <div>
    <div class="video-container">
      <div class="video fc" @click="addClass">
        <video
          x-webkit-airplay="allow"
          x5-playsinline=""
          webkit-playsinline=""
          playsinline="true"
          x5-video-player-fullscreen="true"
          x5-video-player-type="h5"
          preload="auto"
          :poster="videoInfo.poster"
          id="video">
          <source :src="videoInfo.src" />
        </video>
      </div>
      <div class="video-title" :class="{'video-title-control': showOthers}"><p>{{videoInfo.name}}</p></div>
      <div class="video-control" :class="{'video-control-control': showOthers}">
        <div class="control-center fb">
          <!--播放与暂停-->
          <div class="suspend-play" @click="playAndPause">
            <i  v-if="mediaIsPause"class="iconfont iconzanting"></i>
            <i  v-else class="iconfont iconcaret-right"></i>
          </div>
          <!--进度与时间-->
          <div class="time-progress fb">
            <div class="now-time show-time"><span>{{mediaNowTime_minute}}</span></div>
            <div id="controlBar" class="progress-time">
              <div id="allBar">
                <div id="bufferBar"></div>
                <div id="playerBar" :style="`width:${mediaProgress}%`"></div>
                <div
                  id="barButton"
                  :style="`left: ${ elementLeft }px`"
                  @mousedown="progressDown" @touchstart="progressDown"
                  @mousemove="progressMove" @touchmove="progressMove"
                  @mouseup="progressEnd" @touchend="progressEnd"></div>
              </div>
            </div>
            <div class="all-time show-time"><span>{{mediaAllTime_minute}}</span></div>
          </div>
          <!--播放速度-->
          <div class="play-speed" id="playSpeed" @click="showSpeed = true">
            <span>{{nowSpeed}}x </span>
            <p v-show="showSpeed" :style="`left: ${ speedPosition }px`">
              <span v-for="(sp, index) in mediaPlaySpeedArr" @click.stop="changeSpeed(index)">{{sp}}</span>
            </p>
          </div>
          <!--全屏-->
          <!--<div class="full-screen"><i class="iconfont iconquanping"></i></div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "videoPlayer",
    props: ['videoInfo'],
    data() {
      return {
        isStop: true,
        nowSpeed: '1.0',
        showSpeed: false, // 是否展示视频速度控件
        showOthers: false, // 是否展示头部
        speedPosition: 0,

        progressWidth: 0,
        elementLeft: -5,

        media: '',
        mediaAllTime_second: 0, // 媒体总时长 ==> 秒数
        mediaAllTime_minute: '0', // 媒体总时长 ==> 分钟数

        mediaNowTime_second: 0, // 媒体当前时长 ==> 秒数
        mediaNowTime_minute: '0.00', // 媒体当前时长 ==> 分钟数

        mediaIsPlay: false, // 媒体是否在播放
        mediaIsOverPlay: false, // 媒体是否播放完毕
        mediaIsPause: false, // 媒体是否中途暂停

        mediaPlaySpeedArr: ['1.0', '1.25', '1.5', '2.0'],  // 媒体播放速度数组

        mediaTimer: '', // 媒体定时器
        mediaProgress: 0, // 媒体进度

        progressFlag: false,  //  进度条点击标识

        progressDownPositionX: 0,  // 进度条圆点触摸 / 按下鼠标 位置
        progressMoveDistanceX: 0, //  进度条圆点滑动 / 滑动鼠标 距离
        progressElementOffsetLeft: 0, //  进度条圆点与父级元素之间的左边距离
        progressFinalDistance: 0,  // 进度条圆点最终位移距离
      }
    },
    watch: {

    },
    methods: {
      // 更改播放速度
      changeSpeed(idx) {
        this.nowSpeed = this.mediaPlaySpeedArr[idx];
        document.getElementById('video').playbackRate = this.nowSpeed;
        this.showSpeed = false
      },
      // 秒转时分秒
      timeFormat(time){
        let result = parseInt(time)
        if( result >= 3600 ){
          let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600)
          let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60))
          let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60))
          result = `${h}:${m}:${s}`;
        }else if( result < 3600 ){
          let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60))
          let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60))
          result = `${m}:${s}`;
        }
        return result;
      },
    // 播放与暂停
      playAndPause() {
        let a = this.media.paused;
        this.mediaIsPause = a;
        if (a) {
          this.media.play()
          this.mediaTimer = setInterval(this.updateProgress, 1000)
          this.showOthers = true
        } else {
          this.media.pause()
          clearInterval(this.mediaTimer)
          this.showOthers = false
        }
      },
      // 实时显示播放进度和加载进度
      updateProgress() {
        this.mediaProgress = parseInt((this.mediaNowTime_second / this.mediaAllTime_second) * 100);
        this.elementLeft = (this.progressWidth * (this.mediaProgress / 100)) - 5
      },
      // 进度条按下/触摸事件
      progressDown(e){
        this.progressFlag = true;
        let touch;
        if (e.touches) touch = e.touches[0]; else touch = e;
        this.progressDownPositionX = touch.clientX;
        this.progressElementOffsetLeft = e.target.offsetLeft;
      },
      // 进度条拖动/滑动事件
      progressMove(e){
        if(this.progressFlag){
          let touch;
          if (e.touches) touch = e.touches[0]; else touch = e;
          // 进度条圆点滑动距离 = 时时滑动坐标 - 进度条圆点触摸时坐标
          this.progressMoveDistanceX = touch.clientX - this.progressDownPositionX;
          // 进度条圆点最终位移距离 = 进度条圆点滑动距离 + 当前进度条圆点与父级元素之间的左边距离
          this.progressFinalDistance = this.progressElementOffsetLeft + this.progressMoveDistanceX;
          //屏幕x限制
          if (this.progressFinalDistance < -5) {
            this.progressFinalDistance = -5;
          } else if (this.progressFinalDistance > this.progressWidth -5) {
            this.progressFinalDistance =  this.progressWidth -5;
          }
          this.elementLeft = this.progressFinalDistance;
          let a = parseFloat((this.elementLeft / this.progressWidth) * this.mediaAllTime_second)
          this.mediaProgress = parseInt((this.elementLeft / this.progressWidth) * 100)
          this.media.currentTime = a
          //阻止页面的滑动默认事件
          document.addEventListener("touchmove",function(){
            event.preventDefault();
          },false);
        }
      },
      // 进度条释放事件
      progressEnd(){
        this.progressFlag = false;
      },
      // 控制顶部文字以及底部控制
      addClass() {
        if (this.mediaIsPause) {
          if (this.showOthers) {
            this.showOthers = false;
            setTimeout(() => {
              this.showOthers = true
            }, 5000)
          }
        }
      }
    },
    mounted() {
      let videos = document.getElementById('video'), that = this;
      setTimeout(() => {
        this.progressWidth = document.getElementById('allBar').clientWidth;
        this.speedPosition = document.getElementById('playSpeed').offsetLeft
        this.media = document.getElementById('video');
      },1000);
      //使用事件监听方式捕捉事件
      videos.addEventListener("timeupdate", () =>{
        let nowPlayTime = parseInt(videos.currentTime);
        this.mediaNowTime_second = parseInt(nowPlayTime);
        this.mediaNowTime_minute = this.timeFormat(nowPlayTime)
        this.mediaAllTime_second = parseInt(videos.duration);
        this.mediaAllTime_minute = this.timeFormat(parseInt(videos.duration));
      },false);
      //播放结束时
      videos.addEventListener("ended",() => {
        this.mediaIsPause = false;
        clearInterval(this.mediaTimer)
        this.showOthers = false
      })
    },
    created() {
    },
    beforeDestroy() {
      clearInterval(this.mediaTimer)
    }
  }
</script>

<style scoped lang="less">
  .video-container{
    position: relative;
    height: 200px;
    overflow: hidden;
    touch-action: none;
    .video{
      width: 100%;
      height: 100%;
      background-color: black;
      video{
        display: block;
        max-width: 100%;
        max-height: 100%;
      }
    }
    .video-cover{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img{
        display: block;
        height: 100%;
        width: auto;
      }
    }
    .video-title{
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      padding: 10px;
      background-color: rgba(74, 74, 74, 0.5);
      transition: all 1s;
      p{
        color: white;
        font-size: 13px;
      }
      &.video-title-control{
        top: -100%;
      }
    }
    .video-control{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 10px;
      background-color: rgba(74, 74, 74, 0.5);
      transition: all 1s;
      .control-center{
        .suspend-play{
          i{
            color: white;
            font-size: 22px;
          }
        }
        .time-progress{
          width: 66.667%;
          .show-time{
            font-size: 12px;
            color: white;
          }
          .progress-time{
            width: 70%;
            /*height: 20px;*/
            #allBar{
              width:100%;
              height:4px;
              background-color: rgb(80, 80, 80);
              /*margin-top: 18px;*/
              position: relative;
              #bufferBar{
                width: 0;
                height: 4px;
                background-color: rgb(160, 160, 160);
                position: absolute;
              }
              #playerBar{
                width: 0;
                height: 4px;
                background-color: rgb(30, 144, 255);
                position: absolute;
              }
              #barButton{
                width: 10px;
                height: 10px;
                position: absolute;
                top: -3.5px;
                outline: none;
                background-color: #1E90FF;
                border-radius: 50%;
              }
            }
          }
        }
        .play-speed{
          color: white;
          font-size: 12px;
          width: 30px;
          p{
            position: absolute;
            bottom: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            text-align: center;
            span{
              display: block;
              padding: 10px;
            }
          }
        }
        .full-screen{
          i{
            color: white;
            font-size: 18px;
          }
        }
      }
      &.video-control-control{
        bottom: -100%;
      }
    }
  }
</style>
