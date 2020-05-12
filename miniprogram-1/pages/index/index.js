//index.js
//获取应用实例
var myRequest = require('../../utils/request.js');
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    quickLinkSecondImage:['../../image/quickLink/quickLinkSecond1.png','../../image/quickLink/quickLinkSecond2.png','../../image/quickLink/quickLinkSecond3.png'],
    recommendList:[
      {pic:"../../image/recommend/recommendItemsImages/recommendItem1.png",name:"陨石拿铁",nowPrice:19.8,beforePrice:28},
      {pic:"../../image/recommend/recommendItemsImages/recommendItem2.png",name:"拿铁",nowPrice:15.5,beforePrice:25},
      {pic:"../../image/recommend/recommendItemsImages/recommendItem3.png",name:"橙汁奶茶",nowPrice:22.2,beforePrice:35},
      {pic:"../../image/recommend/recommendItemsImages/recommendItem4.png",name:"草莓奶茶",nowPrice:16.8,beforePrice:32}
    ],
    productList:[{pic:"../../image/product/productItem/productItem (1).png",name:"太妃巧克力",nowPrice:25.9,beforePrice:32.4},
    {pic:"../../image/product/productItem/productItem (2).png",name:"态度马克杯",nowPrice:59,beforePrice:69},
    {pic:"../../image/product/productItem/productItem (3).png",name:"猫鼠钱马克杯（蓝）",nowPrice:69,beforePrice:89},
    {pic:"../../image/product/productItem/productItem (4).png",name:"猫鼠钱马克杯（红）",nowPrice:69,beforePrice:89},
    {pic:"../../image/product/productItem/productItem (5).png",name:"彩色吸管杯",nowPrice:79,beforePrice:89},
    {pic:"../../image/product/productItem/productItem (6).png",name:"樱花吸管杯",nowPrice:79,beforePrice:99},
    {pic:"../../image/product/productItem/productItem (7).png",name:"按摩枕",nowPrice:25.9,beforePrice:32.4},
    {pic:"../../image/product/productItem/productItem (8).png",name:"保温杯",nowPrice:25.9,beforePrice:32.4},
    {pic:"../../image/product/productItem/productItem (9).png",name:"饮水机",nowPrice:25.9,beforePrice:32.4},
    {pic:"../../image/product/productItem/productItem (10).png",name:"美腿按摩仪",nowPrice:25.9,beforePrice:32.4},
    {pic:"../../image/product/productItem/productItem (10).png",name:"每日坚果",nowPrice:89,beforePrice:99},
    {pic:"../../image/product/productItem/productItem (11).png",name:"麦丽素",nowPrice:35.6,beforePrice:59}],
    swiperImages:['../../../image/indexTop/1.jpg', 
                    '../../../image/indexTop/2.jpg',
                    '../../../image/indexTop/3.jpg'],
    newsImages:['../../../image/news/news1.png', 
                '../../../image/news/news2.png',
                '../../../image/news/news3.png'],
    hasSapcing:true,
    noSapcing:false
  },
  //事件处理函数
  bindViewTap: function () {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getBc: function () {
    console.log('aaaa')
    var self = this;
    myRequest.postData({
      url: '/api/postuser',
      param: '',
      back: function (res) {
        console.log('#######')
        console.log(res)
        console.log('#######')
      }
    })

  }
})