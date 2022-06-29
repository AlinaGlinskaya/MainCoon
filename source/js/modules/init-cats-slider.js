const initCatsSlider = () => {
  const swiper = new Swiper('.cats__swiper-container',
      {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
};

export {initCatsSlider};
