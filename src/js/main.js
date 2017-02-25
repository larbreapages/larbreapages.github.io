import $ from 'expose-loader?$!expose-loader?jQuery!jquery';
import 'bootstrap';
import 'slick-carousel/slick/slick.min';
import 'bootstrap-validator';
import 'bookbuilder';

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

    $('#newsletterForm').validator().on('submit', (e) => {
        if (!e.isDefaultPrevented()) {
            const email = $('input[type=email]').val();
            $.post('/newsletter', { email }).done(() => {
                $('.alert').removeClass('hidden');
                $('html,body').scrollTop(0);
            });
        }
        $('input[type=email]').val('');
        e.preventDefault();
    });
});
