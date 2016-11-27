import $ from 'expose?$!expose?jQuery!jquery';
import 'bootstrap';
import 'slick-carousel/slick/slick.min.js';

$(window).load(() => {
    $('.slider img').show();
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 3,
        centerMode: true,
        dots: true,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
    });

    $('[data-toggle="tooltip"]').tooltip();
});
