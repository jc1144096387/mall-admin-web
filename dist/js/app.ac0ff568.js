(function(e){function t(t){for(var a,r,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-09b26793":"5263fcf5","chunk-0e7f0eda":"d1024337","chunk-0f6be7ed":"72722a13","chunk-10af246c":"a73d596c","chunk-2742f1c8":"6abcce1a","chunk-2d0d3d8a":"2d219a2d","chunk-2d0da6aa":"93eb4a6a","chunk-2d21d4f0":"d59c0d20","chunk-5a0a654d":"64e63305","chunk-670fcbc8":"a4a1f284","chunk-6720451f":"499d6e41","chunk-93368f28":"327099c6","chunk-960658fc":"3a0c0a25","chunk-bae33aec":"515c00fd","chunk-e0326722":"b4364752","chunk-0c03297d":"70be699f","chunk-4ff26360":"052f090b","chunk-830f87e4":"b8884042"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0e7f0eda":1,"chunk-0f6be7ed":1,"chunk-2742f1c8":1,"chunk-5a0a654d":1,"chunk-670fcbc8":1,"chunk-6720451f":1,"chunk-93368f28":1,"chunk-960658fc":1,"chunk-bae33aec":1,"chunk-e0326722":1,"chunk-0c03297d":1,"chunk-4ff26360":1,"chunk-830f87e4":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-09b26793":"31d6cfe0","chunk-0e7f0eda":"a9c5c9b4","chunk-0f6be7ed":"3921bba2","chunk-10af246c":"31d6cfe0","chunk-2742f1c8":"1472a0b8","chunk-2d0d3d8a":"31d6cfe0","chunk-2d0da6aa":"31d6cfe0","chunk-2d21d4f0":"31d6cfe0","chunk-5a0a654d":"e9071de5","chunk-670fcbc8":"7514ecd3","chunk-6720451f":"8a1904df","chunk-93368f28":"c6ef0cb2","chunk-960658fc":"c6ef0cb2","chunk-bae33aec":"e3a4cde4","chunk-e0326722":"3cfa1023","chunk-0c03297d":"f21f7aae","chunk-4ff26360":"f21f7aae","chunk-830f87e4":"f21f7aae"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],m.parentNode.removeChild(m),n(i)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/mall-admin-web/dist/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"074b":function(e,t,n){"use strict";var a=n("3acd"),r=n.n(a);r.a},"10fd":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e,t,n){var a=/^[1][3,4,5,6,7,8][0-9]{9}$/;a.test(t)?n():n(new Error("手机号格式错误"))}},"1a5d":function(e,t,n){var a={"./login/Login.vue":["ede4"],"./main/Main.vue":["6b61"],"./main/main-components/breadcrumb-nav.vue":["5f03","chunk-2d0d3d8a"],"./main/main-components/footer.vue":["a620","chunk-6720451f"],"./main/main-components/fullscreen.vue":["d16c","chunk-2d21d4f0"],"./main/main-components/header.vue":["867c","chunk-5a0a654d"],"./main/main-components/lang-switch.vue":["3c61","chunk-0f6be7ed"],"./main/main-components/lockscreen/components/locking-page.vue":["2638","chunk-960658fc"],"./main/main-components/lockscreen/components/unlock.vue":["5f8e","chunk-93368f28"],"./main/main-components/lockscreen/lockscreen.vue":["1454","chunk-10af246c"],"./main/main-components/message-tip.vue":["a982","chunk-09b26793"],"./main/main-components/shrinkable-menu/components/sidebarMenu.vue":["37ce","chunk-bae33aec"],"./main/main-components/shrinkable-menu/components/sidebarMenuShrink.vue":["6c07","chunk-2d0da6aa"],"./main/main-components/shrinkable-menu/shrinkable-menu.vue":["b5e3","chunk-0e7f0eda"],"./main/main-components/tags-page-opened.vue":["8665","chunk-670fcbc8"],"./main/main-views/goods-manage/GoodsManage.vue":["0c71","chunk-e0326722","chunk-830f87e4"],"./main/main-views/home/Home.vue":["6803","chunk-2742f1c8"],"./main/main-views/order-manage/OrderManage.vue":["72ce","chunk-e0326722","chunk-4ff26360"],"./main/main-views/user-manage/UserManage.vue":["cbd6","chunk-e0326722","chunk-0c03297d"]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id="1a5d",e.exports=r},"365c":function(e,t){},"3acd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i={name:"app"},s=i,c=(n("034f"),n("2877")),u=Object(c["a"])(s,r,o,!1,null,null,null),l=u.exports,d=n("a18c"),m=n("2f62"),f=n("a78e"),h=n.n(f),p={state:{},mutations:{logout:function(){h.a.remove("userInfo"),localStorage.clear()}}},g=p,v={state:{sex:[],messageType:[],priority:[],leaveType:[]},mutations:{setSex:function(e,t){e.sex=t},setMessageType:function(e,t){e.messageType=t},setPriority:function(e,t){e.priority=t},setLeaveType:function(e,t){e.leaveType=t}}},b=v;a["default"].use(m["a"]);var k=new m["a"].Store({state:{},mutations:{},actions:{},modules:{user:g,dict:b}}),y=k,w=n("f825"),x=n.n(w);n("f8ce");a["default"].use(x.a),a["default"].use(x.a,{transfer:!0,size:"large",capture:!1,select:{arrow:"md-arrow-dropdown",arrowSize:20}}),a["default"].config.productionTip=!1,new a["default"]({router:d["a"],store:y,render:function(e){return e(l)}}).$mount("#app")},"6b61":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layout"},[a("Layout",{style:{minHeight:"100vh"}},[a("Sider",{ref:"side1",staticClass:"sider",attrs:{breakpoint:"md","hide-trigger":"",collapsible:"","collapsed-width":78},model:{value:e.isCollapsed,callback:function(t){e.isCollapsed=t},expression:"isCollapsed"}},[a("div",{staticClass:"logo-con"},[a("router-link",{attrs:{to:{name:"home"}}},[a("img",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapsed,expression:"!isCollapsed"}],key:"max-logo",attrs:{src:n("cf05")}}),a("img",{directives:[{name:"show",rawName:"v-show",value:e.isCollapsed,expression:"isCollapsed"}],key:"min-logo",attrs:{src:n("d1e0")}})])],1),a("Menu",{class:e.menuitemClasses,attrs:{"active-name":e.$route.name,theme:"dark",width:"auto"}},[a("MenuItem",{attrs:{name:"user-manage",to:{name:"user-manage"}}},[a("Icon",{attrs:{type:"ios-navigate"}}),a("span",[e._v("用户管理")])],1),a("MenuItem",{attrs:{name:"goods-manage",to:{name:"goods-manage"}}},[a("Icon",{attrs:{type:"ios-search"}}),a("span",[e._v("商品管理")])],1),a("MenuItem",{attrs:{name:"order-manage",to:{name:"order-manage"}}},[a("Icon",{attrs:{type:"ios-settings"}}),a("span",[e._v("订单管理")])],1)],1)],1),a("Layout",[a("Header",{staticClass:"layout-header-bar"},[a("Icon",{class:e.rotateIcon,style:{margin:"0 20px"},attrs:{type:"md-menu",size:"24"},nativeOn:{click:function(t){return e.collapsedSider(t)}}}),a("div",{staticClass:"user-dropdown-menu-con"},[a("Row",{staticClass:"user-dropdown-innercon",attrs:{type:"flex",justify:"end",align:"middle"}},[a("Button",{staticStyle:{"margin-right":"20px"},attrs:{type:"primary",shape:"circle"},on:{click:e.logout}},[e._v("登出")])],1)],1)],1),a("Content",{style:{margin:"20px",background:"#fff",minHeight:"220px"}},[a("router-view")],1)],1)],1)],1)},r=[],o={data:function(){return{isCollapsed:!1}},computed:{rotateIcon:function(){return["menu-icon",this.isCollapsed?"rotate-icon":""]},menuitemClasses:function(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}},methods:{collapsedSider:function(){this.$refs.side1.toggleCollapse()},logout:function(){this.$router.push({name:"login"})}}},i=o,s=(n("074b"),n("2877")),c=Object(s["a"])(i,a,r,!1,null,"4940785d",null);t["default"]=c.exports},"85ec":function(e,t,n){},a13f:function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7");var a=n("2b0e"),r=n("8c4f"),o=n("6b61"),i=n("ede4");a["default"].use(r["a"]);var s=[{path:"/",name:"main",redirect:"/login",component:o["default"],children:[{path:"/home",name:"home",component:function(){return n.e("chunk-2742f1c8").then(n.bind(null,"6803"))}},{path:"/user-manage",name:"user-manage",component:function(){return Promise.all([n.e("chunk-e0326722"),n.e("chunk-0c03297d")]).then(n.bind(null,"cbd6"))}},{path:"/goods-manage",name:"goods-manage",component:function(){return Promise.all([n.e("chunk-e0326722"),n.e("chunk-830f87e4")]).then(n.bind(null,"0c71"))}},{path:"/order-manage",name:"order-manage",component:function(){return Promise.all([n.e("chunk-e0326722"),n.e("chunk-4ff26360")]).then(n.bind(null,"72ce"))}}]},{path:"/login",name:"login",component:i["default"]}],c=new r["a"]({mode:"history",base:"/mall-admin-web/dist/",routes:s});t["a"]=c},a248:function(e,t,n){"use strict";var a=n("a13f"),r=n.n(a);r.a},c276:function(e,t,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("4de4"),n("4160"),n("c975"),n("d81d"),n("b0c0"),n("b680"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("1276"),n("498a"),n("159b"),n("ddb0");var a=n("284c"),r=n("bf2d"),o=n("bc3a"),i=n.n(o),s=n("365c"),c=function(e){return function(){return n("1a5d")("./".concat(e,".vue"))}},u=(n("a18c"),n("a78e")),l=n.n(u),d={title:function(e){e=e||"XBoot 前后端分离开发平台",window.document.title=e},millsToTime:function(e){if(!e)return"";var t=e/1e3;if(t<60)return t.toFixed(0)+" 秒";var n=t/60;if(n<60)return n.toFixed(0)+" 分钟";var a=n/60;if(a<24)return a.toFixed(0)+" 小时";var r=a/24;if(r<30)return r.toFixed(0)+" 天";var o=r/30;if(o<12)return o.toFixed(0)+" 个月";var i=o/12;return i.toFixed(0)+" 年"},inOf:function(e,t){var n=!0;return e.forEach((function(e){t.indexOf(e)<0&&(n=!1)})),n},oneOf:function(e,t){return t.indexOf(e)>=0},getRouterObjByName:function(e,t){if(!t||!e||!e.length)return null;var n=null,a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var c=i.value;if(c.name==t)return c;if(n=d.getRouterObjByName(c.children,t),n)return n}}catch(u){r=!0,o=u}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}return null},handleTitle:function(e,t){return"object"==Object(r["a"])(t.title)?e.$t(t.title.i18n):t.title},setCurrentPath:function(e,t){var n="",a=!1;e.$store.state.app.routers.forEach((function(r){1==r.children.length?r.children[0].name==t&&(n=d.handleTitle(e,r),"otherRouter"==r.name&&(a=!0)):r.children.forEach((function(o){o.name==t&&(n=d.handleTitle(e,o),"otherRouter"==r.name&&(a=!0))}))}));var r=[];if("home_index"==t)r=[{title:d.handleTitle(e,d.getRouterObjByName(e.$store.state.app.routers,"home_index")),path:"",name:"home_index"}];else if((t.indexOf("_index")>=0||a)&&"home_index"!==t)r=[{title:d.handleTitle(e,d.getRouterObjByName(e.$store.state.app.routers,"home_index")),path:"/home",name:"home_index"},{title:n,path:"",name:t}];else{var o=e.$store.state.app.routers.filter((function(e){if(e.children.length<=1)return e.children[0].name==t;var n=0,a=e.children,r=a.length;while(n<r){if(a[n].name==t)return!0;n++}return!1}))[0];if(o.children.length<=1&&"home"==o.name)r=[{title:"首页",path:"",name:"home_index"}];else if(o.children.length<=1&&"home"!==o.name)r=[{title:"首页",path:"/home",name:"home_index"},{title:o.title,path:"",name:t}];else{var i=o.children.filter((function(e){return e.name==t}))[0];r=[{title:"首页",path:"/home",name:"home_index"},{title:o.title,path:"",name:o.name},{title:i.title,path:o.path+"/"+i.path,name:t}]}}return e.$store.commit("setCurrentPath",r),r},openNewPage:function(e,t,n,a){if(e.$store){var r=e.$store.state.app.pageOpenedList,o=r.length,i=0,s=!1;while(i<o){if(t==r[i].name){e.$store.commit("pageOpenedList",{index:i,argu:n,query:a}),s=!0;break}i++}if(!s){var c=e.$store.state.app.tagsList.filter((function(e){return e.children?t==e.children[0].name:t==e.name}));c=c[0],c&&(c=c.children?c.children[0]:c,n&&(c.argu=n),a&&(c.query=a),e.$store.commit("increateTag",c))}e.$store.commit("setCurrentPageName",t)}},toDefaultPage:function(e,t,n,a){var r=e.length,o=0,i=!0;while(o<r){if(e[o].name==t&&e[o].children&&void 0==e[o].redirect){n.replace({name:e[o].children[0].name}),i=!1,a();break}o++}i&&a()},fullscreenEvent:function(e){e.$store.commit("initCachepage")}};d.initRouter=function(e){var t=[],n=[],a=[{path:"/*",name:"error-404",meta:{title:"404-页面不存在"},component:"error-page/404"}],r=l.a.get("userInfo");if(r)if(e.$store.state.app.added){var o=window.localStorage.getItem("menuData");if(!o)return void e.$store.commit("setAdded",!1);var c=JSON.parse(o);d.initMenuData(e,c)}else{var u=window.localStorage.getItem("accessToken");i.a.get(s["getMenuList"],{headers:{accessToken:u}}).then((function(r){var o=r.result;o&&(d.initAllMenuData(t,o),d.initRouterNode(n,a),e.$store.commit("updateAppRouter",t.filter((function(e){return e.children.length>0}))),e.$store.commit("updateDefaultRouter",n),d.initMenuData(e,o),window.localStorage.setItem("menuData",JSON.stringify(o)),e.$store.commit("setAdded",!0))}))}},d.initAllMenuData=function(e,t){var n=[];t.forEach((function(e){-1==e.type&&e.children.forEach((function(e){n.push(e)}))})),d.initRouterNode(e,n)},d.initMenuData=function(e,t){var n=[],r=t,o=[];if(r.forEach((function(e){var t={name:e.name,title:e.title,icon:e.icon};o.push(t)})),!(o.length<1)){e.$store.commit("setNavList",o);var i=window.localStorage.getItem("currNav");if(i){var s=!0,c=!1,u=void 0;try{for(var l,m=o[Symbol.iterator]();!(s=(l=m.next()).done);s=!0){var f=l.value;if(f.name==i){e.$store.commit("setCurrNavTitle",f.title);break}}}catch(y){c=!0,u=y}finally{try{s||null==m.return||m.return()}finally{if(c)throw u}}}else i=o[0].name,e.$store.commit("setCurrNavTitle",o[0].title);e.$store.commit("setCurrNav",i);var h=!0,p=!1,g=void 0;try{for(var v,b=r[Symbol.iterator]();!(h=(v=b.next()).done);h=!0){f=v.value;if(f.name==i){r=f.children;break}}}catch(y){p=!0,g=y}finally{try{h||null==b.return||b.return()}finally{if(p)throw g}}d.initRouterNode(n,r),e.$store.commit("updateMenulist",n.filter((function(e){return e.children.length>0})));var k=[];e.$store.state.app.routers.map((function(e){e.children.length<=1?k.push(e.children[0]):k.push.apply(k,Object(a["a"])(e.children))})),e.$store.commit("setTagsList",k)}},d.initRouterNode=function(e,t){var n=!0,a=!1,r=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var s=o.value,u=Object.assign({},s);u.component=c(u.component),s.children&&s.children.length>0&&(u.children=[],d.initRouterNode(u.children,s.children));var l={};l.permTypes=u.permTypes?u.permTypes:null,l.title=u.title?u.title+" - XBoot前后端分离开发平台 By: Exrick":null,l.url=u.url?u.url:null,u.meta=l,e.push(u)}}catch(m){a=!0,r=m}finally{try{n||null==i.return||i.return()}finally{if(a)throw r}}};t["a"]=d},cf05:function(e,t,n){e.exports=n.p+"img/logo.ea56cd71.png"},d1e0:function(e,t,n){e.exports=n.p+"img/logo-min.bfdd4967.png"},ede4:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("Row",{attrs:{type:"flex",justify:"center",align:"middle"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitLogin(t)}}},[n("Col",{staticStyle:{width:"368px"}},[n("Row",[n("h1",{staticStyle:{"text-align":"center"}},[e._v("电商管理系统")])]),e.socialLogining?e._e():n("Row",[n("Tabs",{model:{value:e.tabName,callback:function(t){e.tabName=t},expression:"tabName"}},[n("TabPane",{attrs:{label:"账户密码登录",name:"username",icon:"md-person"}},["username"==e.tabName?n("Form",{ref:"usernameLoginForm",staticClass:"form",attrs:{model:e.form,rules:e.rules}},[n("FormItem",{attrs:{prop:"username"}},[n("Input",{attrs:{prefix:"ios-contact",size:"large",clearable:"",placeholder:"请输入用户名",autocomplete:"off"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),n("FormItem",{attrs:{prop:"password"}},[n("Input",{attrs:{type:"password",prefix:"ios-lock",size:"large",clearable:"",placeholder:"请输入密码",autocomplete:"off"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1):e._e()],1)],1),n("Row",[n("Button",{staticClass:"login-btn",attrs:{type:"primary",size:"large",loading:e.loading,long:""},on:{click:e.submitLogin}},[e.loading?n("span",[e._v("登录中")]):n("span",[e._v("登录")])])],1)],1)],1)],1)],1)},r=[],o=(n("4160"),n("b0c0"),n("159b"),n("10fd")),i=n("a78e"),s=n.n(i),c=n("c276"),u={components:{},data:function(){return{captchaId:"",captchaImg:"",loadingCaptcha:!0,socialLogining:!0,error:!1,tabName:"username",saveLogin:!0,getSms:"获取验证码",loading:!1,sending:!1,errorCode:"",form:{username:"",password:"",mobile:"",code:""},rules:{username:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],imgCode:[{required:!0,message:"验证码不能为空",trigger:"blur"}],mobile:[{required:!0,message:"手机号不能为空",trigger:"blur"},{validator:o["a"],trigger:"blur"}]}}},methods:{getCaptchaImg:function(){var e=this;this.loadingCaptcha=!0,initCaptcha().then((function(t){e.loadingCaptcha=!1,t.success&&(e.captchaId=t.result,e.captchaImg=drawCodeImage+e.captchaId)}))},sendSmsCode:function(){var e=this;this.$refs.mobileLoginForm.validate((function(t){t&&(e.sending=!0,e.getSms="发送中",sendLoginSms(e.form.mobile).then((function(t){e.getSms="获取验证码",e.sending=!1,t.success&&(e.$Message.success("发送短信验证码成功"),e.$refs.countDown.startCountDown())})))}))},afterLogin:function(e){var t=this,n=e.result;this.setStore("accessToken",n),getOtherSet().then((function(e){if(e.result){var t=e.result.ssoDomain;s.a.set("accessToken",n,{domain:t,expires:7})}})),userInfo().then((function(e){if(e.success){delete e.result.permissions;var n=[];e.result.roles.forEach((function(e){n.push(e.name)})),t.setStore("roles",n),t.setStore("saveLogin",t.saveLogin),t.saveLogin?s.a.set("userInfo",JSON.stringify(e.result),{expires:7}):s.a.set("userInfo",JSON.stringify(e.result)),t.setStore("userInfo",e.result),t.$store.commit("setAvatarPath",e.result.avatar),c["a"].initRouter(t),t.$router.push({name:"home_index"})}else t.loading=!1}))},submitLogin:function(){this.$router.push({name:"home"})},relatedLogin:function(){var e=this,t=this.$route.query,n=t.error;""!==n&&void 0!==n&&this.$Message.error(n);var a=t.related,r=t.JWTKey;a&&"1"==a?r&&getJWT({JWTKey:r}).then((function(t){if(t.success){e.socialLogining=!0;var n=t.result;e.setStore("accessToken",n),getOtherSet().then((function(e){if(e.result){var t=e.result.ssoDomain;s.a.set("accessToken",n,{domain:t,expires:7})}})),userInfo().then((function(t){if(t.success){delete t.result.permissions;var n=[];t.result.roles.forEach((function(e){n.push(e.name)})),e.setStore("roles",n),s.a.set("userInfo",JSON.stringify(t.result),{expires:7}),e.setStore("userInfo",t.result),e.$store.commit("setAvatarPath",t.result.avatar),c["a"].initRouter(e),e.$router.push({name:"home_index"})}else e.socialLogining=!1,e.$Message.error("使用第三方账号登录失败")}))}else e.socialLogining=!1,e.$Message.error("使用第三方账号登录失败")})):this.socialLogining=!1}},mounted:function(){this.relatedLogin(),this.getCaptchaImg()}},l=u,d=(n("a248"),n("2877")),m=Object(d["a"])(l,a,r,!1,null,null,null);t["default"]=m.exports}});
//# sourceMappingURL=app.ac0ff568.js.map