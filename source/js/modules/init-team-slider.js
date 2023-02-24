const initTeamSlider = () => {
  const teamSlider = document.querySelector('.team__swiper-container');

  const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef, no-unused-vars
    let swiper = new Swiper(slider,
        {
          speed: 600,
          loop: true,
          slidesPerView: 1,
          spaceBetween: 10,
          watchOverflow: false,
          navigation: {
            nextEl: '.swiper-button-next.swiper-button--team',
            prevEl: '.swiper-button-prev.swiper-button--team',
          },
        });
  };

  initSwiper(teamSlider);
};

export {initTeamSlider};
