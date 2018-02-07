$(document).ready(function(){

    var st = $(this).scrollTop();
    var H_nav = $('.header-nav').offset().top;
    var H_menu = $('.mobile-menu-btn').offset().top;
    $(window).scroll(function(){
        st = $(this).scrollTop();
        if ( $(window).width() > 767 ) {
            if ( H_nav < st ) {
                $('.header').css({
                    'position': 'fixed',
                    'background-color': '#000000',
                    'padding': '20px 0',
                });
                $('.header-top').css('display','none');
            } else {
                $('.header').css({
                    'position': 'absolute',
                    'background-color': 'transparent',
                    'padding': '0',
                });
                $('.header-top').css('display','block');
            }
        } else {
            if ( H_menu < st ) {
                $('.header').css({
                    'position': 'fixed',
                    'background-color': '#000000',
                    'padding': '20px 0',
                });
            } else {
                $('.header').css({
                    'position': 'absolute',
                    'background-color': 'transparent',
                    'padding': '0',
                });
            }
        }
    });

    $('.popup-a').fancybox();

    $('.input-phone').mask("+7 (999) 999-99-99");

    $('.b-6 .el-btn a').click(function(){
        var elem = $(this).attr('href');
        var H;
        
        if ( $(this).hasClass("active") ) {
            $(this).removeClass("active");
            $(this).text("Ответ");
            $(elem).animate({"height": 0}, 500);
            setTimeout(function(){$(elem).removeClass('active');}, 500);
        } else {
            $(this).addClass("active");
            $(this).text("Закрыть");
            $(elem).addClass("active");
            H = $(elem+' p').height() + 30;
            $(elem).animate({"height": H}, 500);
        }

        return false;
    });

    $('.mobile-menu-btn').click(function(){
        if ( $(this).hasClass("active") ) {
            $(this).removeClass("active");
            $('.header-nav').animate({height: 0}, 500);
            setTimeout(function(){$('.header-nav').removeClass('active');}, 500);
            $('.mobile-bg').removeClass("active");
        } else {
            $(this).addClass("active");
            $('.header-nav').addClass("active");
            $('.header-nav').animate({height: 174}, 500);
            $('.mobile-bg').addClass("active");
        }
    });

    $('.mobile-bg').click(function(){
        $('.mobile-menu-btn').removeClass("active");
        $('.header-nav').animate({height: 0}, 500);
        setTimeout(function(){$('.header-nav').removeClass('active');}, 500);
        $('.mobile-bg').removeClass("active");
    });

    $('.b-4-elements').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1247,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    function resize(){
       if( typeof( window.innerWidth ) == 'number' ) {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || 
        document.documentElement.clientHeight ) ) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
    }
    $(window).resize(resize);
    resize();

});