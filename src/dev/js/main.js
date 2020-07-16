//===== Function check element ==========//
jQuery.fn.exists = function () {
    return $(this).length;
}

$(() => {

    ScrollReveal({
        mobile: false
    });

    lightGallery(document.getElementById('lightgallery-cer'));

    if ($('.index-content__txt').exists()) {
        try {
            let truncate = document.querySelectorAll(".index-content__txt");

            for (let i = 0; i < truncate.length; i++) {
                $clamp(truncate[i], {
                    clamp: 4, // Число строк
                    useNativeClamp: false
                });
            }
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.index-slider').exists()) {
        try {
            let projectContent = new Swiper('.index-slider', {
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
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        touchRatio: 1,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        touchRatio: 1,
                    }
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.index-project__content').exists() && $('.index-project__img').exists()) {
        try {
            let projectContent = new Swiper('.index-project__content', {
                slidesPerView: 1,
                spaceBetween: 10,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                pagination: {
                    el: '.project-pagination',
                    clickable: true
                },

            });

            let projectImg = new Swiper('.index-project__img', {
                slidesPerView: 1,
                spaceBetween: 10,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                navigation: {
                    nextEl: '.index-project__link--next',
                    prevEl: '.index-project__link--prev'
                },
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
                    renderCustom: function (swiper, current, total) {
                        let i = current ? current : 0;
                        return `<span>${("" + i).slice(-2)}</span>` +
                            `/<span>${("" + total).slice(-2)}</span>`;
                    },
                },
            });


        } catch (err) {
            console.log('Ошибка ' + err.name + ":" + err.message + "\n" + err.stack);
        }
    }

    if ($('.index-project__example').exists()) {
        try {
            let projectEx = new Swiper('.index-project__example', {
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
                },
            });
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.index-certificate__cer').exists()) {
        try {
            let projectCer = new Swiper('.index-certificate__cer', {
                slidesPerView: 4,
                spaceBetween: 42,
                effect: 'slide',
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
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
                        autoplay: false,
                    },
                    769: {
                        slidesPerView: 4,
                        spaceBetween: 42,
                        autoplay: false,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 42,
                        autoplay: false,
                    },
                    601: {
                        autoplay: false,
                    },
                    501: {
                        slidesPerView: 3,
                        spaceBetween: 42,
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 8,
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 8,
                    }
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.index-example__slider').exists()) {
        try {
            let projectCer = new Swiper('.index-example__slider', {
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
                    renderCustom: function (swiper, current, total) {
                        let i = current ? current : 0;
                        return `<span>${("" + i).slice(-2)}</span>` +
                            `/<span>${("" + total).slice(-2)}</span>`;
                    },
                },
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
                    type: 'progressbar',
                },
            });
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.index__slider').exists()) {
        try {
            const breakpoint = window.matchMedia('(min-width:641px)');
            let mySwiper;

            const breakpointChecker = function () {
                if (breakpoint.matches === true) {
                    if (mySwiper !== undefined) mySwiper.destroy(true, true);
                    return;
                } else if (breakpoint.matches === false) {
                    return enableSwiper();
                }
            };

            const enableSwiper = function () {
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
                            spaceBetween: 16,
                        },
                        320: {
                            slidesPerColumn: 1,
                            slidesPerView: 1,
                            spaceBetween: 16,
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
            let btnBg = document.querySelectorAll('.button');


            for (let i = 0; i < btnBg.length; i++) {
                btnBg[i].addEventListener('mousemove', function (e) {
                    let event = e;
                    this.classList.add('button-bg');
                    bgMove(btnBg[i], event);
                });

                btnBg[i].addEventListener('mouseleave', function () {
                    this.classList.remove('button-bg');
                });
            }
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
        let contecsts = contecst;
        const index = $(contecsts).data('index');
        slider.slideTo(index);

        let temp = $(contecsts).attr('index', index);
        for (let i = 0; i < temp.length; i++) {

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
        let bloc = document.querySelector(block);
        let qtySlide = projectImg.slides.length;
        let parentEl = bloc.querySelectorAll('.swiper-menu');

        if (qtySlide > 0) {
            for (let i = 0; i < parentEl.length; i++) {
                for (let j = 0; j < qtySlide; j++) {
                    let itemSlide = document.createElement('div');
                    itemSlide.classList.add('swiper-menu__item');
                    itemSlide.setAttribute('data-index', j);
                    parentEl[i].appendChild(itemSlide);

                    if (j == 0) {
                        itemSlide.classList.add('swiper-menu__item--active');
                    }
                }
            }
        }
    }

    let floorEl = $("[data-floor]");
    floorEl.each(function () {
        $(this).on('mousemove', function () {
            // $('.module').animate({
            //     'opacity': 1,
            //     // 'left': '38.4%'
            // }, 500);

            console.log($(this));

            let target = $(this)[0].getBoundingClientRect().top - 17;
            console.log(target);

            $('.module').addClass('module--active');
            $('.module').css('top', target);
        });

        $(this).on('mouseleave', function () {
            $('.module').removeClass('module--active');
        });
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
                    'fill-extrusion-height': ['interpolate', ['linear'],
                        ['zoom'], 15, 0, 15.05, ['get', 'height']
                    ],
                    'fill-extrusion-base': ['interpolate', ['linear'],
                        ['zoom'], 15, 0, 15.05, ['get', 'min_height']
                    ],
                    'fill-extrusion-opacity': 0.6
                }
            }, labelLayerId);
        });
    }
});