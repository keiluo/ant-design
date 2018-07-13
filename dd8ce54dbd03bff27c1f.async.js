webpackJsonp([9],{3316:function(e,t,s){e.exports=s(3328)},3328:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(3329),r=s(0),o=r(null,a.a,!1,null,null,null);t.default=o.exports},3329:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("Customize Theme")]),e._v(" "),s("p",[e._v("The structure and styles of vue-antd-ui are exactly the same as those of Antd. You can refer to the Antd React customization mode for configuration.")]),e._v(" "),s("p",[e._v("Ant Design allows you to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc.")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://zos.alipayobjects.com/rmsportal/zTFoszBtDODhXfLAazfSpYbSLSEeytoG.png",alt:""}})]),e._v(" "),s("h2",{attrs:{id:"Less-variables"}},[e._v("Less variables "),s("a",{staticClass:"anchor",attrs:{href:"#Less-variables","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),s("p",[e._v("We are using "),s("a",{attrs:{href:"http://lesscss.org/"}},[e._v("Less")]),e._v(" as the development language for styling. A set of less variables are defined for each design aspect that can be customized to your needs.")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vueComponent/ant-design/blob/master/components/style/themes/default.less"}},[e._v("Default Variables")])])]),e._v(" "),s("p",[e._v("Please report an issue if the existing list of variables is not enough for you.")]),e._v(" "),s("h2",{attrs:{id:"How-to-do-it"}},[e._v("How to do it "),s("a",{staticClass:"anchor",attrs:{href:"#How-to-do-it","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),s("p",[e._v("We recommend "),s("a",{attrs:{href:"http://lesscss.org/usage/#using-less-in-the-browser-modify-variables"}},[e._v("modifyVars")]),e._v(" to override the default values of the variables. There are two ways to achieve it in practice.")]),e._v(" "),s("h3",{attrs:{id:"1)-Using-theme-property-(recommended-way)"}},[e._v("1) Using "),s("code",{pre:!0},[e._v("theme")]),e._v(" property (recommended way) "),s("a",{staticClass:"anchor",attrs:{href:"#1)-Using-theme-property-(recommended-way)","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),s("p",[e._v("Specify the "),s("code",{pre:!0},[e._v("theme")]),e._v(" property in the "),s("code",{pre:!0},[e._v("package.json")]),e._v(" or "),s("code",{pre:!0},[e._v(".webpackrc")]),e._v(" file, whose value can be either an object or the path to a JS file that contains the custom values of specific variables:")]),e._v(" "),s("ul",[s("li",[e._v("example of directly specifying the custom values as an object:")])]),e._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-js"}},[s("span",{attrs:{class:"hljs-string"}},[e._v('"theme"')]),e._v(": {\n  "),s("span",{attrs:{class:"hljs-string"}},[e._v('"primary-color"')]),e._v(": "),s("span",{attrs:{class:"hljs-string"}},[e._v('"#1DA57A"')]),e._v(",\n},\n")])]),e._v(" "),s("p",[e._v("you can write a webpack config about "),s("a",{attrs:{href:"https://github.com/webpack/less-loader#less-options"}},[e._v("less-loader modifyVars")]),e._v(" like "),s("a",{attrs:{href:"https://github.com/ant-tool/atool-build/blob/a4b3e3eec4ffc09b0e2352d7f9d279c4c28fdb99/src/getWebpackCommonConfig.js#L131-L138"}},[e._v("atool-build")]),e._v(" does.")]),e._v(" "),s("p",[e._v("Note:")]),e._v(" "),s("ul",[s("li",[e._v("Importing styles from less files is necessary.\n"),s("ul",[s("li",[e._v("If you import styles by specifying the "),s("code",{pre:!0},[e._v("style")]),e._v(" option of "),s("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import"}},[e._v("babel-plugin-import")]),e._v(", change it from "),s("code",{pre:!0},[e._v("'css'")]),e._v(" to "),s("code",{pre:!0},[e._v("true")]),e._v(", which will import the "),s("code",{pre:!0},[e._v("less")]),e._v(" version of antd.")]),e._v(" "),s("li",[e._v("If you import styles from "),s("code",{pre:!0},[e._v("'vue-antd-ui/dist/antd.css'")]),e._v(", change it to "),s("code",{pre:!0},[e._v("vue-antd-ui/dist/antd.less")]),e._v(".")])])]),e._v(" "),s("li",[e._v("If you want to override "),s("code",{pre:!0},[e._v("@icon-url")]),e._v(", the value must be contained in quotes like "),s("code",{pre:!0},[e._v('"@icon-url": "\'your-icon-font-path\'"')]),e._v(".")])]),e._v(" "),s("h3",{attrs:{id:"2)-Overriding-Less-variables-(alternative-way)"}},[e._v("2) Overriding Less variables (alternative way) "),s("a",{staticClass:"anchor",attrs:{href:"#2)-Overriding-Less-variables-(alternative-way)","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),s("p",[e._v("Override variables via less definition files.")]),e._v(" "),s("p",[e._v("Create a standalone less file like the one below, and import it in your project.")]),e._v(" "),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-less"}},[s("span",{attrs:{class:"hljs-selector-tag"}},[e._v("@import")]),e._v(' "~'),s("span",{attrs:{class:"hljs-selector-tag"}},[e._v("vue-antd-ui")]),e._v("/"),s("span",{attrs:{class:"hljs-selector-tag"}},[e._v("dist")]),e._v("/"),s("span",{attrs:{class:"hljs-selector-tag"}},[e._v("antd")]),s("span",{attrs:{class:"hljs-selector-class"}},[e._v(".less")]),e._v('";   '),s("span",{attrs:{class:"hljs-comment"}},[e._v("// import official less entry file")]),e._v("\n"),s("span",{attrs:{class:"hljs-selector-tag"}},[e._v("@import")]),e._v(' "'),s("span",{attrs:{class:"hljs-selector-tag"}},[e._v("your-theme-file")]),s("span",{attrs:{class:"hljs-selector-class"}},[e._v(".less")]),e._v('";   '),s("span",{attrs:{class:"hljs-comment"}},[e._v("// override variables here")]),e._v("\n")])]),e._v(" "),s("p",[e._v("Note: This way will load the styles of all components, regardless of your demand, which cause "),s("code",{pre:!0},[e._v("style")]),e._v(" option of "),s("code",{pre:!0},[e._v("babel-plugin-import")]),e._v(" not working.")]),e._v(" "),s("h2",{attrs:{id:"Related-Articles"}},[e._v("Related Articles "),s("a",{staticClass:"anchor",attrs:{href:"#Related-Articles","aria-hidden":"true"}},[e._v("#")])]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://medium.com/@GeoffMiller/how-to-customize-ant-design-with-react-webpack-the-missing-guide-c6430f2db10f"}},[e._v("How to Customize Ant Design with React & Webpack… the Missing Guide")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://gist.github.com/Kruemelkatze/057f01b8e15216ae707dc7e6c9061ef7"}},[e._v("Theming Ant Design with Sass and Webpack")])])])])}],o={render:a,staticRenderFns:r};t.a=o}});