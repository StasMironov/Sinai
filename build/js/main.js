"use strict";

//===== Function check element ==========//
jQuery.fn.exists = function () {
  return $(this).length;
};

$(function () {
  lightGallery(document.getElementById('lightgallery-cer'));

  if ($('.index-content__txt').exists()) {
    var truncate = document.querySelectorAll(".index-content__txt");

    for (var i = 0; i < truncate.length; i++) {
      $clamp(truncate[i], {
        clamp: 4,
        // Число строк
        useNativeClamp: false
      });
    }
  }

  if ($('.index-content').exists() && $('.index-img').exists()) {
    try {
      var indexContent = new Swiper('.index-content', {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        touchRatio: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
      var indexImg = new Swiper('.index-img', {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
      });
      indexContent.controller.control = indexImg;
      indexImg.controller.control = indexContent;
      $('.swiper-wrapper').resize(function () {
        $('.index__special').height($('.index-content').height());
      });
    } catch (err) {
      console.log('Ошибка ' + err.name + ":" + err.message + "\n" + err.stack);
    }
  }

  if ($('.index-project__contant').exists() && $('.index-project__img').exists()) {
    try {
      var projectContent = new Swiper('.index-project__contant', {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        touchRatio: 0
      });
      var projectImg = new Swiper('.index-project__img', {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.index-project__link--next',
          prevEl: '.index-project__link--prev'
        }
      });
      projectContent.controller.control = projectImg;
      projectImg.controller.control = projectContent;
      $('.swiper-wrapper').resize(function () {
        $('.index__special').height($('.index-content').height());
      });
    } catch (err) {
      console.log('Ошибка ' + err.name + ":" + err.message + "\n" + err.stack);
    }
  }

  if ($('.inner-slider').exists()) {
    try {
      var _projectImg = new Swiper('.inner-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.inner-slider__link--next',
          prevEl: '.inner-slider__link--prev'
        },
        pagination: {
          el: '.inner-slider__num',
          type: "custom",
          renderCustom: function renderCustom(swiper, current, total) {
            var i = current ? current : 0;
            return "<span>".concat(("" + i).slice(-2), "</span>") + "/<span>".concat(("" + total).slice(-2), "</span>");
          }
        }
      });
    } catch (err) {
      console.log('Ошибка ' + err.name + ":" + err.message + "\n" + err.stack);
    }
  }

  if ($('.index-project__example').exists()) {
    var projectEx = new Swiper('.index-project__example', {
      slidesPerView: 3,
      spaceBetween: 20,
      effect: 'slide',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.index-project__arr--next',
        prevEl: '.index-project__arr--prev'
      }
    });
  }

  if ($('.index-certificate__cer').exists()) {
    console.log(1);
    var projectCer = new Swiper('.index-certificate__cer', {
      slidesPerView: 4,
      spaceBetween: 50,
      effect: 'slide',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.index-project__arr--snext',
        prevEl: '.index-project__arr--sprev'
      }
    });
  }
});