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

      //갤러리 영역
var cnt = 0;
var total = 0;
$('.gallery .box li:eq(0)').fadeIn('slow');
$('.gallery .img li:eq(0)').fadeIn('slow');
total = $('.gallery .img li').length;  // .size() 대신 .length 사용 (더 현대적인 방식)
$('.gallery span').text((cnt+1) + '/' + total);

function change() {
   $('.gallery .box li').hide();
   $('.gallery .box li:eq('+cnt+')').fadeIn('slow');

   $('.gallery .img li').hide();
   $('.gallery .img li:eq('+cnt+')').fadeIn('slow');
   
   // 현재 페이지 번호 업데이트
   $('.gallery span').text((cnt+1) + '/' + total);
}

$('.next, .prev').click(function(e){
   // 기본 이벤트(페이지 스크롤) 방지
   e.preventDefault();
   
   // 클릭된 버튼에 따라 다르게 처리
   if($(this).hasClass('next')){
      cnt++;
      if(cnt == total){
         cnt = 0;
      }
   } else {
      cnt--;
      if(cnt == -1){
         cnt = total - 1;
      }
   }
   
   // 이미지 변경 함수 호출
   change();
});



//palace 영역
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: -15,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // }
});

// var gdata = [
//   {'title':'The Guardian of Egyptian Art', 'desc':'The Crypt of the Sphinx'},
//   {'title':'A pyramid for a symbol', 'desc':'Cour Napoléon & Pyramid'},
//   {'title':'Shining new light on sculpture', 'desc':'Cour Puget and Cour Marly'},
//   {'title':'A stairway to Victory', 'desc':'The Daru staircase'},
//   {'title':'The Splendour of the Second Empire', 'desc':'The Napoleon III Apartments'},
//   {'title':'Artworks from Around the World', 'desc':'The Pavillon des Sessions - Closed until sping 2025'},
//   {'title':'Treasures of the Eastern Mediterranean', 'desc':'The Galerie d’Angoulême'}
// ];
// var text = document.getElementById('text');
// var output ='';

// output +='<dl>';
// output +='<dt>'+ gdata[0].title +'</dt>';
// output +='<dd>'+ gdata[0].desc +'</dd>';
// output +='</dt>';  
// text.innerHTML = output;

// swiper.on('transitionEnd', function() {
//     //console.log(swiper.realIndex);
//     var sind = swiper.realIndex;  // 0~9
    
//     output ='<dl>';
//     output +='<dt>'+ gdata[sind].title +'</dt>';
//     output +='<dd>'+ gdata[sind].desc +'</dd>';
//     output +='</dt>';  
//     text.innerHTML = output;
// });