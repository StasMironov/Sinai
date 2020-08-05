"use strict";

//===== Function check element ==========//
jQuery.fn.exists = function () {
  return $(this).length;
};

$(function () {
  ScrollReveal({
    mobile: false
  });

  function rangeSlider(block, min, max, steps, input, parent) {
    var slider = document.querySelector(block);
    noUiSlider.create(slider, {
      start: [min, max],
      connect: true,
      step: steps,
      format: wNumb({
        decimals: 0
      }),
      range: {
        'min': min,
        'max': max
      }
    });
    var handle = $(block).closest(parent);
    var skipValues = [$(handle).find('.building-filter__up'), $(handle).find('.building-filter__low')];
    slider.noUiSlider.on('update', function (values, i) {
      $(skipValues[i]).text(values[i]);
      $(input).val(values);
    });
    return slider;
  }

  function checkVal(bloc, rangeBloc, sendBbox) {
    var inputVal = $(rangeBloc).closest('.flats-calc__item').find('.flats-calc__block').data('min');

    if ($(bloc).val() != '') {
      inputVal = $(sendBbox).val();
      inputVal = inputVal.split(',');
      inputVal = inputVal[0];
    }

    return inputVal;
  }

  function checkInput(bloc, min, max, slider) {
    if ($(bloc).exists()) {
      calcPay(checkVal(bloc, '#price', '#send-result-price'), checkVal(bloc, '#donat', '#send-result-donat'), checkVal(bloc, '#period', '#send-result-period'));
      $(bloc).on('change', function () {
        if ($(this).val() > max) {
          slider.noUiSlider.set(max);
          $(this).val(max);
        } else if ($(this).val() < min || $(this).val() == 0) {
          slider.noUiSlider.set(min);
          $(this).val(min);
        } else {
          slider.noUiSlider.set($(this).val());
        }

        slider.noUiSlider.set([this.value, null]);
        slider.noUiSlider.on('update', function (values, handle) {
          $(bloc).val(values[0]);
        }); // let priceFlat = checkVal(bloc, '#price', '#send-result-price');
        // let firstDonat = checkVal(bloc, '#donat', '#send-result-donat');
        // let periodLoan = checkVal(bloc, '#period', '#send-result-period');

        calcPay(checkVal(bloc, '#price', '#send-result-price'), checkVal(bloc, '#donat', '#send-result-donat'), checkVal(bloc, '#period', '#send-result-period'));
      });
      slider.noUiSlider.on('slide', function (values, handle) {
        $(bloc).val(values[0]);
        calcPay(checkVal(bloc, '#price', '#send-result-price'), checkVal(bloc, '#donat', '#send-result-donat'), checkVal(bloc, '#period', '#send-result-period'));
      });
    }
  }

  function calcPay(priceF, donat, period) {
    var monthPay = 0; // x

    var kofPay = 0; // k

    var priceFlat = priceF; // Стоимость квартиры

    var sumLoan; // Сумма займа

    var firstDonat = donat; // Первый взнос

    var periodLoan = period * 12; // Срок кредита

    var percentRate = 4.85 / 12 / 100;
    sumLoan = priceFlat - firstDonat;
    kofPay = percentRate * Math.pow(1 + percentRate, periodLoan) / (Math.pow(1 + percentRate, periodLoan) - 1);
    kofPay = kofPay.toFixed(5);
    monthPay = Math.ceil(kofPay * sumLoan);
    $('#calc-rezult').val(monthPay); // console.log(priceFlat);
    // console.log(firstDonat);

    console.log(monthPay); // console.log(sumLoan);
  }

  if ($('#price').exists()) {
    var min = $('#price').closest('.flats-calc__item').find('.flats-calc__block').data('min');
    var max = $('#price').closest('.flats-calc__item').find('.flats-calc__block').data('max');
    var slider = rangeSlider('#price', min, max, 10000, '#send-result-price', '.flats-calc__item');
    $('#flat-price').val(min);
    checkInput('#flat-price', min, max, slider);
  }

  if ($('#donat').exists()) {
    var _min = $('#donat').closest('.flats-calc__item').find('.flats-calc__block').data('min');

    var _max = $('#donat').closest('.flats-calc__item').find('.flats-calc__block').data('max');

    var _slider = rangeSlider('#donat', _min, _max, 1000, '#send-result-donat', '.flats-calc__item');

    $('#flats-donat').val(_min);
    checkInput('#flats-donat', _min, _max, _slider);
  }

  if ($('#period').exists()) {
    var _min2 = $('#period').closest('.flats-calc__item').find('.flats-calc__block').data('min');

    var _max2 = $('#period').closest('.flats-calc__item').find('.flats-calc__block').data('max');

    var _slider2 = rangeSlider('#period', _min2, _max2, 1, '#send-result-period', '.flats-calc__item');

    $('#flats-period').val(_min2);
    checkInput('#flats-period', _min2, _max2, _slider2);
  }

  if ($('#plan-slider').exists()) {
    try {
      var planSlider = new Swiper('#plan-slider', {
        spaceBetween: 20,
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.index-project__link--pf_next',
          prevEl: '.index-project__link--pf_prev'
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  if ($('.certificate__slider').exists()) {
    try {
      var certificateSlider = new Swiper('.certificate__slider', {
        spaceBetween: 24,
        slidesPerView: 5,
        touchRatio: 0,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        autoplay: {
          delay: 3000
        },
        breakpoints: {
          1025: {
            slidesPerView: 5,
            spaceBetween: 24
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
            touchRatio: 1
          },
          641: {
            slidesPerView: 4,
            spaceBetween: 24,
            touchRatio: 1
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 24,
            touchRatio: 1
          },
          501: {
            slidesPerView: 3,
            spaceBetween: 24,
            touchRatio: 1
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 10,
            touchRatio: 1,
            slidesPerColumn: 1
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
            touchRatio: 1,
            slidesPerColumn: 1
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  if ($('.partner__slider').exists()) {
    try {
      console.log(true);
      var test = new Swiper('.partner__slider', {
        spaceBetween: 110,
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
          delay: 5000
        },
        breakpoints: {
          1920: {
            spaceBetween: 110,
            slidesPerView: 'auto'
          },
          1301: {
            spaceBetween: 110,
            slidesPerView: 'auto'
          },
          1300: {
            spaceBetween: 40,
            slidesPerView: 4,
            loop: false
          },
          1025: {
            spaceBetween: 40,
            slidesPerView: 4
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            touchRatio: 0
          },
          769: {
            slidesPerView: 4,
            spaceBetween: 40,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            touchRatio: 0
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 18,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            touchRatio: 0
          },
          501: {
            slidesPerView: 3,
            spaceBetween: 18,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            touchRatio: 0
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 18,
            slidesPerColumn: 3,
            slidesPerColumnFill: 'row',
            touchRatio: 0
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 18,
            slidesPerColumn: 3,
            slidesPerColumnFill: 'row',
            touchRatio: 0
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  if ($('.slider-flats').exists()) {
    try {
      var flatsSlider = new Swiper('.slider-flats', {
        slidesPerView: 1,
        spaceBetween: 10,
        touchRatio: 0,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.slider-flats__pagination',
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
        },
        navigation: {
          nextEl: '.slider-flats__arrow--next',
          prevEl: '.slider-flats__arrow--prev'
        }
      });
    } catch (err) {
      console.log('Ошибка ' + err.name + ":" + err.message + "\n" + err.stack);
    }
  }

  if ($('#cost').exists()) {
    var _min3 = $('#cost').closest('.building-filter__col').find('.building-filter__range').data('min');

    var _max3 = $('#cost').closest('.building-filter__col').find('.building-filter__range').data('max');

    rangeSlider('#cost', _min3, _max3, 100000, '#send-result-сost', '.building-filter__col');
  }

  if ($('#area').exists()) {
    var _min4 = $('#area').closest('.building-filter__col').find('.building-filter__range').data('min');

    var _max4 = $('#area').closest('.building-filter__col').find('.building-filter__range').data('max');

    rangeSlider('#area', _min4, _max4, 10, '#send-result-area', '.building-filter__col');
  }

  if ($('.burger-filter').exists()) {
    $('.burger-filter').on('click', function () {
      $(this).toggleClass('burger-filter--active');
      $('.building-filter').toggleClass('building-filter--active');
    });
  }

  if ($('.project-period__list').exists()) {
    $('.project-period__list').mCustomScrollbar({
      theme: "dark",
      mouseWheelPixels: 90
    });
  }

  $(window).on('resize load', function () {
    $('.structure__menu').width($('.structure__items').width());
  });

  if ($('.structure__right').exists) {
    try {
      var $window = $(window),
          $target = $("#map-projects"),
          $h = $target.offset().top;
      $window.on('scroll', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > $h) {
          $target.addClass("map-fixed");
          var wt = $(window).scrollTop();
          var wh = $(window).height();
          var et = $('.structure__note').offset().top;
          var eh = $('.structure__note').outerHeight();
          var dh = $(document).height();

          if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
            console.log('Элемент показан');
            $("#map-projects").removeClass("map-fixed");
            $('.structure__inner').addClass('map-end');
          } else {
            $("#map-projects").addClass("map-fixed");
            $('.structure__inner').removeClass('map-end');
          }

          return;
        } else {
          $target.removeClass("map-fixed");
        }

        return;
      });
    } catch (err) {
      console.log(err);
    }
  } // if ($('.group').length > 0) {
  //     let temp = $('.group li')[$('.group li').length - 1];
  //     $(temp).find('a').css('padding-right', '0px');
  //     var $el, leftPos, newWidth,
  //         $mainNav = $("#example-one");
  //     $mainNav.append("<li id='magic-line'></li>");
  //     var $magicLine = $("#magic-line");
  //     $magicLine
  //         .width($(".current_page_item").width())
  //         .css("left", $(".current_page_item a").position().left)
  //         .data("origLeft", $magicLine.position().left)
  //         .data("origWidth", $magicLine.width());
  //     $("#example-one li a").on('click', function () {
  //         $el = $(this);
  //         leftPos = $el.position().left;
  //         newWidth = $el.parent().width();
  //         $magicLine.stop().animate({
  //             left: leftPos,
  //             width: newWidth
  //         });
  //     });
  //     $('.group li').each(function () {
  //         $(this).on('click', function () {
  //             $(this).find('input').prop('checked', true);
  //             if ($(this).find('input').is(':checked')) {
  //                 $(this).addClass('current_page_item').siblings().removeClass('current_page_item');
  //             }
  //         });
  //     });
  // }


  if ($('.filter-menu').length > 0) {
    var temp = $('.structure__menu li')[$('.group li').length - 1];
    $(temp).find('a').css('padding-right', '0px');
    var $el,
        leftPos,
        newWidth,
        $mainNav = $("#example-one");
    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");
    $magicLine.width($(".current_page_item").width()).css("left", $(".current_page_item a").position().left).data("origLeft", $magicLine.position().left).data("origWidth", $magicLine.width());
    $("#example-one li a").on('click', function () {
      $el = $(this);
      leftPos = $el.position().left;
      newWidth = $el.parent().width();
      $magicLine.stop().animate({
        left: leftPos,
        width: newWidth
      });
    });
    $('.filter-menu li').each(function () {
      $(this).on('click', function () {
        $(this).find('input').prop('checked', true);

        if ($(this).find('input').is(':checked')) {
          $(this).addClass('current_page_item').siblings().removeClass('current_page_item');
        }
      });
    });
  }

  lightGallery(document.getElementById('lightgallery-cer'));
  lightGallery(document.getElementById('certificate__gallery'));

  if ($('.index-content__txt').exists()) {
    try {
      var truncate = document.querySelectorAll(".index-content__txt");

      for (var i = 0; i < truncate.length; i++) {
        $clamp(truncate[i], {
          clamp: 4,
          // Число строк
          useNativeClamp: false
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  if ($('.index-slider').exists()) {
    try {
      var projectContent = new Swiper('.index-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        touchRatio: 0,
        breakpoints: {
          1920: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
            touchRatio: 1
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            touchRatio: 1
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  if ($('.index-project__content').exists() && $('.index-project__img').exists()) {
    try {
      var _projectContent = new Swiper('.index-project__content', {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.project-pagination',
          clickable: true
        }
      });

      var _projectImg = new Swiper('.index-project__img', {
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

      _projectContent.controller.control = _projectImg;
      _projectImg.controller.control = _projectContent;
      $('.swiper-wrapper').resize(function () {
        $('.index__special').height($('.index-content').height());
      });
    } catch (err) {
      console.log('Ошибка ' + err.name + ":" + err.message + "\n" + err.stack);
    }
  }

  if ($('.inner-slider').exists()) {
    try {
      var projectImg = new Swiper('.inner-slider', {
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
    try {
      var projectEx = new Swiper('.index-project__example', {
        slidesPerView: 3,
        spaceBetween: 20,
        effect: 'slide',
        loop: true,
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.index-project__arr--next',
          prevEl: '.index-project__arr--prev'
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  if ($('.index-certificate__cer').exists()) {
    try {
      var _projectCer = new Swiper('.index-certificate__cer', {
        slidesPerView: 4,
        spaceBetween: 42,
        effect: 'slide',
        loop: true,
        autautoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.index-project__arr--snext',
          prevEl: '.index-project__arr--sprev'
        },
        breakpoints: {
          922: {
            slidesPerView: 4,
            spaceBetween: 42,
            autoplay: false
          },
          769: {
            slidesPerView: 4,
            spaceBetween: 42,
            autoplay: false
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 42,
            autoplay: false
          },
          601: {
            autoplay: false
          },
          501: {
            slidesPerView: 3,
            spaceBetween: 42
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 8
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 8
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  if ($('.index-example__slider').exists()) {
    try {
      var _projectCer2 = new Swiper('.index-example__slider', {
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.index-project__arr--ex_next',
          prevEl: '.index-project__arr--ex_prev'
        },
        pagination: {
          el: '.inner-slider__num--example',
          type: "custom",
          renderCustom: function renderCustom(swiper, current, total) {
            var i = current ? current : 0;
            return "<span>".concat(("" + i).slice(-2), "</span>") + "/<span>".concat(("" + total).slice(-2), "</span>");
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  } // $('.index-news__slider').slick({
  //     // centerMode: true,
  //     // slidesToShow: 3,
  //     slidesToShow: 2,
  //     speed: 500,
  //     dots: false,
  // });


  if ($('.index-news__slider').exists()) {
    try {
      var projectCer = new Swiper('.index-news__slider', {
        slidesPerView: 'auto',
        spaceBetween: 40,
        loop: true,
        pagination: {
          el: '.index-news__pagination',
          type: 'progressbar'
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  if ($('.index__slider').exists()) {
    try {
      var breakpoint = window.matchMedia('(min-width:641px)');
      var mySwiper;

      var breakpointChecker = function breakpointChecker() {
        if (breakpoint.matches === true) {
          if (mySwiper !== undefined) mySwiper.destroy(true, true);
          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      var enableSwiper = function enableSwiper() {
        mySwiper = new Swiper('.index__slider', {
          slidesPerView: 1,
          spaceBetween: 16,
          a11y: true,
          keyboardControl: true,
          grabCursor: true,
          effect: 'slide',
          slidesPerColumn: 3,
          // autoHeight: true,
          pagination: {
            el: '.index__pag',
            clickable: true
          },
          breakpoints: {
            1920: {
              slidesPerColumn: 3,
              spaceBetween: 16
            },
            640: {
              slidesPerColumn: 1,
              slidesPerView: 1,
              spaceBetween: 16
            },
            320: {
              slidesPerColumn: 1,
              slidesPerView: 1,
              spaceBetween: 16
            }
          }
        });
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    } catch (err) {
      console.log(err);
    }
  }

  if ($('.button').exists()) {
    try {
      (function () {
        var btnBg = document.querySelectorAll('.button');

        var _loop = function _loop(_i) {
          btnBg[_i].addEventListener('mousemove', function (e) {
            var event = e;
            this.classList.add('button-bg');
            bgMove(btnBg[_i], event);
          });

          btnBg[_i].addEventListener('mouseleave', function () {
            this.classList.remove('button-bg');
          });
        };

        for (var _i = 0; _i < btnBg.length; _i++) {
          _loop(_i);
        }
      })();
    } catch (err) {
      console.log(err);
    }
  }

  function bgMove(bloc, e) {
    var target = bloc.getBoundingClientRect();
    var x = e.clientX - target.left - 90;
    var y = e.clientY - target.top - 90;
    bloc.style.backgroundPosition = '0 0,0 0,' + x + 'px ' + y + 'px,0 0';
  }

  if ($('.index-certificate__unique').exists()) {
    setHeaderHeight('#lightgallery-cer .swiper-slide', '.index-certificate__unique');
    $(window).on('resize load', function () {
      setHeaderHeight('#lightgallery-cer .swiper-slide', '.index-certificate__unique');
    });
  }

  if ($('.certificate__cover').exists()) {
    setHeaderHeight('.certificate__slider ', '.certificate__cover');
    $(window).on('resize load', function () {
      setHeaderHeight('.certificate__slider ', '.certificate__cover');
    });
  }

  function setHeaderHeight(child, parent) {
    var height = $(child).height();
    $(parent).css({
      height: height + "px" // приравниванием высоту header'a к высоте абсолютного элемента

    });
  }

  if ($('.index-example').exists()) {
    createPag('.index-example');
  }

  if ($('.index-inner').exists()) {
    createPag('.index-inner');
  }

  $('.index-example .swiper-menu').on('click', '.swiper-menu__item', function () {
    checkPag(this, projectCer);
  });

  if ($('.index-example .swiper-menu').exists()) {
    try {
      $('.index-example .swiper-menu').on('click', '.swiper-menu__item', function () {
        checkPag(this, projectCer);
      });
    } catch (err) {
      console.log(err);
    }
  }

  if ($('.swiper-menu').exists()) {
    try {
      $('.swiper-menu').on('click', '.swiper-menu__item', function () {
        checkPag(this, projectImg);
      });
    } catch (err) {
      console.log(err);
    }
  }

  function checkPag(contecst, slider) {
    var contecsts = contecst;
    var index = $(contecsts).data('index');
    slider.slideTo(index);
    var temp = $(contecsts).attr('index', index);

    for (var _i2 = 0; _i2 < temp.length; _i2++) {
      $(contecsts).closest('.swiper-wrapper').find('.swiper-menu').each(function () {
        $(this).find('.swiper-menu__item').each(function () {
          if ($(this).data('index') != index) {
            $(this).removeClass('swiper-menu__item--active');
          } else {
            $(this).addClass('swiper-menu__item--active');
          }
        });
      });
    }
  }

  function createPag(block) {
    var bloc = document.querySelector(block);
    var qtySlide = projectImg.slides.length;
    var parentEl = bloc.querySelectorAll('.swiper-menu');

    if (qtySlide > 0) {
      for (var _i3 = 0; _i3 < parentEl.length; _i3++) {
        for (var j = 0; j < qtySlide; j++) {
          var itemSlide = document.createElement('div');
          itemSlide.classList.add('swiper-menu__item');
          itemSlide.setAttribute('data-index', j);

          parentEl[_i3].appendChild(itemSlide);

          if (j == 0) {
            itemSlide.classList.add('swiper-menu__item--active');
          }
        }
      }
    }
  }

  function getCoords(elem) {
    var box = elem[0].getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      bottom: box.bottom + pageYOffset
    };
  }

  function moveModal() {
    var floorEl = $("[data-floor]");
    floorEl.each(function () {
      $(this).on('mousemove', function () {
        var top = getCoords($(this));
        var parent = getCoords($('.object__inner'));
        $('.module').addClass('module--active');
        var heightEl = $(this)[0].getBoundingClientRect().height;
        $('.module').css('top', top.top - $('.header').height() - heightEl / 2.9);
      });
      $(this).on('mouseleave', function () {
        $('.module').removeClass('module--active');
      });
    });
  }

  $(window).on('load', function () {
    if ($(this).width() >= 620) {
      moveModal();
    }
  });

  if ($('#map').length > 0) {
    L.mapbox.accessToken = 'pk.eyJ1IjoiYWRtaW5zaW5haSIsImEiOiJja2N2czJ2ejcwNzdoMzBtbDVneTh6NTNkIn0.pkiEoq-UDjbqvdDrB_zZCQ';
    var map = L.mapbox.map('map').setView([53.377120, 58.985550], 17).addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/light-v10'));
    var myLayer = L.mapbox.featureLayer().addTo(map);
    var geoJson = {
      type: 'FeatureCollection',
      features: [{
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [58.985550, 53.377120]
        },
        "properties": {
          "title": "Магазин",
          "icon": {
            "iconUrl": "../img/icon/marker/shop.png",
            "iconSize": [50, 50],
            // size of the icon
            "iconAnchor": [25, 25],
            // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25],
            // point from which the popup should open relative to the iconAnchor
            "className": "marker"
          }
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [58.988547, 53.376635]
        },
        "properties": {
          "title": "Школа",
          "icon": {
            "iconUrl": "../img/icon/marker/school.png",
            "iconSize": [50, 50],
            // size of the icon
            "iconAnchor": [25, 25],
            // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25],
            // point from which the popup should open relative to the iconAnchor
            "className": "marker"
          }
        }
      }]
    }; // Set a custom icon on each marker based on feature properties.

    myLayer.on('layeradd', function (e) {
      var marker = e.layer,
          feature = marker.feature;
      marker.setIcon(L.icon(feature.properties.icon));
    }); // Add features to the map.

    myLayer.setGeoJSON(geoJson);
  }

  var markerArr = [];

  if ($('#map-projects').length > 0) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWRtaW5zaW5haSIsImEiOiJja2N2czJ2ejcwNzdoMzBtbDVneTh6NTNkIn0.pkiEoq-UDjbqvdDrB_zZCQ';
    var flying = false;
    var mapCenter = [58.985550, 53.377120];
    var map = new mapboxgl.Map({
      container: 'map-projects',
      style: 'mapbox://styles/mapbox/light-v10',
      center: mapCenter,
      zoom: 15.5 // bearing: -17.6,

    });
    map.scrollZoom.disable();
    var _geoJson = {
      type: 'FeatureCollection',
      features: [{
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [58.985550, 53.377120]
        },
        "properties": {
          "title": "Магазин",
          "icon": {
            "iconUrl": "../img/icon/marker/house.png",
            "iconSize": [118, 118],
            // size of the icon
            "iconAnchor": [25, 25],
            // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25],
            // point from which the popup should open relative to the iconAnchor
            "className": "marker"
          }
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [59.089068, 53.379590]
        },
        "properties": {
          "title": "Школа",
          "icon": {
            "iconUrl": "../img/icon/marker/house.png",
            "iconSize": [118, 118],
            // size of the icon
            "iconAnchor": [25, 25],
            // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25],
            // point from which the popup should open relative to the iconAnchor
            "className": "marker"
          }
        }
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [58.986310, 53.375217]
        },
        "properties": {
          "title": "Школа",
          "icon": {
            "iconUrl": "../img/icon/marker/house.png",
            "iconSize": [118, 118],
            // size of the icon
            "iconAnchor": [25, 25],
            // point of the icon which will correspond to marker's location
            "popupAnchor": [0, -25],
            // point from which the popup should open relative to the iconAnchor
            "className": "marker"
          }
        }
      }]
    };

    _geoJson.features.forEach(function (marker) {
      // create a DOM element for the marker
      var el = document.createElement('div');
      var doc = new DOMParser().parseFromString('<svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="rect" y="59" width="83.4386" height="83.4386" transform="rotate(-45 0 59)" fill="#40424C"/><path d="M68.2258 75.368V45.0131C68.2258 44.0275 67.4259 43.2275 66.4402 43.2275H52.1556C51.1699 43.2275 50.37 44.0275 50.37 45.0131V75.368" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>                <path d="M50.3699 53.9409H43.2276C42.242 53.9409 41.442 54.7409 41.442 55.7265V75.3679" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>                <path d="M77.1537 75.3679V55.7265C77.1537 54.7409 76.3538 53.9409 75.3682 53.9409H68.2258" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M54.8339 68.2256H63.7618" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M61.9763 68.2256V75.3679" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M56.6195 75.3679V68.2256" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M55.7267 56.6194H62.869" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M55.7267 61.976H62.869" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M55.7267 51.2627H62.869" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M46.7988 61.976H50.37" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M46.7988 68.2256H50.37" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M68.2258 61.976H71.797" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M68.2258 68.2256H71.797" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M78.9393 75.3679H39.6565" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', 'application/xml');
      el.appendChild(el.ownerDocument.importNode(doc.documentElement, true));
      el.className = 'marker';
      el.style.width = marker.properties.icon.iconSize[0] + 'px';
      el.style.height = marker.properties.icon.iconSize[1] + 'px';
      el.addEventListener('click', function () {
        window.location.href = this.getAttribute('data-href');
      });
      markerArr.push(el);
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates) // sets a popup on this marker
      .addTo(map);
    });

    var _temp = 0;

    if ($('.structure__item').length > 0) {
      var fly = function fly(i) {
        map.flyTo({
          center: projectsData[i],
          essential: true // this animation is considered essential with respect to prefers-reduced-motion

        });
        map.fire('flystart');
        return i;
      };

      var idx = 0;
      var projectsData = [];
      $('.structure__item').each(function (i) {
        markerArr[i].setAttribute('data-href', $(this).data('href'));

        if ($(this).data('coordinates') != undefined) {
          projectsData.push($(this).data('coordinates'));
        }

        $(this).hover(function () {
          fly(i);
          _temp = fly(i);
        });
      });
      map.on('moveend', function (e) {
        if (flying) {
          markerArr[_temp].classList.add('marker--active');

          for (var _i4 = 0; _i4 < markerArr.length; _i4++) {
            if (_i4 != _temp) {
              markerArr[_i4].classList.remove('marker--active');
            }
          }

          map.fire('flyend');
        }
      });
      map.on('flystart', function () {
        flying = true;
      });
      map.on('flyend', function () {
        flying = false;
      });
    }
  }

  if ($('.form-project__field').exists) {
    $('.form-project__field').each(function () {
      var _this = this;

      $(this).on('mousemove', function () {
        $(_this).closest('.form-project__block').addClass('form-project__block--active');
      });
      $(this).on('mouseleave', function () {
        if (!$(_this).is(":focus") && !$(_this).val()) {
          $(_this).closest('.form-project__block').removeClass('form-project__block--active');
        }
      });
      $(this).on('blur', function () {
        if (!$(this).val()) {
          $(this).closest('.form-project__block').removeClass('form-project__block--active');
        }
      });
    });
  }

  if ($('.building-filter__wrp').length > 0) {
    $('.building-filter__wrp').each(function () {
      $(this).on('click', function () {
        var temp = $(this).parent().toggleClass('building-filter__case--active');
        $(this).closest('.building-filter__col').siblings().find('.building-filter__case').removeClass('building-filter__case--active');
        $('.building-filter__case').each(function (index) {
          if ($(this)[0] != temp[0] && $(this)[0].classList.contains('building-filter__case--active')) {
            $(this)[0].classList.remove('building-filter__case--active');
          }
        });
      });
      $(this).next('.building-filter__select').mCustomScrollbar({
        theme: "dark",
        mouseWheelPixels: 90
      });
    });
    $(document).click(function (e) {
      var elem = $('.building-filter__case');

      if (e.target != elem[0] && !elem.has(e.target).length) {
        elem.removeClass('building-filter__case--active');
      }
    });
  }

  if ($('.filter-sort__wrp').length > 0) {
    $('.filter-sort__wrp').each(function () {
      $(this).on('click', function () {
        $(this).parent().toggleClass('filter-sort__case--active');
      });
      $(this).next('.filter-sort__select').mCustomScrollbar({
        theme: "dark",
        mouseWheelPixels: 90
      });
    }); //$('.project-period__bloc')

    $(document).click(function (e) {
      var elem = $('.filter-sort__case');

      if (e.target != elem[0] && !elem.has(e.target).length) {
        elem.removeClass('filter-sort__case--active');
      }
    });
  }

  if ($('.filter-sort__unit').exists()) {
    $('.filter-sort__unit').each(function () {
      var dataVal = 0;
      var dataSlide = 0;
      $(this).on('click', function () {
        $('.filter-sort__text').text($(this).text());
        $('.filter-sort__box').removeClass('filter-sort__box--active');
        dataVal = $(this).find('input').data('period');
      });
    });
  }

  if ($('.building-filter__unit').length > 0) {
    $('.building-filter__unit').each(function () {
      $(this).on('click', function () {
        $(this).closest('.building-filter__case').find('.building-filter__text').text($(this).text());
        $('.building-filter__case').removeClass('building-filter__case--active');
      });
    });
  }

  if ($('.project-period__bloc').length > 0) {
    $('.project-period__bloc').each(function () {
      $(this).on('click', function () {
        $(this).parent().toggleClass('project-period__box--active');
        $(this).closest('.building-filter__col').siblings().find('.project-period__box').removeClass('project-period__box--active');
      });
    });
  }

  if ($('.project-period__slider').exists()) {
    try {
      var projecPeriod = new Swiper('.project-period__slider', {
        slidesPerView: '1',
        spaceBetween: 40,
        effect: 'fade',
        // autoplay: {
        //     delay: 5000
        // },
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.project-period__pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.index-project__link.index-project__link--next',
          prevEl: '.index-project__link.index-project__link--prev'
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  if ($('.project-period__unit').exists()) {
    $('.project-period__unit').each(function () {
      var dataVal = 0;
      var dataSlide = 0;
      $(this).on('click', function () {
        $('.project-period__text').text($(this).text());
        $('.project-period__box').removeClass('project-period__box--active');
        dataVal = $(this).find('input').data('period');
        $('.project-period__slider .swiper-slide').each(function () {
          dataSlide = $(this).data('slide');

          if (dataSlide == dataVal) {
            projecPeriod.slideTo(dataSlide - 1);
            return false;
          }
        });
      });
    });
  }

  $(document).click(function (e) {
    var elem = $('.project-period__box');

    if (e.target != elem[0] && !elem.has(e.target).length) {
      elem.removeClass('project-period__box--active');
    }
  });

  if ($('.menu-content__inner').exists()) {
    try {
      $('a[href^="#"]').click(function () {
        var anchor = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(anchor).offset().top - 130
        }, 600);
      });
      var anchor = {
        el_menu: '.menu-content__inner:eq(0)',
        // Меню
        // Старт
        init: function init() {
          anchor.menu();
          $(document).scroll(function () {
            anchor.scolling();
          });
        },
        // Собираем якоря из меню
        menu: function menu() {
          anchor.links_arr = [];
          $('' + anchor.el_menu + ' a').each(function (i) {
            if ($(this).attr('href')) {
              if ($(this).attr('href').indexOf('#') != -1) {
                var resh = $(this).attr('href').indexOf('#'),
                    all = $(this).attr('href').length,
                    val = $(this).attr('href').substr(resh, all);
                anchor.links_arr[i] = $(this).attr('href') + '::' + val;
              }
            }
          });
        },
        scolling: function scolling() {
          anchor.links_arr.forEach(function (item) {
            var item_arr = item.split('::');

            if (anchor.inWindow('' + item_arr[1] + '').length > 0) {
              $('.menu-content__li').removeClass('menu-content__li--active');
              $('a[href="' + item_arr[0] + '"]').addClass('menu-content__li--active');
              return false;
            }
          });
        },
        // Проверка якоря в области видимости
        inWindow: function inWindow(s) {
          var scrollTop = $(window).scrollTop() - 70,
              windowHeight = $(window).height(),
              currentEls = $(s),
              result = [];
          currentEls.each(function () {
            var el = $(this),
                offset = el.offset();
            if (scrollTop <= offset.top && el.height() + offset.top < scrollTop + windowHeight) result.push(this);
          });
          return $(result);
        }
      };
      anchor.init();
    } catch (err) {
      console.log(err);
    }
  }

  $(window).on('resize load', function () {
    if ($(this).width() > 922) {
      if ($('.menu-content').exists) {
        try {
          var _$window = $(window),
              _$target = $(".menu-content__inner"),
              _$h = _$target.offset().top;

          _$window.on('scroll', function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > _$h) {
              _$target.addClass("mf-fixed");

              return;
            } else {
              _$target.removeClass("mf-fixed");
            }

            return;
          });
        } catch (err) {
          console.log(err);
        }
      }
    }
  });

  if ($('.project-map__item').exists()) {
    $('.project-map__item').each(function () {
      $(this).on('click', function () {
        $(this).find('input').prop('checked', true);

        if ($(this).find('input').is(':checked')) {
          $(this).addClass('project-map__item--active').siblings().removeClass('project-map__item--active');
        }
      });
    });
  }
});