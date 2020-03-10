(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{209:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"vuepress搭建个人博客"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress搭建个人博客"}},[s._v("#")]),s._v(" vuePress搭建个人博客")]),s._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("为什么会搭建个人博客呢？\n优秀的程序员都在写博客，写博客有很多好处：")]),s._v(" "),e("ul",[e("li",[s._v("帮助自己梳理、总结、理解知识点")]),s._v(" "),e("li",[s._v("帮助别人理解知识点")]),s._v(" "),e("li",[s._v("简历更好看，更多面试机会")]),s._v(" "),e("li",[s._v("B格高一点 ^-^")])]),s._v(" "),e("h3",{attrs:{id:"什么是vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是vuepress"}},[s._v("#")]),s._v(" 什么是VuePress")]),s._v(" "),e("p",[e("strong",[s._v("VuePress")]),s._v("是尤雨溪（vue.js 框架作者）4月12日发布的一个全新的基于 vue 的静态网站生成器，实际上就是一个 vue 的 spa 应用，内置 webpack，可以用来写文档。详见 "),e("a",{attrs:{href:"https://vuepress.docschina.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress中文网"),e("OutboundLink")],1),s._v("\n其实类似的建站工具有很多，比如 WordPress、Jekyll、Hexo 等，其中 WordPress 需要自己购买虚拟主机，不考虑；Jekyll 是 Github-Page 默认支持的，听说操作比较复杂，没有用过不做过多评价了；Hexo 之前一直在用，但一直觉得主题不好看，风格不够简洁优雅。自从遇见 VuePress，嗯，就是它了~\nVuePress其实有挺多优点：")]),s._v(" "),e("ul",[e("li",[s._v("界面简洁优雅")]),s._v(" "),e("li",[s._v("容易上手")]),s._v(" "),e("li",[s._v("更多的兼容、扩展 Markdown 语法")]),s._v(" "),e("li",[s._v("响应式布局、PC端、手机端")]),s._v(" "),e("li",[s._v("Google Analytics 集成")]),s._v(" "),e("li",[s._v("支付 PWA")])]),s._v(" "),e("h3",{attrs:{id:"开始搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始搭建"}},[s._v("#")]),s._v(" 开始搭建")]),s._v(" "),e("p",[s._v("下述命令需要用户已经安装了 node 、yarn、git 环境。如果用户对这一部分内容不熟悉，请参考相关教程")]),s._v(" "),e("h3",{attrs:{id:"步骤一：-安装vuepress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤一：-安装vuepress"}},[s._v("#")]),s._v(" 步骤一： 安装VuePress")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 全局安装\nnpm install -g vuepress\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"步骤二：初始化vuepress项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤二：初始化vuepress项目"}},[s._v("#")]),s._v(" 步骤二：初始化VuePress项目")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm init -y\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("会产生package.json文件\n"),e("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/813a4df769a1d2c7976cc217a8f7c37d/xmlnote/F6868218782C4F07B0062BF2B5B0A7D2/899",alt:"1581164731121"}}),s._v("\n建立项目文件夹及首页")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("├─ docs\n│  ├─ README.md (该文件会被熏染成为index.html)\n│  └─ .vuepress\n│     └─ config.js\n└─ package.json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("在docs目录中的README.md文件将成为项目的根目录文件，该文件会被渲染成为index.html。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/813a4df769a1d2c7976cc217a8f7c37d/xmlnote/5ADD92B84D994E6A8BC73E45C25DA7A9/901",alt:"1581165912482"}})]),s._v(" "),e("h3",{attrs:{id:"步骤三：在-package-json-里添加两个启动命令："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤三：在-package-json-里添加两个启动命令："}},[s._v("#")]),s._v(" 步骤三：在 package.json 里添加两个启动命令：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('"scripts": {\n        "dev": "vuepress dev docs",\n        "build": "vuepress build docs"\n    }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"步骤四：配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤四：配置"}},[s._v("#")]),s._v(" 步骤四：配置")]),s._v(" "),e("p",[s._v("config.js")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("module.exports = {\n    title: '一只小猪猪',\n    description: '学不尽的知识，走不完的路',\n    // 部署到自己的仓库才用这个节点\n    // base:'/blog/',\n    //使用自己的二级域名\n    base: '/',\n    // dest: './dist', //默认在.vuepress目录下\n    port: '8080',\n    head: [\n        ['link', {rel: 'icon', href: '/logo.jpg'}]\n    ],\n    plugins: ['@vuepress/back-to-top'],\n    markdown: {\n        lineNumbers: true\n    },\n    // 主题配置\n    themeConfig: {\n        // 引入nav.js文件\n        nav: require(\"./nav.js\"),\n        sidebar: require(\"./sidebar.js\"),\n        sidebarDepth: 2,\n        lastUpdated: 'Last Updated',\n        searchMaxSuggestoins: 10,\n        serviceWorker: {\n            updatePopup: {\n                message: \"有新的内容.\",\n                buttonText: '更新'\n            }\n        },\n        //全局配置自动生成左侧边栏\n        // sidebar: 'auto',\n        editLinks: true,\n        editLinkText: '在 GitHub 上编辑此页 ！'\n    },\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br")])]),e("h3",{attrs:{id:"步骤五：发布-github-上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤五：发布-github-上"}},[s._v("#")]),s._v(" 步骤五：发布 GitHub 上")]),s._v(" "),e("ul",[e("li",[e("p",[s._v('如果你打算发布到 https://你的gitHub名称.github.io/，则可以省略这一步，因为 base 默认即是 "/"。')])]),s._v(" "),e("li",[e("p",[s._v('如果你打算发布到 https://你的gitHub名称.github.io/你的仓库名称/（也就是说你的仓库在 https://github.com/你的gitHub名称/你的仓库名称），则将 base 设置为 "/你的仓库名称/"。')])]),s._v(" "),e("li",[e("p",[s._v('如果是第二点的话，需要注意，如果使用自定义域名的时候，需要设置 base:"/",设置为默认的，要不然css,js的引用路径会不正确。（本人踩坑一小时^-^）')])])]),s._v(" "),e("h3",{attrs:{id:"步骤六：创建脚本文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤六：创建脚本文件"}},[s._v("#")]),s._v(" 步骤六：创建脚本文件:")]),s._v(" "),e("p",[s._v("在project的根目录下，创建一个deploy.sh文件：\n复制进去，稍微修改即可")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#!/usr/bin/env sh\n\n# 确保脚本抛出遇到的错误\nset -e\n\n# 生成静态文件\nnpm run build\n\n# 进入生成的文件夹\ncd docs/.vuepress/dist\n\n# 如果是发布到自定义域名\necho 'www.blog.superliao.top' > CNAME\ngit init\ngit add -A\ngit commit -m 'deploy'\n\n# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址\n#git push -f https://github.com/growliao/growliao.blog.github.io.git master\n\n# 如果发布到 https://<USERNAME>.github.io/<REPO>\ngit push -f git@github.com:growliao/blog.git master:gh-pages\n\ncd -\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("h3",{attrs:{id:"步骤七-打包上传到github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤七-打包上传到github"}},[s._v("#")]),s._v(" 步骤七: 打包上传到GitHub")]),s._v(" "),e("p",[s._v("在deploy.sh目录下 打开 CMD 页面 执行")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("bash deploy.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"打开github-username-github-io-刷新即可看到效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打开github-username-github-io-刷新即可看到效果"}},[s._v("#")]),s._v(" 打开GitHub userName.github.io 刷新即可看到效果")]),s._v(" "),e("p",[s._v("大功告成啦！！！")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://note.youdao.com/yws/public/resource/813a4df769a1d2c7976cc217a8f7c37d/xmlnote/73C235818C7B4CAB9063F820FF4B0EAD/895",alt:"1581167581090"}})]),s._v(" "),e("p",[s._v("注意：")]),s._v(" "),e("ul",[e("li",[s._v("设置首页图片时，需要在 .vuepress 目录下创建一个public 文件夹，把图片放里面")]),s._v(" "),e("li",[s._v("博客尽量写到 docs 目录下")])])])}),[],!1,null,null,null);a.default=t.exports}}]);