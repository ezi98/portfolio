
//글로벌 네비게이션 처리코드

   var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
   var on_off=false;  //false(안오버)  true(오버)
   
    //    $('#headerArea').mouseenter(function(){
    //       // var scroll = $(window).scrollTop();
    //        $(this).css('background','#fff');
    //        $('.dropdownmenu li a').css('color','#333'); 
    //         //헤더영역의 텍스트 색상과 로고이미지 경로 등을 교체
    //        on_off=true;
    //    });
   
    //   $('#headerArea').mouseleave(function(){
    //        var scroll = $(window).scrollTop();  //스크롤의 거리
           
    //        if(scroll<smh-80 ){
    //            $(this).css('background','rgba(0,0,0,.5)').css('border-bottom','none'); 
    //            $('.dropdownmenu li a').css('color','#fff');
    //        }else{
    //            $(this).css('background','#fff'); 
    //            $('.dropdownmenu li a').css('color','#333');
    //        }
    //       on_off=false;    
    //   });
   
    //   $(window).on('scroll',function(){//스크롤의 거리가 발생하면
    //        var scroll = $(window).scrollTop();  
    //        //스크롤의 거리를 리턴하는 함수
    //        //console.log(scroll);

    //        if(scroll>smh-80){//스크롤이 비주얼의 높이-header높이 까지 내리면
    //            $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
    //            $('.dropdownmenu li a').css('color','#333');
    //        }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
    //           if(on_off==false){
    //                $('#headerArea').css('background','rgba(0,0,0,.5)').css('border-bottom','none');
    //                $('.dropdownmenu li a').css('color','#fff');
    //           }
    //        }; 
           
    //     });

  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:280},'fast').clearQueue();
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:80},'fast').clearQueue();
     });
    
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1',this).css('color','#3cb149');
       },function() {
          $('.depth1',this).css('color','#333');
     });
     

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:280},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:80},'normal').clearQueue();
    });


//상단 TOP이동 코드
$('.top_move').click(function(e){
   e.preventDefault();

   $('html,body').stop().animate({'scrollTop':0},1000);
});

$(window).on('scroll', function(){  //스크롤의 위치가 변화됨
 var scroll = $(window).scrollTop(); //스크롤탑의 위치를 변수에 담는다
 var visual_height = $('.visual').height();
  console.log(scroll);
 if(scroll>visual_height){
   $('.top_move').fadeIn('slow');
 }else{
   $('.top_move').fadeOut('fast');
 }
});

//패밀리사이트 이동 코드


$('.family .arrow').toggle(function(e){
   e.preventDefault();
   //홀수번째 -> 리스트가 보인다
   $('.family .aList').fadeIn('slow');
   $(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');
},function(e){
   e.preventDefault();
   //짝수번쨰 리스트가 안보이다
   $('.family .aList').fadeOut('fast');
   $(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');

});


//검색창 여닫기

$('.search_onoff').toggle(function(e){
   e.preventDefault();
   $('.total_search_box').fadeIn('slow');
},function(e){
   e.preventDefault();
   $('.total_search_box').fadeOut('fast');
});



