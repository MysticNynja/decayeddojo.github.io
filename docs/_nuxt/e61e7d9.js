(window.webpackJsonp=window.webpackJsonp||[]).push([[20,29],{295:function(t,e,l){"use strict";l.r(e);var n={props:{title:{type:String,required:!1},text:{type:String,required:!1}}},r=l(8),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center lg:mb-15 md:mb-12 mb-8"},[t.title?e("h2",{staticClass:"text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto"},[t._v(" "+t._s(t.title)+" ")]):t._e(),t._v(" "),t.text?e("p",{staticClass:"max-w-lg text-gray-100 mx-auto text-base sm:text-lg leading-8 mt-3"},[t._v(" "+t._s(t.text)+" ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},310:function(t,e,l){"use strict";l.r(e);l(33),l(14),l(22),l(23);var n={components:{TitleSection:function(){return Promise.resolve().then(l.bind(null,295))}},data:function(){return{title:"Meet the Players",text:"Too old to die young, and too young for adult diapers",services:[{imgSrc:"/images/others/team1.webp",alt:"Service Image",name:"SxySamurai (Kelly)",subtitle:"Founder & Resident Angry Dude",links:[{href:"https://www.twitter.com/sxysamurai",BgShape:"/images/icon/twittre.webp",className:"icofont-twitter text-white"},{href:"https://www.youtube.com/@sxysamurai",BgShape:"/images/icon/youtobe-bg.webp",className:"icofont-youtube-play text-white"}]},{imgSrc:"/images/others/team2.webp",alt:"Service Image",name:"MysticNynja (Will)",subtitle:"Founder & Tech Geek",links:[{href:"https://www.twitter.com/mysticnynja",BgShape:"/images/icon/twittre.webp",className:"icofont-twitter text-white"},{href:"https://www.youtube.com/@mysticnynja",BgShape:"/images/icon/youtobe-bg.webp",className:"icofont-youtube-play text-white"}]}]}}},r=l(8),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container pt-32"},[e("TitleSection",{attrs:{title:t.title,text:t.text}}),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"},t._l(t.services,(function(l,n){return e("div",{key:n,staticClass:"relative group w-300 sm:w-full mx-auto"},[e("div",[e("img",{attrs:{src:l.imgSrc,alt:l.alt}})]),t._v(" "),e("div",{staticClass:"flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 bg-team-shape mt-10 bg-cover h-24 sm:h-20 md:h-28 lg:h-24 xl:h-32 2xl:h-32 group-hover:bg-team-hover-shape hover:transition-all"},[e("h3",{staticClass:"text-white font-bold text-lg"},[t._v(t._s(l.name))]),t._v(" "),e("span",{staticClass:"text-primary text-sm md:text-base group-hover:text-white transition-all"},[t._v(t._s(l.subtitle))]),t._v(" "),e("ul",{staticClass:"flex"},t._l(l.links,(function(link,t){return e("li",{key:t,staticClass:"mr-4 last:mr-0"},[e("a",{staticClass:"w-10 h-10 leading-10 text-center inline-block",style:{backgroundImage:"url(".concat(link.BgShape,")")},attrs:{href:"".concat(link.href),target:"_blank"}},[e("i",{class:link.className})])])})),0)])])})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TitleSection:l(295).default})}}]);