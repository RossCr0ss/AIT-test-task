import './style/style.scss';
import './bootstrap/bootstrap.js';
import './owlCarousel/owl.carousel.scss';
import 'owl.carousel';

jQuery(document).ready(function ($) {
    $('.dropdown-toggle').dropdown();


    $("#owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        /* dots: true, */
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        },
        /* dotsData: true, */

    });



});