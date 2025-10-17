//비주얼 스와이퍼 영역


var swiper1 = new Swiper('.swiper1', {
  autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
  slidesPerView: 1, //단수 소수점 스와이퍼 미리기보기 양쪽
  spaceBetween: 0, //단사이 여백
  // loop: true, //무한 loop
  //freeMode: true,  //터치 만큼 자유롭게 이동
  //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
  //effect: 'fade',   //페이드효과(단수가 1단이 된다)
  //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
  navigation: { //이전/다음 버튼
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: { //페이지 네이션
    el: '.swiper-pagination',
    // dynamicBullets: true,
    clickable: true,
    //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
  },
  autoplay: { //자동
    delay: 4000,
    disableOnInteraction: false
  },
//   scrollbar: { //하단 스크롤바
//     el: '.swiper-scrollbar',
//     hide: true
//   }
});



//사업소개
var swiper2 = new Swiper('.swiper2', {
  autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
  slidesPerView: 1, //단수 소수점 스와이퍼 미리기보기 양쪽
  spaceBetween: 15, //단사이 여백
  loop: true, //무한 loop
  //freeMode: true,  //터치 만큼 자유롭게 이동
  //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
  //effect: 'fade',   //페이드효과(단수가 1단이 된다)
  //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
  // navigation: { //이전/다음 버튼
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  pagination: { //페이지 네이션
    el: '.swiper-pagination',
    // dynamicBullets: true,
    clickable: true,
    //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
  },
  // autoplay: { //자동
  //   delay: 4000,
  //   disableOnInteraction: false
  // },
//   scrollbar: { //하단 스크롤바
//     el: '.swiper-scrollbar',
//     hide: true
//   }
});



      var swiper_tab = new Swiper('.swiper_tab', {
        autoHeight: true,
        slidesPerView: 1,
        speed : 500,
        pagination: { //페이지 네이션
          el: '.swiper-pagination',
          // dynamicBullets: true,
          clickable: true,
          //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
        },
      });

      swiper_tab.on('slideChange', function () {
        $(".tabs .active").removeClass('active');
        $(".tabs a").eq(swiper_tab.activeIndex).addClass('active');
      });
      
      $(".tabs li a").on('touchstart mousedown', function(e) {
        e.preventDefault();
        $(".tabs .active").removeClass('active');
        
        $(this).addClass('active');

        //swiper.swipeTo($(this).index());					
        swiper_tab.slideTo($(this).index('.tabs li a'));
      });
      
      $(".tabs li a").click(function(e) {
      
        e.preventDefault();
      
      });
