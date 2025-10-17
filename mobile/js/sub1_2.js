//사업소개
var swiper2 = new Swiper('.abilitySwiper', {
  autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
  slidesPerView: 1, //단수 소수점 스와이퍼 미리기보기 양쪽
  spaceBetween: 0, //단사이 여백
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
    el: '.swiperPagination',
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





// 카드 열고 닫기 이벤트
function cardEvt() {
  $(".cardList li a").on("click", function (e) {
    e.preventDefault(); // 링크 클릭 시 화면 위로 안 튀게
    $(this).parent("li").toggleClass("on");
  });
}
cardEvt();
