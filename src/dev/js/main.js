//===== Function check element ==========//
jQuery.fn.exists = function () {
    return $(this).length;
}

ScrollReveal({
    mobile: false
});



const projectFunc = {
    arrTitle: '',
    ObjAd: function (element, place) {
        $(element).each(function (index) {
            let adObj = $(this).html();
            let out = adObj;
            $(place).html(out);
            $(this).remove();
        });
    },
    fixMap: function (map, edge, parentMap) {
        let $window = $(window),
            $target = $(map),
            $h = $target.offset().top;

        $window.on('scroll', function () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > $h) {
                $target.addClass("map-fixed");

                var wt = $(window).scrollTop();
                var wh = $(window).height();
                var et = $(edge).offset().top;
                var eh = $(edge).outerHeight();
                var dh = $(document).height();
                if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
                    $(map).removeClass("map-fixed");
                    $(parentMap).addClass('map-end');
                } else {
                    $(map).addClass("map-fixed");
                    $(parentMap).removeClass('map-end');
                }
                return;
            } else {
                $target.removeClass("map-fixed");
            }
            return;
        });
    },
    createMap: function createMap(mapBloc, itemEl) {
        if ($("#".concat(mapBloc)).exists()) {
            var centerMap = $("#".concat(mapBloc)).data('center');
            var markerArr = [];
            mapboxgl.accessToken = 'pk.eyJ1IjoiYWRtaW5zaW5haSIsImEiOiJja2N2czJ2ejcwNzdoMzBtbDVneTh6NTNkIn0.pkiEoq-UDjbqvdDrB_zZCQ';
            var flying = false;
            var mapCenter = centerMap;
            var map = new mapboxgl.Map({
                container: mapBloc,
                //Без #
                style: 'mapbox://styles/mapbox/light-v10',
                center: mapCenter,
                zoom: 15.9,
                attributionControl: false,
            });
            map.scrollZoom.disable();
            map.addControl(new mapboxgl.NavigationControl({
                showCompass: false,
                showZoom: true
            }));

            if ($(itemEl).exists()) {
                var temp = 0;

                try {
                    var fly = function fly(i) {
                        map.flyTo({
                            center: projectsData[i],
                            zoom: 15.9,
                            bearing: 0,
                            essential: true // this animation is considered essential with respect to prefers-reduced-motion

                        });
                        map.fire('flystart');
                        return i;
                    };

                    $(itemEl).each(function () {
                        var coordinatesData = $(this).data('coordinates');
                        var el = document.createElement('div');
                        var doc = new DOMParser().parseFromString('<svg width="80" height="80" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="rect" y="59" width="83.4386" height="83.4386" transform="rotate(-45 0 59)" fill="#40424C"/><path d="M68.2258 75.368V45.0131C68.2258 44.0275 67.4259 43.2275 66.4402 43.2275H52.1556C51.1699 43.2275 50.37 44.0275 50.37 45.0131V75.368" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>                <path d="M50.3699 53.9409H43.2276C42.242 53.9409 41.442 54.7409 41.442 55.7265V75.3679" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>                <path d="M77.1537 75.3679V55.7265C77.1537 54.7409 76.3538 53.9409 75.3682 53.9409H68.2258" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M54.8339 68.2256H63.7618" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M61.9763 68.2256V75.3679" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M56.6195 75.3679V68.2256" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M55.7267 56.6194H62.869" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M55.7267 61.976H62.869" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M55.7267 51.2627H62.869" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M46.7988 61.976H50.37" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M46.7988 68.2256H50.37" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M68.2258 61.976H71.797" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M68.2258 68.2256H71.797" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M78.9393 75.3679H39.6565" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', 'application/xml');
                        el.appendChild(el.ownerDocument.importNode(doc.documentElement, true));
                        el.className = 'marker';
                        markerArr.push(el);
                        new mapboxgl.Marker(el).setLngLat(coordinatesData) // sets a popup on this marker
                            .addTo(map);
                    });
                    var projectsData = [];
                    $(itemEl).each(function (i) {
                        markerArr[i].setAttribute('data-href', $(this).data('href'));

                        if ($(this).data('coordinates') != undefined) {
                            projectsData.push($(this).data('coordinates'));
                        }

                        $(this).hover(function () {
                            fly(i);
                            temp = fly(i);
                        });
                    });
                    map.on('moveend', function (e) {
                        if (flying) {
                            markerArr[temp].classList.add('marker--active');

                            for (var i = 0; i < markerArr.length; i++) {
                                if (i != temp) {
                                    markerArr[i].classList.remove('marker--active');
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
                    markerArr.forEach(function (element) {
                        element.addEventListener('click', function () {
                            var hrefPath = this.getAttribute('data-href');
                            location = hrefPath;
                        });
                    });
                } catch (err) {
                    console.log(err);
                }
            }
        }
    },
    plateGen: function () {
        if ($('#plate').exists()) {
            function loadJSON(callback) {
                let dataPlate = $('#plate').data('plate');
                var xobj = new XMLHttpRequest();
                xobj.overrideMimeType("application/json");
                xobj.open('GET', dataPlate, true); // Replace 'my_data' with the path to your file
                xobj.onreadystatechange = function () {
                    if (xobj.readyState == 4 && xobj.status == "200") {
                        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                        callback(xobj.responseText);
                    }
                };
                xobj.send(null);
            }

            loadJSON(function (response) {
                // Parse JSON string into object
                let flatsInfo = JSON.parse(response);
                let parentBloc = document.getElementById('plate');

                for (let key in flatsInfo.entrances) {
                    let corpus = document.createElement('div');
                    let labelCorpus = document.createElement('div');
                    let wrapperPlate = document.createElement('div');

                    corpus.setAttribute('class', 'plate-box__item');
                    wrapperPlate.setAttribute('class', 'plate-box__grid');
                    labelCorpus.setAttribute('class', 'plate-box__label');
                    corpus.append(wrapperPlate);
                    corpus.append(labelCorpus);
                    parentBloc.append(corpus);
                    labelCorpus.textContent = key;

                    let floorsCorpus = flatsInfo.entrances[key].floors; // Этажи с квартирами в каждом подъезде
                    let properties = Object.keys(floorsCorpus).reverse();

                    for (let j = 0; j < properties.length; j++) {

                        let flats = floorsCorpus[properties[j]].flats;
                        let boxFlats = document.createElement('div');
                        boxFlats.setAttribute('class', 'plate-box__case');
                        wrapperPlate.append(boxFlats);

                        for (let k = 0; k < flats.length; k++) { //Вывод квартир
                            let plate = document.createElement('div');
                            let status = flats[k].status;
                            plate.setAttribute('class', 'plate-box__flat');


                            let plateObj = {
                                status: flats[k].statusName,
                                rooms: flats[k].rooms,
                                about: flats[k].about,
                                scheme: flats[k].scheme,
                                price: flats[k].price,
                                floor: j
                            }

                            plateObj = JSON.stringify(plateObj);
                            plate.setAttribute('data-flat', plateObj);
                            plate.textContent = flats[k].rooms;
                            boxFlats.append(plate);

                            switch (status) {
                                case 1:
                                    plate.classList.add('plate-box__flat--free');
                                    break;
                                case 2:
                                    plate.classList.add('plate-box__flat--take');
                                    break;
                                case 3:
                                    plate.classList.add('plate-box__flat--sold');
                                    break;
                                case 4:
                                    plate.classList.add('plate-box__flat--booked');
                                    break;
                            }
                        }
                    }
                }

                if ($('.plate-box__flat').exists()) {
                    let breakpointMobile = window.matchMedia('(min-width:641px)');

                    if (!breakpointMobile.matches === true) {
                        $('.plate-box__flat').each(function () {
                            $(this).on('click', function () {
                                $('.overlay-plate').addClass('overlay-plate--show');

                                let dataObj = $(this).data("flat"),
                                    rooms = `${dataObj.rooms}к квартира`,
                                    status = dataObj.status,
                                    aboutLink = dataObj.about,
                                    scheme = dataObj.scheme,
                                    price = `от ${dataObj.price} млн`;

                                $('.popup-plate__unit--room').text(rooms);
                                $('.popup-plate__unit--price').text(price);
                                $('.popup-plate__status').text(status);
                                $('.popup-plate__link--about').attr('href', aboutLink);
                                $('.popup-plate__link--scheme').attr('href', scheme);
                            });
                        });

                        if ($('.overlay-plate').exists()) {
                            $('.overlay-plate').click(function (e) {
                                if (e.target.className.indexOf('overlay-plate') != -1) {
                                    $(this).removeClass('overlay-plate--show');
                                    $('html').css('overflow', 'auto');
                                    $('.overlay-plate').removeClass('overlay-plate--show');
                                }
                            });
                        }

                        if ($('.popup-plate__close').exists()) {
                            $('.popup-plate___close').click(function (e) {
                                $('.overlay-plate').removeClass('overlay-plate--show');
                            });
                        }

                    }

                    let breakpointDesk = window.matchMedia('(max-width: 640px)');
                    if (!breakpointDesk.matches === true) {
                        $('.plate-box__flat').each(function () {
                            $(this).on('mouseenter', function () {
                                let coordsTop = $('.plate-box__canvas').position().top - 70,
                                    coordsLeft = $('.plate-box__canvas').position().left - 385;

                                let breakpoint = window.matchMedia('(min-width:1236px)');
                                let breakpointLaptop = window.matchMedia('(min-width:1025px)');

                                if (!breakpoint.matches === true) {
                                    coordsLeft = $('.plate-box__canvas').position().left - 120;
                                    coordsTop = $('.plate-box__canvas').position().top - 184;
                                }

                                if (!breakpointLaptop.matches === true) {
                                    coordsLeft = $('.plate-box__canvas').position().left - 125;
                                    coordsTop = $('.plate-box__canvas').position().top - 175;
                                }

                                let popup = '<div class="plate-popup"><div class="plate-popup__inner">';
                                popup += '<div class="plate-popup__top">';
                                popup += '<div class="plate-popup__unit plate-popup__unit--qty">2к квартира</div>';
                                popup += '<div class="plate-popup__unit plate-popup__unit--price">от 2,5 млн</div>';
                                popup += '</div>';
                                popup += '<div class="plate-popup__bottom">';
                                popup += '<div class="plate-popup__status">Свободно</div>';
                                popup += '<div class="plate-popup__func"><a class="plate-popup__link plate-popup__link--about" href="javascript:void(0);">Подробнее</a><a class="plate-popup__link plate-popup__link--scheme" href="javascript:void(0);">Планировка</a></div>';
                                popup += '</div>';
                                popup += '</div>';
                                popup += '</div>';

                                $(this).append(popup);

                                $('.plate-popup').addClass('plate-popup--show').css({
                                    'top': coordsTop,
                                    'left': coordsLeft,
                                });



                                let dataObj = $(this).data("flat"),
                                    rooms = `${dataObj.rooms}к квартира`,
                                    status = dataObj.status,
                                    aboutLink = dataObj.about,
                                    scheme = dataObj.scheme,
                                    price = `от ${dataObj.price} млн`;

                                $('.plate-popup__unit--qty').text(rooms);
                                $('.plate-popup__unit--price').text(price);
                                $('.plate-popup__status').text(status);
                                $('.plate-popup__link--about').attr('href', aboutLink);
                                $('.plate-popup__link--scheme').attr('href', scheme);
                            });

                            $(this).on('mouseleave', function () {
                                $('.plate-popup').remove();
                            });
                        });
                    }
                }
            });
        }
    },
    showPeriod: function (elem) { // Слайдер на детальной странице проекта
        if ($(elem).exists()) {
            try {
                let projectPeriod = new Swiper(elem, {
                    slidesPerView: '1',
                    spaceBetween: 40,
                    effect: 'fade',
                    autoplay: {
                        delay: 5000
                    },
                    fadeEffect: {
                        crossFade: true
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
                    navigation: {
                        nextEl: '.inner-slider__link--next',
                        prevEl: '.inner-slider__link--prev'
                    },
                });
                if ($('.project-period__unit').exists()) {
                    $('.project-period__unit').each(function () {

                        $(this).on('click', function () {
                            $('.project-period__text').text($(this).text());
                            $('.project-period__box').removeClass('project-period__box--active');
                        });
                    });
                }

                return projectPeriod;
            }
            catch (err) {
                console.log(err);
            }
        }
    },
    linkFloors: function () { //Переход в квартиру, при клике по области
        const url = this.getAttribute('data-url');
        document.location.host
        location.assign(document.location.origin + url);
    },
    urlGenerator: function (name, value) {
        var getParamsUrl = document.location.search,
            foundGetParams = false;

        if (getParamsUrl !== '') {
            var arrGetParamsUrl = (getParamsUrl.replace(/^\?/, '')).split('&');

            var newGetParamsUrl = arrGetParamsUrl.map(function (item2) {
                item2 = item2.split('=');
                if (item2[0] == name) {
                    foundGetParams = true;
                    return item2[0] + '=' + value;
                } else {
                    return item2[0] + '=' + item2[1];
                }
            });

            getParamsUrl = '?';

            for (var i = 0; i < newGetParamsUrl.length; i++) {
                if (i == 0) {
                    getParamsUrl += newGetParamsUrl[i];
                } else {
                    getParamsUrl += '&' + newGetParamsUrl[i];
                }
            }

            if (!foundGetParams) {
                getParamsUrl += '&' + name + '=' + value;
            }
        } else {
            getParamsUrl += '?' + name + '=' + value;
        }

        history.pushState(null, null, document.location.pathname + getParamsUrl);
    },
    globalProps: {
        arrSlider: [],
        motherCapital: 0
    },
    rangeSlider: function(block, min, max, min_step, max_step, steps, input_min, input_max, parent){
        if ($(block).exists()) {
            try {
                
                var slider = document.querySelector(block);
                let rangeBloc = $(block).closest(parent).find('.building-filter__range');

                noUiSlider.create(slider, {
                    start: [min_step, max_step],
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

               projectFunc.globalProps.arrSlider.push(slider);

                let handle = $(block).closest(parent);

                var skipValues = [
                    $(handle).find('.building-filter__up'),
                    $(handle).find('.building-filter__low')
                ];

                slider.noUiSlider.on('update', function (values, i) {
                    $(skipValues[i]).text(values[i]);
                    $(input_min).val(values[0]).change();
                    $(input_max).val(values[1]).change();
                });

                return slider;
            } catch (err) {
                console.log(err);
            }
        }
    },
    calcPay: function(priceF, donat, period, capital = 0){
        let monthPay = 0; // x
        let kofPay = 0; // k
        let priceFlat = priceF; // Стоимость квартиры
        let sumLoan; // Сумма займа
        let firstDonat = donat; // Первый взнос
        let periodLoan = period * 12; // Срок кредита
        let percentRate = (4.85 / 12) / 100; // Процентная ставка
        let percent = 0;
        let payment = 0; //Платёж
        let mCapital = 0; // Мат. капитал
        let sumCapital = capital; // Платёж мат.капитала
        sumLoan = priceFlat - firstDonat;

       
        if ($('[data-name="savings"]').prop("checked")) {
            console.log(projectFunc.globalProps.motherCapital);
            kofPay = (percentRate * (Math.pow((1 + percentRate), periodLoan))) / ((Math.pow((1 + percentRate), periodLoan)) - 1);
            kofPay = kofPay.toFixed(5);
            monthPay = Math.ceil(kofPay * sumLoan);
            percent = sumLoan * percentRate * (30 / 365);
            mCapital = sumCapital - (percent + monthPay);
            sumLoan = sumLoan - mCapital - monthPay;
            kofPay = (percentRate * (Math.pow((1 + percentRate), periodLoan))) / ((Math.pow((1 + percentRate), periodLoan)) - 1);
            monthPay = Math.ceil(kofPay * sumLoan); 
            $('#calc-rezult').val(monthPay);
        } else {
            kofPay = (percentRate * (Math.pow((1 + percentRate), periodLoan))) / ((Math.pow((1 + percentRate), periodLoan)) - 1);
            kofPay = kofPay.toFixed(5);
            monthPay = Math.ceil(kofPay * sumLoan);
            $('#calc-rezult').val(monthPay);
        }
    },
    setRange: function(idVal, min_step, max_step){
        let min_s = min_step,
        max_s = max_step;

        if ((ds) && localStorage.getItem(ds.id) !== null) {
            let values = JSON.parse(localStorage.getItem(ds.id));

            values.forEach((element, index) => {
                if (element[0] == `send-${idVal}-max` && element[1] > 0) {
                    max_s = element[1];
                }

                switch (element[0]) {
                    case `send-${idVal}-min`:
                        min_s = element[1];
                        break;
                    case `send-${idVal}-max`:
                        if (element[1] > 0) {
                            max_s = element[1];
                        }
                        break;
                }
            });

        }
        return [min_s, max_s];
        }
}

class SliderUi {
    constructor(name, min, max, step, minOutInput, maxOutInput, connectInput, calc="false"){
        this.name = name,
        this.min = min,
        this.max = max,
        this.step = step, 
        this.minOutInput = minOutInput,
        this.maxOutInput = maxOutInput,
        this.connectInput = connectInput,
        this.calc = calc,
        this.slider='',
        this.sliders=[]
    }

    createSlider() {
        const min_s = this.min;
        const max_s = this.max;
        const step = this.step;
        

        let connectInput = '';

        if(this.connectInput !== undefined) {
            connectInput = this.connectInput;
        }

        
        
        if($(`#${this.name}`).exists()){
            try {
                const slider = document.getElementById(this.name);
                const minOutInput = document.getElementById(`${this.minOutInput}`)

                if(slider !== undefined) {
                    noUiSlider.create(slider, {
                        start: [min_s, max_s],
                        connect: true,
                        step: step,
                        format: wNumb({
                            decimals: 0
                        }),
                        range: {
                            'min': min_s,
                            'max': max_s
                        }
                    }); 

                projectFunc.globalProps.arrSlider.push(slider);
                    
                const handle = $(`#${this.name}`).siblings('.flats-calc__block');
                const skipValues = [
                    $(handle).find('.building-filter__up'),
                    $(handle).find('.building-filter__low')
                ];

                const inputOut = [
                    $(`#${this.minOutInput}`)[0],
                    $(`#${this.maxOutInput}`)[0]
                ];

                slider.noUiSlider.on('update', function (values, handle) {
                    const value = values[handle];
                    $(skipValues[handle]).text(values[handle]);

                    if (handle) {
                        inputOut[1].value = value;
                    } else {
                        $(skipValues[0]).text(values[0]);
                        inputOut[0].value = value;

                        if($(`#${connectInput}`).exists()){
                            $(`#${connectInput}`).val(values[0]);

                            $(`#${connectInput}`).on('change', function() {
                                slider.noUiSlider.set($(this).val());
                            });
                        }
                    }
                });
                    this.slider = slider;
                    this.sliders.push(slider);
                    return slider;
                }  
            }
            catch(err){
                console.log(err);
            }
        }
    }
}


const startCalc = () => {  
    // const calc = this.calc;
    let price = '';
    let donat = '';
    let period = '';
    let savings = projectFunc.globalProps.motherCapital;
   // const slider = this.slider;

    if(projectFunc.globalProps.arrSlider.length > 0) {
        projectFunc.globalProps.arrSlider.forEach(element => {
            element.noUiSlider.on('update', function () {
        
            switch(element.noUiSlider.target.id) {
                 case 'price':
                     if(element.noUiSlider.get()[0]){
                          price = element.noUiSlider.get()[0];
                     }
                 break;
                 case 'donat':
                     if(element.noUiSlider.get()[0]){
                         donat = element.noUiSlider.get()[0];
                    }
                     
                 break;
                 case 'period':
                     if(element.noUiSlider.get()[0]){
                         period = element.noUiSlider.get()[0];
                     } 
                 break;

                 case 'savings':
                    if(element.noUiSlider.get()[0]){
                        savings = element.noUiSlider.get()[0];
                       projectFunc.globalProps.motherCapital = savings
                    } 
                break;
            }

            projectFunc.calcPay(price, donat, period, projectFunc.globalProps.motherCapital);
         
    });   
            
        })
    }
}

setTimeout(()=>{
    startCalc();
}, 100)

if ($('#ds_form').exists()) {
    try {
        var ds = '';
        ds = document.getElementById('ds_form');

        ds.onchange = () => {
            let json = JSON.stringify(Array.from(new FormData(ds)));
            localStorage.setItem(ds.id, json);
        };

        document.addEventListener("DOMContentLoaded", () => {
            let values = JSON.parse(localStorage.getItem(ds.id));

            if (values) {
                for (let i = 0; i < values.length; ++i) {
                    let el = ds[values[i][0]];

                    if (NodeList.prototype.isPrototypeOf(el)) { // RadioList
                        el.forEach((element, i) => {
                            values.forEach((_, index) => {
                                if ((values[index][1] == element.value) && (values[index][0] == element.name)) {
                                    element.setAttribute("checked", "");
                                }
                            });
                        });
                    }
                    else {

                        if (el.type === "checkbox")
                            el.setAttribute("checked", "");
                        else
                            el.value = values[i][1];
                    }
                }
            }
        });
    }
    catch (err) {
        console.log(err);
    }
}

if ($('#ds_landplot').exists()) {
    try {
        var ds = '';
        ds = document.getElementById('ds_landplot');


        ds.onchange = () => {
            let json = JSON.stringify(Array.from(new FormData(ds)));
            localStorage.setItem(ds.id, json);
        };

        document.addEventListener("DOMContentLoaded", () => {
            let values = JSON.parse(localStorage.getItem(ds.id));

            if (values) {
                for (let i = 0; i < values.length; ++i) {
                    let el = ds[values[i][0]];

                    if (NodeList.prototype.isPrototypeOf(el)) { // RadioList
                        el.forEach((element, i) => {
                            values.forEach((_, index) => {
                                if ((values[index][1] == element.value) && (values[index][0] == element.name)) {
                                    element.setAttribute("checked", "");
                                }
                            });
                        });
                    }
                    else {

                        if (el.type === "checkbox")
                            el.setAttribute("checked", "");
                        else
                            el.value = values[i][1];
                    }
                }
            }


        });
    }
    catch (err) {
        console.log(err);
    }
}

//ds_landplot

document.addEventListener("DOMContentLoaded", function (event) {

    if (localStorage.getItem('titleCol') !== null) {
        projectFunc.arrTitle = JSON.parse(localStorage.getItem('titleCol'))

        let titleCol = document.querySelectorAll('.building-filter__col');
        let titleVal = JSON.parse(localStorage.getItem('titleCol'));

        titleCol.forEach((element, index) => {
            titleVal.forEach((index, elem) => {
                if (element.getAttribute('data-id') == titleVal[elem]['id']) {
                    $(element).find('.building-filter__text').text(titleVal[elem]['title']);
                }
            })

        })
    }
    else {
        projectFunc.arrTitle = [];
    }

    const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

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

    function ObjAd(element, place) {
        $(element).each(function (index) {
            let adObj = $(this).html();
            let out = adObj;
            $(place).html(out);
            $(this).remove();
        });
    }

    if ($('.inner-slider .mf-include')) {
        try {
            const breakpoint = window.matchMedia('(min-width:641px)');

            if (!breakpoint.matches === true) {
                ObjAd('.inner-slider .mf-element', '.inner-slider .mf-include');
            }
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.index-example .mf-include')) {
        try {
            const breakpoint = window.matchMedia('(min-width:641px)');

            if (!breakpoint.matches === true) {
                ObjAd('.index-example .mf-element', '.index-example .mf-include');
            }
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.footer__bloc')) {
        try {
            const breakpoint = window.matchMedia('(min-width:641px)');

            if (!breakpoint.matches === true) {
                ObjAd('.footer__bloc--share', '.footer__share');
            }
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.footer__bloc')) {
        try {
            const breakpoint = window.matchMedia('(min-width:641px)');

            if (!breakpoint.matches === true) {
                ObjAd('.footer__bloc--share', '.footer__share');
            }
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.footer__ref--phone').exists()) {
        try {
            const breakpoint = window.matchMedia('(min-width:1125px)');

            if (!breakpoint.matches === true) {
                ObjAd('.footer__ref--phone', '.footer__ph');
            }
        } catch (err) {
            console.log(err);
        }
    }

    if ($('#aside').exists()) {
        try {
            const breakpoint = window.matchMedia('(min-width:769px)');

            if (!breakpoint.matches === true) {
                ObjAd('#aside', '#insert');
            }
        } catch (err) {
            console.log(err);
        }
    }
});

$(() => {

    projectFunc.showPeriod('.project-period__slider');
    projectFunc.plateGen();

    if ($('.btn--share').exists()) {
        $('.btn--share').on('click', function () {
            $('.overlay-share').addClass('overlay-share--show');
            $('html').css('overflow', 'hidden');
        })
    }

    if ($('.popup-share__close').exists()) {
        $('.popup-share__close').on('click', function () {
            $('.overlay-share').removeClass('overlay-share--show');
            $('html').css('overflow', 'auto');
        })
    }

    if ($('.overlay-share').exists()) {
        $('.overlay-share').click(function (e) {
            if (e.target.className.indexOf('overlay-share') != -1) {
                $(this).removeClass('overlay-share--show');
                $('html').css('overflow', 'auto');
            }
        });
    }

    if ($('.plate-box__right').exists()) {
        $(window).on('resize load', function () {
            if ($(this).width() <= 1300) {
                $('.plate-box__right').mCustomScrollbar({
                    theme: "dark",
                    mouseWheelPixels: 90,
                    axis: "x" // horizontal scrollbar
                });
            }
            else {
                $('.plate-box__right').mCustomScrollbar('destroy');
            }
        });
    }

    function rangeSlider(block, min, max, min_step, max_step, steps, input_min, input_max, parent) {
        if ($(block).exists()) {
            try {
                var slider = document.querySelector(block);

                let rangeBloc = $(block).closest(parent).find('.building-filter__range');

                // console.log(max_step)

                noUiSlider.create(slider, {
                    start: [min_step, max_step],
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

                arrSlider.push(slider);

                let handle = $(block).closest(parent);

                var skipValues = [
                    $(handle).find('.building-filter__up'),
                    $(handle).find('.building-filter__low')
                ];

                slider.noUiSlider.on('update', function (values, i) {
                    $(skipValues[i]).text(values[i]);
                    $(input_min).val(values[0]).change();
                    $(input_max).val(values[1]).change();
                });

                return slider;
            } catch (err) {
                console.log(err);
            }
        }
    }

    function checkVal(bloc, rangeBloc, sendBbox) {
        let inputVal = $(rangeBloc).closest('.flats-calc__item').find('.flats-calc__block').data('min');

        if ($(bloc).val() != '') {
            inputVal = $(sendBbox).val();
        }
        return inputVal;
    }

    if ($('.index-project__item').exists()) {
        ScrollReveal().reveal('.index-project__item', {
            delay: 600,
            interval: 600,
            distance: '150px',
            enter: 'bottom',
            origin: 'bottom',
            duration: 600,
            easing: 'ease-in',
            mobile: false
        })
    }

    if ($('.index-project__unit .title-2').exists()) {
        ScrollReveal().reveal('.index-project__unit .title-2', {
            delay: 500,
            enter: 'center',
            origin: 'center',
            duration: 500,
            easing: 'ease-in',
            mobile: false
        })
    }

    if ($('.index-project__paragraph').exists()) {
        ScrollReveal().reveal('.index-project__paragraph', {
            delay: 800,
            interval: 600,
            enter: 'center',
            origin: 'center',
            duration: 600,
            easing: 'ease-in',
            mobile: false
        })
    }

    if ($('.index-certificate__left').exists()) {
        ScrollReveal().reveal('.index-certificate__left', {
            delay: 1000,
            interval: 600,
            distance: '150px',
            enter: 'left',
            origin: 'left',
            duration: 600,
            easing: 'ease-in',
            mobile: false
        })
    }

    if ($('.index-news__info').exists()) {
        ScrollReveal().reveal('.index-news__info', {
            delay: 500,
            interval: 500,
            enter: 'center',
            origin: 'center',
            duration: 500,
            easing: 'ease-in',
            mobile: false
        })
    }

    if ($('.flats-basic__item').exists()) {
        gsap.from(
            '.flats-basic__item',
            {
                scale: 0,
                // yPercent: -50,
                ease: "sine.out",
                opacity: 0,
                stagger: 0.8,
                duration: 0.8
            }
        );
    }

    if ($('.news__item').exists()) {
        gsap.from(
            '.news__item',
            {
                scale: 0,
                ease: "sine.out",
                opacity: 0,
                stagger: 0.8,
                duration: 0.8
            }
        );
    }

    if ($('.trade__tiitle').exists()) {
        let timeline = gsap.timeline();

        timeline
            .fromTo(
                '.trade__tiitle',
                {
                    opacity: 0,
                    y: -100
                },
                { duration: 1, opacity: 1, y: 0, delay: 0.5 }
            )
            .fromTo(
                '.trade__txt',
                {
                    opacity: 0,
                    y: -100
                },
                {
                    duration: 1,
                    opacity: 1,
                    y: 0,
                    stagger: 1
                }
            );
    }

    if ($('.about__item').exists()) {
        let timeline = gsap.timeline();
        gsap.set(
            '.about__item',
            {
                opacity: 0,
                x: -100
            }
        );
        gsap.set(
            '.about__quote',
            {
                opacity: 0,
                y: -100
            }
        );

        timeline
            .to(
                '.about__item',
                {
                    scale: 1,
                    ease: "sine.out",
                    opacity: 1,
                    stagger: 0.8,
                    duration: 0.8,
                    delay: 0.5,
                    x: 0
                }
            )
            .to(
                '.about__quote',
                {
                    duration: 0.8,
                    opacity: 1,
                    y: 0
                }
            )
    }

    if ($('.header__inner').exists) {
        try {
            let $window = $(window),
                $target = $(".header__inner"),
                $h = $target.offset().top;
            $window.on('scroll', function () {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > $h) {
                    $target.addClass("mf-scroll");
                    return;
                } else {
                    $target.removeClass("mf-scroll");
                }
                return;
            });
        } catch (err) {
            console.log(err);
        }
    }

    if ($('#btnUp').exists()) {
        var btn = $('#btnUp');
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('showBtn');
            } else {
                btn.removeClass('showBtn');
            }
        });

        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, '300');
        });
    }

    if ($('.menu__item--menu').exists()) {
        $('.menu__item--menu').on('click', function () {
            $(this).toggleClass('menu__item--active');

            let height = 0;

            $('.menu__ref').each(function () {
                height += $(this).outerHeight();
            });

            if ($('.menu__sub').hasClass('menu__sub--active')) {
                $('.menu__sub').removeClass('menu__sub--active').css({
                    'max-height': 0
                });
            } else {
                $('.menu__sub').addClass('menu__sub--active').css({
                    'max-height': height
                });
            }
        });
    }

    if ($('.burger').length > 0) {
        $('.burger').on('click', function () {
            $(this).toggleClass('burger--active');
            $('.menu').toggleClass('menu--show');
            $('html').css('overflow', 'hidden');

            var duration = 0;
            $('.menu__item').each(function (index) {
                duration += 70 * index;
            });

            if ($('.menu__item').exists()) {
                $('.menu__item').each(function (index) {
                    $(this).delay(150 * index).animate({
                        "opacity": "1"
                    }, 150);
                });
                setTimeout(() => {
                    $('.header .share-bloc__items').addClass('share-bloc__items--active').removeClass('share-bloc__items--mf');
                }, duration);
            }

        });
    }

    if ($('.index__left').exists()) {
        $('.index__left').each((index) => {
            if (((index) % 2 == 0) && index != 0) {
                ScrollReveal().reveal($('.index__left')[index], {
                    enter: 'left',
                    origin: 'left',
                    duration: 1500,
                    distance: '150px',
                    easing: 'ease-in-out',
                    mobile: false
                })
            } else if ((index != 0) && ((index) % 2 != 0)) {
                ScrollReveal().reveal($('.index__left')[index], {
                    enter: 'right',
                    origin: 'right',
                    duration: 1000,
                    distance: '150px',
                    easing: 'ease-in',
                    mobile: false
                })
            }
        });
    }

    if ($('.index__info').exists()) {
        ScrollReveal().reveal('.index__info', {
            delay: 600,
            //interval: 3000,
            distance: '150px',
            enter: 'bottom',
            origin: 'bottom',
            duration: 1000,
            easing: 'ease-in',
            mobile: false
        },
            ScrollReveal().reveal('.index__right', {
                delay: 1500,
                distance: '150px',
                enter: 'bottom',
                origin: 'bottom',
                duration: 1000,
                easing: 'ease-in-out',
                mobile: false
            }

            ))
    }

    if ($('.menu__close').exists()) {
        $('.menu__close').on('click', () => {
            $('.burger').toggleClass('burger--active');
            $('.menu').toggleClass('menu--show');
            $('.menu__item--menu').removeClass('menu__item--active');
            $('html').css('overflow', 'auto');
            $('.menu__sub').removeClass('menu__sub--active').css({
                'max-height': 0
            });

            if (!$('.burger').hasClass('burger--active')) {
                $('.menu__item').animate({
                    'opacity': '0'
                }, 0.001)

            }

            $('.header .share-bloc__items').removeClass('share-bloc__items--active').addClass('share-bloc__items--mf');
        });
    }

    if ($('.header__item--menu').exists()) {
        $('.header__item--menu').on('mouseenter', function () {
            $(this).find('.header__link').addClass('header__link--hover');
        });

        $('.header__item--menu').on('mouseleave', function () {
            $(this).find('.header__link').removeClass('header__link--hover');
        });
    }

    if ($('.overlay').exists()) {
        $('.overlay').click(function (e) {
            if (e.target.className.indexOf('overlay') != -1) {
                $(this).removeClass('overlay--show');
                $('html').css('overflow', 'auto');
                $('.popup').removeClass('popup--show');
            }
        });
    }

    if ($('.menu').exists()) {
        $('.menu').click(function (e) {
            if (e.target.className.indexOf('menu--show') != -1) {
                $('.burger').removeClass('burger--active');
                $('html').css('overflow', 'auto');
                $('.menu').removeClass('menu--show');

                if (!$('.burger').hasClass('burger--active')) {
                    $('.menu__item').animate({
                        'opacity': '0'
                    }, 0.001);
                    $('.header .share-bloc__items').removeClass('share-bloc__items--active').addClass('share-bloc__items--mf');
                }
            }
        });
    }

    if ($('#price').exists()) {
        const min = $('#price').closest('.flats-calc__item').find('.flats-calc__block').data('min');
        const max = $('#price').closest('.flats-calc__item').find('.flats-calc__block').data('max');
        const slider = new SliderUi('price', min, max, 10000, 'send-result-price-min', 'send-result-price-max', 'flat-price', true);
        slider.createSlider();
    }

    if ($('#donat').exists()) {

        if ($('#price').exists()) {
            try {
                const min = $('#donat').closest('.flats-calc__item').find('.flats-calc__block').data('min');
                const max = $('#donat').closest('.flats-calc__item').find('.flats-calc__block').data('max');
                const slider = new SliderUi('donat', min, max, 10000, 'send-result-donat-min', 'send-result-donat-max', 'flats-donat', true);
                slider.createSlider();
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    if ($('#period').exists()) {
        const min = $('#period').closest('.flats-calc__item').find('.flats-calc__block').data('min');
        const max = $('#period').closest('.flats-calc__item').find('.flats-calc__block').data('max');
        const slider = new SliderUi('period', min, max, 1, 'send-result-period-min', 'send-result-period-max', 'flats-period', true);
        slider.createSlider();
    }

    if ($('#savings').exists()) {
        const min = $('#savings').closest('.flats-calc__item').find('.flats-calc__block').data('min');
        const max = $('#savings').closest('.flats-calc__item').find('.flats-calc__block').data('max');
        const slider = new SliderUi('savings', min, max, 10000, 'send-result-savings-min', 'send-result-savings-max', 'flats-savings', true);
        slider.createSlider();
    }
    

    if ($('.structure__items--projects').exists()) {
        $('.structure__items--projects').mCustomScrollbar({
            theme: "minimal-dark",
            mouseWheelPixels: 400,
            callbacks: {
                onTotalScroll: function () {
                    console.log('End');
                }
            }
        });
    }

    if ($('.second-flats__items').exists()) {
        $(window).on('resize load', function () {
            if ($(this).width() >= 768) {
                $('.second-flats__items').mCustomScrollbar({
                    theme: "minimal-dark",
                    mouseWheelPixels: 500,
                    callbacks: {
                        onTotalScroll: function () {
                            console.log('End');
                        }
                    }
                });
            }
        });
    }

    $('[data-name="savings"]').on('click', function () {
        if ($(this).prop("checked")) {
            $('.flats-calc__row--savings').addClass('flats-calc__row--active');
            startCalc();
        } else {
            $('.flats-calc__row--savings').removeClass('flats-calc__row--active');
            startCalc();
        }
    });

    function checkField(bloc) {
        let flag = 0;

        $(bloc).each(function () {
            if ($(this).val() == '') {
                flag++;
            }
        });

        if (flag != 0) {
            return false;
        } else {
            return true;
        }
    }

    if ($('.ads__slider').exists()) {
        try {
            let adsSlider = new Swiper('.ads__slider', {
                spaceBetween: 20,
                slidesPerView: 3,
                autoHeight: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'progressbar',
                },
                autoplay: {
                    delay: 5000,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        slidesPerColumn: 2,
                        slidesPerColumnFill: 'row',
                        autoHeight: false,
                        loop: false

                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        loop: false
                    },
                    993: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1920: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.form-project').exists()) {
        $('.call-help').each(function () {
            let fieldS = $(this).find('.form-project__field');
            let btn = $(this).find('.call-help__btn');
            let stateButton = 0;
            let form = $(this).find('.form-project');

            $(btn).on('click', function () {
                $(form).submit();
            });


            $(fieldS).each(function () {
                $(this).on('input change', function () {
                    stateButton = checkField(fieldS);
                    if (stateButton) {
                        $(btn).prop('disabled', false);
                    } else {
                        $(btn).prop('disabled', true);
                    }
                });
            });
        });
    }

    if ($('#plan-slider').exists()) {
        try {
            let planSlider = new Swiper('#plan-slider', {

                spaceBetween: 20,
                slidesPerView: 'auto',
                autoHeight: true,
                navigation: {
                    nextEl: '.index-project__link--pf_next',
                    prevEl: '.index-project__link--pf_prev'
                },
                pagination: {
                    el: '.project-period__pagination',
                    clickable: true
                },
                breakpoints: {
                    1920: {
                        spaceBetween: 20,
                        slidesPerView: 4
                    },
                    1025: {
                        spaceBetween: 20,
                        slidesPerView: 4
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        // touchRatio: 1,
                    },
                    993: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 1.4,
                        spaceBetween: 20,
                    },
                    769: {
                        slidesPerView: 1.4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    621: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    620: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    }
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.certificate__slider').exists()) {
        try {
            let certificateSlider = new Swiper('.certificate__slider', {
                spaceBetween: 24,
                slidesPerView: 5,
                touchRatio: 0,
                slidesPerColumn: 2,
                slidesPerColumnFill: 'row',
                autoplay: {
                    delay: 3000,
                },
                breakpoints: {
                    1025: {
                        slidesPerView: 5,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                        touchRatio: 1,
                    },
                    641: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                        touchRatio: 1,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                        touchRatio: 1,
                    },
                    501: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                        touchRatio: 1,
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        touchRatio: 1,
                        slidesPerColumn: 1,
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        touchRatio: 1,
                        slidesPerColumn: 1,
                    }
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.partner__slider').exists()) {
        try {
            let test = new Swiper('.partner__slider', {
                spaceBetween: 110,
                slidesPerView: 'auto',
                loop: true,
                autoplay: {
                    delay: 5000,
                },
                breakpoints: {
                    1920: {
                        spaceBetween: 110,
                        slidesPerView: 'auto',
                    },
                    1301: {
                        spaceBetween: 110,
                        slidesPerView: 'auto',
                    },
                    1300: {
                        spaceBetween: 40,
                        slidesPerView: 4,
                        loop: false
                    },
                    1025: {
                        spaceBetween: 40,
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                        slidesPerColumn: 2,
                        slidesPerColumnFill: 'row',
                        touchRatio: 0,
                    },
                    769: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                        slidesPerColumn: 2,
                        slidesPerColumnFill: 'row',
                        touchRatio: 0,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 18,
                        slidesPerColumn: 2,
                        slidesPerColumnFill: 'row',
                        touchRatio: 0,
                    },
                    501: {
                        slidesPerView: 3,
                        spaceBetween: 18,
                        slidesPerColumn: 2,
                        slidesPerColumnFill: 'row',
                        touchRatio: 0,
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 18,
                        slidesPerColumn: 3,
                        slidesPerColumnFill: 'row',
                        touchRatio: 0,
                    },
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 18,
                        slidesPerColumn: 3,
                        slidesPerColumnFill: 'row',
                        touchRatio: 0,
                    }
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    // function setRange(idVal, min_step, max_step) {
    //     let min_s = min_step,
    //         max_s = max_step;

    //     if ((ds) && localStorage.getItem(ds.id) !== null) {
    //         let values = JSON.parse(localStorage.getItem(ds.id));

    //         values.forEach((element, index) => {
    //             if (element[0] == `send-${idVal}-max` && element[1] > 0) {
    //                 max_s = element[1];
    //             }

    //             switch (element[0]) {
    //                 case `send-${idVal}-min`:
    //                     min_s = element[1];
    //                     break;
    //                 case `send-${idVal}-max`:
    //                     if (element[1] > 0) {
    //                         max_s = element[1];
    //                     }
    //                     break;
    //             }
    //         });

    //     }
    //     return [min_s, max_s];
    // }

    if ($('#cost').exists()) {

        let min = $('#cost').closest('.building-filter__col').find('.building-filter__range').data('min');
        let max = $('#cost').closest('.building-filter__col').find('.building-filter__range').data('max');
        let min_step = $('#cost').closest('.building-filter__col').find('.building-filter__range').data('min');
        let max_step = $('#cost').closest('.building-filter__col').find('.building-filter__range').data('max');
        let steps = projectFunc.setRange('cost', min_step, max_step);

        projectFunc.rangeSlider('#cost', min, max, steps[0], steps[1], 100000, '#send-result-сost-min', '#send-result-сost-max', '.building-filter__col');
    }

    if ($('#area').exists()) {
        let min = $('#area').closest('.building-filter__col').find('.building-filter__range').data('min');
        let max = $('#area').closest('.building-filter__col').find('.building-filter__range').data('max');
        let min_step = $('#area').closest('.building-filter__col').find('.building-filter__range').data('min');
        let max_step = $('#area').closest('.building-filter__col').find('.building-filter__range').data('max');
        let steps = projectFunc.setRange('area', min_step, max_step);


        projectFunc.rangeSlider('#area', min, max, steps[0], steps[1], 10, '#send-result-area-min', '#send-result-area-max', '.building-filter__col');
    }

    if ($('#distance').exists()) {
        let min = $('#distance').closest('.building-filter__col').find('.building-filter__range').data('min');
        let max = $('#distance').closest('.building-filter__col').find('.building-filter__range').data('max');
        let min_step = $('#distance').closest('.building-filter__col').find('.building-filter__range').data('min');
        let max_step = $('#distance').closest('.building-filter__col').find('.building-filter__range').data('max');
        let steps = projectFunc.setRange('distance', min_step, max_step);

        projectFunc.rangeSlider('#distance', min, max, steps[0], steps[1], 10, '#send-result-distance-min', '#send-result-distance-max', '.building-filter__col');
    }

    if ($('.burger-filter').exists()) {
        $('.burger-filter').on('click', function () {
            $(this).toggleClass('burger-filter--active');
            $('.building-filter').toggleClass('building-filter--active');

            if ($(this).hasClass('burger-filter--active')) {
                $('html').css('overflow', "hidden");
            } else {
                $('html').css('overflow', "auto");
            }
        });
    }

    if ($('.project-period__list').exists()) {
        $('.project-period__list').mCustomScrollbar({
            theme: "dark",
            mouseWheelPixels: 90
        });
    }

    if ($('.btn--call').exists()) {
        try {
            $('.btn--call').on('click', function () {
                $('.overlay').addClass('overlay--show');
                $('html').css('overflow', 'hidden');
                $('.popup').addClass('popup--show');
            });
        } catch (err) {
            console.log(err);
        }
    }

    $(window).on('resize load', function () {
        $('.structure__menu').width($('.structure__items').width());
    });

    if ($('.structure__map--projects').exists()) {
        try {
            projectFunc.fixMap('#map-projects', '.structure__note', '.structure__inner');
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.structure__map--step-build').exists()) {
        try {
            projectFunc.fixMap('#map-projects', '.mf-edge', '.structure__inner');
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.filter-menu').length > 0) {
        let temp = $('.structure__menu li')[$('.group li').length - 1];
        $(temp).find('a').css('padding-right', '0px');
        var $el, leftPos, newWidth,
            $mainNav = $("#example-one");

        $mainNav.append("<li id='magic-line'></li>");
        var $magicLine = $("#magic-line");

        $magicLine
            .width($(".current_page_item").width())
            .css("left", $(".current_page_item a").position().left)
            .data("origLeft", $magicLine.position().left)
            .data("origWidth", $magicLine.width());

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

    if ($('.content--project').exists()) {
        const items = document.querySelector('.content--project');
        lightGallery(items, {
            "selector": ".project__img"
        });
    }

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
                    delay: 5000,
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
            let projectEx = new Swiper('.index-example__slider', {
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
                on: {
                    slideChangeTransitionStart: function () {
                        updatePag('.index-example__slider .swiper-menu', this.activeIndex)
                    },
                    slideChangeTransitionEnd: function () {
                        updatePag('.index-example__slider .swiper-menu', this.activeIndex)
                    },
                },
            });

            createPag('.index-example__slider', projectEx);
            $('.index-example__slider .swiper-menu').on('click', '.swiper-menu__item', function () {
                checkPag(this, '.index-example__slider', projectEx);
            });
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.index-news__slider').exists()) {
        try {
            var projectCer = new Swiper('.index-news__slider', {
                slidesPerView: 3,
                spaceBetween: 40,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.index-news__pagination',
                    type: 'progressbar',
                },
                breakpoints: {
                    1920: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    769: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    501: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                    }
                }
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
                    let isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

                    if (isSafari) {
                        $(window).on('resize load', function () {
                            let heigthSlider = 0;
                            $('.index__slider').children().each(function () {
                                heigthSlider += $(this).height();
                            });
                            $('.index__slider').height(heigthSlider);
                        })
                    }
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
                    autoHeight: true,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                    },
                    pagination: {
                        el: '.index__pag',
                        clickable: true
                    },
                    breakpoints: {
                        1920: {
                            slidesPerColumn: 3,
                            spaceBetween: 16,
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
        let target = bloc.getBoundingClientRect();
        let x = e.clientX - target.left - 90;
        let y = e.clientY - target.top - 90;
        bloc.style.backgroundPosition = '0 0,0 0,' + x + 'px ' + y + 'px,0 0';
    }

    if ($('.index-certificate__unique').exists()) {
        try {
            setHeaderHeight('#lightgallery-cer .swiper-slide', '.index-certificate__unique');
            $(window).on('resize load', function () {
                setHeaderHeight('#lightgallery-cer .swiper-slide', '.index-certificate__unique');
            });
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.certificate__cover').exists()) {
        try {
            setHeaderHeight('.certificate__slider ', '.certificate__cover');
            $(window).on('resize load', function () {
                setHeaderHeight('.certificate__slider ', '.certificate__cover');
            });
        } catch (err) {
            console.log(err);
        }
    }

    function setHeaderHeight(child, parent) {
        var height = $(child).height();
        $(parent).css({
            height: height + "px" // приравниванием высоту header'a к высоте абсолютного элемента
        });
    }

    if ($('.index-example').exists()) {
        try {
            createPag('.index-example');
        } catch (err) {
            console.log(err);
        }

    }

    if ($('.index-inner').exists()) {
        try {
            createPag('.index-inner');
        } catch (err) {
            console.log(err);
        }
    }

    function getCoords(elem) {
        let box = elem[0].getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            bottom: box.bottom + pageYOffset,
            left: box.left
        };
    }

    function moveModal() {

        let floorEl = $("[data-floor]");

        floorEl.each(function () {
            $(this).on('mouseenter', function () {
                $('.module__row').remove();

                let objFlat = {};
                let top = getCoords($(this));
                $('.module').addClass('module--active');
                let heightEl = $(this)[0].getBoundingClientRect().height;
                $('.module').css('top', ((top.top) - $('.header').height() - (heightEl / 2.9)));

                objFlat.floor = $(this).data('floor');
                objFlat.section = $(this).data('section');

                $('.module__floor').text(`Этаж ${objFlat.floor},`);
                $('.module__section').text(`секция ${objFlat.section}`);

                let flat = $(this).data('flat');
                let parent = $('.module__bottom');

                if (flat == undefined) {
                    let rowEl = document.createElement('div');
                    rowEl.setAttribute("class", "module__row");

                    let cellEl = document.createElement('div');
                    cellEl.setAttribute("class", "module__cell");
                    cellEl.textContent = "Нет квартир на продажу";
                    rowEl.append(cellEl);
                    parent.append(rowEl);
                }

                Object.keys(flat).map(elem => {
                    let rowEl = document.createElement('div');
                    rowEl.setAttribute("class", "module__row");

                    let cellEl = document.createElement('div');
                    cellEl.setAttribute("class", "module__cell");
                    cellEl.textContent = `${elem}-комнатные`;
                    rowEl.append(cellEl);

                    for (let key in flat[elem]) {
                        let cellEl = document.createElement('div');
                        cellEl.setAttribute("class", "module__cell");

                        if (key == "price") {
                            cellEl.textContent = `от ${flat[elem][key]} млн`;
                        } else {
                            cellEl.textContent = flat[elem][key];
                        }

                        rowEl.append(cellEl);
                    }
                    parent.append(rowEl);
                })
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
        let map = L.mapbox.map('map')
            .setView([53.376457, 58.986727], 17.95)
            .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/light-v10'));

        if (map.scrollWheelZoom) {
            map.scrollWheelZoom.disable();
        }

        let overlays = L.layerGroup().addTo(map);
        let layers;

        L.mapbox.featureLayer()
            .loadURL('./js/json/markers-project.geojson')
            .on('ready', function (e) {
                layers = e.target;
                showStations();
                showAll();
            });

        let filters = document.getElementById('colors');
        let inputEl = filters.querySelectorAll('input');

        for (var i = 0; i < inputEl.length; i++) {
            inputEl[i].addEventListener('click', showStations);
        }

        function showAll() {
            // then remove any previously-displayed marker groups
            overlays.clearLayers();
            // create a new marker group
            var clusterGroup = new L.MarkerClusterGroup().addTo(overlays);

            layers.eachLayer(function (layer, index) {
                let marker = layer;
                let feature = marker.feature;
                marker.setIcon(L.icon(feature.properties.icon));
                clusterGroup.addLayer(layer);
                L.layerGroup().addTo(map);
            });
        }

        function showStations() {
            let list = new Set();

            for (var i = 0; i < inputEl.length; i++) {
                if (inputEl[i].checked) {
                    // console.log(list);
                    list.add(inputEl[i].value);
                }
            }

            // then remove any previously-displayed marker groups
            overlays.clearLayers();
            // create a new marker group
            var clusterGroup = new L.MarkerClusterGroup().addTo(overlays);

            layers.eachLayer(function (layer, index) {

                if (list.has(layer.feature.properties.name) == true) {
                    let marker = layer;
                    let feature = marker.feature;
                    marker.setIcon(L.icon(feature.properties.icon));
                    clusterGroup.addLayer(layer);
                    L.layerGroup().addTo(map);
                } else if (list.has('all') == true) {
                    let marker = layer;
                    let feature = marker.feature;
                    marker.setIcon(L.icon(feature.properties.icon));
                    clusterGroup.addLayer(layer);
                    L.layerGroup().addTo(map);
                }
            });
        }
    }

    projectFunc.createMap('map-projects', '.structure__item');
    projectFunc.createMap('map-flat', '#map-flat');
    projectFunc.createMap('map-contacts', '#map-contacts');

    if ($('.form-project__field').exists) {
        $('.form-project__field').each(function () {
            $(this).on('mousemove', () => {
                $(this).closest('.form-project__block').addClass('form-project__block--active');
            });

            $(this).on('mouseleave', () => {

                if (!$(this).is(":focus") && !$(this).val()) {
                    $(this).closest('.form-project__block').removeClass('form-project__block--active');

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
                let temp = $(this).parent().toggleClass('building-filter__case--active');
                $(this).closest('.building-filter__col').siblings().find('.building-filter__case').removeClass('building-filter__case--active');

                $('.building-filter__case').each(function (index) {
                    if (($(this)[0] != temp[0]) && ($(this)[0].classList.contains('building-filter__case--active'))) {
                        $(this)[0].classList.remove('building-filter__case--active');
                    }
                });
            });

            $(this).next('.building-filter__select').mCustomScrollbar({
                theme: "minimal-dark",
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
        });

        $(document).click(function (e) {
            var elem = $('.filter-sort__case');
            if (e.target != elem[0] && !elem.has(e.target).length) {
                elem.removeClass('filter-sort__case--active');
            }
        });
    }

    if ($('.filter-sort__unit').exists()) {
        $('.filter-sort__unit').each(function () {
            let dataVal = 0;
            let dataSlide = 0;

            $(this).on('click', function () {
                $('.filter-sort__text').text($(this).text());
                $('.filter-sort__case').removeClass('filter-sort__case--active');

                dataVal = $(this).find('input').data('period');
            });
        })
    }

    if ($('.building-filter__unit').length > 0) {



        $('.building-filter__unit').each(function () {

            $(this).one('click', function () {
                $(this).closest('.building-filter__case').find('.building-filter__text').text($(this).text());
                $('.building-filter__case').removeClass('building-filter__case--active');
                let objEl = {};

                objEl.id = $(this).closest('.building-filter__col').data('id');
                objEl.title = $(this).text();

                projectFunc.arrTitle.push(objEl);

                localStorage.setItem('titleCol', JSON.stringify(projectFunc.arrTitle));
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

    $(document).click(function (e) {
        var elem = $('.project-period__box');
        if (e.target != elem[0] && !elem.has(e.target).length) {
            elem.removeClass('project-period__box--active');
        }
    });

    if ($('.menu-content__inner').exists()) {
        try {
            $('a[href^="#"]').click(function () {
                let anchor = $(this).attr('href');
                $('html, body').animate({
                    scrollTop: $(anchor).offset().top - 130
                }, 600);
            });

            var anchor = {
                el_menu: '.menu-content__inner:eq(0)', // Меню
                // Старт
                init: function () {
                    anchor.menu();
                    $(document).scroll(function () {
                        anchor.scolling();
                    });
                },

                // Собираем якоря из меню
                menu: function () {
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

                scolling: function () {
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
                inWindow: function (s) {
                    var scrollTop = $(window).scrollTop() - 70,
                        windowHeight = $(window).height(),
                        currentEls = $(s),
                        result = [];
                    currentEls.each(function () {
                        var el = $(this),
                            offset = el.offset();
                        if (scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight)) result.push(this);
                    });
                    return $(result);
                }
            }
            anchor.init();
        } catch (err) {
            console.log(err);
        }
    }

    $(window).on('resize load', function () {
        if ($(this).width() > 922) {
            fixBloc('.menu-content', '.menu-content__inner', true);
        }
    });

    fixBloc('.mf-move', '.structure__inner', true);

    function fixBloc(bloc, target, fix) {
        if ($(bloc).exists()) {
            try {
                if (fix) {
                    let $window = $(window),
                        $target = $(target),
                        $h = $target.offset().top;
                    $window.on('scroll', function () {
                        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        if (scrollTop > $h) {
                            $target.addClass("mf-fixed");
                            if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
                                $target.removeClass("mf-fixed");
                            }
                            return;
                        } else {
                            $target.removeClass("mf-fixed");
                        }
                        return;
                    });
                } else {
                    $target.removeClass("mf-fixed");
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    if ($('.project-map__item').exists()) {
        $('.project-map__item').each(function () {
            $(this).on('click', function () {
                //  $(this).find('input').prop('checked', true);
                if ($(this).find('input').is(':checked')) {
                    $(this).addClass('project-map__item--active');
                } else {
                    $(this).removeClass('project-map__item--active');
                }
            });
        });
    }

    function createPag(block, swiperCont) {
        let bloc = document.querySelector(block);
        let qtySlide = swiperCont.slides.length;
        let parentEl = bloc.querySelectorAll('.swiper-menu');

        if (qtySlide > 0) {
            for (let i = 0; i < parentEl.length; i++) {
                for (let j = 0; j < qtySlide; j++) {

                    let itemSlide = document.createElement('div');
                    itemSlide.classList.add('swiper-menu__item');
                    itemSlide.setAttribute('data-index', j);

                    if (j == 0) {
                        itemSlide.classList.add('swiper-menu__item--active');
                    }

                    parentEl[i].appendChild(itemSlide);
                }
            }
        }
    }

    function checkPag(contecst, sliderBox, slider) {
        let contecsts = contecst;
        const index = $(contecsts).data('index');
        slider.slideTo(index);
        let arrItem = $(sliderBox).find('.swiper-menu__item');

        updatePag(slider, index)
    }

    function updatePag(slider, index) {
        let arrItem = $(slider).find('.swiper-menu__item');
        $(arrItem).each(function () {
            if ($(this).data('index') == index) {
                $(this).addClass('swiper-menu__item--active').siblings().removeClass('swiper-menu__item--active');
            }
        })
    }

    if ($('.js-slider-flat').exists()) {
        try {

            let flatPlan = new Swiper('.js-slider-flat', {
                slidesPerView: 1,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                navigation: {
                    nextEl: '.arr--next',
                    prevEl: '.arr--prev'
                },
                pagination: {
                    el: '.js-slider-flat .pagination',
                    type: "custom",
                    renderCustom: function (swiper, current, total) {
                        let i = current ? current : 0;
                        return `<span class="mf-num">${("" + i).slice(-2)}</span>` +
                            `<span class="mf-txt">Этаж</span>`;
                    },
                },

            });

            setTimeout(() => $('.slider-flats').css('opacity', '1'), 500);

            let flatInfo = new Swiper('.js-slider-flat-info', {
                slidesPerView: 1,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                }
            });

            flatPlan.controller.control = flatInfo;
            flatInfo.controller.control = flatPlan;

        }
        catch (err) {
            console.log(err);
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
                on: {
                    slideChangeTransitionStart: function () {
                        updatePag('.inner-slider .swiper-menu', this.activeIndex)
                    },
                    slideChangeTransitionEnd: function () {
                        updatePag('.inner-slider .swiper-menu', this.activeIndex)
                    },
                },
            });

            createPag('.inner-slider', projectImg);
            $('.inner-slider .swiper-menu').on('click', '.swiper-menu__item', function () {
                checkPag(this, '.inner-slider', projectImg);
            });
        } catch (err) {
            console.log('Ошибка ' + err.name + ":" + err.message + "\n" + err.stack);
        }
    }

    if ($('.flats-basic__nav').exists()) {
        try {
            $('.flats-basic__nav').mCustomScrollbar({
                theme: "minimal-dark",
                mouseWheelPixels: 400,
                // scrollInertia: 0,
                mouseWheel: {
                    preventDefault: true
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    if ($('.flats-basic__floor').exists()) {
        let grpHover = document.querySelectorAll('.flats-basic__floor .hover g');
        let grpDefault = document.querySelectorAll('.flats-basic__floor .default g');

        for (let i = 0; i < grpHover.length; i++) {
            grpHover[i].setAttribute('id', 'h' + i);
            grpDefault[i].setAttribute('id', 'd' + i);

            grpHover[i].onclick = projectFunc.linkFloors;

            if (!grpHover[i].classList.contains('active') && !grpHover[i].classList.contains('current')) {
                grpHover[i].classList.add('hide');
            } else {
                grpDefault[i].classList.add('hide');
            }
        }
    }

    if ($('.plate-box__slider').exists()) {

        if ($('.plate-control').exists()) {
            try {
                let temp = $('.plate-control');
                let created = false;
                let createdL = false;

                $(window).on('resize load', function () {
                    if ($(this).width() <= 992) {
                        $('#insert').append($(temp))
                        $('.plate-box__list').next('.plate-control').remove();
                        created = true;
                    }

                    if ($(this).width() > 992) {
                        if (created) {
                            $('.plate-box__list').after(temp);
                            $('#insert').children().remove();
                            created = false;
                        }
                    }

                    if ($(this).width() <= 768) {
                        projectFunc.ObjAd('#insert', '#control-laptop');
                        createdL = true;
                    }

                    if ($(this).width() > 768 && $(this).width() < 992) {
                        if (created) {
                            $('.flats-basic__filter').after(temp);
                            $('#control-laptop').children().remove();
                            createdL = false;
                        }
                    }
                });
            } catch (err) {
                console.log(err);
            }
        }
    }
});