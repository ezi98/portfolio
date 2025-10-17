
//검색창 처리

$('#total_btn').click(function () {
    var pname = $('#total_title').val(); //베이스
    if (pname) { //검색어를 입력했으면...
        if($('#pro').val()==1){
          location.href = '../sub6/sub6_1.html?pname=' + pname;
        }else if($('#pro').val()==2){
          location.href = '../sub6/sub6_2.html?pname=' + pname;
        }
    } else { //검색어를 입력하지 않았다면...
        alert('검색어를 입력하세요');
    }
  });