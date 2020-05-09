// 自行加入的JS請寫在這裡
$(function() {
    //
    var item_lenth = $('.jumi_timeline .item').length;
    $(window).on("load resize scroll", function(e) {
        var window_H = $(window).innerHeight();
        var windowTop = $(window).scrollTop();
        // 可以+130 讓圖進入多點再跑動畫
        var imgTop = Math.floor($('.jumi_timeline .item').offset().top - windowTop + 220);
        // $('.jumi_timeline .item').each(function(i) {
        //      $(this).eq(i).delay(i*1000).addClass('effect');
        //      console.log(i);
        // });
        // var i;
        // for (i = 0; i < item_lenth; i++) {
        //     $('.jumi_timeline .item').eq(i).delay(i*100).addClass('effect');
        //     console.log(i);
        // }
        if (imgTop < window_H && imgTop > 0) {
            $('.jumi_timeline').addClass('effect');
        }
    });
    // 主秘的時間軸
    $('.jumi_timeline').find('.item').hover(function() {
        $('.jumi_timeline').removeClass('active');
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
    });
    //
    // duration of scroll animation
    var scrollDuration = 800;
    var leftPaddle = document.getElementsByClassName('left-paddle');
    var rightPaddle = document.getElementsByClassName('right-paddle');
    var itemsLength = $('.jumi_timeline .item').length;
    var itemSize = $('.item').outerWidth(true);
    var paddleMargin = 0;
    var getMenuWrapperSize = function() {
        return $('.jumi_timeline').outerWidth();
    }
    var menuWrapperSize = getMenuWrapperSize();
    $(window).on('resize', function() {
        menuWrapperSize = getMenuWrapperSize();
    });
    var menuVisibleSize = menuWrapperSize;
    var getMenuSize = function() {
        return itemsLength * itemSize;
    };
    var menuSize = getMenuSize();
    // get how much of menu is invisible
    var menuInvisibleSize = menuSize - menuWrapperSize;
    // get how much have we scrolled to the left
    var getMenuPosition = function() {
        return $('.jumi_timeline').scrollLeft();
    };
    // finally, what happens when we are actually scrolling the menu
    $('.jumi_timeline').on('scroll', function() {
        menuInvisibleSize = menuSize - menuWrapperSize;
        var menuPosition = getMenuPosition();
        var menuEndOffset = menuInvisibleSize - paddleMargin;
        if (menuPosition <= paddleMargin) {
            $(leftPaddle).addClass('hidden');
            $(rightPaddle).removeClass('hidden');
        } else if (menuPosition < menuEndOffset) {
            $(leftPaddle).removeClass('hidden');
            $(rightPaddle).removeClass('hidden');
        } else if (menuPosition >= menuEndOffset) {
            $(leftPaddle).removeClass('hidden');
            $(rightPaddle).addClass('hidden');
        }
    });
    // scroll to left
    $(rightPaddle).on('click', function() {
        $('.jumi_timeline').animate({ scrollLeft: "+=300" }, scrollDuration, 'easeOutQuad');
    });
    // scroll to right
    $(leftPaddle).on('click', function() {
        $('.jumi_timeline').animate({ scrollLeft: "-=300" }, scrollDuration, 'easeOutQuad');
    });
    //
    // lazyload
    //可以指定你想要的元素做lazyload
    $("img").lazyload({ effect: "fadeIn" });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        useHistoryApi: 'true',
        lazy: true
    });
    // cp_photo
    $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.Slider-nav',
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        focusOnSelect: true,
        infinite: true,
    });
    //
    //請放置customize.js
    $('.mpSlider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        cssEase: 'ease',
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false
            }
        }]
    });
    $('.articleSlider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        cssEase: 'ease',
        responsive: [{
            breakpoint: 767,
            settings: {
                arrows: false
            }
        }]
    });
    // 社會安全資訊網
    $('.infoSlider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // 社會安全資訊網
    $('.timelineSlider ul').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // 統計資料
    $('.statisticsSlider').slick({
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // 統計資料
    $('.quickservice ul').slick({
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'ease',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    //認識社會安全網限字數
    var plan_len = 200; // 超過200個字以"..."取代
    $(".Planblock .plan p").each(function(i) {
        if ($(this).text().length > plan_len) {
            $(this).attr("title", $(this).text());
            var text = $(this).text().substring(0, plan_len - 1) + "...";
            $(this).text(text);
        }
    });
});
