"use strict";jQuery.fn.exists=function(){return $(this).length},$(function(){if(lightGallery(document.getElementById("lightgallery-cer")),$(".index-content__txt").exists())for(var e=document.querySelectorAll(".index-content__txt"),n=0;n<e.length;n++)$clamp(e[n],{clamp:4,useNativeClamp:!1});if($(".index-content").exists()&&$(".index-img").exists())try{var t=new Swiper(".index-content",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},touchRatio:0,pagination:{el:".swiper-pagination",clickable:!0}}),i=new Swiper(".index-img",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0}});t.controller.control=i,i.controller.control=t,$(".swiper-wrapper").resize(function(){$(".index__special").height($(".index-content").height())})}catch(e){console.log("Ошибка "+e.name+":"+e.message+"\n"+e.stack)}if($(".index-project__content").exists()&&$(".index-project__img").exists())try{var r=new Swiper(".index-project__content",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".project-pagination",clickable:!0},touchRatio:0}),s=new Swiper(".index-project__img",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".index-project__link--next",prevEl:".index-project__link--prev"}});r.controller.control=s,s.controller.control=r,$(".swiper-wrapper").resize(function(){$(".index__special").height($(".index-content").height())})}catch(e){console.log("Ошибка "+e.name+":"+e.message+"\n"+e.stack)}if($(".inner-slider").exists())try{new Swiper(".inner-slider",{slidesPerView:1,spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".inner-slider__link--next",prevEl:".inner-slider__link--prev"},pagination:{el:".inner-slider__num",type:"custom",renderCustom:function(e,n,t){return"<span>".concat((""+(n||0)).slice(-2),"</span>")+"/<span>".concat((""+t).slice(-2),"</span>")}}})}catch(e){console.log("Ошибка "+e.name+":"+e.message+"\n"+e.stack)}if($(".index-project__example").exists())new Swiper(".index-project__example",{slidesPerView:3,spaceBetween:20,effect:"slide",loop:!0,fadeEffect:{crossFade:!0},navigation:{nextEl:".index-project__arr--next",prevEl:".index-project__arr--prev"}});if($(".index-certificate__cer").exists()){console.log(1);new Swiper(".index-certificate__cer",{slidesPerView:4,spaceBetween:50,effect:"slide",fadeEffect:{crossFade:!0},navigation:{nextEl:".index-project__arr--snext",prevEl:".index-project__arr--sprev"}})}if($(".index-example__slider").exists()){console.log(1);new Swiper(".index-example__slider",{slidesPerView:1,effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:".index-project__arr--ex_next",prevEl:".index-project__arr--ex_prev"}})}if($(".index-news__slider").exists()){console.log(1);new Swiper(".index-news__slider",{slidesPerView:"auto",spaceBetween:40,effect:"slide",loop:!0,autoplay:{delay:5e3},fadeEffect:{crossFade:!0},pagination:{el:".index-news__pagination",type:"progressbar"}})}document.layers,document.all;var c=document.getElementById("test"),o=0,a=0;c.addEventListener("mousemove",function(e){o=e.clientX-c.offsetLeft-450,a=e.clientY-c.offsetTop+325,console.log("x ".concat(o)),console.log("y ".concat(a)),document.getElementById("test").style.backgroundPosition="0 0,0 0,"+o+"px "+a+"px,0 0"})});