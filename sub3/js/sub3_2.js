//카운트 영역

//스크롤 이벤트 리스너
var one = false;
$(window).on('scroll', function(){
    var scroll = $(window).scrollTop(); 

    if(scroll > 2500 && one==false){
        initCounters();  // 통합된 카운터 초기화 함수 호출
        one=true;
    }
    else if(scroll <= 2500 && one==true){
        one=false;
    }
});


//카운트 이벤트
function initCounters() {
  // 첫 번째 카운터 (억 원)
  var count1Value = 750;
  $({ val: 0 }).animate({ val: count1Value }, {
      duration: 1000,
      step: function() {
          var number = Math.floor(this.val).toLocaleString() + '억 원';
          $(".count1").text(number);
      },
      complete: function() {
          var number = Math.floor(this.val).toLocaleString() + '억 원';
          $(".count1").text(number);
      }
  });

  // 두 번째 카운터 (회)
  var count2Value = 55;
  $({ val: 0 }).animate({ val: count2Value }, {
      duration: 1000,
      step: function() {
          var number = Math.floor(this.val) + '회';
          $(".count2").text(number);
      },
      complete: function() {
          var number = Math.floor(this.val) + '회';
          $(".count2").text(number);
      }
  });

  // 세 번째 카운터 (명)
  var count3Value = 3500;
  $({ val: 0 }).animate({ val: count3Value }, {
      duration: 1000,
      step: function() {
          var number = Math.floor(this.val).toLocaleString() + '명';
          $(".count3").text(number);
      },
      complete: function() {
          var number = Math.floor(this.val).toLocaleString() + '명';
          $(".count3").text(number);
      }
  });
}
