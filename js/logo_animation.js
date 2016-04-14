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

        $('.mainDate')
            .animate({
                position: "absolute",
                fontSize: '65px',
                top: "-10px",
                left: "5vw"
            }, 500);

        $('.animatedLogo')
            .animate({
                height: "83px",
                width: "83px",
                marginLeft: "15%",
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

    $('.about').mouseenter(function(){

        $('.about-nav').animate({
            height: "80px",
            marginTop: "10px"
        }, 300)
    });

    $('.about').mouseleave(function(){

        $('.about-nav').animate({
            height: "0",
        }, 300)
    });

    $('.about').click(function(){
        $('.about-nav').animate({
            height: "0",
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
    })

    $('.artists').click(function(){
        $(this).removeClass('tiles');
        $('.tiles').toggle(0);
        // $('.about-text').toggleClass('hide');
        $('.close').toggleClass('hide');
        $(this).addClass('tiles');
        $(this).toggleClass('big');
        $(this).toggleClass('artists',0);
    })

    // $('.beforeFestival').mouseover(function(){
    // $('.beforeFestival>h1').removeClass('hide');
    // $('.beforeFestival>h2').removeClass('hide');
    // })

    // $('.beforeFestival').mouseout(function(){
    // $('.beforeFestival>h1').addClass('hide');
    // $('.beforeFestival>h2').addClass('hide');
    // })

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
            marginTop: "10px",
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
    })
});