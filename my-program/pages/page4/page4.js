// pages/page4/page4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dragon:100,
    k:10,
    a:true,
    b:false,
    c:false,
    s:30,
    h:1,
    me:100,
    d:false,
  },
  meAttack:function(e){
    this.setData({ dragon: this.data.dragon - this.data.k }),
      console.log('龙血', this.data.dragon),
    this.setData({a:false}),
    this.setData({c:true}),
    this.setData({me:this.data.me - this.data.s})
    
  },
  rise:function(e){
    this.setData({k:this.data.k + 10}),
    console.log('攻击力',this.data.k),
    this.setData({a:false}),
    this.setData({b:true}),
    this.setData({me:this.data.me - this.data.s})
  },
  hold:function(e){
    this.setData({me:this.data.me + 40}),
    this.setData({a:false}),
    this.setData({d:true}),
    this.setData({me:this.data.me - this.data.s})
  },
  continue:function(e){
    this.setData({a:true}),
    this.setData({b:false}),
    this.setData({c:false}),
    this.setData({d:false}),
    this.setData({h:this.data.h+1})
  }

})