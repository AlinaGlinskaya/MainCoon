const initTeamSlider = () => {
  const teamSlider = document.querySelector('.team__swiper-container');

  const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef, no-unused-vars
    let swiper = new Swiper(slider,
        {
          speed: 600,
          loop: true,
          slidesPerView: 1,
          watchOverflow: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
  };

  initSwiper(teamSlider);
};

export {initTeamSlider};
