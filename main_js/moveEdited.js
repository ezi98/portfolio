// JavaScript Document

// 메인비주얼 영역
var timeonoff; //타이머 처리
var imageCount = $(".gallery ul li").size(); //이미지 총개수
var cnt = 1; //이미지 순서 1 2 3 1 2 3....(주인공!!=>현재 이미지 순서)
var onoff = true; // true=>타이머 동작중 , false=>타이머 동작하지 않을때

$(".btn1").css("background", "#ffffff5b"); //첫번째 불 키기
$(".btn1").css("width", "200px"); //버튼의 너비 증가
$(".btn1").addClass("on");

$('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
$('.gallery .link1 span').delay(1500).animate({top:300, opacity:1},'slow');

function gallery_change() {
  $(".gallery li").fadeOut("300");
  $(".gallery .link" + cnt).fadeIn("400"); //자기 자신만 이미지가 보인다

  $(".mbutton").css("background", "#ffffff5b"); //버튼 모두 불 끄기
  $(".mbutton").css("width", "50px"); // 작동 안하는 바의 너비
  $(".mbutton").removeClass("on");
  $(".btn" + cnt).addClass("on");
  $(".btn" + cnt).css("width", "200px");

  $(".gallery li span").css("top", 200).css("opacity", 0);
  $(".gallery .link" + cnt).find("span").delay(500).animate({ top: 300, opacity: 1 }, "slow");
}

function moveg() {
  if (cnt == imageCount + 1) cnt = 1;
  if (cnt == imageCount) cnt = 0; //카운트 초기화
  cnt++; //카운트 1씩 증가.. 3이되면 다시 초기화
  gallery_change();
  if (cnt == imageCount) cnt = 0; //카운트의 초기화 0
}

timeonoff = setInterval(moveg, 3000); // moveg 함수로 타이머를 동작 1~3이미지를 순서대로 자동 처리

// 하단 버튼 클릭해서 이미지 변경

$(".mbutton").click(function (event) {
  var $target = $(event.target);
  clearInterval(timeonoff);

  cnt = $(this).index(".mbutton") + 1; //0~4 ->1~5
  // console.log(cnt);

  gallery_change();

  if (cnt == imageCount) cnt = 0; //카운트 초기화

  timeonoff = setInterval(moveg, 3000); //타이머의 부활

  if (onoff == false) {
    //중지상태 인지?
    onoff = true; //동작
    $(".ps").html(
      '<span class="hidden">stop</span><i class="fa-solid fa-pause"></i>'
    );
  }
});

	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
		     $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;   //중지상태로 변경
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 4000); //play버튼 클릭시  부활
		   $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
		   onoff=true;   //동작상태로 변경
	   }
  });	

    //왼쪽/오른쪽 버튼 처리
    $('.visual .btn').click(function(){  //왼쪽/오른쪽 버튼을 클릭하면

      clearInterval(timeonoff); //살인마

      if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭
          if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
          //if(cnt==imageCount+1)cnt=1;  
          cnt++; //카운트 1씩증가  1 2 3 4 5 ~ 1 2 3 4 5
      }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭
          if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
          if(cnt==0)cnt=imageCount;
          cnt--; //카운트 감소 5 4 3 2 1 ~ 5 4 3 2 1
      }

    // for(var i=1;i<=imageCount;i++){
    //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    // }
    $('.gallery li').hide(); //모든 이미지를 보이지 않게.
    $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                        
    $('.mbutton').css('background','#00f'); //버튼 모두불꺼
    $('.mbutton').css('width','16');
    $('.btn'+cnt).css('background','#f00');//자신 버튼만 불켜 
    $('.btn'+cnt).css('width','30px');

    $('.gallery li span').css('top',210).css('opacity',0);
    $('.gallery .link'+cnt).find('span').delay(1500).animate({top:170, opacity:1},'slow');

    // if($(this).is('.btnRight')){
    //   if(cnt==imageCount)cnt=0;
    // }else if($(this).is('.btnLeft')){
    //   if(cnt==1)cnt=imageCount+1;
    // }

    timeonoff= setInterval( moveg , 4000); //부활

    if(onoff==false){ //타이머가 중지상태면...
      onoff=true; //동작 상태로 만든다
      $('.ps').html('<span class="hidden">stop</span><i class="fa-solid fa-pause"></i></span>');
    }

    
  });


  //문화활동 슬라이드


  var position=0;  //최초위치
  //var movesize=150; //이미지 하나의 너비
  var movesize=$('#content .section_culture ul li').width()+40;
  //console.log(movesize);

 
  $('#content .section_culture ul').after($('#content .section_culture ul').clone());

  // function moveG() {
  //     position-=movesize;  // 150씩 감소
  //     $('#content .section_culture .right_box .right_box_slide').animate({left:position}, 'fast',
  //         function(){							
  //         if(position<=-1350){
  //             $('#content .section_culture .right_box .right_box_slide').css('left',-300);
  //             position=-300;
  //         }
  //     }).clearQueue();
  // }

 // timeonoff= setInterval(moveG, 3000);

  
      //슬라이드 겔러리를 한번 복제
var lastClickTime = 0; //이전에 클릭한 순간의 시간     

$('.section_culture .button a').click(function(e){
   e.preventDefault();

   var currentTime = new Date().getTime(); //클릭한 순간의 시간
   //console.log(currentTime);

   var timeDiff = currentTime - lastClickTime;
   // 일정 시간(예: 500ms) 이내에 다시 클릭한 경우 이벤트를 무시
   if (timeDiff < 500) {  //0.5초 보다 더 빠르게 클릭하면 계산이 되지않는다
       e.preventDefault();
       return false;  //계산을 중지해라~~ 함수를 강제로 빠져나가라
   }

   lastClickTime = currentTime;
   

  position-=movesize;  // 150씩 감소
  $('#content .section_culture .right_box .right_box_slide').animate({left:position}, 'fast',function(){
    if(position<=-2300){
        position=-460;
        $('#content .section_culture .right_box .right_box_slide').css('left',-460);
      }
  }).clearQueue();  

 });




