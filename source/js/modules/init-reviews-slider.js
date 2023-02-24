const initReviewsSlider = () => {
  const reviewsSlider = document.querySelector('.reviews__swiper-container');

  const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef, no-unused-vars
    let swiper = new Swiper(slider,
        {
          speed: 600,
          loop: true,
          slidesPerView: 1,
          watchOverflow: false,
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next.swiper-button--reviews',
            prevEl: '.swiper-button-prev.swiper-button--reviews',
          },
        });
  };

  initSwiper(reviewsSlider);
};

export {initReviewsSlider};
