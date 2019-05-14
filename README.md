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
