import './style/style.scss';
import './bootstrap/bootstrap.js';

jQuery(document).ready(function ($) {
    $('.dropdown-toggle').dropdown();

    $('#myCarousel').on('slid.bs.carousel', function (event) {
        console.log(event)
    });

});