$('.slide').slick({
//  centerMode: true,
//  centerPadding: '60px',
  slidesToShow: 2,
    slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});