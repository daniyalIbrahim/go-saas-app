(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,p=[];l<s.length;l++)o=s[l],a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({"forgot-password~login~profile~reset-password~signup":"forgot-password~login~profile~reset-password~signup","forgot-password":"forgot-password",login:"login",profile:"profile","reset-password":"reset-password",signup:"signup",home:"home",notfound:"notfound",verify:"verify",welcome:"welcome"}[e]||e)+"."+{"forgot-password~login~profile~reset-password~signup":"81234ae7","forgot-password":"f202500f",login:"7175202f",profile:"89c34e21","reset-password":"7ef04505",signup:"a17dace6",home:"e89bf6f5",notfound:"ecade8ab",verify:"6f667664",welcome:"babada5a"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"forgot-password~login~profile~reset-password~signup":1,"forgot-password":1,login:1,profile:1,"reset-password":1,signup:1,home:1,notfound:1,verify:1,welcome:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({"forgot-password~login~profile~reset-password~signup":"forgot-password~login~profile~reset-password~signup","forgot-password":"forgot-password",login:"login",profile:"profile","reset-password":"reset-password",signup:"signup",home:"home",notfound:"notfound",verify:"verify",welcome:"welcome"}[e]||e)+"."+{"forgot-password~login~profile~reset-password~signup":"1a061547","forgot-password":"f123ed13",login:"f123ed13",profile:"76b8f9c4","reset-password":"f123ed13",signup:"f123ed13",home:"400b58cb",notfound:"822ac54f",verify:"c4bf9866",welcome:"a56bb951"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e),u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0b38":function(e,t,n){"use strict";var r=n("c8d1"),o=n.n(r);o.a},"85ee":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});n("cadf"),n("551c"),n("097d");var r="auth-token",o=""},c8d1:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[!0===e.isAuthenticated?n("Sidebar",{model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}):e._e(),n("Header",{model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),n("v-content",[n("router-view")],1)],1)},a=[],i=n("d225"),s=n("308d"),c=n("6bb5"),u=n("4e2b"),l=n("9ab4"),p=n("60a3"),d=n("4bb5"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{attrs:{app:"",color:"primary","clipped-left":e.$vuetify.breakpoint.lgAndUp,dark:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase header",on:{click:function(t){e.goTo("/")}}},[!0===e.isAuthenticated?n("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}):e._e(),n("span",{class:{"hidden-xs-only":e.isAuthenticated}},[e._v("Go ♥ Vue")]),n("span",{staticClass:"font-weight-light ",class:{"hidden-xs-only":e.isAuthenticated}},[e._v(" STARTER")])],1),n("v-spacer"),!1===e.isAuthenticated?n("v-btn",{staticClass:"hidden-xs-only",attrs:{to:"/login",flat:""}},[e._v("Login")]):e._e(),!1===e.isAuthenticated?n("v-btn",{staticClass:"hidden-xs-only",attrs:{to:"/signup",flat:""}},[e._v("Sign up")]):e._e(),!0===e.isAuthenticated?n("v-btn",{attrs:{"offset-y":"",icon:""},on:{click:function(t){e.goTo("/")}}},[n("v-icon",[e._v("apps")])],1):e._e(),!0===e.isAuthenticated?n("v-btn",{attrs:{"offset-y":"",icon:""},on:{click:function(t){e.goTo("/")}}},[n("v-icon",[e._v("notifications")])],1):e._e()],1)},v=[],h=n("b0b4"),g=function(e){function t(){return Object(i["a"])(this,t),Object(s["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(h["a"])(t,[{key:"changeValue",value:function(e){}},{key:"goTo",value:function(e){this.$router.push({path:e})}},{key:"doLogout",value:function(){this.drawer=!1,this.logout(),this.$router.push({path:"/"})}},{key:"drawer",get:function(){return this.value},set:function(e){this.changeValue(e)}}]),t}(p["d"]);l["a"]([Object(p["c"])(Boolean)],g.prototype,"value",void 0),l["a"]([Object(d["a"])("logout",{namespace:"user"})],g.prototype,"logout",void 0),l["a"]([Object(d["b"])("isAuthenticated",{namespace:"user"})],g.prototype,"isAuthenticated",void 0),l["a"]([Object(p["b"])("input")],g.prototype,"changeValue",null),g=l["a"]([p["a"]],g);var m=g,b=m,w=(n("0b38"),n("2877")),y=n("6544"),k=n.n(y),x=n("8336"),j=n("132d"),_=n("9910"),O=n("71d9"),T=n("706c"),E=n("2a7f"),S=Object(w["a"])(b,f,v,!1,null,"1f5b8a40",null);S.options.__file="Header.vue";var A=S.exports;k()(S,{VBtn:x["a"],VIcon:j["a"],VSpacer:_["a"],VToolbar:O["a"],VToolbarSideIcon:T["a"],VToolbarTitle:E["a"]});var V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,fixed:"",app:"","disable-resize-watcher":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-img",{attrs:{"aspect-ratio":16/9,src:n("e04d")}},[r("v-layout",{staticClass:"lightbox white--text",attrs:{"pa-2":"",column:"","fill-height":""}},[r("v-spacer"),r("v-flex",{attrs:{shrink:""}},[r("v-avatar",{attrs:{tile:!1,size:"32px",color:"primary"}},[r("img",{attrs:{src:e.getAvatar,alt:e.getName}})]),r("div",{staticClass:"subheading"},[e._v(e._s(e.user.name))]),r("div",{staticClass:"body-1"},[e._v(e._s(e.user.email))])],1)],1)],1),r("v-list",{attrs:{dense:""}},[r("v-list-tile",{on:{click:function(t){e.goTo("/")}}},[r("v-list-tile-action",[r("v-icon",[e._v("home")])],1),r("v-list-tile-content",[r("v-list-tile-title",[e._v("Home")])],1)],1),r("v-list-tile",{on:{click:function(t){e.goTo("/profile")}}},[r("v-list-tile-action",[r("v-icon",[e._v("person")])],1),r("v-list-tile-content",[r("v-list-tile-title",[e._v("Profile")])],1)],1),r("v-divider"),r("v-list-tile",{on:{click:e.doLogout}},[r("v-list-tile-action",[r("v-icon",[e._v("power_settings_new")])],1),r("v-list-tile-content",[r("v-list-tile-title",[e._v("Logout")])],1)],1)],1)],1)},R=[],C=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(s["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.items=[{title:"Home",icon:"dashboard"},{title:"About",icon:"question_answer"}],e}return Object(u["a"])(t,e),Object(h["a"])(t,[{key:"changeValue",value:function(e){}},{key:"goTo",value:function(e){this.$router.push({path:e})}},{key:"doLogout",value:function(){this.drawer=!1,this.logout(),this.$router.push({path:"/"})}},{key:"drawer",get:function(){return this.value},set:function(e){this.changeValue(e)}}]),t}(p["d"]);l["a"]([Object(p["c"])(Boolean)],C.prototype,"value",void 0),l["a"]([Object(d["a"])("logout",{namespace:"user"})],C.prototype,"logout",void 0),l["a"]([Object(d["b"])("getName",{namespace:"user"})],C.prototype,"getName",void 0),l["a"]([Object(d["b"])("getAvatar",{namespace:"user"})],C.prototype,"getAvatar",void 0),l["a"]([Object(d["c"])("user")],C.prototype,"user",void 0),l["a"]([Object(p["b"])("input")],C.prototype,"changeValue",null),C=l["a"]([p["a"]],C);var P=C,N=P,U=n("8212"),L=n("ce7e6"),I=n("0e8f"),$=n("adda"),B=n("a722"),q=n("8860"),H=n("ba95"),z=n("40fe"),M=n("5d23"),K=n("f774"),D=Object(w["a"])(N,V,R,!1,null,null,null);D.options.__file="Sidebar.vue";var J=D.exports;k()(D,{VAvatar:U["a"],VDivider:L["a"],VFlex:I["a"],VIcon:j["a"],VImg:$["a"],VLayout:B["a"],VList:q["a"],VListTile:H["a"],VListTileAction:z["a"],VListTileContent:M["a"],VListTileTitle:M["b"],VNavigationDrawer:K["a"],VSpacer:_["a"]});var F=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(s["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.drawer=!1,e}return Object(u["a"])(t,e),t}(p["d"]);l["a"]([Object(d["b"])("isAuthenticated",{namespace:"user"})],F.prototype,"isAuthenticated",void 0),F=l["a"]([Object(p["a"])({components:{Header:A,Sidebar:J}})],F);var G=F,Q=G,W=n("7496"),X=n("549c"),Y=Object(w["a"])(Q,o,a,!1,null,null,null);Y.options.__file="App.vue";var Z=Y.exports;k()(Y,{VApp:W["a"],VContent:X["a"]});var ee=n("bb71");n("da64");r["default"].use(ee["a"],{iconfont:"md"});var te=n("0a0d"),ne=n.n(te),re=n("04e1"),oe=n.n(re),ae=n("8c4f"),ie=n("85ee");r["default"].use(ae["a"]);var se=new ae["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("forgot-password~login~profile~reset-password~signup"),n.e("login")]).then(n.bind(null,"a55b"))}},{path:"/signup",name:"signup",component:function(){return Promise.all([n.e("forgot-password~login~profile~reset-password~signup"),n.e("signup")]).then(n.bind(null,"34c3"))}},{path:"/welcome",name:"welcome",component:function(){return n.e("welcome").then(n.bind(null,"eec5"))}},{path:"/verify/:id/:token",name:"verify",component:function(){return n.e("verify").then(n.bind(null,"b6d1"))}},{path:"/forgot-password",name:"forgot-password",component:function(){return Promise.all([n.e("forgot-password~login~profile~reset-password~signup"),n.e("forgot-password")]).then(n.bind(null,"f243"))}},{path:"/reset-password/:id/:token",name:"reset-password",component:function(){return Promise.all([n.e("forgot-password~login~profile~reset-password~signup"),n.e("reset-password")]).then(n.bind(null,"0813"))}},{path:"/profile",name:"profile",component:function(){return Promise.all([n.e("forgot-password~login~profile~reset-password~signup"),n.e("profile")]).then(n.bind(null,"c66d"))},meta:{requiresAuth:!0}},{path:"/404",alias:"*",name:"notfound",component:function(){return n.e("notfound").then(n.bind(null,"9703"))}}]});se.beforeEach(function(e,t,n){if(e.matched.some(function(e){return e.meta.requiresAuth})){var r=localStorage.getItem(ie["b"]);if(null===r)n({path:"/login",query:{next:e.fullPath}});else{var o=oe()(r);1e3*o.exp<ne()().valueOf()?n({path:"/login",query:{next:e.fullPath}}):n()}}else n()});var ce=se,ue=n("2f62"),le=n("f499"),pe=n.n(le),de=(n("96cf"),n("3b8d")),fe=(n("7f7f"),n("6821f")),ve=n.n(fe),he=function(){var e=localStorage.getItem(ie["b"]);if(null===e||""===e)return{email:void 0,id:void 0,name:void 0,token:void 0};var t=oe()(e);return 1e3*t.exp<ne()().valueOf()?{email:void 0,id:void 0,name:void 0,token:void 0}:{email:t.email,id:t.id,name:t.name,token:e}}(),ge={isAuthenticated:function(e){return!!e.token},getName:function(e){return e.name?e.name:""},getAvatar:function(e){var t="https://www.gravatar.com/avatar/",n="d=mm&r=g&s=".concat(512),r=(""+e.email).trim().toLowerCase(),o=ve()(r,{encoding:"binary"});return"".concat(t).concat(o,"?").concat(n)}},me={login:function(){var e=Object(de["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,a,i,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=n.email,a=n.password,e.prev=2,e.next=5,fetch(ie["a"]+"/api/v1/auth",{body:pe()({email:o,password:a}),headers:{Accept:"application/json","Content-Type":"application/json"},method:"post"});case 5:return i=e.sent,e.next=8,i.json();case 8:if(s=e.sent,!(i.status>=200&&i.status<300)){e.next=15;break}c=s,r("SET_USER",c),r("SET_TOKEN",c),e.next=17;break;case 15:if(!s.error){e.next=17;break}throw new Error(s.message);case 17:e.next=22;break;case 19:throw e.prev=19,e.t0=e["catch"](2),new Error(e.t0);case 22:case"end":return e.stop()}},e,this,[[2,19]])}));function t(t,n){return e.apply(this,arguments)}return t}(),signup:function(){var e=Object(de["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,a,i,s,c,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=n.name,a=n.email,i=n.password,e.prev=2,e.next=5,fetch(ie["a"]+"/api/v1/account",{body:pe()({name:o,email:a,password:i}),headers:{Accept:"application/json","Content-Type":"application/json"},method:"post"});case 5:return s=e.sent,e.next=8,s.json();case 8:if(c=e.sent,!(s.status>=200&&s.status<300)){e.next=14;break}u=c,r("SET_USER",u),e.next=16;break;case 14:if(!c.error){e.next=16;break}throw new Error(c.message);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e["catch"](2),new Error(e.t0);case 21:case"end":return e.stop()}},e,this,[[2,18]])}));function t(t,n){return e.apply(this,arguments)}return t}(),save:function(){var e=Object(de["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,a,i,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=n.name,a=n.email,e.prev=2,e.next=5,fetch(ie["a"]+"/api/v1/account",{body:pe()({name:o,email:a}),headers:{Accept:"application/json",Authorization:"Bearer "+localStorage.getItem(ie["b"]),"Content-Type":"application/json"},method:"put"});case 5:return i=e.sent,e.next=8,i.json();case 8:if(s=e.sent,!(i.status>=200&&i.status<300)){e.next=15;break}c=s,r("SET_USER",c),r("SET_TOKEN",c),e.next=17;break;case 15:if(!s.error){e.next=17;break}throw new Error(s.message);case 17:e.next=22;break;case 19:throw e.prev=19,e.t0=e["catch"](2),new Error(e.t0);case 22:case"end":return e.stop()}},e,this,[[2,19]])}));function t(t,n){return e.apply(this,arguments)}return t}(),get:function(){var e=Object(de["a"])(regeneratorRuntime.mark(function e(t){var n,r,o,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,fetch(ie["a"]+"/api/v1/account",{headers:{Accept:"application/json",Authorization:"Bearer "+localStorage.getItem(ie["b"]),"Content-Type":"application/json"},method:"get"});case 4:return r=e.sent,e.next=7,r.json();case 7:if(o=e.sent,!(r.status>=200&&r.status<300)){e.next=13;break}a=o,n("SET_USER",a),e.next=16;break;case 13:if(!o.error){e.next=16;break}throw n("UNSET_USER"),new Error(o.message);case 16:e.next=22;break;case 18:throw e.prev=18,e.t0=e["catch"](1),n("UNSET_USER"),new Error(e.t0);case 22:case"end":return e.stop()}},e,this,[[1,18]])}));function t(t){return e.apply(this,arguments)}return t}(),logout:function(e){var t=e.commit;t("UNSET_USER")}},be={SET_USER:function(e,t){e.email=t.email,e.id=t.id,e.name=t.name},SET_TOKEN:function(e,t){localStorage.setItem(ie["b"],t.token),e.token=t.token},UNSET_USER:function(e){localStorage.removeItem(ie["b"]),e.email=void 0,e.id=void 0,e.name=void 0,e.token=void 0}},we={namespaced:!0,state:he,getters:ge,actions:me,mutations:be};r["default"].use(ue["a"]);var ye=!1,ke=new ue["a"].Store({modules:{user:we},strict:ye,plugins:[]});r["default"].config.productionTip=!1,new r["default"]({router:ce,store:ke,render:function(e){return e(Z)}}).$mount("#app")},e04d:function(e,t,n){e.exports=n.p+"img/sidebar.389f70b6.png"}});
//# sourceMappingURL=app.7ce82cd5.js.map