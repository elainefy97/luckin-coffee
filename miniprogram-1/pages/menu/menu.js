// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch1 : true,
    swiperImages: ['../../image/gray/1.png', '../../image/gray/2.png', ],
    newsImages: ['../../../image/news/news1.png',
      '../../../image/news/news2.png',
      '../../../image/news/news3.png'
    ],
    menuHeight: true,
    noSapcing: false,
    lists: [
      "经典拿铁", "大师咖啡", "瑞纳冰", "水果很好喝", "小鹿茶", "小鹿茶精选"
    ],
    coffeeItemList: [
      {
        titleClassName: '经典拿铁',
        titleDetail:'',
        hasDetail:false,
        classItem: [{
          name: '冲绳黑糖拿铁',
          engDetail: 'Brown Sugar Latte',
          chinaDetail: '大/半塘/默认奶油/热',
          nowPrice: 16.8,
          beforePrice: 28,
          pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
        },{
          name: '陨石拿铁',
          engDetail: 'Brown Sugar Latte',
          chinaDetail: '大/半塘/默认奶油/热',
          nowPrice: 16.8,
          beforePrice: 28,
          pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
        },{
          name: '拿铁',
          engDetail: 'Latte',
          chinaDetail: '大/无糖/热',
          nowPrice: 13.75,
          beforePrice: 25,
          pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
        },{
          name: '香草拿铁',
          engDetail: 'Vanilla Latte',
          chinaDetail: '大/泉塘/热',
          nowPrice: 16.8,
          beforePrice: 28,
          pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
        }]
      },{
        titleClassName: '大师咖啡',
        hasDetail:true,
        titleDetail: 'WBC(世界咖啡师大赛)冠军团队拼配2019IIAC国际咖啡品鉴大赛金奖咖啡豆',
        sonClassImtes: [{
          sonClassItemName: '经典奶酪',
          classItem: [{
            name: '提拉米苏爱摩卡',
            engDetail: 'Tiramisu Mocha',
            chinaDetail: '大/全塘/热',
            nowPrice: 19,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '奥瑞白',
            engDetail: 'Flat White',
            chinaDetail: '大/无糖/热',
            nowPrice: 19,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '卡布奇诺',
            engDetail: 'Cappuccino',
            chinaDetail: '大/无糖/热',
            nowPrice: 19,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '姜焦糖玛奇朵',
            engDetail: 'Caramel Macchiato',
            chinaDetail: '大/泉塘/热',
            nowPrice: 19,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '摩卡',
            engDetail: 'Mocha',
            chinaDetail: '大/无糖/热',
            nowPrice: 19,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '提拉米苏爱摩卡',
            engDetail: 'Tiramisu Mocha',
            chinaDetail: '大/全塘/热',
            nowPrice: 19,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '奥瑞白',
            engDetail: 'Flat White',
            chinaDetail: '大/无糖/热',
            nowPrice: 19,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '卡布奇诺',
            engDetail: 'Cappuccino',
            chinaDetail: '大/无糖/热',
            nowPrice: 19,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '姜焦糖玛奇朵',
            engDetail: 'Caramel Macchiato',
            chinaDetail: '大/泉塘/热',
            nowPrice: 19,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '摩卡',
            engDetail: 'Mocha',
            chinaDetail: '大/无糖/热',
            nowPrice: 19,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          }]
        },{
          sonClassItemName: '黑咖系列',
          classItem: [{
            name: '标准美式',
            engDetail: 'Americano',
            chinaDetail: '大/全塘/热',
            nowPrice: 12.1,
            beforePrice: 22,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '加浓美式白',
            engDetail: 'Extra Americano',
            chinaDetail: '大/无糖/热',
            nowPrice: 15,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '焦糖标准美式',
            engDetail: 'Caramel Americano',
            chinaDetail: '大/无糖/热',
            nowPrice: 15,
            beforePrice: 25,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '焦糖加浓美式',
            engDetail: 'Caramel Extra Americano',
            chinaDetail: '大/泉塘/热',
            nowPrice: 16.8,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '摩卡',
            engDetail: 'Mocha',
            chinaDetail: '大/无糖/热',
            nowPrice: 19,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '提拉米苏爱摩卡',
            engDetail: 'Tiramisu Mocha',
            chinaDetail: '大/全塘/热',
            nowPrice: 19,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '奥瑞白',
            engDetail: 'Flat White',
            chinaDetail: '大/无糖/热',
            nowPrice: 19,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '卡布奇诺',
            engDetail: 'Cappuccino',
            chinaDetail: '大/无糖/热',
            nowPrice: 19,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '姜焦糖玛奇朵',
            engDetail: 'Caramel Macchiato',
            chinaDetail: '大/泉塘/热',
            nowPrice: 19,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          },{
            name: '摩卡',
            engDetail: 'Mocha',
            chinaDetail: '大/无糖/热',
            nowPrice: 19,
            beforePrice: 28,
            pic:'.././../image/recommend/recommendItemsImages/recommendItem1.png'
          }]
        }]
      },
  

    ],
    indexId: 0,
    //是否采用衔接滑动  
    circular: true,
    //是否显示画板指示点  
    indicatorDots: true,
    //选中点的颜色  
    indicatorcolor: "#000",
    //是否竖直  
    vertical: false,
    //是否自动切换  
    autoplay: true,
    //自动切换的间隔
    interval: 2500,
    //滑动动画时长毫秒  
    duration: 200,
    //所有图片的高度  （必须）
    imgheights: [],
    //图片宽度 
    imgwidth: 750,
    //默认  （必须）
    current: 0,
    isStart: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  jumpIndex(e) {
    let index = e.currentTarget.dataset.menuindex
    let that = this
    that.setData({
      indexId: index
    })
  },
  imageLoad: function (e) { //获取图片真实宽度  
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比  
      ratio = imgwidth / imgheight;
    console.log(imgwidth, imgheight)
    //计算的高度值  

    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights;
    //把每一张图片的对应的高度记录到数组里  
    imgheights[e.target.dataset.id] = imgheight;
    this.setData({
      imgheights: imgheights
    })

  },
  bindchange: function (e) {
    // console.log(e.detail.current)
    this.setData({
      current: e.detail.current
    })
  },
  // switch () {
  //   this.setData({
  //     isStart: !this.data.isStart
  //   });
  // }
  onChange(event){
    const detail = event.detail;
    this.setData({
        'switch1' : detail.value
    })
}

  // 左侧点击事件

})