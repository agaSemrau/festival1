$('document').ready(function(){
    var myOrangeInterval = false;
    var myBlueInterval = false;
    var myYellowInterval = false;
    var audio = {};
    audio["wave"] = new Audio();



    $('.animatedLogo').mouseenter(function(){

        function orangeAnimate(){$('.orange_wave')
            .animate({
                top: "-=2%"
            }, 500)
            .animate({
                top:"+=2%"
            }, 500);
        }

        function blueAnimate(){setTimeout(function(){
            $('.blue_wave')
                .animate({
                    top: "-=2%"
                }, 500)
                .animate({
                    top:"+=2%"
                }, 500)}, 200);
        }

        function yellowAnimate() {setTimeout(function(){
            $('.yellow_wave')
                .animate({
                    top: "-=2%"
                }, 500)
                .animate({
                    top:"+=2%"
                }, 500)}, 300);
        }

        orangeAnimate();
        blueAnimate();
        yellowAnimate();
        myOrangeInterval = setInterval(orangeAnimate, 1500);
        myBlueInterval = setInterval(blueAnimate, 1500);
        myYellowInterval = setInterval(yellowAnimate, 1500);

        // audio["wave"].src = "sounds/197714__corsica-s__atlantic-ocean-waves.wav"
        // audio["wave"].play();
    });

    $('.animatedLogo').mouseleave(function(){

        clearInterval(myOrangeInterval);
        myOrangeInterval = false;

        clearInterval(myBlueInterval);
        myBlueInterval = false;

        clearInterval(myYellowInterval);
        myYellowInterval = false;

        // audio["wave"].pause();
    });



    $('.animatedLogo').click(function(){
        $('.blue_wave').stop(true, true );
        $('.yellow_wave').stop(true, true );
        $('.orange_wave').stop(true, true );

        $('.contact-data').addClass("hide");

        $('.orange_wave')
            .animate({
                height: "6px",
                width: "40px",
                left: "25px",
                top: "42px"
            }, 1200);

        $('.blue_wave')
            .animate({
                height: "6px",
                width: "40px",
                left: "25px",
                top: "49px"
            }, 1200);

        $('.yellow_wave')
            .animate({
                height: "6px",
                width: "40px",
                left: "25px",
                top: "56px"
            }, 1200);

        $('.darkContainer')
            .animate({
                height: "95px",
                paddingTop: "15px"
            }, 1200);

        $('.wrapper')
                .animate({
                    height: "95px",
                    paddingTop: "0"
                }, 1200);

        $('.mainDate')
           .animate({
                position: "relative",
                fontSize: '3.4vw',
                top: "1%",
                left: "2vw"
            }, 500);

        $('.animatedLogo')
            .animate({
                height: "83px",
                width: "83px",
                marginLeft: "40px",
                top: "-10px"
            }, 1200);

        $('.lightContainer')
            .removeClass('hide')
            .animate({
                display: "block",
                height: "100%"
            }, 300);

        $('.footer')
            .animate({
                height: "80px"
            }, 300)
    });

    $('.tiles').click(function () {
        $(this).removeClass('tiles');
        $('.tiles').fadeOut(0);
        $('.close').removeClass('hide');
        $(this).addClass('tiles');
        $(this).addClass('big');
        $(this).find('.text').removeClass('hide');
        $(this).find('.about-img-small').removeClass('hide');
        if ($(this).hasClass('about')) {
            $('.about-nav').addClass('hide');
            $('.img-about').addClass('about-img-small');
            $(this).removeClass('about');
            $('.text-about').textillate({ in: { effect: 'flip',  shuffle: true  } }).textillate('start');
        }
        if ($(this).hasClass('artists')) {
            $(this).removeClass('artists');
        }
        if ($(this).hasClass('partners') || $(this).hasClass('test')) {
            $(this).removeClass('partners', 0);
        }
        if ($(this).hasClass('tickets')) {
            $(this).removeClass('tickets', 0);
        }
        if ($(this).hasClass('contact')){
            $(this).removeClass('contact', 0);
            $('.contact-img').addClass('hide');
            $('.contact-title').removeClass('rotated');

        }
    });


    $(document).on("click" , '.close' , function(){
        $(this).parent().removeClass('tiles');
        $('.tiles').fadeIn(0);
        $(this).parent().addClass('tiles');
        $(this).parent().removeClass('big');
        $('.close').addClass('hide');
        $(this).parent().find('.text').addClass('hide');

        if($(this).hasClass('close-about')){
            $('.img-about').removeClass('about-img-small');
            $('.about-nav').removeClass('hide');
            $(this).parent().addClass('about');
        }
        else if($(this).hasClass('close-artists')){
            $(this).parent().addClass('artists');
            $(this).parent().find('.about-img-small').addClass('hide');
        }
        else if($(this).hasClass('close-contact')){
            $(this).parent().addClass('contact');
            $(this).parent().find('.about-img-small').addClass('hide');
            $('.contact-img').removeClass('hide');
            $('.contact-title').addClass('rotated');
        }
        else if($(this).hasClass('close-tickets')){
            $(this).parent().addClass('tickets');
            $(this).parent().find('.about-img-small').addClass('hide');
        }
        else {
            $(this).parent().addClass('partners');
            $(this).parent().find('.about-img-small').addClass('hide');
        }
    });




    $('.contact').mouseenter(function(){
        // $('.contact-img').fadeOut(600);
        $('.contact-img').animate({
            marginTop: "-50px",
            opacity: "0"
        }, 200)

        $('.contact-img').animate({
            marginTop: "80px"
        },50)

        $('.contact-img').animate({
            marginTop: "30px",
            opacity: "1"
        }, 200)

    });




    $('.partners').mouseenter(function() {
        $('.partners-heading').textillate({ in: { effect: 'flip',  shuffle: true } }).textillate('start');

    });

    $('.about').mouseenter(function() {
        $('.about-heading').textillate({ in: { effect: 'flip',  shuffle: true  } }).textillate('start');

    });

    $('.artists').mouseenter(function() {
        $('.artists-head').textillate({ in: { effect: 'flip',  shuffle: true  } }).textillate('start');

    });
    $('.tickets').mouseenter(function() {
        $('.tickets-head').textillate({ in: { effect: 'flip',  shuffle: true  } }).textillate('start');

    });



    $('.peter-wrapper, .reilly-wrapper').mouseenter(function(){
        $(this).find(':nth-child(2)').animate({
            height: "20%"}, 400)
    });
    $('.peter-wrapper, .reilly-wrapper').mouseleave(function(){
        $(this).find(':nth-child(2)').animate({
            height: "0"}, 400)
    });
    $('.peterArrow, .reillyArrow').click(function(){
        $(this).parent().find('p').toggleClass('hide');
        $(this).toggleClass('reverted');
        $('.big').animate({
            scrollTop: $(this).parent().offset().top
        })
    });

});