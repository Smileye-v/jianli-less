$(document).ready(function () {
    $(window).scroll(
        function () {
            var Width = $(window).width();
            if($(this).scrollTop() < 20){
                $('.fixD').removeClass('fixA');
            }else{
                $('.fixD').addClass('fixA');
            }
        }
    );
    $('.fix').hover((function () {
        $('.fix').addClass('fixB');
    }),function(){
        $('.fix').removeClass('fixB');

    });
    $(window).width(
        function () {
            var Width = $(window).width();
            if (Width <= 768) {
                $('.nav').addClass('navA');
                $('.work').addClass('workA');
                $('.education').addClass('educationAA');
                $('.skill').addClass('skillAA');
                $('.page').addClass('pageAA');
                $('.practice').addClass('practiceAA');
                $('.navigation').addClass('navigationA');
                $('nav').addClass('topnav');
                $('h1').addClass('toph1');
                $('.topimg').addClass('fixA');
                $('.clearfix').addClass('clearfixmin');
                $('.fix').removeClass('fixD');
            }else {
                $('.fix').addClass('fixD');
            }
        }
    );

    $(window).width(
        function () {
            var Width = $(window).width();
            if (Width <= 457) {
                $('.clearfix').removeClass('clearfixmin');
                $('.clearfix').addClass('clearfixmin1');
            }
        });

    $(window).resize(
        function () {
            var Width = $(window).width();
            if (Width <= 768) {
                $('.nav').addClass('navA');
                $('.work').addClass('workA');
                $('.education').addClass('educationAA');
                $('.skill').addClass('skillAA');
                $('.page').addClass('pageAA');
                $('.practice').addClass('practiceAA');
                $('.navigation').addClass('navigationA');
                $('nav').addClass('topnav');
                $('h1').addClass('toph1');
                $('.topimg').addClass('fixA');
                $('.clearfix').addClass('clearfixmin');
                $('.fix').removeClass('fixD');
                $('.fix').removeClass('fixA');
            } else {
                $('.nav').removeClass('navA');
                $('.work').removeClass('workA');
                $('.education').removeClass('educationAA');
                $('.skill').removeClass('skillAA');
                $('.page').removeClass('pageAA');
                $('.practice').removeClass('practiceAA');
                $('.navigation').removeClass('navigationA');
                $('nav').removeClass('topnav');
                $('h1').removeClass('toph1');
                $('.topimg').removeClass('fixA');
                $('.clearfix').removeClass('clearfixmin');
                $('.fix').addClass('fixD');
            }
        }
    );
    $(window).resize(
        function () {
            var Width = $(window).width();
            if (Width <= 457) {
                $('.clearfix').removeClass('clearfixmin');
                $('.clearfix').addClass('clearfixmin1');
            }else{
                $('.clearfix').removeClass('clearfixmin1');
            }
        });
    $('.topimg').click(function () {
        $('.navigationA').slideToggle('slow');
    });
    $('.navA, section, footer').click(function () {
        $('.navigationA').slideToggle('slow');
    });
    $(window).scroll(
        function () {
            var Width = $(window).width();
            if($(this).scrollTop()>1){
                if($(this).Width>760){
                    $('nav').removeClass('topnavA');
                }else {
                    $('.topnav').addClass('topnavA');
                }
            }else{
                $('nav').removeClass('topnavA');
            }
        }
    )
});