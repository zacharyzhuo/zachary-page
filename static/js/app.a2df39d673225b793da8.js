webpackJsonp([1],{"/dDm":function(t,e){},"2pBd":function(t,e){},"5M1/":function(t,e){},GZOR:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("C/JF"),n=a("fhbW"),o=a("h17U"),r=a("1e6/"),c=a("Tqaz"),l=a("p3jY"),d=a.n(l),u=a("AB5S"),v=a.n(u),p=a("9OOc"),m=a.n(p),f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var h=a("VU/8")({name:"App"},f,!1,function(t){a("dlGW")},null,null).exports,b=a("/ocq"),g={name:"NavBar",props:["data"],data:()=>({showNavbar:!1,lastScrollPosition:0,isActive:!1,sectionLink:[{item:"About",link:"About",scrollSpeed:800},{item:"Skill",link:"Skill",scrollSpeed:800},{item:"Work",link:"Work",scrollSpeed:1400}]}),mounted(){window.addEventListener("scroll",this.onScroll)},beforeDestroy(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll(){const t=window.pageYOffset||document.documentElement.scrollTop,e=document.getElementById("kvTyper").offsetHeight;return t<0?this.showNavbar=!1:t<e?this.showNavbar=!1:(this.showNavbar=t>e,void(this.lastScrollPosition=t))}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-wrapper effect",class:{"nav-sticky":t.showNavbar}},[a("nav",{staticClass:"navbar-custom"},[a("router-link",{staticClass:"navbar-brand effect font-weight-bold",attrs:{to:"/"}},[t._v("Zachary")]),t._v(" "),a("div",{staticClass:"navbar-header"},[a("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bm-navbar","aria-expanded":"false"}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),a("font-awesome-icon",{attrs:{icon:"bars"}})],1)])],1),t._v(" "),a("div",{staticClass:"navbar-collapse navbar-right effect in",attrs:{id:"bm-navbar","aria-expanded":"false"}},[a("ul",{staticClass:"nav navbar-nav"},t._l(t.sectionLink,function(e,s){return a("li",{key:s,attrs:{id:"nav-"+e.link.toLowerCase()}},[a("a",{staticClass:"scroll effect p-2",class:{active:e.link.toLowerCase()===t.data},attrs:{href:"#"+e.link.toLowerCase(),"data-speed":e.scrollSpeed}},[t._v(t._s(e.item))])])}),0)])])},staticRenderFns:[]},_=a("VU/8")(g,w,!1,null,null,null).exports,C=a("Ubyc"),k=a("W75h"),y=a.n(k),x={name:"KVTyper",props:["title"],components:{VueTyper:C.VueTyper},data:()=>({imgPicBg:y.a})},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"kv kv-typer",style:{backgroundImage:"url("+this.imgPicBg+")"},attrs:{id:"kvTyper"}},[e("div",{staticClass:"page-table"},[e("div",{staticClass:"table-cell text-center"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),e("h2",{staticClass:"typer-title"},[e("vue-typer",{attrs:{text:["I am a graduate student","and major in Information Management."]}})],1),this._v(" "),this._m(0)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"scroll home-s-btn hor-center",attrs:{href:"#about"}},[e("span",{staticClass:"dot center"})])}]};var E=a("VU/8")(x,N,!1,function(t){a("GZOR"),a("/dDm")},"data-v-592c3d7e",null).exports,O={name:"ContactMe",data:()=>({contact:[{icon:"mobile-alt",data:"0975665706"},{icon:"envelope",data:"zacharyzhuo@g.ncu.edu.tw"}]})},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contactMe"},[a("ul",t._l(t.contact,function(e){return a("li",{key:e.index,staticClass:"text-left"},[a("span",{},[a("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:e.icon}}),t._v("\n      "+t._s(e.data)+"\n      ")],1)])}),0)])},staticRenderFns:[]};var S={name:"SocialMedia",data:()=>({socialMedia:[{iconName:"github",link:"https://github.com/zacharyzhuo"},{iconName:"instagram",link:"https://www.instagram.com/zacharyzhuoyc/?hl=zh-tw"},{iconName:"facebook",link:"https://www.facebook.com/profile.php?id=100006411541239"}]})},T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"social-icon"},[a("ul",t._l(t.socialMedia,function(e){return a("li",{key:e.index,staticClass:"social-icon-item d-inline-flex mr-2"},[a("a",{staticClass:"btn btn-link",attrs:{href:e.link,target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab",e.iconName]}}),t._v(t._s(e.item)+"\n      ")],1)])}),0)])},staticRenderFns:[]};var B={props:["title"],components:{ContactMe:a("VU/8")(O,M,!1,function(t){a("OozQ")},"data-v-0e8f6454",null).exports,SocialMedia:a("VU/8")(S,T,!1,function(t){a("QT/7")},"data-v-b956a02e",null).exports}},V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aboutMe section spaceWrapperContainer"},[a("div",{staticClass:"spaceWrapper",attrs:{id:"about"}}),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 col-md-6"},[a("div",{staticClass:"about-content text-left"},[a("h1",{staticClass:"title mb-2"},[t._v(t._s(t.title))]),t._v(" "),a("h2",{staticClass:"subTitle"},[t._v("I'm Zachary Zhuo / 卓育辰")]),t._v(" "),a("p",{staticClass:"my-2"},[t._v("I am a graduate student.")]),t._v(" "),a("p",{staticClass:"my-2 description"},[t._v("網站建置中...")]),t._v(" "),a("ContactMe"),t._v(" "),a("SocialMedia")],1)]),t._v(" "),a("div",{staticClass:"col-xs-12 col-md-6"})])])])},staticRenderFns:[]};var A=a("VU/8")(B,V,!1,function(t){a("2pBd")},"data-v-dda64b2a",null).exports,L=a("q4TV");new L.WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0}).init();var U={name:"home",components:{NavBar:_,KVTyper:E,AboutMe:A},metaInfo:{title:"Zachary's Vue",titleTemplate:null,link:[{rel:"favicon",href:"favicon.ico"}]},data:()=>({intersectionOptions:{root:document.querySelector("#app"),rootMargin:"0px 0px 0px 0px",threshold:0},activeBlock:"about"}),methods:{logOne({el:t,going:e,direction:a}){let s=t.getAttribute("id");"in"===e&&(this.activeBlock=t.getAttribute("id"),document.getElementById(s).classList.add("active")),"out"===e&&document.getElementById(s).classList.remove("active")}}},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home",attrs:{id:"home"}},[a("NavBar",{attrs:{data:this.activeBlock}}),t._v(" "),a("KVTyper",{attrs:{title:"Hi! I'm Zachary Zhuo"}}),t._v(" "),a("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.logOne},expression:"{ active: true, callback: logOne }"}],staticClass:"waypoint",attrs:{id:"about"}},[a("AboutMe",{attrs:{title:"About Me."}})],1),t._v(" "),a("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.logOne},expression:"{ active: true, callback: logOne }"}],staticClass:"waypoint",attrs:{id:"skill"}},[a("Skills",{attrs:{title:"Skills.",subTitle:"技術"}})],1),t._v(" "),a("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.logOne},expression:"{ active: true, callback: logOne }"}],staticClass:"waypoint",attrs:{id:"work"}}),t._v(" "),a("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.logOne},expression:"{ active: true, callback: logOne }"}],staticClass:"section section-bg waypoint",attrs:{id:"experienceandeducation"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("ExperiencesList",{attrs:{title:"Experiences.",subTitle:"經歷"}})],1),t._v(" "),a("div",{staticClass:"col-md-6"},[a("Education",{attrs:{title:"Education.",subTitle:"學歷"}})],1)])])])],1)},staticRenderFns:[]},R=a("VU/8")(U,W,!1,null,null,null).exports;s.default.use(b.a),s.default.use(d.a);var z=new b.a({base:Object({NODE_ENV:"production"}).BASE_URL,routes:[{path:"/",name:"home",component:R},{path:"/aboutMe",name:"aboutMe",component:A}]}),F=a("NYxO");s.default.use(F.a);var I=new F.a.Store({state:{},mutations:{},actions:{}}),$=a("ydGU");Object($.a)(`${Object({NODE_ENV:"production"}).BASE_URL}service-worker.js`,{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});a("K3J8"),a("qb6w"),a("5M1/"),a("oPmM");i.c.add(n.b,n.f,n.e,o.a,n.d,n.c,n.h,n.g,n.i,n.a),s.default.component("font-awesome-icon",r.a),s.default.config.productionTip=!1,s.default.use(c.a),s.default.use(d.a),s.default.use(v.a),s.default.use(m.a),new s.default({router:z,store:I,render:t=>t(h)}).$mount("#app")},OozQ:function(t,e){},"QT/7":function(t,e){},W75h:function(t,e,a){t.exports=a.p+"static/img/head-bg2.3ae56f0.png"},dlGW:function(t,e){},oPmM:function(t,e){},qb6w:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a2df39d673225b793da8.js.map