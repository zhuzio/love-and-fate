import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('pages/chat_module/index.vue')
const Seek = () => import('pages/seek_module/seek.vue')
const Mentor = () => import('pages/mentor_module/mentor.vue')
const Mine = () => import('pages/my_module/mine.vue')
const MentorList = () => import('pages/mentor_module/mentor/mentorList.vue')
const MentorInfo = () => import('pages/mentor_module/mentor/mentorInfo.vue')



const ArticleList = () => import('pages/mentor_module/article/articleList.vue')

const CourseList = () => import('pages/mentor_module/course/CourseList.vue')
const CourseDetailVideo = () => import('pages/mentor_module/course/courseDetailVideo.vue')
const CourseDetailAudio = () => import('pages/mentor_module/course/courseDetailAudio.vue')
const CourseDetailOffline = () => import('pages/mentor_module/course/courseDetailOffline.vue')

const Qa = () => import('pages/mentor_module/qa/qa.vue')

const MentorMore = () => import('pages/mentor_module/more/more.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: '首页',
      component: Index
    },
    {
      path: '/seek',
      name: '征婚',
      component: Seek
    },
    {
      path: '/mentor',
      name: '导师',
      component: Mentor,
      redirect: '/mentor/mentorList',
      children: [
        {
          path: '/mentor/mentorList',
          name: '导师列表',
          component: MentorList
        },
        {
          path: '/mentor/courseList',
          name: '课程列表',
          component: CourseList
        },
        {
          path: '/mentor/articleList',
          name: '文章列表',
          component: ArticleList
        },
        {
          path: '/mentor/qa',
          name: '问答',
          component: Qa
        },
        {
          path: '/mentor/mentorMore',
          name: '更多',
          component: MentorMore
        }
      ]
    },
    {
      path: '/mentorInfo',
      name: '导师详情',
      component: MentorInfo
    },
    {
      path: '/courseDetailVideo/:id',
      name: '视频课程详情',
      component: CourseDetailVideo
    },
    {
      path: '/courseDetailAudio/:id',
      name: '音频课程详情',
      component: CourseDetailAudio
    },{
      path: '/courseDetailOffline/:id',
      name: '线下课程详情',
      component: CourseDetailOffline
    },
    {
      path: '/mine',
      name: '我的',
      component: Mine
    },
  ]
})
