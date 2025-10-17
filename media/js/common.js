$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면

    var scroll = $(window).scrollTop(); //스크롤의 거리

    var win_height =$(window).height();

    var header_height =$('header').height();

   

    if(scroll>win_height){ //300이상의 거리가 발생되면

        $('.topMove').fadeIn('slow');  //top보여라~~~~

    }else{

        $('.topMove').fadeOut('fast');//top안보여라~~~~

    }



    if(scroll>win_height-header_height){ //300이상의 거리가 발생되면

        $('header').css('background','#000');  //top보여라~~~~

        $('header').css('border-bottom','2px solid #333');  

    }else{
      
        $('header').css('background',' rgba(0, 0, 0, .8)');//top안보여라~~~~

        $('header').css('border-bottom','2px solid transparent');  

    }

});



$('.topMove').click(function(e){

    e.preventDefault();

     //상단으로 스르륵 이동합니다.

    $("html,body").stop().animate({"scrollTop":0},1000); 

 });

  // 반응형 네비게이션 처리

  // 모바일 - 메뉴 햄버거 버튼
    var onoff = false; //false(메뉴열림) true(메뉴닫힘)
    $(".menuOpen").click(function(e){
       e.preventDefault();
       if(onoff == false){
         $("#gnb").slideDown('slow');
         $('#headerArea').addClass('mn_open');//메뉴모양변경
         onoff = true;
       }else{
         $("#gnb").slideUp('fast');
         $('#headerArea').removeClass('mn_open');
         onoff = false;
       }
    });

 var current=0; // 0(해상도가 모바일), 1(소형테블릿이상)
 var win_h =$(window).height();
  $(window).resize(function(){ 
     var screenSize = $(window).width();  //가로 해상도
     if( screenSize > 768){ 
       $("#gnb").show();
       $("#gnb").height('auto');
       current=1; 
     }
     if(current==1 && screenSize <= 768){
       $("#gnb").hide();
       $("#gnb").height(win_h);
       $('#headerArea').removeClass('mn_open');
        current=0; //모바일
     }
   }); 
   
  //  팝업 js
		$(document).ready(function () {
			$('.popup-youtube').magnificPopup({
				disableOn: 320,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: true,

				fixedContentPos: false
			});

			$('.popup-tiktok').magnificPopup({
				disableOn: 320,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: true,

				fixedContentPos: false
			});
		});
