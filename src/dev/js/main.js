//===== Function check element ==========//
jQuery.fn.exists = function () {
    return $(this).length;
}

$(() => {

    if ($('.index-content__txt').exists()) {
        let truncate = document.querySelectorAll(".index-content__txt");

        for (let i = 0; i < truncate.length; i++) {
            $clamp(truncate[i], {
                clamp: 4, // Число строк
                useNativeClamp: false
            });
        }
    }

    if ($('.index-content').exists() && $('.index-img').exists()) {
        try {
            let indexContent = new Swiper('.index-content', {
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
                },
            });

            let indexImg = new Swiper('.index-img', {
                slidesPerView: 1,
                spaceBetween: 10,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
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
            let projectContent = new Swiper('.index-project__contant', {
                slidesPerView: 1,
                spaceBetween: 10,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                touchRatio: 0,
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



});