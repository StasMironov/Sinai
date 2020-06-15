"use strict";

//===== Function check element ==========//
jQuery.fn.exists = function () {
  return $(this).length;
};

$(function () {
  $(window).on('resize load', function () {
    $('.index__special').height($('.index__block').height());
  });

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
      (function () {
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
        var bullet = document.querySelectorAll('.swiper-pagination-bullet');
        var slide = document.querySelectorAll('.index-content .swiper-slide');

        var _loop = function _loop(_i) {
          bullet[_i].onclick = function () {
            for (var j = 0; j < slide.length; j++) {
              if (_i == j) {
                var h = slide[j].scrollHeight;
                var p = slide[j].parentNode.parentNode;
                console.log($(p).height() + 50); // $('.index__special').height($(p).height());
              }
            }
          };
        };

        for (var _i = 0; _i < bullet.length; _i++) {
          _loop(_i);
        }

        console.log(bullet);
        console.log(slide);
      })();
    } catch (err) {
      console.log('Ошибка ' + err.name + ":" + err.message + "\n" + err.stack);
    }
  }
});