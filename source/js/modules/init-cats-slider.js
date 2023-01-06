const initCatsSlider = () => {

  const catsSlider = document.querySelector('.cats__swiper-container');
  // const desktop = window.matchMedia('(min-width: 1025px)');

  const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef, no-unused-vars
    let swiper = new Swiper(slider, {
      speed: 600,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 23,
      watchOverflow: true,
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

  initSwiper(catsSlider);

};

export {initCatsSlider};
