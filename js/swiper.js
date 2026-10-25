
if ($(".discover-swiper").length > 0) {
    var swiper = new Swiper('.discover-swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: ".slider-discover-next",
        prevEl: ".slider-discover-prev",
      },
    });
  }

if ($(".recommended-swiper-2").length > 0) {
  var thumbSwiper = new Swiper('.recommended-swiper-2',{
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true, 
    watchSlidesVisibility: true,
    watchSlidesProgress: true ,
    
  });
}
  
if ($(".recommended-swiper-1").length > 0) {
  var swiper = new Swiper('.recommended-swiper-1', {
    slidesPerView: 1,
    spaceBetween: 0,
    thumbs :{
      swiper: thumbSwiper,
    },
    navigation: {
      nextEl: ".slider-recommended-next",
      prevEl: ".slider-recommended-prev",
    },
   
  });
}
if ($(".testimonial-img-swiper").length > 0) {
  var thumbSwiperTestimonial = new Swiper('.testimonial-img-swiper', {
    slidesPerView: 1,
    spaceBetween: 1,
    freeMode: true, 
    watchSlidesVisibility: true,
    watchSlidesProgress: true ,
  });
}
if ($(".testimonial-swiper").length > 0) {
  var swiper = new Swiper('.testimonial-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    thumbs :{
      swiper: thumbSwiperTestimonial,
    },
    navigation: {
      nextEl: ".slider-testimonial-next",
      prevEl: ".slider-testimonial-prev",
    },
  });
}

if ($(".page-title-home-swiper").length > 0) {
  var swiper = new Swiper('.page-title-home-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".slider-page-title-home-next",
      prevEl: ".slider-page-title-home-prev",
    },
  });
}
if ($(".shop-item-swiper").length > 0) {
  var swiper = new Swiper('.shop-item-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
      nextEl: ".slider-perview-3-next",
      prevEl: ".slider-perview-3-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1.2,
      },
      400: {
        slidesPerView: 2.2,
      },
      767: {
        slidesPerView: 2.2,
      },
      991: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });
}
if ($(".gallery-swiper").length > 0) {
  var swiper = new Swiper('.gallery-swiper', {
    slidesPerView: 1.7,
    initialSlide: 2,
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      400: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1.33,
      },
      1024: {
        slidesPerView: 1.7,
      },
    },
  });
}