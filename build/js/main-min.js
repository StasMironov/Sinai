"use strict";jQuery.fn.exists=function(){return $(this).length},$(function(){function e(e,t,i,n,o){var r=document.querySelector(e);noUiSlider.create(r,{start:[t,i],connect:!0,step:n,format:wNumb({decimals:0}),range:{min:t,max:i}});var s=$(e).closest(".building-filter__col"),a=[$(s).find(".building-filter__up"),$(s).find(".building-filter__low")];r.noUiSlider.on("update",function(e,t){$(a[t]).text(e[t]),$(o).val(e)})}if(ScrollReveal({mobile:!1}),$(".certificate__slider").exists())try{new Swiper(".certificate__slider",{spaceBetween:24,slidesPerView:5,touchRatio:0,slidesPerColumn:2,slidesPerColumnFill:"row",autoplay:{delay:3e3},breakpoints:{1025:{slidesPerView:5,spaceBetween:24},1024:{slidesPerView:4,spaceBetween:24,touchRatio:1},641:{slidesPerView:4,spaceBetween:24,touchRatio:1},640:{slidesPerView:3,spaceBetween:24,touchRatio:1},501:{slidesPerView:3,spaceBetween:24,touchRatio:1},500:{slidesPerView:2,spaceBetween:10,touchRatio:1,slidesPerColumn:1},320:{slidesPerView:2,spaceBetween:10,touchRatio:1,slidesPerColumn:1}}})}catch(e){console.log(e)}if($(".partner__slider").exists())try{console.log(!0);new Swiper(".partner__slider",{spaceBetween:110,slidesPerView:"auto",loop:!0,autoplay:{delay:5e3},breakpoints:{1920:{spaceBetween:110,slidesPerView:"auto"},1301:{spaceBetween:110,slidesPerView:"auto"},1300:{spaceBetween:40,slidesPerView:4,loop:!1},1025:{spaceBetween:40,slidesPerView:4},1024:{slidesPerView:4,spaceBetween:40,slidesPerColumn:2,slidesPerColumnFill:"row",touchRatio:0},769:{slidesPerView:4,spaceBetween:40,slidesPerColumn:2,slidesPerColumnFill:"row",touchRatio:0},768:{slidesPerView:3,spaceBetween:18,slidesPerColumn:2,slidesPerColumnFill:"row",touchRatio:0},501:{slidesPerView:3,spaceBetween:18,slidesPerColumn:2,slidesPerColumnFill:"row",touchRatio:0},500:{slidesPerView:2,spaceBetween:18,slidesPerColumn:3,slidesPerColumnFill:"row",touchRatio:0},320:{slidesPerView:2,spaceBetween:18,slidesPerColumn:3,slidesPerColumnFill:"row",touchRatio:0}}})}catch(e){console.log(e)}if($(".slider-flats").exists())try{new Swiper(".slider-flats",{slidesPerView:1,spaceBetween:10,touchRatio:0,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".slider-flats__pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}},navigation:{nextEl:".slider-flats__arrow--next",prevEl:".slider-flats__arrow--prev"}})}catch(e){console.log("Ошибка "+e.name+":"+e.message+"\n"+e.stack)}$("#cost").exists()&&e("#cost",$("#cost").closest(".building-filter__col").find(".building-filter__range").data("min"),$("#cost").closest(".building-filter__col").find(".building-filter__range").data("max"),1e5,"#send-result-сost");$("#area").exists()&&e("#area",$("#area").closest(".building-filter__col").find(".building-filter__range").data("min"),$("#area").closest(".building-filter__col").find(".building-filter__range").data("max"),10,"#send-result-area");if($(".burger-filter").exists()&&$(".burger-filter").on("click",function(){$(this).toggleClass("burger-filter--active"),$(".building-filter").toggleClass("building-filter--active")}),$(".project-period__list").exists()&&$(".project-period__list").mCustomScrollbar({theme:"dark",mouseWheelPixels:90}),$(window).on("resize load",function(){$(".structure__menu").width($(".structure__items").width())}),$(".structure__right").exists)try{var t=$(window),i=$("#map-projects"),n=i.offset().top;t.on("scroll",function(){if((window.pageYOffset||document.documentElement.scrollTop)>n){i.addClass("map-fixed");var e=$(window).scrollTop(),t=$(window).height(),o=$(".structure__note").offset().top,r=$(".structure__note").outerHeight(),s=$(document).height();e+t>=o||t+e==s||r+o<t?(console.log("Элемент показан"),$("#map-projects").removeClass("map-fixed"),$(".structure__inner").addClass("map-end")):($("#map-projects").addClass("map-fixed"),$(".structure__inner").removeClass("map-end"))}else i.removeClass("map-fixed")})}catch(e){console.log(e)}if($(".filter-menu").length>0){var o,r,s,a=$(".structure__menu li")[$(".group li").length-1];$(a).find("a").css("padding-right","0px"),$("#example-one").append("<li id='magic-line'></li>");var l=$("#magic-line");l.width($(".current_page_item").width()).css("left",$(".current_page_item a").position().left).data("origLeft",l.position().left).data("origWidth",l.width()),$("#example-one li a").on("click",function(){o=$(this),r=o.position().left,s=o.parent().width(),l.stop().animate({left:r,width:s})}),$(".filter-menu li").each(function(){$(this).on("click",function(){$(this).find("input").prop("checked",!0),$(this).find("input").is(":checked")&&$(this).addClass("current_page_item").siblings().removeClass("current_page_item")})})}if(lightGallery(document.getElementById("lightgallery-cer")),lightGallery(document.getElementById("certificate__gallery")),$(".index-content__txt").exists())try{for(var c=document.querySelectorAll(".index-content__txt"),d=0;d<c.length;d++)$clamp(c[d],{clamp:4,useNativeClamp:!1})}catch(e){console.log(e)}if($(".index-slider").exists())try{new Swiper(".index-slider",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".swiper-pagination",clickable:!0},touchRatio:0,breakpoints:{1920:{slidesPerView:1,spaceBetween:10},640:{slidesPerView:1,spaceBetween:10,touchRatio:1},320:{slidesPerView:1,spaceBetween:10,touchRatio:1}}})}catch(e){console.log(e)}if($(".index-project__content").exists()&&$(".index-project__img").exists())try{var p=new Swiper(".index-project__content",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".project-pagination",clickable:!0}}),u=new Swiper(".index-project__img",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".index-project__link--next",prevEl:".index-project__link--prev"}});p.controller.control=u,u.controller.control=p,$(".swiper-wrapper").resize(function(){$(".index__special").height($(".index-content").height())})}catch(e){console.log("Ошибка "+e.name+":"+e.message+"\n"+e.stack)}if($(".inner-slider").exists())try{var f=new Swiper(".inner-slider",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".inner-slider__link--next",prevEl:".inner-slider__link--prev"},pagination:{el:".inner-slider__num",type:"custom",renderCustom:function(e,t,i){return"<span>".concat((""+(t||0)).slice(-2),"</span>")+"/<span>".concat((""+i).slice(-2),"</span>")}}})}catch(e){console.log("Ошибка "+e.name+":"+e.message+"\n"+e.stack)}if($(".index-project__example").exists())try{new Swiper(".index-project__example",{slidesPerView:3,spaceBetween:20,effect:"slide",loop:!0,fadeEffect:{crossFade:!0},navigation:{nextEl:".index-project__arr--next",prevEl:".index-project__arr--prev"}})}catch(e){console.log(e)}if($(".index-certificate__cer").exists())try{new Swiper(".index-certificate__cer",{slidesPerView:4,spaceBetween:42,effect:"slide",loop:!0,autautoplay:{delay:1e3,disableOnInteraction:!1},fadeEffect:{crossFade:!0},navigation:{nextEl:".index-project__arr--snext",prevEl:".index-project__arr--sprev"},breakpoints:{922:{slidesPerView:4,spaceBetween:42,autoplay:!1},769:{slidesPerView:4,spaceBetween:42,autoplay:!1},768:{slidesPerView:3,spaceBetween:42,autoplay:!1},601:{autoplay:!1},501:{slidesPerView:3,spaceBetween:42},500:{slidesPerView:2,spaceBetween:8},320:{slidesPerView:2,spaceBetween:8}}})}catch(e){console.log(e)}if($(".index-example__slider").exists())try{new Swiper(".index-example__slider",{slidesPerView:1,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".index-project__arr--ex_next",prevEl:".index-project__arr--ex_prev"},pagination:{el:".inner-slider__num--example",type:"custom",renderCustom:function(e,t,i){return"<span>".concat((""+(t||0)).slice(-2),"</span>")+"/<span>".concat((""+i).slice(-2),"</span>")}}})}catch(e){console.log(e)}if($(".index-news__slider").exists())try{var _=new Swiper(".index-news__slider",{slidesPerView:"auto",spaceBetween:40,loop:!0,pagination:{el:".index-news__pagination",type:"progressbar"}})}catch(e){console.log(e)}if($(".index__slider").exists())try{var h,m=window.matchMedia("(min-width:641px)"),w=function(){if(!0!==m.matches)return!1===m.matches?g():void 0;void 0!==h&&h.destroy(!0,!0)},g=function(){h=new Swiper(".index__slider",{slidesPerView:1,spaceBetween:16,a11y:!0,keyboardControl:!0,grabCursor:!0,effect:"slide",slidesPerColumn:3,pagination:{el:".index__pag",clickable:!0},breakpoints:{1920:{slidesPerColumn:3,spaceBetween:16},640:{slidesPerColumn:1,slidesPerView:1,spaceBetween:16},320:{slidesPerColumn:1,slidesPerView:1,spaceBetween:16}}})};m.addListener(w),w()}catch(e){console.log(e)}if($(".button").exists())try{!function(){for(var e=document.querySelectorAll(".button"),t=function(t){e[t].addEventListener("mousemove",function(i){var n=i;this.classList.add("button-bg"),function(e,t){var i=e.getBoundingClientRect(),n=t.clientX-i.left-90,o=t.clientY-i.top-90;e.style.backgroundPosition="0 0,0 0,"+n+"px "+o+"px,0 0"}(e[t],n)}),e[t].addEventListener("mouseleave",function(){this.classList.remove("button-bg")})},i=0;i<e.length;i++)t(i)}()}catch(e){console.log(e)}function x(e,t){var i=$(e).height();$(t).css({height:i+"px"})}if($(".index-certificate__unique").exists()&&(x("#lightgallery-cer .swiper-slide",".index-certificate__unique"),$(window).on("resize load",function(){x("#lightgallery-cer .swiper-slide",".index-certificate__unique")})),$(".certificate__cover").exists()&&(x(".certificate__slider ",".certificate__cover"),$(window).on("resize load",function(){x(".certificate__slider ",".certificate__cover")})),$(".index-example").exists()&&k(".index-example"),$(".index-inner").exists()&&k(".index-inner"),$(".index-example .swiper-menu").on("click",".swiper-menu__item",function(){v(this,_)}),$(".index-example .swiper-menu").exists())try{$(".index-example .swiper-menu").on("click",".swiper-menu__item",function(){v(this,_)})}catch(e){console.log(e)}if($(".swiper-menu").exists())try{$(".swiper-menu").on("click",".swiper-menu__item",function(){v(this,f)})}catch(e){console.log(e)}function v(e,t){var i=e,n=$(i).data("index");t.slideTo(n);for(var o=$(i).attr("index",n),r=0;r<o.length;r++)$(i).closest(".swiper-wrapper").find(".swiper-menu").each(function(){$(this).find(".swiper-menu__item").each(function(){$(this).data("index")!=n?$(this).removeClass("swiper-menu__item--active"):$(this).addClass("swiper-menu__item--active")})})}function k(e){var t=document.querySelector(e),i=f.slides.length,n=t.querySelectorAll(".swiper-menu");if(i>0)for(var o=0;o<n.length;o++)for(var r=0;r<i;r++){var s=document.createElement("div");s.classList.add("swiper-menu__item"),s.setAttribute("data-index",r),n[o].appendChild(s),0==r&&s.classList.add("swiper-menu__item--active")}}function b(e){var t=e[0].getBoundingClientRect();return{top:t.top+pageYOffset,bottom:t.bottom+pageYOffset}}if($(window).on("load",function(){$(this).width()>=620&&$("[data-floor]").each(function(){$(this).on("mousemove",function(){var e=b($(this));b($(".object__inner")),$(".module").addClass("module--active");var t=$(this)[0].getBoundingClientRect().height;$(".module").css("top",e.top-$(".header").height()-t/2.9)}),$(this).on("mouseleave",function(){$(".module").removeClass("module--active")})})}),$("#map").length>0){L.mapbox.accessToken="pk.eyJ1IjoiYWRtaW5zaW5haSIsImEiOiJja2N2czJ2ejcwNzdoMzBtbDVneTh6NTNkIn0.pkiEoq-UDjbqvdDrB_zZCQ";var y=L.mapbox.map("map").setView([53.37712,58.98555],17).addLayer(L.mapbox.styleLayer("mapbox://styles/mapbox/light-v10")),j=L.mapbox.featureLayer().addTo(y);j.on("layeradd",function(e){var t=e.layer,i=t.feature;t.setIcon(L.icon(i.properties.icon))}),j.setGeoJSON({type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[58.98555,53.37712]},properties:{title:"Магазин",icon:{iconUrl:"../img/icon/marker/shop.png",iconSize:[50,50],iconAnchor:[25,25],popupAnchor:[0,-25],className:"marker"}}},{type:"Feature",geometry:{type:"Point",coordinates:[58.988547,53.376635]},properties:{title:"Школа",icon:{iconUrl:"../img/icon/marker/school.png",iconSize:[50,50],iconAnchor:[25,25],popupAnchor:[0,-25],className:"marker"}}}]})}var C=[];if($("#map-projects").length>0){mapboxgl.accessToken="pk.eyJ1IjoiYWRtaW5zaW5haSIsImEiOiJja2N2czJ2ejcwNzdoMzBtbDVneTh6NTNkIn0.pkiEoq-UDjbqvdDrB_zZCQ";var P=!1;(y=new mapboxgl.Map({container:"map-projects",style:"mapbox://styles/mapbox/light-v10",center:[58.98555,53.37712],zoom:15.5})).scrollZoom.disable();[{type:"Feature",geometry:{type:"Point",coordinates:[58.98555,53.37712]},properties:{title:"Магазин",icon:{iconUrl:"../img/icon/marker/house.png",iconSize:[118,118],iconAnchor:[25,25],popupAnchor:[0,-25],className:"marker"}}},{type:"Feature",geometry:{type:"Point",coordinates:[59.089068,53.37959]},properties:{title:"Школа",icon:{iconUrl:"../img/icon/marker/house.png",iconSize:[118,118],iconAnchor:[25,25],popupAnchor:[0,-25],className:"marker"}}},{type:"Feature",geometry:{type:"Point",coordinates:[58.98631,53.375217]},properties:{title:"Школа",icon:{iconUrl:"../img/icon/marker/house.png",iconSize:[118,118],iconAnchor:[25,25],popupAnchor:[0,-25],className:"marker"}}}].forEach(function(e){var t=document.createElement("div"),i=(new DOMParser).parseFromString('<svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="rect" y="59" width="83.4386" height="83.4386" transform="rotate(-45 0 59)" fill="#40424C"/><path d="M68.2258 75.368V45.0131C68.2258 44.0275 67.4259 43.2275 66.4402 43.2275H52.1556C51.1699 43.2275 50.37 44.0275 50.37 45.0131V75.368" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>                <path d="M50.3699 53.9409H43.2276C42.242 53.9409 41.442 54.7409 41.442 55.7265V75.3679" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>                <path d="M77.1537 75.3679V55.7265C77.1537 54.7409 76.3538 53.9409 75.3682 53.9409H68.2258" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M54.8339 68.2256H63.7618" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M61.9763 68.2256V75.3679" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M56.6195 75.3679V68.2256" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M55.7267 56.6194H62.869" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M55.7267 61.976H62.869" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M55.7267 51.2627H62.869" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M46.7988 61.976H50.37" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M46.7988 68.2256H50.37" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M68.2258 61.976H71.797" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M68.2258 68.2256H71.797" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M78.9393 75.3679H39.6565" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',"application/xml");t.appendChild(t.ownerDocument.importNode(i.documentElement,!0)),t.className="marker",t.style.width=e.properties.icon.iconSize[0]+"px",t.style.height=e.properties.icon.iconSize[1]+"px",t.addEventListener("click",function(){window.location.href=this.getAttribute("data-href")}),C.push(t),new mapboxgl.Marker(t).setLngLat(e.geometry.coordinates).addTo(y)});var B=0;if($(".structure__item").length>0){var V=function(e){return y.flyTo({center:E[e],essential:!0}),y.fire("flystart"),e},E=[];$(".structure__item").each(function(e){C[e].setAttribute("data-href",$(this).data("href")),null!=$(this).data("coordinates")&&E.push($(this).data("coordinates")),$(this).hover(function(){V(e),B=V(e)})}),y.on("moveend",function(e){if(P){C[B].classList.add("marker--active");for(var t=0;t<C.length;t++)t!=B&&C[t].classList.remove("marker--active");y.fire("flyend")}}),y.on("flystart",function(){P=!0}),y.on("flyend",function(){P=!1})}}if($(".form-project__field").exists&&$(".form-project__field").each(function(){var e=this;$(this).on("mousemove",function(){$(e).closest(".form-project__block").addClass("form-project__block--active")}),$(this).on("mouseleave",function(){$(e).is(":focus")||$(e).val()||$(e).closest(".form-project__block").removeClass("form-project__block--active")}),$(this).on("blur",function(){$(this).val()||$(this).closest(".form-project__block").removeClass("form-project__block--active")})}),$(".building-filter__wrp").length>0&&($(".building-filter__wrp").each(function(){$(this).on("click",function(){var e=$(this).parent().toggleClass("building-filter__case--active");$(this).closest(".building-filter__col").siblings().find(".building-filter__case").removeClass("building-filter__case--active"),$(".building-filter__case").each(function(t){$(this)[0]!=e[0]&&$(this)[0].classList.contains("building-filter__case--active")&&$(this)[0].classList.remove("building-filter__case--active")})}),$(this).next(".building-filter__select").mCustomScrollbar({theme:"dark",mouseWheelPixels:90})}),$(document).click(function(e){var t=$(".building-filter__case");e.target==t[0]||t.has(e.target).length||t.removeClass("building-filter__case--active")})),$(".filter-sort__wrp").length>0&&($(".filter-sort__wrp").each(function(){$(this).on("click",function(){$(this).parent().toggleClass("filter-sort__case--active")}),$(this).next(".filter-sort__select").mCustomScrollbar({theme:"dark",mouseWheelPixels:90})}),$(document).click(function(e){var t=$(".filter-sort__case");e.target==t[0]||t.has(e.target).length||t.removeClass("filter-sort__case--active")})),$(".filter-sort__unit").exists()&&$(".filter-sort__unit").each(function(){$(this).on("click",function(){$(".filter-sort__text").text($(this).text()),$(".filter-sort__box").removeClass("filter-sort__box--active"),$(this).find("input").data("period")})}),$(".building-filter__unit").length>0&&$(".building-filter__unit").each(function(){$(this).on("click",function(){$(this).closest(".building-filter__case").find(".building-filter__text").text($(this).text()),$(".building-filter__case").removeClass("building-filter__case--active")})}),$(".project-period__bloc").length>0&&$(".project-period__bloc").each(function(){$(this).on("click",function(){$(this).parent().toggleClass("project-period__box--active"),$(this).closest(".building-filter__col").siblings().find(".project-period__box").removeClass("project-period__box--active")})}),$(".project-period__slider").exists())try{var S=new Swiper(".project-period__slider",{slidesPerView:"1",spaceBetween:40,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".project-period__pagination",clickable:!0},navigation:{nextEl:".index-project__link.index-project__link--next",prevEl:".index-project__link.index-project__link--prev"}})}catch(e){console.log(e)}if($(".project-period__unit").exists()&&$(".project-period__unit").each(function(){var e=0,t=0;$(this).on("click",function(){$(".project-period__text").text($(this).text()),$(".project-period__box").removeClass("project-period__box--active"),e=$(this).find("input").data("period"),$(".project-period__slider .swiper-slide").each(function(){if((t=$(this).data("slide"))==e)return S.slideTo(t-1),!1})})}),$(document).click(function(e){var t=$(".project-period__box");e.target==t[0]||t.has(e.target).length||t.removeClass("project-period__box--active")}),$(".menu-content__inner").exists())try{$('a[href^="#"]').click(function(){var e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top-130},600)});var z={el_menu:".menu-content__inner:eq(0)",init:function(){z.menu(),$(document).scroll(function(){z.scolling()})},menu:function(){z.links_arr=[],$(z.el_menu+" a").each(function(e){if($(this).attr("href")&&-1!=$(this).attr("href").indexOf("#")){var t=$(this).attr("href").indexOf("#"),i=$(this).attr("href").length,n=$(this).attr("href").substr(t,i);z.links_arr[e]=$(this).attr("href")+"::"+n}})},scolling:function(){z.links_arr.forEach(function(e){var t=e.split("::");if(z.inWindow(""+t[1]).length>0)return $(".menu-content__li").removeClass("menu-content__li--active"),$('a[href="'+t[0]+'"]').addClass("menu-content__li--active"),!1})},inWindow:function(e){var t=$(window).scrollTop()-70,i=$(window).height(),n=$(e),o=[];return n.each(function(){var e=$(this),n=e.offset();t<=n.top&&e.height()+n.top<t+i&&o.push(this)}),$(o)}};z.init()}catch(e){console.log(e)}$(window).on("resize load",function(){if($(this).width()>922&&$(".menu-content").exists)try{var e=$(window),t=$(".menu-content__inner"),i=t.offset().top;e.on("scroll",function(){(window.pageYOffset||document.documentElement.scrollTop)>i?t.addClass("mf-fixed"):t.removeClass("mf-fixed")})}catch(e){console.log(e)}}),$(".project-map__item").exists()&&$(".project-map__item").each(function(){$(this).on("click",function(){$(this).find("input").prop("checked",!0),$(this).find("input").is(":checked")&&$(this).addClass("project-map__item--active").siblings().removeClass("project-map__item--active")})})});