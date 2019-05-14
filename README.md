## 说明

这个 js 适合 vue 项目使用，主要的功能是 H5 分享到微信，QQ，朋友圈。

## 使用

下载 share.js，放到 utils 文件夹下面，然后

```
    import wxShare from "@/utils/share.js";

     wxShare.wxShare(
        this.title,
        this.content,
        this.link,
        this.logoImg
    );
```

## 注意

首先要确定安装了 weixin-js-sdk

```
    npm install weixin-js-sdk
```

其次，你要修改一下 share.js 里面的请求后台的接口

```
    // 修改这个，这个是封装的接口api，换成你自己的
    import api from "./newApi";

    // 修改这个，这个是请求后台拿到微信的配置，换成你自己的
    const res = await api.getWxConfig(data);

```

修改好了之后，就可以测试分享效果了

## 兼容

以上只支持单文件分享，如果多层级分享，比如说从 home 页面进入 details 页面，要分享 details 页面，因为 ios 和安卓的存贮路径规则不一样，所以需要兼容

兼容方法

```
    // window.__wxjs_is_wkwebview
    // true 时 为 IOS 设备
    // false时 为 安卓 设备
    if (window.__wxjs_is_wkwebview) { // IOS
    let isHttp = document.location.protocol;
    if (isHttp === 'http:') {
        this.configUrl = '分享页面路径，http';
    } else {
        this.configUrl = '分享页面路径，https';
    }
    } else { // 安卓
    this.configUrl = window.location.href.split('#')[0]
    }
```
