webpackJsonp([3],{3324:function(t,s,a){t.exports=a(3348)},3348:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a(3349),n=a(0),r=n(null,e.a,!1,null,null,null);s.default=r.exports},3349:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h1",[t._v("Use in vue-cli")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli"}},[t._v("vue-cli")]),t._v(" is one of the best Vue application development tools. We are going to use "),a("code",{pre:!0},[t._v("antd")]),t._v(" within it and modify the webpack config for some customized needs.")]),t._v(" "),a("h2",{attrs:{id:"Install-and-Initialization"}},[t._v("Install and Initialization "),a("a",{staticClass:"anchor",attrs:{href:"#Install-and-Initialization","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("We need to install "),a("code",{pre:!0},[t._v("vue-cli")]),t._v(" first, you may need install "),a("a",{attrs:{href:"https://github.com/yarnpkg/yarn/"}},[t._v("yarn")]),t._v(" too.")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-bash"}},[t._v("$ npm install -g vue-cli yarn\n")])]),t._v(" "),a("p",[t._v("Create a new project named "),a("code",{pre:!0},[t._v("antd-demo")]),t._v(".")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-bash"}},[t._v("$ vue init webpack antd-demo\n")])]),t._v(" "),a("p",[t._v("The tool will create and initialize environment and dependencies automatically,"),a("br"),t._v("\nplease try config your proxy setting or use another npm registry if any network errors happen during it."),a("br")]),t._v(" "),a("p",[t._v("Then we go inside "),a("code",{pre:!0},[t._v("antd-demo")]),t._v(" and start it.")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-bash"}},[t._v("$ "),a("span",{attrs:{class:"hljs-built_in"}},[t._v("cd")]),t._v(" antd-demo\n$ npm run dev\n")])]),t._v(" "),a("p",[t._v('Open the browser at http://localhost:8080/. It renders a header saying "Welcome to Your Vue.js App" on the page.')]),t._v(" "),a("h2",{attrs:{id:"Import-antd"}},[t._v("Import antd "),a("a",{staticClass:"anchor",attrs:{href:"#Import-antd","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("Below is the default directory structure.")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":""}},[t._v("├── README.md\n├── package.json\n├── index.html\n├── src\n│   ├── assets\n│   │   └── logo.png\n│   ├── components\n│   │   └── HelloWorld.vue\n│   ├── App.vue\n│   └── main.js\n└── yarn.lock\n")])]),t._v(" "),a("p",[t._v("Now we install "),a("code",{pre:!0},[t._v("vue-antd-ui")]),t._v(" from yarn or npm.")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-bash"}},[t._v("$ yarn add vue-antd-ui\n")])]),t._v(" "),a("p",[t._v("Modify "),a("code",{pre:!0},[t._v("src/main.js")]),t._v(", import Button component from "),a("code",{pre:!0},[t._v("antd")]),t._v(".")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-jsx"}},[a("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Button "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"hljs-string"}},[t._v("'vue-antd-ui/lib/button'")]),t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"hljs-string"}},[t._v("'vue-antd-ui/dist/antd.css'")]),t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" App "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"hljs-string"}},[t._v("'./App'")]),t._v("\n\nVue.component(Button.name, Button)\n\nVue.config.productionTip = "),a("span",{attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n\n"),a("span",{attrs:{class:"hljs-comment"}},[t._v("/* eslint-disable no-new */")]),t._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Vue({\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("el")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'#app'")]),t._v(",\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("components")]),t._v(": { App },\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("template")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'<App/>'")]),t._v("\n})\n")])]),t._v(" "),a("p",[t._v("Modify "),a("code",{pre:!0},[t._v("src/App.vue")]),t._v("。")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-jsx"}},[t._v("<template>\n  "),a("span",{attrs:{class:"xml"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"app"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("img")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("src")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"./assets/logo.png"')]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("a-button")]),t._v(" "),a("span",{attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(">")]),t._v("Button>"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("a-button")]),t._v(">")]),t._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("router-view")]),t._v("/>")]),t._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n...\n")])])]),t._v(" "),a("p",[t._v("Ok, you should now see a blue primary button displayed on the page. Next you can choose any components of "),a("code",{pre:!0},[t._v("antd")]),t._v(" to develop your application. Visit other workflows of "),a("code",{pre:!0},[t._v("vue-cli")]),t._v(" at its "),a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/blob/master/README.md"}},[t._v("User Guide ")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"Advanced-Guides"}},[t._v("Advanced Guides "),a("a",{staticClass:"anchor",attrs:{href:"#Advanced-Guides","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("We are successfully running antd components now but in the real world, there are still lots of problems about antd-demo."),a("br"),t._v("\nFor instance, we actually import all styles of components in the project which may be a network performance issue."),a("br")]),t._v(" "),a("p",[t._v("Now we need to customize the default webpack config.")]),t._v(" "),a("h3",{attrs:{id:"Use-babel-plugin-import"}},[t._v("Use babel-plugin-import "),a("a",{staticClass:"anchor",attrs:{href:"#Use-babel-plugin-import","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import"}},[t._v("babel-plugin-import")]),t._v(" is a babel plugin for importing components on demand ("),a("a",{attrs:{href:"/ant-design/docs/vue/getting-started/#Import-on-Demand"}},[t._v("How does it work?")]),t._v(").")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-bash"}},[t._v("$ yarn add babel-plugin-import --dev\n")])]),t._v(" "),a("p",[t._v("Modify "),a("code",{pre:!0},[t._v(".babelrc")]),t._v(".")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-diff"}},[t._v('  {\n    "presets": [\n      ["env", {\n        "modules": false,\n        "targets": {\n          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]\n        }\n      }],\n      "stage-2"\n    ],\n'),a("span",{attrs:{class:"hljs-deletion"}},[t._v('-   "plugins": ["transform-vue-jsx", "transform-runtime"]')]),t._v("\n"),a("span",{attrs:{class:"hljs-addition"}},[t._v('+   "plugins": [')]),t._v("\n"),a("span",{attrs:{class:"hljs-addition"}},[t._v('+     "transform-vue-jsx",')]),t._v("\n"),a("span",{attrs:{class:"hljs-addition"}},[t._v('+     "transform-runtime",')]),t._v("\n"),a("span",{attrs:{class:"hljs-addition"}},[t._v('+     ["import", { "libraryName": "vue-antd-ui", "libraryDirectory": "es", "style": "css" }]')]),t._v("\n"),a("span",{attrs:{class:"hljs-addition"}},[t._v("+   ]")]),t._v("\n  }\n")])]),t._v(" "),a("p",[t._v("Remove the "),a("code",{pre:!0},[t._v("import 'vue-antd-ui/dist/antd.css';")]),t._v(" statement added before because "),a("code",{pre:!0},[t._v("babel-plugin-import")]),t._v(" will import styles and import components like below:")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-diff"}},[t._v("  // src/main.js\n  import Vue from 'vue'\n"),a("span",{attrs:{class:"hljs-deletion"}},[t._v("- import Button from 'vue-antd-ui/lib/button';")]),t._v("\n"),a("span",{attrs:{class:"hljs-addition"}},[t._v("+ import { Button } from 'vue-antd-ui';")]),t._v("\n"),a("span",{attrs:{class:"hljs-deletion"}},[t._v("- import 'vue-antd-ui/dist/antd.css'")]),t._v("\n  import App from './App'\n\n  Vue.component(Button.name, Button)\n\n  Vue.config.productionTip = false\n\n  /* eslint-disable no-new */\n  new Vue({\n    el: '#app',\n    components: { App },\n    template: '<App/>'\n  })\n")])]),t._v(" "),a("p",[t._v("Then reboot with "),a("code",{pre:!0},[t._v("npm run dev")]),t._v(" and visit the demo page, you should not find any "),a("a",{attrs:{href:"https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png"}},[t._v("warning messages")]),t._v(" in the console, which prove that the "),a("code",{pre:!0},[t._v("import on demand")]),t._v(" config is working now. You will find more info about it in "),a("a",{attrs:{href:"/ant-design/docs/vue/getting-started/#Import-on-Demand"}},[t._v("this guide")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"Customize-Theme"}},[t._v("Customize Theme "),a("a",{staticClass:"anchor",attrs:{href:"#Customize-Theme","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("p",[t._v("According to the "),a("a",{attrs:{href:"/ant-design/docs/vue/customize-theme"}},[t._v("Customize Theme documentation")]),t._v(", to customize the theme, we need to modify "),a("code",{pre:!0},[t._v("less")]),t._v(" variables with tools such as "),a("a",{attrs:{href:"https://github.com/webpack/less-loader"}},[t._v("less-loader")]),t._v(".")])])}],r={render:e,staticRenderFns:n};s.a=r}});