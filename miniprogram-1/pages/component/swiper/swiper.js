// pages/component/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    indexToSwiperImages:Array,
    indexToNews:Boolean,
    pageTochangeHeight:Boolean,

  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onShareAppMessage() {
      return {
        title: 'swiper',
        path: 'page/component/pages/swiper/swiper'
      }
    },
    changeIndicatorDots() {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    intervalChange(e) {
      this.setData({
        interval: e.detail.value
      })
    },
  
  }
})
