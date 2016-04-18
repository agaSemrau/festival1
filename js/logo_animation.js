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



    $('.about').click(function(){
        $('.about-nav').animate({
            height: "80px",
        }, 300)
        $('.about-nav').toggleClass('hide');
        $(this).removeClass('tiles');
        $('.tiles').toggle(0);
        $('.about-text').toggleClass('hide',100);
        $('.close').toggleClass('hide');
        $(this).addClass('tiles');
        $('.img-about').toggleClass('about-img-small');
        $(this).toggleClass('big');
        $(this).toggleClass('about',0);
    });

    $('.artists').click(function(){
        $(this).removeClass('tiles');
        $('.tiles').fadeOut(0);
        $('.artists-text').removeClass('hide',100);
        $('.close').removeClass('hide');
        $(this).addClass('tiles');
        $(this).addClass('big');
        $(this).removeClass('artists');
    });

    $(document).on("click" , '.close' , function(){
        $(this).parent().removeClass('tiles');
        $('.tiles').fadeIn(0);
        $(this).parent().addClass('tiles');
        $(this).parent().removeClass('big');
        $(this).parent().addClass('artists');
        $('.artists-text').addClass('hide',100);
        $('.close').addClass('hide');
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

    $('.partners').click(function(){
        $(this).removeClass('tiles');
        $('.tiles').toggle(0);
        // $('.about-text').toggleClass('hide');
        $('.close').toggleClass('hide');
        $(this).addClass('tiles');
        $(this).toggleClass('big');
        $(this).toggleClass('partners',0);
    });

    $('.tickets').click(function(){
        $(this).removeClass('tiles');
        $('.tiles').toggle(0);
        // $('.about-text').toggleClass('hide');
        $('.close').toggleClass('hide');
        $(this).addClass('tiles');
        $(this).toggleClass('big');
        $(this).toggleClass('tickets',0);
    });

    $('.peter-wrapper').mouseenter(function(){
        $('.peterArrow').animate({
            height: "50px"}, 400)
    });
    $('.peter-wrapper').mouseleave(function(){
        $('.peterArrow').animate({
            height: "0"}, 400)
    });
    $('.peterArrow').click(function(){
        $('.description-peter').toggleClass('hide');
        $('.peterArrow').toggleClass('rotated');
    })

});