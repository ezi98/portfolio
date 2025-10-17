//TAB메뉴

$(document).ready(function(){
    var cnt=6;  //탭메뉴 개수 ***
    $('.tabs .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.tabs li:eq(0) .tab').css('color','#fff'); 
    $('.tabs li:eq(0)').css('transform','scale(1.1)');
    $('.tabs li:eq(0) .tab-footer').show();

    //첫번째 탭메뉴 활성화
    //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
    $('.tabs .tab').each(function (index) {  // index=0 1 2
      $(this).click(function(e){  //각각의 탭메뉴를 클릭하면... 
          e.preventDefault();   // <a> href="#" 값을 강제로 막는다 

          $(".tabs .contlist").hide(); //모든 탭내용을 안보이게...
        //   $(".tabs .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
          $(".tabs .contlist:eq("+index+")").fadeIn('fast');
          $('.tab').css('background','#282525').css('color','#fff'); //모든 탭메뉴를 비활성화
          $(this).css('background','#282525').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화

          $('.tabs li').css('transform','scale(1)')
          $(this).parents('li').css('transform','scale(1.1)')


        //   $('.tabs a.tab').css('border-top','5px solid #1B729D;')
        //  $(this).find('.tabs a.tab') .css('border-top','5px solid #1B729D;')

          $('.tabs li .tab-footer').fadeOut('fast');
          $(this).find('.tab-footer').fadeIn('slow');

     });
    });
});

            

//겔러리 오버효과

$('.sec5 ul li').hover(function(){
    $('.sec5 ul li img').css('filter','brightness(70%) grayscale(100%)').css('transform','scale(1)');
    $(this).find('img').css('filter','brightness(110%) grayscale(0)').css('transform','scale(1.1)');
},function(){
    $('.sec5 ul li img').css('filter','brightness(100%) grayscale(0)').css('transform','scale(1)');
});


