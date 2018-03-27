import './assets/scss/app.scss';

import Popper from 'popper.js/dist/popper.min.js';
import $ from 'jquery';
import slick from 'slick-carousel/slick/slick.js';
import collapse from 'bootstrap/js/src/collapse';


$('#carousel').slick({
  slidesToShow: 4,
  infinite: true,
  prevArrow: '<span class="prev"><img src="assets/media/arrow_slide.png"></span>',
  nextArrow: '<span class="next"><img src="assets/media/arrow_slide.png"></span>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 2
      }
    }]
})
// $(".dropp-list").click(function() {
//     var elem = $(this);

//     elem.toggleClass('active');
//     elem.parent().find('.definition').slideToggle();
// });
//  