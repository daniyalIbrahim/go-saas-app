(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reset-password"],{"02f4":function(e,t,r){var a=r("4588"),n=r("be13");e.exports=function(e){return function(t,r){var o,s,i=String(n(t)),c=a(r),l=i.length;return c<0||c>=l?e?"":void 0:(o=i.charCodeAt(c),o<55296||o>56319||c+1===l||(s=i.charCodeAt(c+1))<56320||s>57343?e?i.charAt(c):o:e?i.slice(c,c+2):s-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var a=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},"0813":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[e._v("Reset password")]),r("v-spacer")],1),r("v-card-text",[r("v-form",{ref:"form"},[r("PasswordTextField",{model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("Alert",{attrs:{type:"error"},model:{value:e.error,callback:function(t){e.error=t},expression:"error"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",loading:e.loading,disabled:e.loading},on:{click:e.setPassword}},[e._v("Set new password")])],1)],1)],1)],1)],1)},n=[],o=(r("a481"),r("f499")),s=r.n(o),i=(r("96cf"),r("3b8d")),c=r("d225"),l=r("b0b4"),u=r("308d"),d=r("6bb5"),p=r("4e2b"),f=r("9ab4"),v=r("60a3"),h=r("98ab"),b=r("2407"),g=r("85ee"),m=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(u["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.password="",e.loading=!1,e.error="",e}return Object(p["a"])(t,e),Object(l["a"])(t,[{key:"setPassword",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.$refs.form.validate()){e.next=17;break}return this.error="",this.loading=!0,e.prev=3,e.next=6,fetch(g["a"]+"/api/v1/account/password",{body:s()({id:this.$route.params.id,resetPasswordToken:this.$route.params.token,password:this.password}),headers:{Accept:"application/json","Content-Type":"application/json"},method:"put"});case 6:return t=e.sent,e.next=9,t.json();case 9:r=e.sent,t.status>=200&&t.status<300?(this.loading=!1,this.$router.replace("/login")):r.error&&(this.error=r.message,this.loading=!1),e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](3),this.error="An error occured",this.loading=!1;case 17:case"end":return e.stop()}},e,this,[[3,13]])}));function t(){return e.apply(this,arguments)}return t}()}]),t}(v["d"]);m=f["a"]([Object(v["a"])({components:{Alert:h["a"],PasswordTextField:b["a"]}})],m);var x=m,w=x,y=r("2877"),j=r("6544"),O=r.n(j),k=r("8336"),S=r("b0af"),_=r("99d9"),C=r("a523"),E=r("0e8f"),$=r("4bd4"),R=r("a722"),V=r("9910"),T=r("71d9"),A=r("2a7f"),P=Object(y["a"])(w,a,n,!1,null,null,null);P.options.__file="ResetPassword.vue";t["default"]=P.exports;O()(P,{VBtn:k["a"],VCard:S["a"],VCardActions:_["a"],VCardText:_["b"],VContainer:C["a"],VFlex:E["a"],VForm:$["a"],VLayout:R["a"],VSpacer:V["a"],VToolbar:T["a"],VToolbarTitle:A["a"]})},"0bfb":function(e,t,r){"use strict";var a=r("cb7c");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"214f":function(e,t,r){"use strict";r("b0c5");var a=r("2aba"),n=r("32e9"),o=r("79e5"),s=r("be13"),i=r("2b4c"),c=r("520a"),l=i("species"),u=!o(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var p=i(e),f=!o(function(){var t={};return t[p]=function(){return 7},7!=""[e](t)}),v=f?!o(function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[l]=function(){return r}),r[p](""),!t}):void 0;if(!f||!v||"replace"===e&&!u||"split"===e&&!d){var h=/./[p],b=r(s,p,""[e],function(e,t,r,a,n){return t.exec===c?f&&!n?{done:!0,value:h.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}}),g=b[0],m=b[1];a(String.prototype,e,g),n(RegExp.prototype,p,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)})}}},2407:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-text-field",{attrs:{rules:e.passwordRules,"prepend-icon":"lock",name:"password",label:"Password",type:"password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})},n=[],o=r("d225"),s=r("b0b4"),i=r("308d"),c=r("6bb5"),l=r("4e2b"),u=r("9ab4"),d=r("60a3"),p=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(i["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.passwordRules=[function(e){return!!e||"Password is required"},function(e){return/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e)||"Password must be eight characters long, with at least one letter and one number"}],e}return Object(l["a"])(t,e),Object(s["a"])(t,[{key:"changeValue",value:function(e){}},{key:"password",get:function(){return this.value},set:function(e){this.changeValue(e)}}]),t}(d["d"]);u["a"]([Object(d["c"])(String)],p.prototype,"value",void 0),u["a"]([Object(d["b"])("input")],p.prototype,"changeValue",null),p=u["a"]([d["a"]],p);var f=p,v=f,h=r("2877"),b=r("6544"),g=r.n(b),m=r("2677"),x=Object(h["a"])(v,a,n,!1,null,null,null);x.options.__file="PasswordTextField.vue";t["a"]=x.exports;g()(x,{VTextField:m["a"]})},"4c94":function(e,t,r){},"520a":function(e,t,r){"use strict";var a=r("0bfb"),n=RegExp.prototype.exec,o=String.prototype.replace,s=n,i="lastIndex",c=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e[i]||0!==t[i]}(),l=void 0!==/()??/.exec("")[1],u=c||l;u&&(s=function(e){var t,r,s,u,d=this;return l&&(r=new RegExp("^"+d.source+"$(?!\\s)",a.call(d))),c&&(t=d[i]),s=n.call(d,e),c&&s&&(d[i]=d.global?s.index+s[0].length:t),l&&s&&s.length>1&&o.call(s[0],r,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)}),s}),e.exports=s},"5f1b":function(e,t,r){"use strict";var a=r("23c6"),n=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(e))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"99d9":function(e,t,r){"use strict";var a=r("80d2"),n=r("b0af"),o=r("adda"),s=r("d9bd"),i=o["a"].extend({name:"v-card-media",mounted:function(){Object(s["d"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),c=r("2b0e"),l=c["default"].extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(e,t){var r=t.data,a=t.props,n=t.children;return r.staticClass=("v-card__title "+(r.staticClass||"")).trim(),a.primaryTitle&&(r.staticClass+=" v-card__title--primary"),e("div",r,n)}});r.d(t,"a",function(){return u}),r.d(t,"b",function(){return d});var u=Object(a["c"])("v-card__actions"),d=Object(a["c"])("v-card__text");n["a"]},a481:function(e,t,r){"use strict";var a=r("cb7c"),n=r("4bf8"),o=r("9def"),s=r("4588"),i=r("0390"),c=r("5f1b"),l=Math.max,u=Math.min,d=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,v=function(e){return void 0===e?e:String(e)};r("214f")("replace",2,function(e,t,r,h){return[function(a,n){var o=e(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,o,n):r.call(String(o),a,n)},function(e,t){var n=h(r,e,this,t);if(n.done)return n.value;var d=a(e),p=String(this),f="function"===typeof t;f||(t=String(t));var g=d.global;if(g){var m=d.unicode;d.lastIndex=0}var x=[];while(1){var w=c(d,p);if(null===w)break;if(x.push(w),!g)break;var y=String(w[0]);""===y&&(d.lastIndex=i(p,o(d.lastIndex),m))}for(var j="",O=0,k=0;k<x.length;k++){w=x[k];for(var S=String(w[0]),_=l(u(s(w.index),p.length),0),C=[],E=1;E<w.length;E++)C.push(v(w[E]));var $=w.groups;if(f){var R=[S].concat(C,_,p);void 0!==$&&R.push($);var V=String(t.apply(void 0,R))}else V=b(S,p,_,C,$,t);_>=O&&(j+=p.slice(O,_)+V,O=_+S.length)}return j+p.slice(O)}];function b(e,t,a,o,s,i){var c=a+e.length,l=o.length,u=f;return void 0!==s&&(s=n(s),u=p),r.call(i,u,function(r,n){var i;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(c);case"<":i=s[n.slice(1,-1)];break;default:var u=+n;if(0===u)return n;if(u>l){var p=d(u/10);return 0===p?n:p<=l?void 0===o[p-1]?n.charAt(1):o[p-1]+n.charAt(1):n}i=o[u-1]}return void 0===i?"":i})}})},b0af:function(e,t,r){"use strict";r("4c94"),r("d0e7");var a=r("b64a"),n=r("2b0e");function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=n["default"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?o({},"elevation-"+this.computedElevation,!0):{}}}}),i=r("23bf"),c=r("6a18"),l=r("58df"),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},d=Object(l["a"])(a["a"],s,i["a"],c["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return u({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(e){var t={class:this.classes,style:this.styles};return e(this.tag,this.setBackgroundColor(this.color,t),this.$slots.default)}}),p=d,f=r("0d01"),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t["a"]=Object(l["a"])(f["a"],p).extend({name:"v-card",props:{elevation:{type:[Number,String],default:2},flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return v({"v-card":!0,"v-card--hover":this.hover},p.options.computed.classes.call(this))},computedElevation:function(){return this.flat?0:this.raised?3:p.options.computed.computedElevation.call(this)},styles:function(){var e=v({},p.options.computed.styles.call(this));return this.img&&(e.background='url("'+this.img+'") center center / cover no-repeat'),e}},render:function(e){var t=this.generateRouteLink(this.classes),r=t.tag,a=t.data;return a.style=this.styles,e(r,this.setBackgroundColor(this.color,a),this.$slots.default)}})},b0c5:function(e,t,r){"use strict";var a=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},d0e7:function(e,t,r){}}]);
//# sourceMappingURL=reset-password.7ef04505.js.map