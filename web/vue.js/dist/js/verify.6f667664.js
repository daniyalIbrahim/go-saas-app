(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["verify"],{8790:function(e,t,n){},"98ab":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-alert",{attrs:{type:e.type,transition:"scale-transition",dismissible:"",outline:""},model:{value:e.isVisible,callback:function(t){e.isVisible=t},expression:"isVisible"}},[e._v(e._s(e.value))])},s=[],r=n("d225"),a=n("b0b4"),c=n("308d"),o=n("6bb5"),u=n("4e2b"),l=n("9ab4"),h=n("60a3"),p=function(e){function t(){return Object(r["a"])(this,t),Object(c["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(a["a"])(t,[{key:"changeValue",value:function(e){}},{key:"isVisible",get:function(){return""!==this.value},set:function(e){!1===e&&this.changeValue("")}}]),t}(h["d"]);l["a"]([Object(h["c"])(String)],p.prototype,"value",void 0),l["a"]([Object(h["c"])(String)],p.prototype,"type",void 0),l["a"]([Object(h["b"])("input")],p.prototype,"changeValue",null),p=l["a"]([h["a"]],p);var f=p,v=f,d=n("2877"),b=n("6544"),m=n.n(b),y=(n("a57f"),n("9d26")),g=n("b64a"),j=n("98a1"),O=n("2b0e"),x=O["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),_=n("58df"),w=Object(_["a"])(g["a"],j["a"],x).extend({name:"v-alert",props:{dismissible:Boolean,icon:String,outline:Boolean,type:{type:String,validator:function(e){return["info","error","success","warning"].includes(e)}}},computed:{computedColor:function(){return this.type&&!this.color?this.type:this.color||"error"},computedIcon:function(){if(this.icon||!this.type)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning"}}},methods:{genIcon:function(){return this.computedIcon?this.$createElement(y["a"],{class:"v-alert__icon"},this.computedIcon):null},genDismissible:function(){var e=this;return this.dismissible?this.$createElement("a",{class:"v-alert__dismissible",on:{click:function(){e.isActive=!1}}},[this.$createElement(y["a"],{props:{right:!0}},"$vuetify.icons.cancel")]):null}},render:function(e){var t=[this.genIcon(),e("div",this.$slots.default),this.genDismissible()],n=this.outline?this.setTextColor:this.setBackgroundColor,i=e("div",n(this.computedColor,{staticClass:"v-alert",class:{"v-alert--outline":this.outline},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),t);return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i}}),k=Object(d["a"])(v,i,s,!1,null,null,null);k.options.__file="Alert.vue";t["a"]=k.exports;m()(k,{VAlert:w})},a57f:function(e,t,n){},b6d1:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-content-center":"","justify-center":""}},[n("v-flex",{staticClass:"center-text",attrs:{xs12:"",sm10:"",md8:""}},[n("h1",[e._v("Account verification")]),n("p",[e._v("Irgendwas")]),n("Alert",{attrs:{type:"success"},model:{value:e.success,callback:function(t){e.success=t},expression:"success"}}),n("Alert",{attrs:{type:"error"},model:{value:e.error,callback:function(t){e.error=t},expression:"error"}})],1)],1)],1)},s=[],r=(n("96cf"),n("3b8d")),a=n("d225"),c=n("b0b4"),o=n("308d"),u=n("6bb5"),l=n("4e2b"),h=n("9ab4"),p=n("60a3"),f=n("98ab"),v=n("85ee"),d=function(e){function t(){var e;return Object(a["a"])(this,t),e=Object(o["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.error="",e.success="",e}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"mounted",value:function(){this.verify()}},{key:"verify",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.error="",this.success="",e.prev=2,e.next=5,fetch(v["a"]+"/api/v1/account/email/"+this.$route.params.id+"/"+this.$route.params.token,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"get"});case 5:return t=e.sent,e.next=8,t.json();case 8:n=e.sent,t.status>=200&&t.status<300?this.success="Account verifyed.":n.error&&(this.error=n.message),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](2),this.error="An error occured";case 15:case"end":return e.stop()}},e,this,[[2,12]])}));function t(){return e.apply(this,arguments)}return t}()}]),t}(p["d"]);d=h["a"]([Object(p["a"])({components:{Alert:f["a"]}})],d);var b=d,m=b,y=(n("d823"),n("2877")),g=n("6544"),j=n.n(g),O=n("a523"),x=n("0e8f"),_=n("a722"),w=Object(y["a"])(m,i,s,!1,null,"e66d16ec",null);w.options.__file="Verify.vue";t["default"]=w.exports;j()(w,{VContainer:O["a"],VFlex:x["a"],VLayout:_["a"]})},d823:function(e,t,n){"use strict";var i=n("8790"),s=n.n(i);s.a}}]);
//# sourceMappingURL=verify.6f667664.js.map