

var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,

       breakpoints: {
        // 1025px 이상일 때 적용될 설정
        1025: {
            slidesPerView: 4,
        },
       
        0 : { slidesPerView: 3}
    },
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      },    
    });




    // breakpoints:{
    //     640 : {   //브라우저가 640이상
    //       slidesPerView: 2
    //     },
    //     768 : {   //브라우저가 768이상
    //       slidesPerView: 2
    //     },
    //     1024 : {  //브라우저가 1024이상
    //       slidesPerView: 3
    //     },
    //     1280 : {  //브라우저가 1280이상
    //       slidesPerView: 3 
    //     }
    //   }


    //sec2 map
   $(document).ready(function(){
  $('#content .gallery-top .swiper-wrapper .swiper-slide').click(function () {
    // 클릭한 슬라이드가 이미 active라면 active 제거 → 닫기
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
    } 
    else {
      // 다른 슬라이드에서 active 제거하고 클릭한 것만 활성화
      $('#content .gallery-top .swiper-wrapper .swiper-slide').removeClass('active');
      $(this).addClass('active');
    }
  });
});