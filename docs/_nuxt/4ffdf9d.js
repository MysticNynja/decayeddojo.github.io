(window.webpackJsonp=window.webpackJsonp||[]).push([[25,2],{300:function(t){t.exports=JSON.parse('[{"releaseDate":"Nov 14, 2018","platform":"PC","gameImage":"/images/games/Fallout_76/Fallout_76_index.webp","gameOverview":"This game is fun, but it isn\'t like other FallOut games","screenshots":["/images/games/Fallout_76/screenshots/screenshot1.webp","/images/games/Fallout_76/screenshots/screenshot2.webp","/images/games/Fallout_76/screenshots/screenshot3.webp"],"streams":[{"src":"https://player.twitch.tv/?video=1845785637&parent=www.decayeddojo.com","image":"/images/bg/gaming-bg1.webp","imageAlt":"Fallout 76 Stream","playBtnOne":"/images/others/play-btn.webp","playAlt":"Gaming BG","videoShapeBg":"/images/others/text-mini-shape.webp","shapeTitle":"Watch Fallout 76 Stream"}],"videos":[],"btnName":"Enter Appalachia","title":"Fallout 76","slug":"1","category":"1","description":"This is description<p>This is a test for a 2nd paragraph","features":"This is for features","weLove":"This is what we love about the game","weDontLove":"This is what we don\'t love","additionalInfo":[{"attr":"Attribute 11","value":"thing 11"},{"attr":"Attribute 12","value":"thing 12"},{"attr":"Attribute 13","value":"thing 13"},{"attr":"Attribute 14","value":"thing 14"},{"attr":"Attribute 15","value":"thing 15"}],"additionalDescription":"This is for additional description"},{"releaseDate":"Dec 13, 2013","platform":"PC","gameImage":"/images/games/7 Days to Die/7DaysToDie_index.webp","gameOverview":"A zombie survival game","screenshots":["/images/games/7 Days to Die/screenshots/screenshot1.webp","/images/games/7 Days to Die/screenshots/screenshot2.webp","/images/games/7 Days to Die/screenshots/screenshot3.webp","/images/games/7 Days to Die/screenshots/screenshot4.webp","/images/games/7 Days to Die/screenshots/screenshot5.webp","/images/games/7 Days to Die/screenshots/screenshot6.webp"],"streams":[],"videos":[],"btnName":"Enter Wasteland","title":"7 Days to Die","slug":"2","category":"1","description":"This is description for the second game<p>This is a test for a 2nd paragraph for the second game","features":"This is for features for the second game","weLove":"This is what we love about for the second game","weDontLove":"This is what we don\'t love for the second game","additionalInfo":[{"attr":"Attribute 21","value":"thing 21"},{"attr":"Attribute 22","value":"thing 22"},{"attr":"Attribute 23","value":"thing 23"},{"attr":"Attribute 24","value":"thing 24"},{"attr":"Attribute 25","value":"thing 25"}],"additionalDescription":"This is for additional description for the second game"},{"releaseDate":"Dec 13, 2013","platform":"PC","gameImage":"/images/games/Halo Infinite/HaloInfinite_index.webp","gameOverview":"A halo game that is really over hyped","screenshots":["/images/games/Halo Infinite/screenshots/screenshot1.webp","/images/games/Halo Infinite/screenshots/screenshot2.webp","/images/games/Halo Infinite/screenshots/screenshot3.webp","/images/games/Halo Infinite/screenshots/screenshot4.webp","/images/games/Halo Infinite/screenshots/screenshot5.webp","/images/games/Halo Infinite/screenshots/screenshot6.webp"],"streams":[],"videos":[],"btnName":"Enter Zeta Halo","title":"Halo Infinite","slug":"3","category":"1","description":"This is description for the third game<p>This is a test for a 2nd paragraph for the third game","features":"This is for features for the third game","weLove":"This is what we love about for the third game","weDontLove":"This is what we don\'t love for the third game","additionalInfo":[{"attr":"Attribute 31","value":"thing 31"},{"attr":"Attribute 32","value":"thing 32"},{"attr":"Attribute 33","value":"thing 33"},{"attr":"Attribute 34","value":"thing 34"},{"attr":"Attribute 35","value":"thing 35"}],"additionalDescription":"This is for additional description for the third game"}]')},302:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r="Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)",o=["api_key","author_s3","category_id","identifier","integration","language","remote_auth_s3","slug","title","url"],l=["name","button","icon","url","logout","width","height"],i=["afterRender","onInit","onIdentify","beforeComment","onNewComment","onPaginate","onReady","preData","preInit","preReset"],s=function(t){return requestAnimationFrame((function(){return requestAnimationFrame(t)}))};function c(t,e,n,i,s,r,o,a,u,l){"boolean"!=typeof o&&(u=a,a=o,o=!1);var c,d="function"==typeof n?n.options:n;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,s&&(d.functional=!0)),i&&(d._scopeId=i),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=c):e&&(c=o?function(t){e.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),c)if(d.functional){var h=d.render;d.render=function(t,e){return c.call(e),h(t,e)}}else{var m=d.beforeCreate;d.beforeCreate=m?[].concat(m,c):[c]}return n}var d=c({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"min-height":"200px"},attrs:{id:"disqus_thread"}})},staticRenderFns:[]},void 0,{name:"Disqus",props:{shortname:String,pageConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return o.includes(t)}))}},ssoConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return l.includes(t)}))}},lang:{type:String,default:"en"},lazy:{type:Boolean,default:!0},lazyConfig:{type:Object,default:function(){return{root:null,rootMargin:"300px",threshold:.5}}}},data:function(){return{observer:null}},computed:{getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(r);return t}},watch:{lang:function(){this.reset()}},mounted:function(){if(this.lazy)return this.observerDisqus();this.init()},methods:{init:function(){var t=this;if(this.$disqus&&(this.$disqus.reset=this.reset),window.DISQUS)return this.reset();var e=this.setBaseConfig;window.disqus_config=function(){e(this)},this.loadEmbedScript(),this.$route&&this.$watch("$route.path",(function(){return t.reset()}))},reset:function(t){void 0===t&&(t=window.DISQUS);var e=this.setBaseConfig;t.reset({reload:!0,config:function(){e(this)}})},observerDisqus:function(){if("IntersectionObserver"in window)return this.observer=new IntersectionObserver(this.handleObserver,this.lazyConfig),this.observer.observe(this.$el);this.init()},handleObserver:function(t){var e=this;t.forEach((function(t){t.isIntersecting&&(e.observer.disconnect(),e.init())}))},loadEmbedScript:function(){var t=document,e=t.createElement("script");e.setAttribute("id","embed-disqus"),e.setAttribute("data-timestamp",+new Date),e.type="text/javascript",e.async=!0,e.src="//"+this.getShortname+".disqus.com/embed.js",(t.head||t.body).appendChild(e)},setBaseConfig:function(t){this.setPageConfig(t),this.cbDisqus(t),this.ssoConfig&&Object.keys(this.ssoConfig).length&&Object.assign(t.sso,this.ssoConfig),t.language=this.lang},setPageConfig:function(t){var e={url:document.baseURI,identifier:this.$route?this.$route.path:window.location.pathname};Object.assign(t.page,e),this.pageConfig&&Object.keys(this.pageConfig).length&&Object.assign(t.page,this.pageConfig)},cbDisqus:function(t){var e=this;i.forEach((function(n){t.callbacks[n]=[function(t){e.$emit(n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().replace("on-",""),t)}]}))}}},void 0,!1,void 0,!1,void 0,void 0,void 0),a=c({render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"disqus-comment-count",attrs:{href:this.getHref,"data-disqus-url":this.getUrl,"data-disqus-identifier":this.identifier}})},staticRenderFns:[]},void 0,{name:"DisqusCount",inheritAttrs:!1,props:{url:String,shortname:String,identifier:{type:String,required:!0},tag:{type:String,default:"span"}},mounted:function(){this.init()},computed:{getHref:function(){return"a"===this.tag?this.url+"#disqus_thread":null},getUrl:function(){return"span"===this.tag?this.url:null},getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(r);return t}},methods:{init:function(){var t=this;if("DISQUSWIDGETS"in window)return s((function(){return t.reset()}));this.loadCountScript(),this.$route&&this.$watch("$route.path",(function(){return s((function(){return t.reset()}))}))},reset:function(t){void 0===t&&(t=window.DISQUSWIDGETS),t.getCount({reset:!0})},loadCountScript:function(){if(!document.getElementById("dsq-count-scr")){var t=document,e=t.createElement("script");e.async=!0,e.id="dsq-count-scr",e.src="//"+this.getShortname+".disqus.com/count.js",(t.head||t.body).appendChild(e)}}}},void 0,!1,void 0,!1,void 0,void 0,void 0);function u(t,e){void 0===e&&(e={}),t.component("Disqus",d),t.component("DisqusCount",a),t.prototype.$disqus={shortname:e.shortname||null,reset:null}}"undefined"!=typeof window&&void 0!==window.Vue&&window.Vue.use(u)},327:function(t,e,n){"use strict";n.r(e);n(41),n(64);var r=n(140),o=n(302),l=n(303),c=(n(211),n(304),n(300)),d={components:{Swiper:r.Swiper,SwiperSlide:r.SwiperSlide,Disqus:o.a,CoolLightBox:l.a},props:["games"],data:function(){return{gameData:c,swiperOption:{slidesPerView:1,spaceBetween:30,pagination:!1,navigation:{nextEl:".gameslide-button-next",prevEl:".gameslide-button-prev"}},index:null}}},h=n(8),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container relative"},[e("p",{staticClass:"date text-primary font-bold mb-3"},[t._v("Release Date: "+t._s(t.games.releaseDate))]),t._v(" "),e("p",{staticClass:"date text-primary font-bold mb-3"},[t._v("Platform: "+t._s(t.games.platform))]),t._v(" "),e("h2",{staticClass:"text-white font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10"},[t._v(t._s(t.games.title))]),t._v(" "),e("div",{staticClass:"content-details"},[e("div",{staticClass:"description mt-6"},[e("p",{staticClass:"leading-8"},[t._v(t._s(t.games.gameOverview))]),t._v(" "),e("br")])]),t._v(" "),e("section",{staticClass:"gameslide"},[e("div",{staticClass:"container relative"},[e("CoolLightBox",{attrs:{items:t.games.streams,index:t.index},on:{close:function(e){t.index=null}}}),t._v(" "),e("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},[t._l(t.games.screenshots,(function(t,n){return e("swiper-slide",{key:n+100},[e("div",{staticClass:"relative"},[e("img",{staticClass:"sm:h-full h-64 w-full object-cover",attrs:{src:"".concat(t)}})])])})),t._v(" "),t._l(t.games.streams,(function(n,r){return e("swiper-slide",{key:r},[e("div",{staticClass:"relative"},[e("img",{staticClass:"sm:h-full h-64 w-full object-cover",attrs:{src:"".concat(n.image),alt:n.imageAlt}}),t._v(" "),e("div",{staticClass:"absolute-center",on:{click:function(e){t.index=r}}},[e("img",{staticClass:"md:w-120 w-20 h-20 md:h-120 cursor-pointer rounded",attrs:{src:"".concat(n.playBtnOne),alt:n.playAlt}})]),t._v(" "),e("div",{staticClass:"absolute md:h-20 h-12 left-1/2 bottom-0 transform -translate-x-2/4 bg-no-repeat bg-center w-full flex justify-center items-center",style:{backgroundImage:"url(".concat(n.videoShapeBg,")")}},[e("h3",{staticClass:"text-white font-exo font-bold uppercase text-base sm:text-xl md:text-2xl"},[t._v(t._s(n.shapeTitle))])])])])}))],2),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)]),t._v(" "),e("div",{staticClass:"description mt-6"},[e("h3",{staticClass:"text-2xl text-white uppercase font-bold mb-5"},[t._v("Description:")]),t._v(" "),e("p",{staticClass:"leading-8",domProps:{innerHTML:t._s(t.games.description)}})]),t._v(" "),e("div",{staticClass:"description mt-6"},[e("h3",{staticClass:"text-2xl text-white uppercase font-bold mb-5"},[t._v("Features:")]),t._v(" "),e("p",{staticClass:"leading-8",domProps:{innerHTML:t._s(t.games.features)}})]),t._v(" "),e("div",{staticClass:"description mt-6"},[e("h3",{staticClass:"text-2xl text-primary uppercase font-bold mb-5"},[t._v("What We Love:")]),t._v(" "),e("p",{staticClass:"leading-8",domProps:{innerHTML:t._s(t.games.weLove)}})]),t._v(" "),e("blockquote",{staticClass:"py-5 mb-5"},[e("h3",{staticClass:"text-2xl text-yellow uppercase font-bold mb-5"},[t._v("What We Don't Love:")]),t._v(" "),e("p",{staticClass:"leading-8",domProps:{innerHTML:t._s(t.games.weDontLove)}})]),t._v(" "),e("div",{staticClass:"additional-information-area bg-secondary-100 px-9 py-9 rounded-2xl mb-9"},[e("h3",{staticClass:"text-2xl text-white uppercase font-bold mb-6"},[t._v("Additional Information:")]),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 text-white"},t._l(t.games.additionalInfo,(function(n,r){return e("div",{key:r,staticClass:"additional_information_text"},[e("h4",{staticClass:"font-bold mb-5",domProps:{innerHTML:t._s(n.attr)}}),t._v(" "),e("p",{staticClass:"text-gray-400"},[t._v(t._s(n.value))])])})),0)]),t._v(" "),e("div",{staticClass:"description mt-6"},[e("p",{staticClass:"leading-8"},[t._v(t._s(t.games.additionalDescription))])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"gameslide-button-prev swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all 2xl:-left-28 left-3 z-50 cursor-pointer"},[t("img",{staticClass:"w-4 h-6",attrs:{src:"/images/icon/navigation-arrow2.webp",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"gameslide-button-next swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape bg-cover transition-all 2xl:-right-28 2xl:left-auto right-3 z-50 cursor-pointer"},[t("img",{staticClass:"w-4 h-6",attrs:{src:"/images/icon/navigation-arrow1.webp",alt:""}})])}],!1,null,null,null);e.default=component.exports}}]);