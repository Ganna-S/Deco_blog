$(function () {
    $('.slider__box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button class="slick-arrow slick-up"><img src="images/Top.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-down"><img src="images/Down.png" alt=""></button>',
    });
    $('.aside-slider__box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
        ]
    });
    $('.aside-slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button class="slick-arrow slick-left"><img src="images/left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-right"><img src="images/right.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
        ]
    });
    $('.post__slider-box').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button class="slick-arrow slick-left"><img src="images/left.png" alt="">Previous post</button>',
        nextArrow: '<button class="slick-arrow slick-right">Next post<img src="images/right.png" alt=""></button>',
    });
    $('.recomended__posts-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button class="slick-arrow slick-small__left"><img src="images/icons/small-arrow_left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-small__right"><img src="images/icons/small-arrow_right.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
        ]
    });

    $(".rate-star").rateYo({
        rating: 3,
        fullStar: true,
        starWidth: "12px",
        ratedFill: "#464646"
    });

    $('.header__menu-btn').on('click', function () {
        $('.header__box-menu').addClass('active');
    });
    $('.close-btn').on('click', function () {
        $('.header__box-menu').removeClass('active');
    });

    jQuery(document).ready(function ($) {
        $('.posts__inner').masonry({// options
            itemSelector: '.posts__inner-item',
            columnWidth: '.persent-size',
            gutter: '.gutter-width',
            percentPosition: true
        });
    });

    (function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");

});