(window.webpackJsonp=window.webpackJsonp||[]).push([[36,11,22,28,31],{295:function(t,e,r){"use strict";r.r(e);var l={props:{title:{type:String,required:!1},text:{type:String,required:!1}}},n=r(8),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center lg:mb-15 md:mb-12 mb-8"},[t.title?e("h2",{staticClass:"text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto"},[t._v(" "+t._s(t.title)+" ")]):t._e(),t._v(" "),t.text?e("p",{staticClass:"max-w-lg text-gray-100 mx-auto text-base sm:text-lg leading-8 mt-3"},[t._v(" "+t._s(t.text)+" ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},302:function(t){t.exports=JSON.parse('[{"videoShapeBg":"/images/others/text-mini-shape.webp","gamingBg":"/images/bg/SxySamurai-Twitch.webp","gamingAlt":"Gaming BG","playBtnOne":"/images/others/play-btn.webp","shapeTitle":"SxySamurai on Twitch"},{"videoShapeBg":"/images/others/text-mini-shape.webp","gamingBg":"/images/bg/MysticNynja-Twitch.webp","gamingAlt":"Gaming BG","playBtnOne":"/images/others/play-btn.webp","shapeTitle":"MysticNynja on Twitch"}]')},312:function(t,e,r){"use strict";r.r(e);var l={},n=r(8),component=Object(n.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container flex items-center space-x-4 flex-col lg:flex-row"},[e("div",{staticClass:"w-full lg:w-1/2 mb-10 lg:mb-0"},[e("div",{staticClass:"sm:mr-12 mr-0 text-center relative"},[e("img",{attrs:{src:"/images/others/about-players.webp"}})])]),t._v(" "),e("div",{staticClass:"w-full lg:w-1/2"},[e("div",{staticClass:"about_title lg:mb-6 mb-4"},[e("h5",{staticClass:"text-primary text-xl uppercase font-bold pl-24 lg:mb-6 mb-4 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-1 before:bg-primary before:w-16"},[t._v("About Decayed Dojo")]),t._v(" "),e("h2",{staticClass:"text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl"},[t._v(" two lifetime friends, brothers in digital arms, play games poorly for your enjoyment. ")])]),t._v(" "),e("div",{staticClass:"about_desc mb-10"},[e("p",[t._v("The core team of Decayed Dojo have known each other for about 2 decades, and in those decades we have played everything from Superman 64 to Diablo 4.  We decided to take the plunge into digital content creation.")]),t._v(" "),e("p",[t._v("We really want to entertain, hang out more, and if we make some new friends along the way that would be great! This is our digital home and hopefully you can find something here that makes you entertained.  If not, glad you gave us a shot! ")])])])])}],!1,null,null,null);e.default=component.exports},313:function(t,e,r){"use strict";r.r(e);var l=r(298),n=(r(299),r(138)),o=(r(209),r(302)),c={components:{Swiper:n.Swiper,SwiperSlide:n.SwiperSlide,CoolLightBox:l.a},data:function(){return{streamData:o,swiperOption:{slidesPerView:1,spaceBetween:30,pagination:!1,navigation:{nextEl:".live-section .livesection-button-next",prevEl:".live-section .livesection-button-prev"}},index:null}},methods:{openModal:function(t){0==t?this.$modal.show("sxySamurai"):1==t&&this.$modal.show("mysticNynja")}}},m=r(8),component=Object(m.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"live-section"},[e("div",{staticClass:"container relative"},[e("modal",{attrs:{name:"sxySamurai",width:1600,height:800,adaptive:!0}},[e("div",{staticStyle:{"padding-bottom":"56.25%",position:"relative"}},[e("iframe",{staticStyle:{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%"},attrs:{width:"100%",height:"100%",src:"https://player.twitch.tv/?autoplay=false&channel=sxysamurai&parent=localhost",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"}})])]),t._v(" "),e("modal",{attrs:{name:"mysticNynja",width:1600,height:800,adaptive:!0}},[e("div",{staticStyle:{"padding-bottom":"56.25%",position:"relative"}},[e("iframe",{staticStyle:{position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%"},attrs:{width:"100%",height:"100%",src:"https://player.twitch.tv/?autoplay=false&channel=mysticNynja&parent=localhost",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"}})])]),t._v(" "),e("swiper",{staticClass:"swiper",attrs:{options:t.swiperOption}},t._l(t.streamData,(function(r,l){return e("swiper-slide",{key:l},[e("div",{staticClass:"relative"},[e("img",{staticClass:"sm:h-full h-64 w-full object-cover",attrs:{src:"".concat(r.gamingBg),alt:r.gamingAlt}}),t._v(" "),e("div",{staticClass:"absolute-center",on:{click:function(e){return t.openModal(l)}}},[e("img",{staticClass:"md:w-120 w-20 h-20 md:h-120 cursor-pointer rounded",attrs:{src:"".concat(r.playBtnOne),alt:r.playAlt}})]),t._v(" "),e("div",{staticClass:"absolute md:h-20 h-12 left-1/2 bottom-0 transform -translate-x-2/4 bg-no-repeat bg-center w-full flex justify-center items-center",style:{backgroundImage:"url(".concat(r.videoShapeBg,")")}},[e("h3",{staticClass:"text-white font-exo font-bold uppercase text-base sm:text-xl md:text-2xl"},[t._v(t._s(r.shapeTitle))])])])])})),1),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"livesection-button-prev swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all 2xl:-left-28 left-3 z-50 cursor-pointer"},[t("img",{staticClass:"w-4 h-6",attrs:{src:"/images/icon/navigation-arrow2.webp",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"livesection-button-next swipper-arrow text-white absolute top-2/4 transform -translate-y-2/4 md:w-68 w-55 md:h-55 h-11 flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape bg-cover transition-all 2xl:-right-28 2xl:left-auto right-3 z-50 cursor-pointer"},[t("img",{staticClass:"w-4 h-6",attrs:{src:"/images/icon/navigation-arrow1.webp",alt:""}})])}],!1,null,null,null);e.default=component.exports},314:function(t,e,r){"use strict";r.r(e);r(33),r(14),r(22),r(23);var l={components:{TitleSection:function(){return Promise.resolve().then(r.bind(null,295))}},data:function(){return{title:"Meet the Players",text:"Too old to die young, and too young for adult diapers",services:[{imgSrc:"/images/others/team1.webp",alt:"Service Image",name:"SxySamurai (Kelly)",subtitle:"Founder & Resident Angry Dude",links:[{href:"https://www.twitter.com/sxysamurai",BgShape:"/images/icon/twittre.webp",className:"icofont-twitter text-white"},{href:"https://www.youtube.com/@sxysamurai",BgShape:"/images/icon/youtobe-bg.webp",className:"icofont-youtube-play text-white"}]},{imgSrc:"/images/others/team2.webp",alt:"Service Image",name:"MysticNynja (Will)",subtitle:"Founder & Tech Geek",links:[{href:"https://www.twitter.com/mysticnynja",BgShape:"/images/icon/twittre.webp",className:"icofont-twitter text-white"},{href:"https://www.youtube.com/@mysticnynja",BgShape:"/images/icon/youtobe-bg.webp",className:"icofont-youtube-play text-white"}]}]}}},n=r(8),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container pt-32"},[e("TitleSection",{attrs:{title:t.title,text:t.text}}),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"},t._l(t.services,(function(r,l){return e("div",{key:l,staticClass:"relative group w-300 sm:w-full mx-auto"},[e("div",[e("img",{attrs:{src:r.imgSrc,alt:r.alt}})]),t._v(" "),e("div",{staticClass:"flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 bg-team-shape mt-10 bg-cover h-24 sm:h-20 md:h-28 lg:h-24 xl:h-32 2xl:h-32 group-hover:bg-team-hover-shape hover:transition-all"},[e("h3",{staticClass:"text-white font-bold text-lg"},[t._v(t._s(r.name))]),t._v(" "),e("span",{staticClass:"text-primary text-sm md:text-base group-hover:text-white transition-all"},[t._v(t._s(r.subtitle))]),t._v(" "),e("ul",{staticClass:"flex"},t._l(r.links,(function(link,t){return e("li",{key:t,staticClass:"mr-4 last:mr-0"},[e("a",{staticClass:"w-10 h-10 leading-10 text-center inline-block",style:{backgroundImage:"url(".concat(link.BgShape,")")},attrs:{href:"".concat(link.href),target:"_blank"}},[e("i",{class:link.className})])])})),0)])])})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TitleSection:r(295).default})},331:function(t,e,r){"use strict";r.r(e);r(14),r(22),r(23);var l={components:{HeaderSection:function(){return Promise.resolve().then(r.bind(null,206))},OffCanvasMobileMenu:function(){return r.e(0).then(r.bind(null,346))},Breadcrumb:function(){return Promise.resolve().then(r.bind(null,207))},AboutUs:function(){return Promise.resolve().then(r.bind(null,312))},LiveStream:function(){return Promise.resolve().then(r.bind(null,313))},GamerTeam:function(){return Promise.resolve().then(r.bind(null,314))},Footer:function(){return Promise.resolve().then(r.bind(null,208))}},data:function(){return{navOpen:!1,BreadcrumbTitle:"About Us",BreadcrumbSubTitle:"About Us",paddingTop:"pt-32"}}},n=r(8),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-cover bg-gray-800",staticStyle:{"background-image":"url(/images/bg/body-bg2.webp)"}},[e("HeaderSection"),t._v(" "),e("OffCanvasMobileMenu",{class:{"show-mobile-menu":t.navOpen},on:{togglenav:function(e){t.navOpen=!t.navOpen}}}),t._v(" "),e("Breadcrumb",{attrs:{BreadcrumbTitle:t.BreadcrumbTitle,BreadcrumbSubTitle:t.BreadcrumbSubTitle}}),t._v(" "),e("AboutUs"),t._v(" "),e("LiveStream"),t._v(" "),e("GamerTeam"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderSection:r(206).default,Breadcrumb:r(207).default,AboutUs:r(312).default,LiveStream:r(313).default,GamerTeam:r(314).default,Footer:r(208).default})}}]);