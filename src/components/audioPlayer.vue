<template>
  <div>
    <div class="audio-container">
      <audio id="audio">
        <source :src="audioInfo.src" />
      </audio>
      <div class="audio-cover fm">
        <img :src="audioInfo.poster" alt="">
      </div>
      <div class="video-control">
        <div class="control-center flex">
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
          <!--<div class="play-speed" id="playSpeed" @click="showSpeed = true">
            <span>{{nowSpeed}}x </span>
            <p v-show="showSpeed" :style="`left: ${ speedPosition }px`">
              <span v-for="(sp, index) in mediaPlaySpeedArr" @click.stop="changeSpeed(index)">{{sp}}</span>
            </p>
          </div>-->
          <!--全屏-->
          <!--<div class="full-screen"><i class="iconfont iconquanping"></i></div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "audioPlayer",
    props: ['audioInfo'],
    data() {
      return{
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
    mounted() {
      let audio = document.getElementById('audio'), that = this;
      setTimeout(() => {
        this.progressWidth = document.getElementById('allBar').clientWidth;
        this.media = document.getElementById('audio');
      },1000);
      //使用事件监听方式捕捉事件
      audio.addEventListener("timeupdate", () =>{
        let nowPlayTime = parseInt(audio.currentTime);
        this.mediaNowTime_second = parseInt(nowPlayTime);
        this.mediaNowTime_minute = this.timeFormat(nowPlayTime)
        this.mediaAllTime_second = parseInt(audio.duration);
        this.mediaAllTime_minute = this.timeFormat(parseInt(audio.duration));
      },false);
      //播放结束时
      audio.addEventListener("ended",() => {
        this.mediaIsPause = false;
        clearInterval(this.mediaTimer)
      })
    },
    methods: {
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
        console.info(this.media)
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
    }
  }
</script>

<style scoped lang="less">
  .audio-container{
    position: relative;
    .audio-cover{
      img{
        display: block;
        width: 100%;
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
          width: 90%;
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
