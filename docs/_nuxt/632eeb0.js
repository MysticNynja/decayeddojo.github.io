(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{303:function(t,e,m){"use strict";var n=m(2),r=m(4),o=m(34),l=m(28),c=m(35),h=m(211),d=m(15),w=m(3),f=m(210),v=m(140),y=m(304),x=m(305),B=m(85),S=m(306),G=[],_=r(G.sort),O=r(G.push),A=w((function(){G.sort(void 0)})),C=w((function(){G.sort(null)})),T=v("sort"),k=!w((function(){if(B)return B<70;if(!(y&&y>3)){if(x)return!0;if(S)return S<603;var code,t,e,m,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(m=0;m<47;m++)G.push({k:t+m,v:e})}for(G.sort((function(a,b){return b.v-a.v})),m=0;m<G.length;m++)t=G[m].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:A||!C||!T||!k},{sort:function(t){void 0!==t&&o(t);var e=l(this);if(k)return void 0===t?_(e):_(e,t);var m,n,r=[],w=c(e);for(n=0;n<w;n++)n in e&&O(r,e[n]);for(f(r,function(t){return function(e,m){return void 0===m?-1:void 0===e?1:void 0!==t?+t(e,m)||0:d(e)>d(m)?1:-1}}(t)),m=c(r),n=0;n<m;)e[n]=r[n++];for(;n<w;)h(e,n++);return e}})},304:function(t,e,m){var n=m(61).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},305:function(t,e,m){var n=m(61);t.exports=/MSIE|Trident/.test(n)},306:function(t,e,m){var n=m(61).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},307:function(t){t.exports=JSON.parse('[{"date":"2021-11-08 12:00","teamOne":"/images/others/upcoming-game-thumb1.webp","teamVs":"/images/others/game-vs1.webp","teamTwo":"/images/others/upcoming-game-thumb2.webp","title":"Ninja 360 Game 2022","description":"08 Teams Registered","stream":"Live Stream","playBtn":"/images/others/play-btn2.webp","playAlt":"Gaming BG","src":"https://www.youtube.com/embed/eS9Qm4AOOBY","autoplay":true,"slug":"1","videoShapeBg":"/images/others/text-mini-shape.webp","gamingBg":"/images/bg/gaming-bg1.webp","gamingAlt":"Gaming BG","playBtnOne":"/images/others/play-btn.webp","shapeTitle":"Watch Live Streaming 1"},{"date":"2021-11-07 11:00","teamOne":"/images/others/upcoming-game-thumb3.webp","teamVs":"/images/others/game-vs2.webp","teamTwo":"/images/others/upcoming-game-thumb4.webp","title":"Skrit tournament 2022","description":"08 Teams Registered today","stream":"Youtube Stream","playBtn":"/images/others/play-btn2.webp","playAlt":"Gaming BG","src":"https://www.youtube.com/embed/eS9Qm4AOOBY","autoplay":true,"slug":"2","videoShapeBg":"/images/others/text-mini-shape.webp","gamingBg":"/images/bg/gaming-bg1.webp","gamingAlt":"Gaming BG","playBtnOne":"/images/others/play-btn.webp","shapeTitle":"Watch Live Streaming 2"},{"date":"2021-11-09 10:00","teamOne":"/images/others/upcoming-game-thumb5.webp","teamVs":"/images/others/game-vs3.webp","teamTwo":"/images/others/upcoming-game-thumb6.webp","title":"Roar Spring Game 2022","description":"08 Teams Registered","stream":"Twitch Stream","playBtn":"/images/others/play-btn2.webp","playAlt":"Gaming BG","src":"https://www.youtube.com/embed/eS9Qm4AOOBY","autoplay":true,"slug":"3","videoShapeBg":"/images/others/text-mini-shape.webp","gamingBg":"/images/bg/gaming-bg1.webp","gamingAlt":"Gaming BG","playBtnOne":"/images/others/play-btn.webp","shapeTitle":"Watch Live Streaming 3"},{"date":"2021-11-09 8:45","teamOne":"/images/others/upcoming-game-thumb7.webp","teamVs":"/images/others/game-vs1.webp","teamTwo":"/images/others/upcoming-game-thumb8.webp","title":"Space ship Game 2022","description":"08 Teams Registered","stream":"Youtube Stream","playBtn":"/images/others/play-btn2.webp","playAlt":"Gaming BG","src":"https://www.youtube.com/embed/eS9Qm4AOOBY","autoplay":true,"slug":"4","videoShapeBg":"/images/others/text-mini-shape.webp","gamingBg":"/images/bg/gaming-bg1.webp","gamingAlt":"Gaming BG","playBtnOne":"/images/others/play-btn.webp","shapeTitle":"Watch Live Streaming 4"},{"date":"2021-11-09 9:30","teamOne":"/images/others/upcoming-game-thumb9.webp","teamVs":"/images/others/game-vs2.webp","teamTwo":"/images/others/upcoming-game-thumb10.webp","title":"Monster Game 2022","description":"08 Teams Registered","stream":"Youtube Stream","playBtn":"/images/others/play-btn2.webp","playAlt":"Gaming BG","src":"https://www.youtube.com/embed/eS9Qm4AOOBY","autoplay":true,"slug":"5","videoShapeBg":"/images/others/text-mini-shape.webp","gamingBg":"/images/bg/gaming-bg1.webp","gamingAlt":"Gaming BG","playBtnOne":"/images/others/play-btn.webp","shapeTitle":"Watch Live Streaming 5"}]')},343:function(t,e,m){"use strict";m.r(e);m(41),m(62),m(303);var n=m(297),r=(m(298),m(129)),o=m.n(r),l=m(307),c={components:{CoolLightBox:n.a,moment:o.a},data:function(){return{matchesData:l,index:null}},computed:{dateTime:function(){var t=this.oldestFirst?1:-1;this.matchesData.sort((function(a,b){return((a=new Date(a.date))>(b=new Date(b.date))?-1:a<b?1:0)*t}))}},methods:{formatDate:function(t){if(t)return o()(String(t)).format("MM/DD/YYYY hh:mm a")}}},h=m(8),component=Object(h.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-28"},[e("div",{staticClass:"container"},[e("div",{},[e("CoolLightBox",{attrs:{items:t.matchesData,index:t.index},on:{close:function(e){t.index=null}}}),t._v(" "),t._l(t.matchesData,(function(m,n){return e("div",{key:n,staticClass:"border-4 border-light-blue-500 rounded-4xl px-10 lg:px-16 py-8 mb-7.5 last:mb-0"},[e("div",{staticClass:"grid md:grid-cols-12 grid-cols-1 items-center"},[e("div",{staticClass:"md:col-start-1 md:col-end-7 flex flex-col md:justify-start md:items-start md:text-left justify-center items-center text-center mr-5"},[e("p",{staticClass:"sm:text-base text-sm font-medium"},[t._v(t._s(t.formatDate(m.date)))]),t._v(" "),e("n-link",{staticClass:"transition-all text-2xl lg:text-4xl font-bold uppercase font-exo text-white mb-4 hover:text-primary",attrs:{to:"/match/".concat(m.slug)}},[t._v(" "+t._s(m.title)+" ")]),t._v(" "),e("span",{staticClass:"text-primary font-normal text-sm font-exo"},[t._v(t._s(m.description))])],1),t._v(" "),e("div",{staticClass:"md:col-start-7 md:col-end-9 lg:mr-12 mr-5 md:my-auto my-8 flex flex-col items-center text-center"},[e("a",{staticClass:"lg:w-120 lg:h-120 w-88 h-88 bg-primary rounded-full block relative",attrs:{href:"#/"},on:{click:function(e){t.index=n}}},[e("img",{staticClass:"max-w-full h-auto w-auto absolute-center",attrs:{src:"".concat(m.playBtn),alt:m.playAlt}})]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"text-warning"},[t._v(t._s(m.stream))])]),t._v(" "),e("div",{staticClass:"md:col-end-13 flex md:justify-end justify-center items-center w-full px-20 sm:px-0 sm:w-auto"},[e("img",{staticClass:"lg:mr-9 mr-5",attrs:{src:m.teamOne,alt:"Feature Icon"}}),t._v(" "),e("img",{staticClass:"lg:mr-9 mr-5",attrs:{src:m.teamVs,alt:"Feature Icon"}}),t._v(" "),e("img",{attrs:{src:m.teamTwo,alt:"Feature Icon"}})])])])})),t._v(" "),t._l(t.dateTime,(function(m,n){return e("li",{key:n},[t._v(t._s(t.formatDate(m.date)))])}))],2)])])}),[],!1,null,null,null);e.default=component.exports}}]);