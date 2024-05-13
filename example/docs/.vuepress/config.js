const path = require("path");
module.exports = {
  theme: "",
  title: "统一管理平台",
  description: "几木云",
  base: "/ccit-ui/",
  // base: "/",
  host: "0.0.0.0",
  port: 3333,
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/assets/logo.png",
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
  ],
  markdown: {
    lineNumbers: false,
  },
  sass: {
    indentedSyntax: true,
  },
  plugins: [
    [
      "vuepress-plugin-typescript",
      {
        tsLoaderOptions: {
          // ts-loader 的所有配置项
        },
      },
    ],
    [
      "vuepress-plugin-code-copy",
      { successText: "已复制到粘贴板", staticIcon: true },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],
  ],
  chainWebpack: (config, isServer) => {
    config.resolveLoader.modules.add(path.resolve(__dirname, "./node_modules"));
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "最后更新时间",
    repo: "https://gitee.com/ccit-web/ccit-ui",
    editLinks: false,
  },
};

