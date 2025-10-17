//해당 년로를 부르럽게 이동하는 코드


// $('.history_menu2 li a').click(function(e){ //각각의 연결
//     e.preventDefault();
// var target_value = 0;

// if($(this).hasClass('link1')){ //첫번째 버튼 클릭시
//     target_value =910;
// }else if($(this).hasClass('link2')){
//         target_value =1800;
// }else if($(this).hasClass('link3')){
//     target_value =3090;
// }
// $('html,body').stop().animate({'scrollTop':target_value},1000);
// });

// $(window).on('scroll',function(){
//     var scroll = $(window).scrollTop();
//     console.log(scroll);
//     // 910
//     // 1800
//     // 3090
// });


//연혁 탭스크롤//
var ymenuh = $('.history_menu').height();
var y2020 = $('.year1').offset().top - ymenuh * 2 -80; //각각의 스크롤 목적지
var y2010 = $('.year2').offset().top - ymenuh * 2 -80;
var y1992 = $('.year3').offset().top - ymenuh * 2 -80;



$('.history_menu li a').click(function(e){
    e.preventDefault();
    var ytarget =0;

    if($(this).hasClass('link1')){ //첫번째 클릭
        ytarget = y2020;
    }else if($(this).hasClass('link2')){
        ytarget = y2010;
    }else if($(this).hasClass('link3')){
        ytarget = y1992;
    }

    $('html,body').stop().animate({'scrollTop':ytarget},'slow');
});


$(window).on('scroll', function(){
      var scroll = $(window).scrollTop();
      console.log(scroll);

      if(scroll>=950){
        $('header').hide();
        $('#content .history_menu').addClass('fix');
      }else{
        $('header').show();   
        $('#content .history_menu').removeClass('fix');
      }

      $('.history_menu li a').removeClass('spy');

      if(scroll>=y2020 && scroll<y2010){
        $('.history_menu ul li:eq(0) a').addClass('spy');
      }else if(scroll>=y2010 && scroll<y1992){
        $('.history_menu ul li:eq(1) a').addClass('spy');
      }else if(scroll>=y1992){
        $('.history_menu ul li:eq(2) a').addClass('spy');
      }

});

