(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{297:function(e){e.exports=JSON.parse('[{"gameImage":"/images/others/popular-game-thumb1.webp","btnName":"Game Details","title":"Dinosours - Hunter Sniper Shooter","slug":"1","category":"1"},{"gameImage":"/images/others/popular-game-thumb2.webp","btnName":"Game Details","title":"Alien Space Five Star","slug":"2","category":"2"},{"gameImage":"/images/others/popular-game-thumb3.webp","btnName":"Game Details","title":"Space Adventure - SNIPER SHOOTER","slug":"3","category":"3"},{"gameImage":"/images/others/popular-game-thumb4.webp","btnName":"Game Details","title":"Space Exploration Game","slug":"4","category":"4"},{"gameImage":"/images/others/popular-game-thumb5.webp","btnName":"Game Details","title":"Alien Space Seven Star","slug":"5","category":"5"},{"gameImage":"/images/others/popular-game-thumb2.webp","btnName":"Game Details","title":"Alien Space SNIPER SHOOTER","slug":"6","category":"1"}]')},301:function(e,t,n){"use strict";var r=n(2),o=n(84).find,l=n(138),m="find",c=!0;m in[]&&Array(1)[m]((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),l(m)},334:function(e,t,n){"use strict";n.r(t);n(14),n(22),n(23),n(301);var r=n(297),o={components:{GameDetails:function(){return n.e(3).then(n.bind(null,350))},HeaderSection:function(){return Promise.resolve().then(n.bind(null,206))},OffCanvasMobileMenu:function(){return n.e(0).then(n.bind(null,336))},Breadcrumb:function(){return Promise.resolve().then(n.bind(null,207))},Footer:function(){return Promise.resolve().then(n.bind(null,208))}},data:function(){return{btnName:"JOIN NOW",gameHome:r,navOpen:!1,BreadcrumbTitle:"Game Details",BreadcrumbSubTitle:"Game",paddingTop:"pt-32",slug:this.$route.params.slug}},mounted:function(){var e=this;this.gameHome=r.find((function(t){return t.slug==e.$route.params.slug}))}},l=n(8),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"bg-cover bg-gray-800",staticStyle:{"background-image":"url(/images/bg/body-bg2.webp)"}},[t("HeaderSection"),e._v(" "),t("OffCanvasMobileMenu",{class:{"show-mobile-menu":e.navOpen},on:{togglenav:function(t){e.navOpen=!e.navOpen}}}),e._v(" "),t("Breadcrumb",{attrs:{BreadcrumbTitle:e.BreadcrumbTitle,BreadcrumbSubTitle:e.BreadcrumbSubTitle}}),e._v(" "),t("GameDetails",{attrs:{games:e.gameHome}}),e._v(" "),t("Footer")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{HeaderSection:n(206).default,Breadcrumb:n(207).default,Footer:n(208).default})}}]);