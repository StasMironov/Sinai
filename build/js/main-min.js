"use strict";jQuery.fn.exists=function(){return $(this).length},$(function(){if(ScrollReveal({mobile:!1}),$(".group").length>0){var e,t,i,n=$(".group li")[$(".group li").length-1];$(n).find("a").css("padding-right","0px"),$("#example-one").append("<li id='magic-line'></li>");var o=$("#magic-line");o.width($(".current_page_item").width()).css("left",$(".current_page_item a").position().left).data("origLeft",o.position().left).data("origWidth",o.width()),$("#example-one li a").on("click",function(){e=$(this),t=e.position().left,i=e.parent().width(),o.stop().animate({left:t,width:i})}),$(".group li").each(function(){$(this).on("click",function(){$(this).find("input").prop("checked",!0),$(this).find("input").is(":checked")&&$(this).addClass("current_page_item").siblings().removeClass("current_page_item")})})}if(lightGallery(document.getElementById("lightgallery-cer")),$(".index-content__txt").exists())try{for(var r=document.querySelectorAll(".index-content__txt"),s=0;s<r.length;s++)$clamp(r[s],{clamp:4,useNativeClamp:!1})}catch(e){console.log(e)}if($(".index-slider").exists())try{new Swiper(".index-slider",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".swiper-pagination",clickable:!0},touchRatio:0,breakpoints:{1920:{slidesPerView:1,spaceBetween:10},640:{slidesPerView:1,spaceBetween:10,touchRatio:1},320:{slidesPerView:1,spaceBetween:10,touchRatio:1}}})}catch(e){console.log(e)}if($(".index-project__content").exists()&&$(".index-project__img").exists())try{var c=new Swiper(".index-project__content",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".project-pagination",clickable:!0}}),a=new Swiper(".index-project__img",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".index-project__link--next",prevEl:".index-project__link--prev"}});c.controller.control=a,a.controller.control=c,$(".swiper-wrapper").resize(function(){$(".index__special").height($(".index-content").height())})}catch(e){console.log("Ошибка "+e.name+":"+e.message+"\n"+e.stack)}if($(".inner-slider").exists())try{var l=new Swiper(".inner-slider",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".inner-slider__link--next",prevEl:".inner-slider__link--prev"},pagination:{el:".inner-slider__num",type:"custom",renderCustom:function(e,t,i){return"<span>".concat((""+(t||0)).slice(-2),"</span>")+"/<span>".concat((""+i).slice(-2),"</span>")}}})}catch(e){console.log("Ошибка "+e.name+":"+e.message+"\n"+e.stack)}if($(".index-project__example").exists())try{new Swiper(".index-project__example",{slidesPerView:3,spaceBetween:20,effect:"slide",loop:!0,fadeEffect:{crossFade:!0},navigation:{nextEl:".index-project__arr--next",prevEl:".index-project__arr--prev"}})}catch(e){console.log(e)}if($(".index-certificate__cer").exists())try{new Swiper(".index-certificate__cer",{slidesPerView:4,spaceBetween:42,effect:"slide",loop:!0,autoplay:{delay:1e3,disableOnInteraction:!1},fadeEffect:{crossFade:!0},navigation:{nextEl:".index-project__arr--snext",prevEl:".index-project__arr--sprev"},breakpoints:{922:{slidesPerView:4,spaceBetween:42,autoplay:!1},769:{slidesPerView:4,spaceBetween:42,autoplay:!1},768:{slidesPerView:3,spaceBetween:42,autoplay:!1},601:{autoplay:!1},501:{slidesPerView:3,spaceBetween:42},500:{slidesPerView:2,spaceBetween:8},320:{slidesPerView:2,spaceBetween:8}}})}catch(e){console.log(e)}if($(".index-example__slider").exists())try{new Swiper(".index-example__slider",{slidesPerView:1,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".index-project__arr--ex_next",prevEl:".index-project__arr--ex_prev"},pagination:{el:".inner-slider__num--example",type:"custom",renderCustom:function(e,t,i){return"<span>".concat((""+(t||0)).slice(-2),"</span>")+"/<span>".concat((""+i).slice(-2),"</span>")}}})}catch(e){console.log(e)}if($(".index-news__slider").exists())try{var p=new Swiper(".index-news__slider",{slidesPerView:"auto",spaceBetween:40,effect:"slide",loop:!0,autoplay:{delay:5e3},fadeEffect:{crossFade:!0},pagination:{el:".index-news__pagination",type:"progressbar"}})}catch(e){console.log(e)}if($(".index__slider").exists())try{var d,f=window.matchMedia("(min-width:641px)"),u=function(){if(!0!==f.matches)return!1===f.matches?m():void 0;void 0!==d&&d.destroy(!0,!0)},m=function(){d=new Swiper(".index__slider",{slidesPerView:1,spaceBetween:16,a11y:!0,keyboardControl:!0,grabCursor:!0,effect:"slide",slidesPerColumn:3,pagination:{el:".index__pag",clickable:!0},breakpoints:{1920:{slidesPerColumn:3,spaceBetween:16},640:{slidesPerColumn:1,slidesPerView:1,spaceBetween:16},320:{slidesPerColumn:1,slidesPerView:1,spaceBetween:16}}})};f.addListener(u),u()}catch(e){console.log(e)}if($(".button").exists())try{!function(){for(var e=document.querySelectorAll(".button"),t=function(t){e[t].addEventListener("mousemove",function(i){var n=i;this.classList.add("button-bg"),function(e,t){var i=e.getBoundingClientRect(),n=t.clientX-i.left-90,o=t.clientY-i.top-90;e.style.backgroundPosition="0 0,0 0,"+n+"px "+o+"px,0 0"}(e[t],n)}),e[t].addEventListener("mouseleave",function(){this.classList.remove("button-bg")})},i=0;i<e.length;i++)t(i)}()}catch(e){console.log(e)}function _(e,t){var i=$(e).height();$(t).css({height:i+"px"})}if($(".index-certificate__unique").exists()&&(_("#lightgallery-cer .swiper-slide",".index-certificate__unique"),$(window).on("resize load",function(){_("#lightgallery-cer .swiper-slide",".index-certificate__unique")})),$(".index-example").exists()&&x(".index-example"),$(".index-inner").exists()&&x(".index-inner"),$(".index-example .swiper-menu").on("click",".swiper-menu__item",function(){h(this,p)}),$(".index-example .swiper-menu").exists())try{$(".index-example .swiper-menu").on("click",".swiper-menu__item",function(){h(this,p)})}catch(e){console.log(e)}if($(".swiper-menu").exists())try{$(".swiper-menu").on("click",".swiper-menu__item",function(){h(this,l)})}catch(e){console.log(e)}function h(e,t){var i=e,n=$(i).data("index");t.slideTo(n);for(var o=$(i).attr("index",n),r=0;r<o.length;r++)$(i).closest(".swiper-wrapper").find(".swiper-menu").each(function(){$(this).find(".swiper-menu__item").each(function(){$(this).data("index")!=n?$(this).removeClass("swiper-menu__item--active"):$(this).addClass("swiper-menu__item--active")})})}function x(e){var t=document.querySelector(e),i=l.slides.length,n=t.querySelectorAll(".swiper-menu");if(i>0)for(var o=0;o<n.length;o++)for(var r=0;r<i;r++){var s=document.createElement("div");s.classList.add("swiper-menu__item"),s.setAttribute("data-index",r),n[o].appendChild(s),0==r&&s.classList.add("swiper-menu__item--active")}}function g(e){var t=e[0].getBoundingClientRect();return{top:t.top+pageYOffset,bottom:t.bottom+pageYOffset}}if($(window).on("load",function(){$(this).width()>=620&&$("[data-floor]").each(function(){$(this).on("mousemove",function(){var e=g($(this));g($(".object__inner")),$(".module").addClass("module--active");var t=$(this)[0].getBoundingClientRect().height;$(".module").css("top",e.top-$(".header").height()-t/2.9)}),$(this).on("mouseleave",function(){$(".module").removeClass("module--active")})})}),$("#map").length>0){L.mapbox.accessToken="pk.eyJ1IjoiYWRtaW5zaW5haSIsImEiOiJja2N2czJ2ejcwNzdoMzBtbDVneTh6NTNkIn0.pkiEoq-UDjbqvdDrB_zZCQ";var w=L.mapbox.map("map").setView([53.37712,58.98555],17).addLayer(L.mapbox.styleLayer("mapbox://styles/mapbox/light-v10")),v=L.mapbox.featureLayer().addTo(w);v.on("layeradd",function(e){var t=e.layer,i=t.feature;t.setIcon(L.icon(i.properties.icon))}),v.setGeoJSON({type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[58.98555,53.37712]},properties:{title:"Магазин",icon:{iconUrl:"../img/icon/marker/shop.png",iconSize:[50,50],iconAnchor:[25,25],popupAnchor:[0,-25],className:"marker"}}},{type:"Feature",geometry:{type:"Point",coordinates:[58.988547,53.376635]},properties:{title:"Школа",icon:{iconUrl:"../img/icon/marker/school.png",iconSize:[50,50],iconAnchor:[25,25],popupAnchor:[0,-25],className:"marker"}}}]})}if($("#map-projects").length>0){mapboxgl.accessToken="pk.eyJ1IjoiYWRtaW5zaW5haSIsImEiOiJja2N2czJ2ejcwNzdoMzBtbDVneTh6NTNkIn0.pkiEoq-UDjbqvdDrB_zZCQ";var y=!1;(w=new mapboxgl.Map({container:"map-projects",style:"mapbox://styles/mapbox/light-v10",center:[58.98555,53.37712],zoom:15.5})).on("moveend",function(e){y&&w.fire("flyend")}),w.on("flystart",function(){y=!0}),w.on("flyend",function(){y=!1});w.getCenter();if([{type:"Feature",geometry:{type:"Point",coordinates:[58.98555,53.37712]},properties:{title:"Магазин",icon:{iconUrl:"../img/icon/marker/shop.png",iconSize:[50,50],iconAnchor:[25,25],popupAnchor:[0,-25],className:"marker"}}},{type:"Feature",geometry:{type:"Point",coordinates:[59.089068,53.37959]},properties:{title:"Школа",icon:{iconUrl:"../img/icon/marker/school.png",iconSize:[50,50],iconAnchor:[25,25],popupAnchor:[0,-25],className:"marker"}}}].forEach(function(e){var t=document.createElement("div");t.className="marker",t.style.backgroundImage="url("+e.properties.icon.iconUrl+")",t.style.width=e.properties.icon.iconSize[0]+"px",t.style.height=e.properties.icon.iconSize[1]+"px",new mapboxgl.Marker(t).setLngLat(e.geometry.coordinates).addTo(w)}),$(".structure__item").length>0){var k=[];$(".structure__item").each(function(e){null!=$(this).data("coordinates")&&k.push($(this).data("coordinates")),$(this).hover(function(){w.flyTo({center:k[e],essential:!0}),w.fire("flystart"),console.log(w)})})}}if($(".form-project__field").exists&&$(".form-project__field").each(function(){var e=this;$(this).on("mousemove",function(){$(e).closest(".form-project__block").addClass("form-project__block--active")}),$(this).on("mouseleave",function(){$(e).is(":focus")||$(e).val()||$(e).closest(".form-project__block").removeClass("form-project__block--active")}),$(this).on("blur",function(){$(this).val()||$(this).closest(".form-project__block").removeClass("form-project__block--active")})}),$(".project-period__bloc").on("click",function(){$(".project-period__box").toggleClass("project-period__box--active")}),$(".project-period__slider").exists())try{var b=new Swiper(".project-period__slider",{slidesPerView:"1",spaceBetween:40,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".project-period__pagination",clickable:!0},navigation:{nextEl:".index-project__link.index-project__link--next",prevEl:".index-project__link.index-project__link--prev"}})}catch(e){console.log(e)}$(".project-period__unit").each(function(){var e=0,t=0;$(this).on("click",function(){$(".project-period__text").text($(this).text()),$(".project-period__box").removeClass("project-period__box--active"),e=$(this).find("input").data("period"),$(".project-period__slider .swiper-slide").each(function(){if((t=$(this).data("slide"))==e)return b.slideTo(t-1),!1})})}),b.on("mouseover",function(){alert(b.activeIndex)}),$(".project-period__list").mCustomScrollbar({theme:"dark",mouseWheelPixels:90}),$(document).click(function(e){var t=$(".project-period__box");e.target==t[0]||t.has(e.target).length||t.removeClass("project-period__box--active")}),$('a[href^="#"]').click(function(){var e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top-130},600)});var j={el_menu:".menu-content__inner:eq(0)",init:function(){j.menu(),$(document).scroll(function(){j.scolling()})},menu:function(){j.links_arr=[],$(j.el_menu+" a").each(function(e){if($(this).attr("href")&&-1!=$(this).attr("href").indexOf("#")){var t=$(this).attr("href").indexOf("#"),i=$(this).attr("href").length,n=$(this).attr("href").substr(t,i);j.links_arr[e]=$(this).attr("href")+"::"+n}})},scolling:function(){j.links_arr.forEach(function(e){var t=e.split("::");if(j.inWindow(""+t[1]).length>0)return $(".menu-content__li").removeClass("menu-content__li--active"),$('a[href="'+t[0]+'"]').addClass("menu-content__li--active"),!1})},inWindow:function(e){var t=$(window).scrollTop()-70,i=$(window).height(),n=$(e),o=[];return n.each(function(){var e=$(this),n=e.offset();t<=n.top&&e.height()+n.top<t+i&&o.push(this)}),$(o)}};j.init(),$(window).on("resize load",function(){if($(this).width()>922&&$(".menu-content").exists)try{var e=$(window),t=$(".menu-content__inner"),i=t.offset().top;e.on("scroll",function(){(window.pageYOffset||document.documentElement.scrollTop)>i?t.addClass("mf-fixed"):t.removeClass("mf-fixed")})}catch(e){console.log(e)}}),$(".project-map__item").each(function(){$(this).on("click",function(){$(this).find("input").prop("checked",!0),$(this).find("input").is(":checked")&&$(this).addClass("project-map__item--active").siblings().removeClass("project-map__item--active")})})});