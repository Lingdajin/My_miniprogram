// pages/page2/page2.js
Page({
  data: {
    a:true,
    b:false,
    c:false,
    d:true,
    e:false,
    },
  aChange: function (e) {
    this.setData({ c:true }),
    this.setData({a:false}),
      console.log('BindTap1发生change事件')
  },
  bChange: function (e) {
    this.setData({ b:true }),
    this.setData({a:false}),
    this.setData({d:false}),
    this.setData({e:true}),
      console.log('BindTap2发生change事件')
  },
 
})