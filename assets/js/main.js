// Loading //
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('body-container').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.cssText="opacity:0;z-index:-2;";
          document.getElementById('body-container').style.opacity="1";
      },100);
  }
}

$(document).ready(function (){
    // Smooth Scrolling //
    $("html").easeScroll({
        frameRate: 120,
        animationTime: 1500,
        stepSize: 60,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 1,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
    });

    // Animated Arrow //
    (function($) {
        $.fn.seqfx = function() {
            var elements = this,
                l = elements.length,
                i = 0;
    
            function execute() {
                var current = $(elements[i]);
                i = (i) % l;
    
                current
                    .fadeIn(350)
                    .delay(800)
                    .fadeOut(350, execute);
            }
            execute();
            return this;
        };
    }(jQuery));
    
    $(".down").seqfx();

    // Other //
    var vh100 = ($(window).outerHeight() / $(window).outerWidth()*100 + "vw");
    $('#parallax-container').css({ height: vh100 });
    $('#parallax-container').children('.parallax-div').css({ height: vh100 });
    $('.cover-wrapper').css({ minHeight: vh100 });
    $('.desktop-mode').css({ minHeight: vh100 });

    // Mobile Control //
    if ($(window).width() < $(window).height()) {
        $('.ds-split').css({ minHeight: 'auto' });
        $('.page').css({ minHeight: 'auto' });
    }
    else {
        $('.ds-split').css({ minHeight: vh100 });
        $('.page').css({ minHeight: vh100 });
    }

    // Nav Control //
    $(".down").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $("#nav-down-here").offset().top
        }, 1200, 'easeInOutExpo');
    });

    // Tab Scroll CSS Control //
    $(window).scroll(function(){
        if($(window).scrollTop() < $("#section1").offset().top - 50 ){
            $(".nav-wrapper").removeClass('nav-wrapper-add');
            $('span').removeClass('span-change');
            document.title = 'Christian Nguyen';
        }else{
            $(".nav-wrapper").addClass('nav-wrapper-add');
        }
        if($(window).scrollTop() >= $("#section1").offset().top - 50  && $(window).scrollTop() < $("#section2").offset().top - 50 ){
            $("#tab1").css("border-bottom","2px solid #00b8e6");
            document.title = 'Christian Nguyen | Developer';
        }else{
            $("#tab1").css("border-bottom","2px solid rgba(0,0,0,0)");
        }
        if($(window).scrollTop() >= $("#section2").offset().top - 50  && $(window).scrollTop() < $("#section3").offset().top - 50 ){
            $("#tab2").css("border-bottom","2px solid #00b8e6");
            document.title = 'Christian Nguyen | Projects';
        }else{
            $("#tab2").css("border-bottom","2px solid rgba(0,0,0,0)");
        }
        if($(window).scrollTop() >= $("#section3").offset().top - 50  && $(window).scrollTop() < $("#section4").offset().top - 50 ){
            $("#tab3").css("border-bottom","2px solid #00b8e6");
            document.title = 'Christian Nguyen | Business';
        }else{
            $("#tab3").css("border-bottom","2px solid rgba(0,0,0,0)");
        }
        if($(window).scrollTop() >= $("#section4").offset().top - 50 ){
            $("#tab4").css("border-bottom","2px solid #00b8e6");
            document.title = 'Christian Nguyen | Connect';
        }else{
            $("#tab4").css("border-bottom","2px solid rgba(0,0,0,0)");
        }
    });
    
});

window.addEventListener('scroll', () => {
    let children = $('#parallax-container').children('.parallax-div');
    for(let i = 0; i < children.length; i++) {
      children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }
  }, false)