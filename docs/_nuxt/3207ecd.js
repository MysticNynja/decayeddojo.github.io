(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{311:function(t){t.exports=JSON.parse('[{"videoShapeBg":"/images/others/text-mini-shape.webp","gamingBg":"/images/bg/SxySamurai-Twitch.webp","gamingAlt":"Gaming BG","playBtnOne":"/images/others/play-btn.webp","shapeTitle":"SxySamurai on Twitch"},{"videoShapeBg":"/images/others/text-mini-shape.webp","gamingBg":"/images/bg/MysticNynja-Twitch.webp","gamingAlt":"Gaming BG","playBtnOne":"/images/others/play-btn.webp","shapeTitle":"MysticNynja on Twitch"}]')},322:function(t,e,r){"use strict";r.r(e);var o=r(304),n=(r(305),r(140)),l=(r(212),r(311)),c={components:{Swiper:n.Swiper,SwiperSlide:n.SwiperSlide,CoolLightBox:o.a},data:function(){return{streamData:l,swiperOption:{slidesPerView:1,spaceBetween:30,pagination:!1,navigation:{nextEl:".live-section .livesection-button-next",prevEl:".live-section .livesection-button-prev"}},index:null}},methods:{openModal:function(t){0==t?this.$modal.show("sxySamurai"):1==t&&this.$modal.show("mysticNynja")}}},h=r(7),component=Object(h.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"live-section"},[e("div",{staticClass:"container relative"},[e("modal",{attrs:{name:"sxySamurai",width:1600,height:800,adaptive:!0}},[e("div",{staticStyle:{"padding-bottom":"56.25%",position:"relative"}},[e("iframe",{staticStyle:{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%"},attrs:{width:"100%",height:"100%",src:"https://player.twitch.tv/?autoplay=false&channel=sxysamurai&parent=decayeddojo.com",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"}})])]),t._v(" "),e("modal",{attrs:{name:"mysticNynja",width:1600,height:800,adaptive:!0}},[e("div",{staticStyle:{"padding-bottom":"56.25%",position:"relative"}},[e("iframe",{staticStyle:{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%"},attrs:{width:"100%",height:"100%",src:"https://player.twitch.tv/?autoplay=false&channel=mysticNynja&parent=decayeddojo.com",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"}})])]),t._v(" "),e("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},t._l(t.streamData,(function(r,o){return e("swiper-slide",{key:o},[e("div",{staticClass:"relative"},[e("img",{staticClass:"sm:h-full h-64 w-full object-cover",attrs:{src:"".concat(r.gamingBg),alt:r.gamingAlt}}),t._v(" "),e("div",{staticClass:"absolute-center",on:{click:function(e){return t.openModal(o)}}},[e("img",{staticClass:"md:w-120 w-20 h-20 md:h-120 cursor-pointer rounded",attrs:{src:"".concat(r.playBtnOne),alt:r.playAlt}})]),t._v(" "),e("div",{staticClass:"absolute md:h-20 h-12 left-1/2 bottom-0 transform -translate-x-2/4 bg-no-repeat bg-center w-full flex justify-center items-center",style:{backgroundImage:"url(".concat(r.videoShapeBg,")")}},[e("h3",{staticClass:"text-white font-exo font-bold uppercase text-base sm:text-xl md:text-2xl"},[t._v(t._s(r.shapeTitle))])])])])})),1),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"livesection-button-prev swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all 2xl:-left-28 left-3 z-50 cursor-pointer"},[t("img",{staticClass:"w-4 h-6",attrs:{src:"/images/icon/navigation-arrow2.webp",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"livesection-button-next swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape bg-cover transition-all 2xl:-right-28 2xl:left-auto right-3 z-50 cursor-pointer"},[t("img",{staticClass:"w-4 h-6",attrs:{src:"/images/icon/navigation-arrow1.webp",alt:""}})])}],!1,null,null,null);e.default=component.exports}}]);