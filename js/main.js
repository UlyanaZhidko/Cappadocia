$(function () {
    $('.fairy-tail-slider, .our-trip-slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="/images/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="/images/right.svg" alt=""></button>',
        autoplay: 2500,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false
                }
            },
        ]
    });
});