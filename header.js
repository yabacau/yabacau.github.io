$(window).scroll(function () {
    if( $(window).scrollTop() > 0 && !($('#top-table').hasClass('scroll-top'))){
        $('#top-table').addClass('scroll-top');
        $('#bottom-table').addClass('scroll-bottom');
    } else if ($(window).scrollTop() == 0){
        $('#top-table').removeClass('scroll-top');
        $('#bottom-table').removeClass('scroll-bottom');
    }
});
