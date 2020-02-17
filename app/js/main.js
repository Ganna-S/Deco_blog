$(function () {
    $('.slider__box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button class="slick-arrow slick-up"><img src="images/Top.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-down"><img src="images/Down.png" alt=""></button>',
    });

    $('.header__menu-btn').on('click', function () {
        $('.header__box-menu ul').slideToggle();
    });

});