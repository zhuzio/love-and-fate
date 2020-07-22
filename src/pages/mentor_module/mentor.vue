<template>
    <div>
        <div class="mentor-container">
            <div class="mentor-head">
                <div class="mentor-swiper">
                    <swiper
                        :list="baseList"
                        auto
                        height="170px"
                        dots-class="custom-bottom"
                        :show-desc-mask="false"
                        dots-position="center">
                     </swiper>
                </div>
                <div class="mentor-serch">
                    <divider>
                      <span class="search-box">
                        <i class="iconfont iconsousuo"></i>
                        <input type="text" placeholder="搜索文章话题或专家名字">
                      </span>
                    </divider>
                </div>
            </div>
          <div class="mentor-menu">
            <ul>
              <li v-for="(mn, index) in menu" :key="index" @click="mentorTo(mn)">
                <img :src="mn.icon" alt="" class="menu-icon" :alt="mn.name">
                <p class="menu-name">{{mn.name}}</p>
              </li>
            </ul>
          </div>
          <div class="mentor-menu-container">
            <router-view></router-view>
          </div>
        </div>
         <tab-foot></tab-foot>
    </div>
</template>

<script>
 import tabFoot from '@/components/tabfoot.vue';
 const baseList = [
   {
      url: 'javascript:',
      img: require('@/assets/images/mentor_swiper1.jpg'),
      title: '送你一朵fua'
    }
 ];
export default {
    name: 'mentor',
     components: {
        'tab-foot': tabFoot
      },
    data() {
        return {
          baseList: baseList,
          menu: [
            {
              name: '咨询',
              icon: require('../../assets/images/icon/mentor.png'),
              link: '/mentor/mentorList'
            },
            {
              name: '课程',
              icon: require('../../assets/images/icon/cousure.png'),
              link: '/mentor/courseList'
            },
            {
              name: '文章',
              icon: require('../../assets/images/icon/article.png'),
              link: '/mentor/articleList'
            },
            {
              name: '问答',
              icon: require('../../assets/images/icon/qa.png'),
              link: '/mentor/qa'
            },
            {
              name: '更多',
              icon: require('../../assets/images/icon/more.png'),
              link: '/mentor/mentorMore'
            },
          ],
        }
    },
  methods: {
    mentorTo(ele) {
      this.$router.replace(ele.link)
    }
  }
}
</script>

<style scoped lang="less">
.mentor-container {
  .mentor-head{
      background-color: #e1f8fe;
        .mentor-swiper{}
        .mentor-serch{
            .search-box{
              width: 80%;
              display: inline;
              border: 1px solid #ccc;
              padding: 3px 5px;
              border-radius: 13px;
              *{
                vertical-align: middle;
              }
              i{
                font-size: 10px;
              }
                input{
                  border: none;
                  font-size: 12px;
                  padding-right: 100px;
                }
            }
        }
    }
  .mentor-menu{
    width: 100%;
    background-color: #e6e6e6;
    padding-bottom: 8px;
    ul{
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: white;
      padding: 30px 0;
      li{
        img{
          display: block;
          width: 45px;
          height: auto;
          margin: 0 auto;
        }
        p{
          margin-top: 14px;
          font-size: 16px;
          text-align: center;
          letter-spacing: 2px;
        }
      }
    }
  }
  .mentor-menu-container{
    margin-bottom: 55px;
  }
}
</style>
