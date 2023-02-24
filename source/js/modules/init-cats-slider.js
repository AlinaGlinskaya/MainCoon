const initCatsSlider = () => {

  const catsSlider = document.querySelectorAll('.cats__swiper-container');

  const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef, no-unused-vars
    let swiper = new Swiper(slider, {
      speed: 600,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 23,
      watchOverflow: true,
      navigation: {
        nextEl: '.swiper-button-next.swiper-button--cats',
        prevEl: '.swiper-button-prev.swiper-button--cats',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    });
  };

  catsSlider.forEach((slider) => {
    initSwiper(slider);
  });

};

export {initCatsSlider};
