// pages/component/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperImages: ['../../../image/swiper/1.jpg', '../../../image/swiper/2.jpg', '../../../image/swiper/3.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
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
