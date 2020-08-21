"use strict";document.addEventListener("DOMContentLoaded",function(e){if(jQuery.fn.exists=function(){return $(this).length},$("#aside").exists())try{!0==!window.matchMedia("(min-width:769px)").matches&&(t="#aside",i="#insert",s=$(t).html(),document.querySelector(i).innerHTML=s,$(t).html(""))}catch(e){console.log(e)}var t,i,s}),$(function(){function e(e,t,i,s,n,o){if($(e).exists())try{var r=document.querySelector(e);noUiSlider.create(r,{start:[t,i],connect:!0,step:s,format:wNumb({decimals:0}),range:{min:t,max:i}});var a=$(e).closest(o),l=[$(a).find(".building-filter__up"),$(a).find(".building-filter__low")];return r.noUiSlider.on("update",function(e,t){$(l[t]).text(e[t]),$(n).val(e)}),r}catch(e){console.log(e)}}function t(e,t,i){var s=$(t).closest(".flats-calc__item").find(".flats-calc__block").data("min");return""!=$(e).val()&&(s=(s=(s=$(i).val()).split(","))[0]),s}function i(e,i,n,o){$(e).exists()&&(s(t(e,"#price","#send-result-price"),t(e,"#donat","#send-result-donat"),t(e,"#period","#send-result-period"),t(e,"#savings","#send-result-savings")),$(e).on("change",function(){$(this).val()>n?(o.noUiSlider.set(n),$(this).val(n)):$(this).val()<i||0==$(this).val()?(o.noUiSlider.set(i),$(this).val(i)):o.noUiSlider.set($(this).val()),o.noUiSlider.set([this.value,null]),o.noUiSlider.on("update",function(t,i){$(e).val(t[0])}),s(t(e,"#price","#send-result-price"),t(e,"#donat","#send-result-donat"),t(e,"#period","#send-result-period"),t(e,"#savings","#send-result-savings"))}),o.noUiSlider.on("slide",function(i,n){$(e).val(i[0]),s(t(e,"#price","#send-result-price"),t(e,"#donat","#send-result-donat"),t(e,"#period","#send-result-period"),t(e,"#savings","#send-result-savings"))}),"#flats-savings"===e&&o.noUiSlider.set(n))}function s(e,t,i){var s,n=0,o=0,r=12*i,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;s=e-t,$('[data-name="savings"]').prop("checked")?(o=(o=4.85/12/100*Math.pow(1+4.85/12/100,r)/(Math.pow(1+4.85/12/100,r)-1)).toFixed(5),s=s-(a-(s*(4.85/12/100)*(30/365)+(n=Math.ceil(o*s))))-n,o=4.85/12/100*Math.pow(1+4.85/12/100,r)/(Math.pow(1+4.85/12/100,r)-1),n=Math.ceil(o*s)):(o=(o=4.85/12/100*Math.pow(1+4.85/12/100,r)/(Math.pow(1+4.85/12/100,r)-1)).toFixed(5),n=Math.ceil(o*s),$("#calc-rezult").val(n))}if(ScrollReveal({mobile:!1}),$("#price").exists()){var n=$("#price").closest(".flats-calc__item").find(".flats-calc__block").data("min"),o=$("#price").closest(".flats-calc__item").find(".flats-calc__block").data("max"),r=e("#price",n,o,1e4,"#send-result-price",".flats-calc__item");$("#flat-price").val(n),i("#flat-price",n,o,r)}if($("#donat").exists()){var a=$("#donat").closest(".flats-calc__item").find(".flats-calc__block").data("min"),l=$("#donat").closest(".flats-calc__item").find(".flats-calc__block").data("max"),c=e("#donat",a,l,1e3,"#send-result-donat",".flats-calc__item");$("#flats-donat").val(a),i("#flats-donat",a,l,c)}if($("#period").exists()){var d=$("#period").closest(".flats-calc__item").find(".flats-calc__block").data("min"),p=$("#period").closest(".flats-calc__item").find(".flats-calc__block").data("max"),u=e("#period",d,p,1,"#send-result-period",".flats-calc__item");$("#flats-period").val(d),i("#flats-period",d,p,u)}if($("#savings").exists()){var f=$("#savings").closest(".flats-calc__item").find(".flats-calc__block").data("min"),_=$("#savings").closest(".flats-calc__item").find(".flats-calc__block").data("max"),h=e("#savings",f,_,1,"#send-result-savings",".flats-calc__item");$("#flats-savings").val(_),i("#flats-savings",f,_,h)}if($(".structure__items--projects").exists()&&$(".structure__items--projects").mCustomScrollbar({theme:"minimal-dark",mouseWheelPixels:400}),$(".second-flats__items").exists()&&$(window).on("resize load",function(){$(this).width()>=768&&$(".second-flats__items").mCustomScrollbar({theme:"minimal-dark",mouseWheelPixels:400})}),$('[data-name="savings"]').on("click",function(){$(this).prop("checked")?($(".flats-calc__row--savings").addClass("flats-calc__row--active"),s(t("#flat-price","#price","#send-result-price"),t("#flats-donat","#donat","#send-result-donat"),t("#flats-period","#period","#send-result-period"),t("#flats-savings","#savings","#send-result-savings"))):$(".flats-calc__row--savings").removeClass("flats-calc__row--active")}),$(".form-project--call").exists()){$(".form-project__field").each(function(){$(this).on("input change",function(){var e;e=0,$(".form-project__field").each(function(){""==$(this).val()&&e++}),0==e?$(".form-project__btn").prop("disabled",!1):$(".form-project__btn").prop("disabled",!0)})})}if($("#plan-slider").exists())try{new Swiper("#plan-slider",{spaceBetween:20,slidesPerView:"auto",loop:!0,autoHeight:!0,navigation:{nextEl:".index-project__link--pf_next",prevEl:".index-project__link--pf_prev"},pagination:{el:".project-period__pagination",clickable:!0},breakpoints:{1920:{spaceBetween:20,slidesPerView:4},1025:{spaceBetween:20,slidesPerView:4},1024:{slidesPerView:2,spaceBetween:20},993:{slidesPerView:2,spaceBetween:20},992:{slidesPerView:1.4,spaceBetween:20},769:{slidesPerView:1.4,spaceBetween:20},768:{slidesPerView:2,spaceBetween:20},621:{slidesPerView:2,spaceBetween:20},620:{slidesPerView:1,spaceBetween:20},320:{slidesPerView:1,spaceBetween:20}}})}catch(e){console.log(e)}if($(".certificate__slider").exists())try{new Swiper(".certificate__slider",{spaceBetween:24,slidesPerView:5,touchRatio:0,slidesPerColumn:2,slidesPerColumnFill:"row",autoplay:{delay:3e3},breakpoints:{1025:{slidesPerView:5,spaceBetween:24},1024:{slidesPerView:4,spaceBetween:24,touchRatio:1},641:{slidesPerView:4,spaceBetween:24,touchRatio:1},640:{slidesPerView:3,spaceBetween:24,touchRatio:1},501:{slidesPerView:3,spaceBetween:24,touchRatio:1},500:{slidesPerView:2,spaceBetween:10,touchRatio:1,slidesPerColumn:1},320:{slidesPerView:2,spaceBetween:10,touchRatio:1,slidesPerColumn:1}}})}catch(e){console.log(e)}if($(".partner__slider").exists())try{new Swiper(".partner__slider",{spaceBetween:110,slidesPerView:"auto",loop:!0,autoplay:{delay:5e3},breakpoints:{1920:{spaceBetween:110,slidesPerView:"auto"},1301:{spaceBetween:110,slidesPerView:"auto"},1300:{spaceBetween:40,slidesPerView:4,loop:!1},1025:{spaceBetween:40,slidesPerView:4},1024:{slidesPerView:4,spaceBetween:40,slidesPerColumn:2,slidesPerColumnFill:"row",touchRatio:0},769:{slidesPerView:4,spaceBetween:40,slidesPerColumn:2,slidesPerColumnFill:"row",touchRatio:0},768:{slidesPerView:3,spaceBetween:18,slidesPerColumn:2,slidesPerColumnFill:"row",touchRatio:0},501:{slidesPerView:3,spaceBetween:18,slidesPerColumn:2,slidesPerColumnFill:"row",touchRatio:0},500:{slidesPerView:2,spaceBetween:18,slidesPerColumn:3,slidesPerColumnFill:"row",touchRatio:0},320:{slidesPerView:2,spaceBetween:18,slidesPerColumn:3,slidesPerColumnFill:"row",touchRatio:0}}})}catch(e){console.log(e)}if($(".slider-flats").exists())try{new Swiper(".slider-flats",{slidesPerView:1,spaceBetween:10,touchRatio:0,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".slider-flats__pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}},navigation:{nextEl:".slider-flats__arrow--next",prevEl:".slider-flats__arrow--prev"}})}catch(e){console.log("Ошибка "+e.name+":"+e.message+"\n"+e.stack)}$("#cost").exists()&&e("#cost",$("#cost").closest(".building-filter__col").find(".building-filter__range").data("min"),$("#cost").closest(".building-filter__col").find(".building-filter__range").data("max"),1e5,"#send-result-сost",".building-filter__col");$("#area").exists()&&e("#area",$("#area").closest(".building-filter__col").find(".building-filter__range").data("min"),$("#area").closest(".building-filter__col").find(".building-filter__range").data("max"),10,"#send-result-area",".building-filter__col");$("#distance").exists()&&e("#distance",$("#distance").closest(".building-filter__col").find(".building-filter__range").data("min"),$("#distance").closest(".building-filter__col").find(".building-filter__range").data("max"),10,"#send-result-distance",".building-filter__col");if($(".burger-filter").exists()&&$(".burger-filter").on("click",function(){$(this).toggleClass("burger-filter--active"),$(".building-filter").toggleClass("building-filter--active")}),$(".project-period__list").exists()&&$(".project-period__list").mCustomScrollbar({theme:"dark",mouseWheelPixels:90}),$(window).on("resize load",function(){$(".structure__menu").width($(".structure__items").width())}),$(".structure__map--projects").exists())try{m("#map-projects",".structure__note",".structure__inner")}catch(e){console.log(e)}if($(".structure__map--step-build").exists())try{m("#map-projects",".mf-edge",".structure__inner")}catch(e){console.log(e)}function m(e,t,i){var s=$(window),n=$(e),o=n.offset().top;s.on("scroll",function(){if((window.pageYOffset||document.documentElement.scrollTop)>o){n.addClass("map-fixed");var s=$(window).scrollTop(),r=$(window).height(),a=$(t).offset().top,l=$(t).outerHeight(),c=$(document).height();s+r>=a||r+s==c||l+a<r?($(e).removeClass("map-fixed"),$(i).addClass("map-end")):($(e).addClass("map-fixed"),$(i).removeClass("map-end"))}else n.removeClass("map-fixed")})}if($(".filter-menu").length>0){var w,g,v,x=$(".structure__menu li")[$(".group li").length-1];$(x).find("a").css("padding-right","0px"),$("#example-one").append("<li id='magic-line'></li>");var k=$("#magic-line");k.width($(".current_page_item").width()).css("left",$(".current_page_item a").position().left).data("origLeft",k.position().left).data("origWidth",k.width()),$("#example-one li a").on("click",function(){w=$(this),g=w.position().left,v=w.parent().width(),k.stop().animate({left:g,width:v})}),$(".filter-menu li").each(function(){$(this).on("click",function(){$(this).find("input").prop("checked",!0),$(this).find("input").is(":checked")&&$(this).addClass("current_page_item").siblings().removeClass("current_page_item")})})}if(lightGallery(document.getElementById("lightgallery-cer")),lightGallery(document.getElementById("certificate__gallery")),$(".content--project").exists()){var b=document.querySelector(".content--project");lightGallery(b,{selector:".project__img"})}if($(".index-content__txt").exists())try{for(var j=document.querySelectorAll(".index-content__txt"),y=0;y<j.length;y++)$clamp(j[y],{clamp:4,useNativeClamp:!1})}catch(e){console.log(e)}if($(".index-slider").exists())try{new Swiper(".index-slider",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".swiper-pagination",clickable:!0},touchRatio:0,breakpoints:{1920:{slidesPerView:1,spaceBetween:10},640:{slidesPerView:1,spaceBetween:10,touchRatio:1},320:{slidesPerView:1,spaceBetween:10,touchRatio:1}}})}catch(e){console.log(e)}if($(".index-project__content").exists()&&$(".index-project__img").exists())try{var C=new Swiper(".index-project__content",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".project-pagination",clickable:!0}}),P=new Swiper(".index-project__img",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".index-project__link--next",prevEl:".index-project__link--prev"}});C.controller.control=P,P.controller.control=C,$(".swiper-wrapper").resize(function(){$(".index__special").height($(".index-content").height())})}catch(e){console.log("Ошибка "+e.name+":"+e.message+"\n"+e.stack)}if($(".inner-slider").exists())try{new Swiper(".inner-slider",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".inner-slider__link--next",prevEl:".inner-slider__link--prev"},pagination:{el:".inner-slider__num",type:"custom",renderCustom:function(e,t,i){return"<span>".concat((""+(t||0)).slice(-2),"</span>")+"/<span>".concat((""+i).slice(-2),"</span>")}}})}catch(e){console.log("Ошибка "+e.name+":"+e.message+"\n"+e.stack)}if($(".index-project__example").exists())try{new Swiper(".index-project__example",{slidesPerView:3,spaceBetween:20,effect:"slide",loop:!0,fadeEffect:{crossFade:!0},navigation:{nextEl:".index-project__arr--next",prevEl:".index-project__arr--prev"}})}catch(e){console.log(e)}if($(".index-certificate__cer").exists())try{new Swiper(".index-certificate__cer",{slidesPerView:4,spaceBetween:42,effect:"slide",loop:!0,autautoplay:{delay:1e3,disableOnInteraction:!1},fadeEffect:{crossFade:!0},navigation:{nextEl:".index-project__arr--snext",prevEl:".index-project__arr--sprev"},breakpoints:{922:{slidesPerView:4,spaceBetween:42,autoplay:!1},769:{slidesPerView:4,spaceBetween:42,autoplay:!1},768:{slidesPerView:3,spaceBetween:42,autoplay:!1},601:{autoplay:!1},501:{slidesPerView:3,spaceBetween:42},500:{slidesPerView:2,spaceBetween:8},320:{slidesPerView:2,spaceBetween:8}}})}catch(e){console.log(e)}if($(".index-example__slider").exists())try{new Swiper(".index-example__slider",{slidesPerView:1,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".index-project__arr--ex_next",prevEl:".index-project__arr--ex_prev"},pagination:{el:".inner-slider__num--example",type:"custom",renderCustom:function(e,t,i){return"<span>".concat((""+(t||0)).slice(-2),"</span>")+"/<span>".concat((""+i).slice(-2),"</span>")}}})}catch(e){console.log(e)}if($(".index-news__slider").exists())try{new Swiper(".index-news__slider",{slidesPerView:"auto",spaceBetween:40,loop:!0,pagination:{el:".index-news__pagination",type:"progressbar"}})}catch(e){console.log(e)}if($(".index__slider").exists())try{var B,V=window.matchMedia("(min-width:641px)"),E=function(){if(!0!==V.matches)return!1===V.matches?S():void 0;void 0!==B&&B.destroy(!0,!0)},S=function(){B=new Swiper(".index__slider",{slidesPerView:1,spaceBetween:16,a11y:!0,keyboardControl:!0,grabCursor:!0,effect:"slide",slidesPerColumn:3,pagination:{el:".index__pag",clickable:!0},breakpoints:{1920:{slidesPerColumn:3,spaceBetween:16},640:{slidesPerColumn:1,slidesPerView:1,spaceBetween:16},320:{slidesPerColumn:1,slidesPerView:1,spaceBetween:16}}})};V.addListener(E),E()}catch(e){console.log(e)}if($(".button").exists())try{!function(){for(var e=document.querySelectorAll(".button"),t=function(t){e[t].addEventListener("mousemove",function(i){var s=i;this.classList.add("button-bg"),function(e,t){var i=e.getBoundingClientRect(),s=t.clientX-i.left-90,n=t.clientY-i.top-90;e.style.backgroundPosition="0 0,0 0,"+s+"px "+n+"px,0 0"}(e[t],s)}),e[t].addEventListener("mouseleave",function(){this.classList.remove("button-bg")})},i=0;i<e.length;i++)t(i)}()}catch(e){console.log(e)}function M(e,t){var i=$(e).height();$(t).css({height:i+"px"})}function R(e){var t=e[0].getBoundingClientRect();return{top:t.top+pageYOffset,bottom:t.bottom+pageYOffset}}if($(".index-certificate__unique").exists()&&(M("#lightgallery-cer .swiper-slide",".index-certificate__unique"),$(window).on("resize load",function(){M("#lightgallery-cer .swiper-slide",".index-certificate__unique")})),$(".certificate__cover").exists()&&(M(".certificate__slider ",".certificate__cover"),$(window).on("resize load",function(){M(".certificate__slider ",".certificate__cover")})),$(".index-example").exists()&&O(".index-example"),$(".index-inner").exists()&&O(".index-inner"),$(window).on("load",function(){$(this).width()>=620&&$("[data-floor]").each(function(){$(this).on("mousemove",function(){var e=R($(this));R($(".object__inner")),$(".module").addClass("module--active");var t=$(this)[0].getBoundingClientRect().height;$(".module").css("top",e.top-$(".header").height()-t/2.9)}),$(this).on("mouseleave",function(){$(".module").removeClass("module--active")})})}),$("#map").length>0){var T=function(){for(var e=new Set,t=0;t<W.length;t++)W[t].checked&&(console.log(e),e.add(W[t].value));q.clearLayers();var i=(new L.MarkerClusterGroup).addTo(q);F.eachLayer(function(t,s){if(1==e.has(t.feature.properties.name)){var n=t,o=n.feature;n.setIcon(L.icon(o.properties.icon)),i.addLayer(t),L.layerGroup().addTo(z)}else if(1==e.has("all")){var r=t,a=r.feature;r.setIcon(L.icon(a.properties.icon)),i.addLayer(t),L.layerGroup().addTo(z)}})};L.mapbox.accessToken="pk.eyJ1IjoiYWRtaW5zaW5haSIsImEiOiJja2N2czJ2ejcwNzdoMzBtbDVneTh6NTNkIn0.pkiEoq-UDjbqvdDrB_zZCQ";var z=L.mapbox.map("map").setView([53.376457,58.986727],17.95).addLayer(L.mapbox.styleLayer("mapbox://styles/mapbox/light-v10"));z.scrollWheelZoom&&z.scrollWheelZoom.disable();var F,q=L.layerGroup().addTo(z);L.mapbox.featureLayer().loadURL("./js/json/markers-project.geojson").on("ready",function(e){F=e.target,T(),function(){q.clearLayers();var e=(new L.MarkerClusterGroup).addTo(q);F.eachLayer(function(t,i){var s=t,n=s.feature;s.setIcon(L.icon(n.properties.icon)),e.addLayer(t),L.layerGroup().addTo(z)})}()});for(var W=document.getElementById("colors").querySelectorAll("input"),H=0;H<W.length;H++)W[H].addEventListener("click",T)}function I(e,t){if($("#".concat(e)).exists()){var i=$("#".concat(e)).data("center"),s=[];mapboxgl.accessToken="pk.eyJ1IjoiYWRtaW5zaW5haSIsImEiOiJja2N2czJ2ejcwNzdoMzBtbDVneTh6NTNkIn0.pkiEoq-UDjbqvdDrB_zZCQ";var n=!1,o=i,r=new mapboxgl.Map({container:e,style:"mapbox://styles/mapbox/light-v10",center:o,zoom:15.9,attributionControl:!1});r.scrollZoom.disable();new mapboxgl.NavigationControl({showCompass:!1,showZoom:!0});if($(t).exists()){var a=0;try{var l=function(e){return r.flyTo({center:c[e],zoom:15.9,bearing:0,essential:!0}),r.fire("flystart"),e};$(t).each(function(){var e=$(this).data("coordinates"),t=document.createElement("div"),i=(new DOMParser).parseFromString('<svg width="80" height="80" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="rect" y="59" width="83.4386" height="83.4386" transform="rotate(-45 0 59)" fill="#40424C"/><path d="M68.2258 75.368V45.0131C68.2258 44.0275 67.4259 43.2275 66.4402 43.2275H52.1556C51.1699 43.2275 50.37 44.0275 50.37 45.0131V75.368" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>                <path d="M50.3699 53.9409H43.2276C42.242 53.9409 41.442 54.7409 41.442 55.7265V75.3679" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>                <path d="M77.1537 75.3679V55.7265C77.1537 54.7409 76.3538 53.9409 75.3682 53.9409H68.2258" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M54.8339 68.2256H63.7618" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M61.9763 68.2256V75.3679" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M56.6195 75.3679V68.2256" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M55.7267 56.6194H62.869" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M55.7267 61.976H62.869" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M55.7267 51.2627H62.869" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M46.7988 61.976H50.37" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M46.7988 68.2256H50.37" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M68.2258 61.976H71.797" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M68.2258 68.2256H71.797" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M78.9393 75.3679H39.6565" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',"application/xml");t.appendChild(t.ownerDocument.importNode(i.documentElement,!0)),t.className="marker",s.push(t),new mapboxgl.Marker(t).setLngLat(e).addTo(r)});var c=[];$(t).each(function(e){s[e].setAttribute("data-href",$(this).data("href")),null!=$(this).data("coordinates")&&c.push($(this).data("coordinates")),$(this).hover(function(){l(e),a=l(e)})}),r.on("moveend",function(e){if(n){s[a].classList.add("marker--active");for(var t=0;t<s.length;t++)t!=a&&s[t].classList.remove("marker--active");r.fire("flyend")}}),r.on("flystart",function(){n=!0}),r.on("flyend",function(){n=!1}),s.forEach(function(e){e.addEventListener("click",function(){var e=this.getAttribute("data-href");location=e})})}catch(e){console.log(e)}}}}if(I("map-projects",".structure__item"),I("map-flat","#map-flat"),$(".form-project__field").exists&&$(".form-project__field").each(function(){var e=this;$(this).on("mousemove",function(){$(e).closest(".form-project__block").addClass("form-project__block--active")}),$(this).on("mouseleave",function(){$(e).is(":focus")||$(e).val()||$(e).closest(".form-project__block").removeClass("form-project__block--active")}),$(this).on("blur",function(){$(this).val()||$(this).closest(".form-project__block").removeClass("form-project__block--active")})}),$(".building-filter__wrp").length>0&&($(".building-filter__wrp").each(function(){$(this).on("click",function(){var e=$(this).parent().toggleClass("building-filter__case--active");$(this).closest(".building-filter__col").siblings().find(".building-filter__case").removeClass("building-filter__case--active"),$(".building-filter__case").each(function(t){$(this)[0]!=e[0]&&$(this)[0].classList.contains("building-filter__case--active")&&$(this)[0].classList.remove("building-filter__case--active")})}),$(this).next(".building-filter__select").mCustomScrollbar({theme:"minimal-dark",mouseWheelPixels:90})}),$(document).click(function(e){var t=$(".building-filter__case");e.target==t[0]||t.has(e.target).length||t.removeClass("building-filter__case--active")})),$(".filter-sort__wrp").length>0&&($(".filter-sort__wrp").each(function(){$(this).on("click",function(){$(this).parent().toggleClass("filter-sort__case--active")}),$(this).next(".filter-sort__select").mCustomScrollbar({theme:"dark",mouseWheelPixels:90})}),$(document).click(function(e){var t=$(".filter-sort__case");e.target==t[0]||t.has(e.target).length||t.removeClass("filter-sort__case--active")})),$(".filter-sort__unit").exists()&&$(".filter-sort__unit").each(function(){$(this).on("click",function(){$(".filter-sort__text").text($(this).text()),$(".filter-sort__case").removeClass("filter-sort__case--active"),$(this).find("input").data("period")})}),$(".building-filter__unit").length>0&&$(".building-filter__unit").each(function(){$(this).on("click",function(){$(this).closest(".building-filter__case").find(".building-filter__text").text($(this).text()),$(".building-filter__case").removeClass("building-filter__case--active")})}),$(".project-period__bloc").length>0&&$(".project-period__bloc").each(function(){$(this).on("click",function(){$(this).parent().toggleClass("project-period__box--active"),$(this).closest(".building-filter__col").siblings().find(".project-period__box").removeClass("project-period__box--active")})}),$(".project-period__slider").exists())try{new Swiper(".project-period__slider",{slidesPerView:"1",spaceBetween:40,effect:"fade",autoplay:{delay:5e3},fadeEffect:{crossFade:!0},pagination:{el:".inner-slider__num",type:"custom",renderCustom:function(e,t,i){return"<span>".concat((""+(t||0)).slice(-2),"</span>")+"/<span>".concat((""+i).slice(-2),"</span>")}},navigation:{nextEl:".inner-slider__link--next",prevEl:".inner-slider__link--prev"}})}catch(e){console.log(e)}if($(".project-period__unit").exists()&&$(".project-period__unit").each(function(){var e=0,t=0;$(this).on("click",function(){$(".project-period__text").text($(this).text()),$(".project-period__box").removeClass("project-period__box--active"),e=$(this).find("input").data("period"),$(".project-period__slider .swiper-slide").each(function(){if((t=$(this).data("slide"))==e)return projecPeriod.slideTo(t-1),!1})})}),$(document).click(function(e){var t=$(".project-period__box");e.target==t[0]||t.has(e.target).length||t.removeClass("project-period__box--active")}),$(".menu-content__inner").exists())try{$('a[href^="#"]').click(function(){var e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top-130},600)});var N={el_menu:".menu-content__inner:eq(0)",init:function(){N.menu(),$(document).scroll(function(){N.scolling()})},menu:function(){N.links_arr=[],$(N.el_menu+" a").each(function(e){if($(this).attr("href")&&-1!=$(this).attr("href").indexOf("#")){var t=$(this).attr("href").indexOf("#"),i=$(this).attr("href").length,s=$(this).attr("href").substr(t,i);N.links_arr[e]=$(this).attr("href")+"::"+s}})},scolling:function(){N.links_arr.forEach(function(e){var t=e.split("::");if(N.inWindow(""+t[1]).length>0)return $(".menu-content__li").removeClass("menu-content__li--active"),$('a[href="'+t[0]+'"]').addClass("menu-content__li--active"),!1})},inWindow:function(e){var t=$(window).scrollTop()-70,i=$(window).height(),s=$(e),n=[];return s.each(function(){var e=$(this),s=e.offset();t<=s.top&&e.height()+s.top<t+i&&n.push(this)}),$(n)}};N.init()}catch(e){console.log(e)}function U(e,t){if($(e).exists)try{var i=$(window),s=$(t),n=s.offset().top;i.on("scroll",function(){(window.pageYOffset||document.documentElement.scrollTop)>n?s.addClass("mf-fixed"):s.removeClass("mf-fixed")})}catch(e){console.log(e)}}function O(e,t){var i=document.querySelector(e),s=t.slides.length,n=i.querySelectorAll(".swiper-menu");if(s>0)for(var o=0;o<n.length;o++)for(var r=0;r<s;r++){var a=document.createElement("div");a.classList.add("swiper-menu__item"),a.setAttribute("data-index",r),n[o].appendChild(a),0==r&&a.classList.add("swiper-menu__item--active")}}$(window).on("resize load",function(){$(this).width()>922&&U(".menu-content",".menu-content__inner")}),U(".structure__aside",".structure__inner"),$(".project-map__item").exists()&&$(".project-map__item").each(function(){$(this).on("click",function(){$(this).find("input").is(":checked")?$(this).addClass("project-map__item--active"):$(this).removeClass("project-map__item--active")})}),$(".project-period__slider").exists()&&O(".project-period__slider",projecPeriod),$(".project-period__slider .swiper-menu").on("click",".swiper-menu__item",function(){var e,t,i;e=projecPeriod,t=this,i=$(t).data("index"),e.slideTo(i),$(t).attr("index",i),console.log($(t).closest(".swiper-menu").find(".swiper-menu__item")),$(t).closest(".swiper-menu").find(".swiper-menu__item").each(function(){console.log($(this)),$(this).data("index")!=i?$(this).removeClass("swiper-menu__item--active"):$(this).addClass("swiper-menu__item--active")})})});