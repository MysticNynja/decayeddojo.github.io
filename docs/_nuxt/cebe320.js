(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{362:function(t,e,r){"use strict";r.r(e);var l={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),r=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i class='plus-minus'></i></span>");for(var l=t.querySelectorAll(".menu-expand"),o=l.length,n=0;n<o;n++)l[n].addEventListener("click",(function(t){v(t)}));for(var c=0;c<r.length;c++)r[c].addEventListener("click",(function(){m()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},m=function(){var t=document.querySelector("#offcanvas-mobile-menu");null==t||t.classList.remove("active")}}},o=r(8),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mobile-navigation"},[e("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[e("ul",[e("li",{staticClass:"menu-item-has-children"},[e("n-link",{staticClass:"text-base font-semibold capitalize block pb-4 pt-4 pt- border-b-1 border-gray-200 transition-all hover:text-primary text-black text-dark",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"menu-item-has-children relative block"},[e("n-link",{staticClass:"text-base font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black",attrs:{to:"/"}},[t._v("Pages")]),t._v(" "),e("ul",{staticClass:"sub-menu ml-5"},[e("li",[e("n-link",{staticClass:"text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black",attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),e("li",[e("n-link",{staticClass:"text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black",attrs:{to:"/game"}},[t._v("All Games")])],1),t._v(" "),e("li",[e("n-link",{staticClass:"text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black",attrs:{to:"/game/1"}},[t._v("Game Details")])],1),t._v(" "),e("li",[e("n-link",{staticClass:"text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black",attrs:{to:"/player"}},[t._v("Players")])],1),t._v(" "),e("li",[e("n-link",{staticClass:"text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black",attrs:{to:"/player/1"}},[t._v("Player Details")])],1),t._v(" "),e("li",[e("n-link",{staticClass:"text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black",attrs:{to:"/FAQ"}},[t._v("FAQ")])],1),t._v(" "),e("li",[e("n-link",{staticClass:"text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black",attrs:{to:"/404Error"}},[t._v("404-Error")])],1)])],1),t._v(" "),e("li",[e("n-link",{staticClass:"text-base font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black",attrs:{to:"/"}},[t._v("Contact Us")])],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);