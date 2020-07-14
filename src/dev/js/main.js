//===== Function check element ==========//
jQuery.fn.exists = function () {
    return $(this).length;
}

$(() => {

    lightGallery(document.getElementById('lightgallery-cer'));

    if ($('.index-content__txt').exists()) {
        let truncate = document.querySelectorAll(".index-content__txt");

        for (let i = 0; i < truncate.length; i++) {
            $clamp(truncate[i], {
                clamp: 4, // Число строк
                useNativeClamp: false
            });
        }
    }

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
        //  autoHeight: true,
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
            let projectImg = new Swiper('.inner-slider', {
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
    }

    if ($('.index-certificate__cer').exists()) {
        let projectCer = new Swiper('.index-certificate__cer', {
            slidesPerView: 4,
            spaceBetween: 42,
            effect: 'slide',
            loop: true,
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
                    spaceBetween: 42
                },
                769: {
                    slidesPerView: 4,
                    spaceBetween: 42,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 42,
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
    }

    if ($('.index-example__slider').exists()) {
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
        });
    }

    if ($('.index-news__slider').exists()) {
        let projectCer = new Swiper('.index-news__slider', {
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
    }

    if ($('.index__slider').exists()) {
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
    }

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
});