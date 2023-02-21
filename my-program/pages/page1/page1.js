// pages/page1.js
var app = getApp()
Page({
  data: {
    x:false,
    y:false,
    z:false,
  },
  getUserProfile(e) {   //获取用户信息
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    this.setData({ y:true }),
    console.log('BindTap2发生change事件')
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  xChange: function (e) {
    this.setData({ x:true }),
      console.log('BindTap1发生change事件')
  },
  zChange: function (e) {
    this.setData({ z:true }),
      console.log('BindTap3发生change事件')
  },
  aChange: function (e) {
    this.setData({ a:true }),
      console.log('BindTap4发生change事件')
  },
  bChange: function (e) {
    this.setData({ b:true }),
    this.setData({ c:false }),
      console.log('sword发生change事件')
  },
  cChange: function (e) {
    this.setData({ c:true }),
    this.setData({ b:false }),
      console.log('gong发生change事件')
  },
})