import wx from "weixin-js-sdk";
import api from "./newApi";

export default class share {
  constructor() {
    this.title = "";
    this.content = "";
    this.link = "";
    this.imgUrl = "";
  }

  // 请求微信接口
  static async wxShare(title, content, link, imgUrl) {
    try {
      this.title = title;
      this.content = content;
      this.link = link;
      this.imgUrl = imgUrl;
      const data = {
        url: location.href.split("#")[0]
      };
      const res = await api.getWxConfig(data);
      this.config(res);
    } catch (err) {
      console.error(err);
    }
  }

  // 配置config
  static config(res) {
    wx.config({
      debug: false,
      appId: res.appId,
      timestamp: res.timestamp,
      nonceStr: res.nonceStr,
      signature: res.signature,
      jsApiList: [
        "onMenuShareAppMessage",
        "onMenuShareQQ",
        "onMenuShareTimeline"
      ]
    });
    this.ready();
  }

  //   配置ready
  static ready() {
    wx.ready(() => {
      this.shareWxFriend();
      this.shareQQ();
      this.shareAppMessage();
    });
  }

  // 分享到微信朋友
  static shareWxFriend() {
    wx.onMenuShareAppMessage({
      title: this.title, // 分享标题
      desc: this.content,
      link: this.link, // 分享链接，该链接域名必须与当前企业的可信域名一致
      imgUrl: this.imgUrl, // 分享图标
      success: () => {
        console.log("分享成功");
      },
      cancel: () => {
        console.log("分享失败");
      }
    });
  }

  // 分享到QQ
  static shareQQ() {
    wx.onMenuShareQQ({
      title: this.title, // 分享标题
      desc: this.content,
      link: this.link, // 分享链接，该链接域名必须与当前企业的可信域名一致
      imgUrl: this.imgUrl, // 分享图标
      success: () => {
        console.log("分享成功");
      },
      cancel: () => {
        console.log("分享失败");
      }
    });
  }

  // 分享到朋友圈
  static shareAppMessage() {
    wx.onMenuShareAppMessage({
      title: this.title, // 分享标题
      desc: this.content,
      link: this.link, // 分享链接，该链接域名必须与当前企业的可信域名一致
      imgUrl: this.imgUrl, // 分享图标
      success: () => {
        console.log("分享成功");
      },
      cancel: () => {
        console.log("分享失败");
      }
    });
  }
}
