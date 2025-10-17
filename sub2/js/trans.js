$('.gallery ul li:eq(0)').fadeIn('slow');

$('.trans_menu a').click(function(e){
    e.preventDefault();

    var ind = $(this).index('.trans_menu a'); // 0 1 2 3

    $('.trans_menu li').removeClass('current');
    $(this).parent('li').addClass('current');

    $('.gallery ul li').hide();
    $('.gallery ul li:eq('+ ind +')').fadeIn('slow');

});