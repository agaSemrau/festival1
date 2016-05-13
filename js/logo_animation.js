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



    $('span').click(function(){
        $('.animatedLogo').addClass('logoAnimatedSmall');
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

        $('.menu-wrapper')
                .animate({
                    height: "95px",
                    paddingTop: "0"
                }, 1200);

        $('.mainDate')
                .removeClass('mainDate')
                .addClass("animatedDate")
           .animate({
                position: "relative",
                fontSize: '60px',
                top: "0",
                left: "2vw"
            }, 500);

        $('.animatedLogo')
            .animate({
                height: "83px",
                width: "83px",
                marginLeft: "0",
                top: "-10px"
            }, 1200);

        $('.lightContainer')
            .removeClass('hide')
            .animate({
                display: "block",
                height: $('.lightContainer').get(0).scrollHeight
            }, 300);

        $('.footer')
            .animate({
                height: "80px"
            }, 300)
    });

$('.tilesContainer').click(function (event){
    var target = $( event.target );
    console.log(target.parent())
    $('html, body').animate ({
        scrollTop: target.parent().offset().top - 20
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
        $('.about-img-small').show();

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
        if ($(this).hasClass('events')){
            $(this).removeClass('events', 0);
        }

        $('.lightContainer').animate({
            height: 290 + $('.big').height()
                }, 300);
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
        }
        else if($(this).hasClass('close-contact')){
            $(this).parent().addClass('contact');
            $('.contact-img').removeClass('hide');
            $('.contact-title').addClass('rotated');
        }
        else if($(this).hasClass('close-tickets')){
            $(this).parent().addClass('tickets');
        }
        else if($(this).hasClass('close-events')){
            $(this).parent().addClass('events');
        }
        else {
            $(this).parent().addClass('partners');
        }
        $('.about-img-small').hide();

        $('.lightContainer').animate({
           height: "100%"
        }, 300);
    });


    $(document).on("click" , '.logoAnimatedSmall' , function(){
        $('.tiles').fadeIn();
        $('.close').addClass('hide');
        $('.text').addClass('hide');
       
        if($('.big h1').hasClass('artists-head')){
            $('.big').addClass('artists');
            $('.artists').removeClass('big');
        }

        if($('.big h1').hasClass('text-about')){
            $('.big').addClass('about');
            $('.about').removeClass('big');
            $('.img-about').removeClass('about-img-small');
            $('.about-nav').removeClass('hide');
        }

        if($('.big h1').hasClass('tickets-head')){
            $('.big').addClass('tickets');
            $('.tickets').removeClass('big');
        }

        if($('.big h1').hasClass('contact-title')){
            $('.big').addClass('contact');
            $('.contact-img').removeClass('hide');
            $('.contact-title').addClass('rotated');
            $('.contact').removeClass('big');
        }

        if($('.big h1').hasClass('events-head')){
            $('.big').addClass('events');
            $('.events').removeClass('big');
        }

        if($('.big h1').hasClass('partners-heading')){
            $('.big').addClass('partners');
            $('.partners').removeClass('big');
        }

        $('.about-img-small').hide();

        $('.lightContainer').animate({
            height: "100%"
        }, 300);
    });


    $('.contact').mouseenter(function(){
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
    $('.events').mouseenter(function() {
        $('.events-head').textillate({ in: { effect: 'flip',  shuffle: true  } }).textillate('start');

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
        });


});