//===== Function check element ==========//
jQuery.fn.exists = function () {
    return $(this).length;
}

$(() => {

    $(window).on('resize load', function () {
        $('.index__special').height($('.index__block').height());
    });


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

            let bullet = document.querySelectorAll('.swiper-pagination-bullet');
            let slide = document.querySelectorAll('.index-content .swiper-slide');

            for (let i = 0; i < bullet.length; i++) {
                bullet[i].onclick = function () {
                    for (let j = 0; j < slide.length; j++) {
                        if (i == j) {
                            let h = slide[j].scrollHeight;
                            let p = slide[j].parentNode.parentNode;

                            console.log($(p).height() + 50);
                            // $('.index__special').height($(p).height());
                        }
                    }
                }
            }
            console.log(bullet);
            console.log(slide);

        } catch (err) {
            console.log('Ошибка ' + err.name + ":" + err.message + "\n" + err.stack);
        }
    }

});