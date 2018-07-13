webpackJsonp([8],{3317:function(s,e,t){s.exports=t(3330)},3330:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(3331),r=t(0),v=r(null,a.a,!1,null,null,null);e.default=v.exports},3331:function(s,e,t){"use strict";var a=function(){var s=this,e=s.$createElement;s._self._c;return s._m(0)},r=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",[t("h1",[s._v("定制主题")]),s._v(" "),t("p",[s._v("vue-antd-ui的组件结构及样式和Antd React完全一致，你可以参考Antd React的定制方式进行配置。")]),s._v(" "),t("p",[s._v("Ant Design 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"样式变量"}},[s._v("样式变量 "),t("a",{staticClass:"anchor",attrs:{href:"#样式变量","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("p",[s._v("antd 的样式使用了 "),t("a",{attrs:{href:"http://lesscss.org/"}},[s._v("Less")]),s._v(" 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/vueComponent/ant-design/blob/master/components/style/themes/default.less"}},[s._v("默认样式变量")])])]),s._v(" "),t("p",[s._v("如果以上变量不能满足你的定制需求，可以给我们提 issue。")]),s._v(" "),t("h2",{attrs:{id:"定制方式"}},[s._v("定制方式 "),t("a",{staticClass:"anchor",attrs:{href:"#定制方式","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("p",[s._v("我们使用 "),t("a",{attrs:{href:"http://lesscss.org/usage/#using-less-in-the-browser-modify-variables"}},[s._v("modifyVars")]),s._v(" 的方式来覆盖变量。"),t("br"),s._v("\n在具体工程实践中，有 "),t("code",{pre:!0},[s._v("package.theme")]),s._v(" 和 "),t("code",{pre:!0},[s._v("less")]),s._v(" 两种方案，选择一种即可。"),t("br")]),s._v(" "),t("h3",{attrs:{id:"1)-theme-属性（推荐）"}},[s._v("1) theme 属性（推荐） "),t("a",{staticClass:"anchor",attrs:{href:"#1)-theme-属性（推荐）","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("p",[s._v("配置在 "),t("code",{pre:!0},[s._v("package.json")]),s._v(" 或 "),t("code",{pre:!0},[s._v(".webpackrc")]),s._v(" 下的 "),t("code",{pre:!0},[s._v("theme")]),s._v(" 字段。theme 可以配置为一个对象或文件路径。")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-js"}},[t("span",{attrs:{class:"hljs-string"}},[s._v('"theme"')]),s._v(": {\n  "),t("span",{attrs:{class:"hljs-string"}},[s._v('"primary-color"')]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v('"#1DA57A"')]),s._v(",\n},\n")])]),s._v(" "),t("p",[s._v("定义 "),t("code",{pre:!0},[s._v("theme")]),s._v(" 属性时，需要配合使用"),t("code",{pre:!0},[s._v("less-loader")]),s._v(" 的 "),t("code",{pre:!0},[s._v("modifyVars")]),s._v(" 配置来覆盖原来的样式变量。"),t("br"),s._v("\n可以参考 "),t("a",{attrs:{href:"https://github.com/ant-tool/atool-build/blob/a4b3e3eec4ffc09b0e2352d7f9d279c4c28fdb99/src/getWebpackCommonConfig.js#L131-L138"}},[s._v("atool-build 中 less-loader 的 webpack 相关配置")]),t("br")]),s._v(" "),t("p",[s._v("注意：")]),s._v(" "),t("ul",[t("li",[s._v("样式必须加载 less 格式。\n"),t("ul",[t("li",[s._v("如果你在使用 "),t("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import"}},[s._v("babel-plugin-import")]),s._v(" 的 "),t("code",{pre:!0},[s._v("style")]),s._v(" 配置来引入样式，需要将配置值从 "),t("code",{pre:!0},[s._v("'css'")]),s._v(" 改为 "),t("code",{pre:!0},[s._v("true")]),s._v("，这样会引入 less 文件。")]),s._v(" "),t("li",[s._v("如果你是通过 "),t("code",{pre:!0},[s._v("'vue-antd-ui/dist/antd.css'")]),s._v(" 引入样式的，改为 "),t("code",{pre:!0},[s._v("vue-antd-ui/dist/antd.less")]),s._v("。")])])]),s._v(" "),t("li",[s._v("如果要覆盖 "),t("code",{pre:!0},[s._v("@icon-url")]),s._v(" 变量，内容需要包括引号 "),t("code",{pre:!0},[s._v('"@icon-url": "\'your-icon-font-path\'"')]),s._v("。")])]),s._v(" "),t("h3",{attrs:{id:"2)-less"}},[s._v("2) less "),t("a",{staticClass:"anchor",attrs:{href:"#2)-less","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("p",[s._v("用 less 文件进行变量覆盖。")]),s._v(" "),t("p",[s._v("建立一个单独的 "),t("code",{pre:!0},[s._v("less")]),s._v(" 文件如下，再引入这个文件。")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-less"}},[t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("@import")]),s._v(' "~'),t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("vue-antd-ui")]),s._v("/"),t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("dist")]),s._v("/"),t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("antd")]),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".less")]),s._v('";   '),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 引入官方提供的 less 样式入口文件")]),s._v("\n"),t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("@import")]),s._v(' "'),t("span",{attrs:{class:"hljs-selector-tag"}},[s._v("your-theme-file")]),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".less")]),s._v('";   '),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 用于覆盖上面定义的变量")]),s._v("\n")])]),s._v(" "),t("p",[s._v("注意：这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 "),t("code",{pre:!0},[s._v("babel-plugin-import")]),s._v(" 的 "),t("code",{pre:!0},[s._v("style")]),s._v(" 属性一起使用。")]),s._v(" "),t("h2",{attrs:{id:"社区教程-for-Antd-React"}},[s._v("社区教程 for Antd React "),t("a",{staticClass:"anchor",attrs:{href:"#社区教程-for-Antd-React","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f"}},[s._v("How to Customize Ant Design with React & Webpack… the Missing Guide")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://gist.github.com/Kruemelkatze/057f01b8e15216ae707dc7e6c9061ef7"}},[s._v("Theming Ant Design with Sass and Webpack")])])])])}],v={render:a,staticRenderFns:r};e.a=v}});