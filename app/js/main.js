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
    });
    $('.aside-slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button class="slick-arrow slick-left"><img src="images/left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-right"><img src="images/right.png" alt=""></button>',
    });
    $('.post__slider-box').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button class="slick-arrow slick-left"><img src="images/left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-right"><img src="images/right.png" alt=""></button>',
    });
    $('.recomended__posts-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button class="slick-arrow slick-small__left"><img src="images/icons/small-arrow_left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-small__right"><img src="images/icons/small-arrow_right.png" alt=""></button>',
    });
    $('.header__menu-btn').on('click', function () {
        $('.header__box-menu ul').slideToggle();
    });

    jQuery(document).ready(function ($) {
        $('.posts__inner').masonry({
            // options
            itemSelector: '.posts__inner-item',
            columnWidth: '.persent-size',
            gutter: '.gutter-width',
            percentPosition: true
        });
    });


});