# vue-SPA
个人博客vue2.0/vue-cli/vue-router/css3

单页面应用-个人博客

技术栈：vue2.0/vue-router/vue-cli/CSS3

开发环境：

vue-cli（操作步骤：新建文件夹->node环境下在命令框里输入vue init webpack demo->npm install->npm run dev）

如何运行？

下载此文件夹以后只需要在node环境下的命令窗口执行指令：npm install（安装项目依赖）->npm run dev/npm start（运行） 即可；

作品概述：

1.用户在非登录状态时可以直接访问“推荐”页，若触发非“推荐”页面，路由将会跳转到“登录”页面进行简单登录（登录无需验证，没有连接后台数据库，
所以可以随意输入用户名和密码）；

2.被触发的路由在用户登录之后因设置“重定向（redirect）”会直接跳转到相应被触发的路由页面；

3.当用户在地址栏输入并访问没有存储的路由时，页面会直接跳转到home页，使页面更具有语义化；

4.该项目组件化开发，每个功能页面的图片地址都是http路径存储而不是本地存储的；超链接文本内容同样具有可访问性，主页面和公共组件“header”直接链接到作者的博客地址；

5.在“感兴趣页”新增CSS3动画效果，能实现平滑移动，视觉效果更佳；

该作品是个很好的vue-router入门案例，灵活运用了vue-router并使其贯穿了整个作品，路由是个很灵活的东西，在实际应用里很常见我们需要多加练习、多加运用；
所有页面的背景图片都是精心挑选且符合色彩搭配，视觉效果极佳，给用户带来很好的浏览视觉体验。
