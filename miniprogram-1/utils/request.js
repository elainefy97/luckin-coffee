
//提供接口
module.exports = {
  getUrl: getUrl,
  postData: postData,
  getData: getData,
}

//post===============
//url==网址 ,param===参数,back===返回的函数
function postData(data) {
  var url = data.url;
  var param = data.param;
  var back = data.back;
  console.log(url);
  wx.request({
    url: getUrl() + url,
    data: param,
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    complete: function (res) {
      wx.hideLoading();
    },
    fail: function (res) {
      wx.showToast({
        title: '请求错误',
        icon: 'error',
        mask: true,
      });
      back(false);
    },
    success: function (res) {
      console.log(res);
      wx.hideLoading();
      if (res.data.code == 200) {
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
        });
        back(res.data.data);
        return;
      } else{
        wx.showToast({
          title: res.data.msg,
          icon: 'error',
          mask: true,
        });
      }
      back(false);
    }
  })
}
//get===============
//url==网址 ,param===参数,back===返回的函数
function getData(data) {
  var url = data.url;
  var param = data.param;
  var back = data.back;
  console.log(url);
  wx.request({
    url: getUrl() + url,
    data: param,
    method: 'GET',

    success: function (res) {
      console.log(res);
      wx.hideLoading();
      if (res.data.code == 200) {
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
        });
        back(res.data.data);
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'error',
          mask: true,
        });
      }
      back(false);
    },
    fail: function (res) {
      back(false);
    },
    complete: function (res) {
      wx.hideLoading();
    }
  })
}

//接口URL==============
function getUrl(url) {
  // var app = getApp();
  // var host = getApp().conf.host;
  return 'http://localhost:8000';
}



