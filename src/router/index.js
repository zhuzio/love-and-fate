import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('pages/chat_module/index.vue')
const Seek = () => import('pages/seek_module/seek.vue')
const Mentor = () => import('pages/mentor_module/mentor.vue')
const Mine = () => import('pages/my_module/mine.vue')
const MentorList = () => import('pages/mentor_module/mentor/mentorList.vue')
const MentorInfo = () => import('pages/mentor_module/mentor/mentorInfo.vue')



const ArticleList = () => import('pages/mentor_module/article/articleList.vue')
const ArticleDetail = () => import('pages/mentor_module/article/articleDetail.vue')

const CourseList = () => import('pages/mentor_module/course/CourseList.vue')
const CourseDetailVideo = () => import('pages/mentor_module/course/courseDetailVideo.vue')
const CourseDetailAudio = () => import('pages/mentor_module/course/courseDetailAudio.vue')
const CourseDetailOffline = () => import('pages/mentor_module/course/courseDetailOffline.vue')

const Qa = () => import('pages/mentor_module/qa/qa.vue')
const QaNew = () => import('pages/mentor_module/qa/new.vue')
const QaHot = () => import('pages/mentor_module/qa/hot.vue')
const QaDetail = () => import('pages/mentor_module/qa/qaDetail.vue')
const Release = () => import('pages/mentor_module/qa/release.vue')
const ReplayDetail = () => import('pages/mentor_module/qa/replayDetail.vue')

const MentorMore = () => import('pages/mentor_module/more/more.vue')
const Information = () => import('pages/mentor_module/more/mine/information.vue')
const Focus = () => import('pages/mentor_module/more/mine/focus.vue')
const Dynamic = () => import('pages/mentor_module/more/mine/dynamic.vue')
const MyConsult = () => import('pages/mentor_module/more/center/myConsult.vue')
const MyTest = () => import('pages/mentor_module/more/center/myTest.vue')
const MyCourse = () => import('pages/mentor_module/more/center/myCourse.vue')
const MyQa = () => import('pages/mentor_module/more/center/myQa.vue')
const MyCoupons = () => import('pages/mentor_module/more/center/myCoupons.vue')
const MyCourseSend = () => import('pages/mentor_module/more/center/myCourseSend.vue')
const MyCollection = () => import('pages/mentor_module/more/center/myCollection.vue')
const MyCreation = () => import('pages/mentor_module/more/center/myCreation.vue')


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
          component: Qa,
          redirect: '/mentor/qa/new',
          children: [
            {
              path: '/mentor/qa/new',
              name: '最新问答',
              component: QaNew
            },
            {
              path: '/mentor/qa/hot',
              name: '最热问答',
              component: QaHot
            },
          ]
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
    },
    {
      path: '/courseDetailOffline/:id',
      name: '线下课程详情',
      component: CourseDetailOffline
    },
    {
      path: '/articleDetail/:id',
      name: '文章详情',
      component: ArticleDetail
    },
    {
      path: '/qaDetail/:id',
      name: '问答详情',
      component: QaDetail
    },
    {
      path: '/replayDetail/:id',
      name: '回复详情',
      component: ReplayDetail
    },
    {
      path: '/release',
      name: '我要提问',
      component: Release
    },
    {
      path: '/mine',
      name: '我的',
      component: Mine
    },
    {
      path: '/dynamic',
      name: '我的动态',
      component: Dynamic
    },
    {
      path: '/focus',
      name: '我的关注',
      component: Focus
    },
    {
      path: '/information',
      name: '我的资讯',
      component: Information
    },

    {
      path: '/myConsult',
      name: '我的咨询',
      component: MyConsult
    },
    {
      path: '/myTest',
      name: '我的测评',
      component: MyTest
    },
    {
      path: '/myCourse',
      name: '我的课程',
      component: MyCourse
    },
    {
      path: '/myQa',
      name: '我的问答',
      component: MyQa
    },
    {
      path: '/myCoupons',
      name: '优惠券',
      component: MyCoupons
    },
    {
      path: '/myCourseSend',
      name: '课程赠送',
      component: MyCourseSend
    },
    {
      path: '/myCollection',
      name: '我的收藏',
      component: MyCollection
    },
    {
      path: '/myCreation',
      name: '内容创作',
      component: MyCreation
    },
  ]
})
