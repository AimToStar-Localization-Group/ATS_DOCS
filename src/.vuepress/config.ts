import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/ATS_DOCS/",
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    [
      "script",
      {},
      `\
      !(function () {"use strict";var w = window, d = document, u = "//api.tongjiniao.com/c?_=668064638689931264", s = document.createElement("script"), r = document.getElementsByTagName("script")[0];s.type = "text/javascript";s.setAttribute("charset", "UTF-8");s.async = !0;s.src = u;r.parentNode.insertBefore(s, r);})();
      `,
    ],],
  lang: "zh-CN",
  title: "指星百科站",
  description: "此处收集了指星公益服和指星汉化组的相关资料",
  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
  markdown: {
    headers: {
      level: [1, 2, 3, 4, 5, 6],
    },
  },
});
