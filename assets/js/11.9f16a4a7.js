(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{214:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"节点操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点操作"}},[t._v("#")]),t._v(" 节点操作")]),t._v(" "),s("h2",{attrs:{id:"创建节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建节点"}},[t._v("#")]),t._v(" 创建节点")]),t._v(" "),s("div",{staticClass:"language-javaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tagName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"添加节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加节点"}},[t._v("#")]),t._v(" 添加节点")]),t._v(" "),s("p",[t._v("将一个节点添加到元素的未尾")]),t._v(" "),s("div",{staticClass:"language-javaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("将一个节点添加到指定元素节点的位置")]),t._v(" "),s("div",{staticClass:"language-javaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("指定位置"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"删除节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除节点"}},[t._v("#")]),t._v(" 删除节点")]),t._v(" "),s("div",{staticClass:"language-javaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"复制节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复制节点"}},[t._v("#")]),t._v(" 复制节点")]),t._v(" "),s("p",[s("strong",[t._v("注意：如果括号参数为空，或者里面是 false 浅拷贝，只复制标签，不复制标签里面的内容")])]),t._v(" "),s("div",{staticClass:"language-javaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cloneNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"创建元素的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建元素的区别"}},[t._v("#")]),t._v(" 创建元素的区别")]),t._v(" "),s("ul",[s("li",[t._v("document.write(); ----会导致页面重绘。")]),t._v(" "),s("li",[t._v("element.inputHTML; ---创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂。")]),t._v(" "),s("li",[t._v("node.addChilde(); --- 创建多个元素效率稍低一点点，但是结构更清晰。")])]),t._v(" "),s("p",[s("strong",[t._v("总结：不同浏览器下，innerHTML 效率比 createElement 高")])]),t._v(" "),s("h2",{attrs:{id:"利用节点层级关系获取元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用节点层级关系获取元素"}},[t._v("#")]),t._v(" 利用节点层级关系获取元素")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("利用父子兄弟节点获取元素")])]),t._v(" "),s("li",[s("p",[t._v("逻辑性强，但是兼容性差")])])]),t._v(" "),s("p",[t._v("节点概述\n一般地，节点至少拥有 nodeType(节点类型)、nodeName(节点名称) 和 nodeValue(节点值) 这三个基本属性。")]),t._v(" "),s("ul",[s("li",[t._v("元素节点 nodeType 为1")]),t._v(" "),s("li",[t._v("属性节点 nodeType 为2")]),t._v(" "),s("li",[t._v("文本节点 nodeType 为3（文本节点包含文字、空格、换行等）")])]),t._v(" "),s("p",[t._v("我们在实际开发中，节点操作主要操作的是元素节点。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("父级节点\nnode.parentNode;  ---得到的是离元素最近的父级节点（亲爸爸） 如果找不到父节点就返回为 null。")])]),t._v(" "),s("li",[s("p",[t._v("子节点")])])]),t._v(" "),s("p",[t._v("parent.childNodes; ---得到了所有的子节点，包含元素节点、文本节点等等（一般不提倡使用 childNodes.")]),t._v(" "),s("p",[t._v("parent.children;(非标准) 虽然是非标签，但是得到各个浏览器的支持.")]),t._v(" "),s("p",[t._v("parentNode.firstChild --获取第一个子节点 不管是文本节点还是元素节点.")]),t._v(" "),s("p",[t._v("parentNode.lastChild --获取最后一个子节点 不管是文本节点还是元素节点.")]),t._v(" "),s("p",[t._v("parentNode.firstElementChild --获取第一个子节点 (IE9以上版本才能用)")]),t._v(" "),s("p",[t._v("parentNode.lastElementChild --获取最后一个子节点 (IE9以上版本才能用)")]),t._v(" "),s("p",[s("strong",[t._v("实际开发的写法。既没有兼容问题，又返回第一个子元素")])]),t._v(" "),s("p",[s("strong",[t._v("parent.children[0]")])]),t._v(" "),s("h2",{attrs:{id:"兄弟节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兄弟节点"}},[t._v("#")]),t._v(" 兄弟节点")]),t._v(" "),s("p",[t._v("node.nextSibling --获取下个兄弟节点，包含文本节点、元素节点等等")]),t._v(" "),s("p",[t._v("node.previousSibling --获取上一个兄弟节点，包含文本节点、元素节点等等")]),t._v(" "),s("p",[t._v("node.nextElementSibling --得到下一个兄弟元素节点 （IE9 以上版本才能用）")]),t._v(" "),s("p",[t._v("node.previousElementSibling --得到上一个兄弟节点 (IE9 以上版本才能能)")])])}),[],!1,null,null,null);a.default=e.exports}}]);