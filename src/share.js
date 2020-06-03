import axios from 'axios'
import config from './config'
import storage from './libs/storage'

export default {
  wxShare(tid) {        
    axios({
      method: 'post',
      url: '/api/course/getShareWxsignature',
      data: {
        url: location.href.split('#')[0],
        city: storage.getStorage('curCity')
      },
      noLoading: true
    }).then(function (res) {      
      let wxshareUrl = ''
      if (!tid) {
        wxshareUrl = config.publicUrl + storage.getStorage('curUid')
      } else {
        wxshareUrl = config.publicUrl + storage.getStorage('curUid') + '&tid=' + tid
      }
      let resData = res.data;
      wx.config({
        debug: false,
        appId: resData.data.appid,
        timestamp: resData.data.timestamp,
        nonceStr: resData.data.noncestr,
        signature: resData.data.signature,
        jsApiList: [
          "onMenuShareTimeline",
          "onMenuShareAppMessage",
          "hideMenuItems"
        ]
      });
      let shareConfig = {
        title: config.wxshareTit,
        desc: config.wxshareTit,
        link: wxshareUrl,
        imgUrl: config.wxshareImg,
        type: '',
        dataUrl: '',
        success: function () {}
      }
      wx.ready(function () {
        wx.onMenuShareTimeline(shareConfig);
        wx.onMenuShareAppMessage(shareConfig);
        wx.hideMenuItems({
          menuList: [
            "menuItem:editTag",
            "menuItem:delete",
            "menuItem:copyUrl",
            "menuItem:originPage",
            "menuItem:readMode",
            "menuItem:openWithSafari",
            "menuItem:openWithQQBrowser",
            "menuItem:share:email",
            "menuItem:share:brand",
            "menuItem:share:qq",
            "menuItem:share:weiboApp",
            "menuItem:share:QZone",
            "menuItem:share:facebook",
            "menuItem:favorite"
          ]
        })
      })
    })
  }
}