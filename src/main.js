// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/font/iconfont.css'
import './assets/css/base.css'

import { XHeader,Tabbar, TabbarItem,Swiper, SwiperItem,
  Divider, XButton , Popup, XInput, Cell, Group,
  Calendar, XTextarea, Tab, TabItem, XAddress, Range,
  Scroller, Sticky, TransferDom, Actionsheet,Badge,  ButtonTab, ButtonTabItem   } from 'vux'

import  { LoadingPlugin, ToastPlugin, ConfirmPlugin  } from 'vux'
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)

Vue.component('x-header', XHeader)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('swiper', Swiper)
Vue.component('swiper-item', SwiperItem)
Vue.component('divider', Divider)
Vue.component('x-button', XButton)
Vue.component('popup', Popup)
Vue.component('x-input', XInput)
Vue.component('cell', Cell)
Vue.component('group', Group )
Vue.component('calendar', Calendar)
Vue.component('x-textarea', XTextarea)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('x-address', XAddress)
Vue.component('range', Range)
Vue.component('scroller', Scroller)
Vue.component('sticky', Sticky )
Vue.component('actionsheet', Actionsheet)
Vue.component('badge', Badge)
Vue.component('button-tab', ButtonTab)
Vue.component('button-tab-item', ButtonTabItem)

Vue.directive('transfer-dom', TransferDom)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
