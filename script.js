var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: false, 
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true, 
    watchSlidesProgress: true, 
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1.0, 
    },
    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
    }
});