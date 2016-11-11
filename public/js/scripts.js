$('nav a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('div[data-anchor="' + scrollAnchor + '"]').offset().top - 0;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

})


$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 0) {
        $('nav-item').addClass('fixed');
        $('.wrapper').each(function(i) {
            if ($(this).position().top <= windscroll - 0) {
                $('.nav-item a.active').removeClass('active');
                $('.nav-item a').eq(i).addClass('active');
            } if (windscroll === 0) {
            	$('.nav-item a.active').removeClass('active');
            }
        });
    } else {
        $('nav-item').removeClass('fixed');
        $('nav-item a.active').removeClass('active');
        $('nav-item a:first').addClass('active');
    }

}).scroll();