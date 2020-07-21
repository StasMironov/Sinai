"use strict";

//===== Function check element ==========//
jQuery.fn.exists = function () {
  return $(this).length;
};

$(function () {
  ScrollReveal({
    mobile: false
  });
  lightGallery(document.getElementById('lightgallery-cer'));

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
        autoplay: {
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
  }

  if ($('.index-news__slider').exists()) {
    try {
      var projectCer = new Swiper('.index-news__slider', {
        slidesPerView: 'auto',
        spaceBetween: 40,
        effect: 'slide',
        loop: true,
        autoplay: {
          delay: 5000
        },
        fadeEffect: {
          crossFade: true
        },
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
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3Rhc21pcm9ub3YiLCJhIjoiY2s2dWYxZXh1MDRmcjNlb2Fxejhna2I1NSJ9.vCwZFnzz7zeC7KCQ9vmVrw';
    var centerMap;

    if (window.location.hostname == "sochi.uralmedias.ru") {
      centerMap = [39.723617, 43.587611];
    } else {
      centerMap = [58.985550, 53.377120];
    }

    var map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: centerMap,
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
    });
    var geojson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: centerMap
        },
        properties: {
          title: 'Uralmedias',
          description: 'улица Завенягина, 1/2'
        }
      }]
    }; // add markers to map

    if (window.location.hostname == "sochi.uralmedias.ru") {
      geojson.features[0].properties.description = 'ТЦ Атриум, Навагинская, дом 9д';
    }

    geojson.features.forEach(function (marker) {
      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker'; // make a marker for each feature and add to the map

      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).setPopup(new mapboxgl.Popup({
        offset: 25
      }) // add popups
      .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>')).addTo(map);
    }); // The 'building' layer in the mapbox-streets vector source contains building-height
    // data from OpenStreetMap.

    map.on('load', function () {
      // Insert the layer beneath any symbol layer.
      var layers = map.getStyle().layers;
      var labelLayerId;

      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }

      map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',
          // use an 'interpolate' expression to add a smooth transition effect to the
          // buildings as the user zooms in
          'fill-extrusion-height': ['interpolate', ['linear'], ['zoom'], 15, 0, 15.05, ['get', 'height']],
          'fill-extrusion-base': ['interpolate', ['linear'], ['zoom'], 15, 0, 15.05, ['get', 'min_height']],
          'fill-extrusion-opacity': 0.6
        }
      }, labelLayerId);
      map.scrollZoom.disable();
    });
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

  $('.project-period__bloc').on('click', function () {
    $('.project-period__box').toggleClass('project-period__box--active');
  });

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
          // alert(dataSlide);
          projecPeriod.slideTo(dataSlide - 1);
          return false;
        }
      });
    }); //console.log(dataVal);
  });
  projecPeriod.on('mouseover', function () {
    alert(projecPeriod.activeIndex);
  });
  $('.project-period__list').mCustomScrollbar({
    theme: "dark",
    mouseWheelPixels: 90
  });
  $(document).click(function (e) {
    var elem = $('.project-period__box');

    if (e.target != elem[0] && !elem.has(e.target).length) {
      elem.removeClass('project-period__box--active');
    }
  });
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
      // console.log('true');
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
  $(window).on('resize load', function () {
    if ($(this).width() > 922) {
      if ($('.menu-content').exists) {
        try {
          var $window = $(window),
              $target = $(".menu-content__inner"),
              $h = $target.offset().top;
          $window.on('scroll', function () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > $h) {
              $target.addClass("mf-fixed");
              return;
            } else {
              $target.removeClass("mf-fixed");
            }

            return;
          });
        } catch (err) {
          console.log(err);
        }
      }
    }
  });
});