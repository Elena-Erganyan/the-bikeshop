$(function () {

  $('.slider').slick({
    // autoplay: true,
    // autoplaySpeed: 5000,
    infinite: true,
    fade: true,
    prevArrow: `<svg class="slider-arrow slider-arrow--left" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="61px" height="61px">
   <path fill-rule="evenodd" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter"
    d="M49.000,59.000 L11.000,59.000 C5.477,59.000 1.000,54.523 1.000,49.000 L1.000,11.000 C1.000,5.477 5.477,1.000 11.000,1.000 L49.000,1.000 C54.523,1.000 59.000,5.477 59.000,11.000 L59.000,49.000 C59.000,54.523 54.523,59.000 49.000,59.000 ZM36.981,23.943 C38.298,22.580 38.298,20.372 36.981,19.010 C35.663,17.648 33.528,17.648 32.210,19.010 L23.970,27.530 C22.653,28.892 22.653,31.101 23.970,32.463 L32.210,40.983 C33.528,42.345 35.663,42.345 36.981,40.983 C38.298,39.621 38.298,37.413 36.981,36.050 L31.126,29.996 L36.981,23.943 Z"/>
   </svg>`,
    nextArrow: `<svg class="slider-arrow slider-arrow--right" xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   width="61px" height="61px">
  <path fill-rule="evenodd" stroke-width="2px" stroke-linecap="butt" stroke-linejoin="miter"
   d="M49.000,59.000 L11.000,59.000 C5.477,59.000 1.000,54.523 1.000,49.000 L1.000,11.000 C1.000,5.477 5.477,1.000 11.000,1.000 L49.000,1.000 C54.523,1.000 59.000,5.477 59.000,11.000 L59.000,49.000 C59.000,54.523 54.523,59.000 49.000,59.000 ZM36.030,27.530 L27.790,19.010 C26.472,17.648 24.337,17.648 23.019,19.010 C21.702,20.372 21.702,22.580 23.019,23.943 L28.874,29.996 L23.019,36.050 C21.702,37.413 21.702,39.621 23.019,40.983 C24.337,42.345 26.472,42.345 27.790,40.983 L36.030,32.463 C37.347,31.101 37.347,28.892 36.030,27.530 Z"/>
  </svg>`,
    asNavFor: '.slider-dots'
  });

  $('.slider-dots').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider'
  });

  $('.header__nav-button').click(function () {
    $('.header__nav').toggle();
  });

  $('.header__close-button').click(function () {
    $('.header__nav').toggle();
  });

  function checkForm() {
    if ($('.form__name').val() && $('.form__surname').val() &&
      $('.form__email').val() && $('.form__message').val()) {
      $('.form__button').removeAttr('disabled');
    } else {
      $('.form__button').attr('disabled', 'disabled');
    }
  }

  $('.form__name').blur(checkForm);
  $('.form__surname').blur(checkForm);
  $('.form__email').blur(checkForm);
  $('.form__message').blur(checkForm);
});