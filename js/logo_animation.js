function CurHash(option) {

}

$('document').ready(function () {

    //-------------------------------------------------FIRST logo ANIMATION-------------------------------------------
    var animatedLogo = $('.animatedLogo'),
            animatedLightContainer = $('.animatedLightContainer'),
            myOrangeInterval = false,
            myBlueInterval = false,
            myYellowInterval = false,
            audio = {};
    audio["wave"] = new Audio();

    animatedLogo.mouseenter(function () {
        function orangeAnimate() {
            $('.orange_wave')
                    .animate({
                        top: "-=2%"
                    }, 500)
                    .animate({
                        top: "+=2%"
                    }, 500);
        }

        function blueAnimate() {
            setTimeout(function () {
                $('.blue_wave')
                        .animate({
                            top: "-=2%"
                        }, 500)
                        .animate({
                            top: "+=2%"
                        }, 500)
            }, 200);
        }

        function yellowAnimate() {
            setTimeout(function () {
                $('.yellow_wave')
                        .animate({
                            top: "-=2%"
                        }, 500)
                        .animate({
                            top: "+=2%"
                        }, 500)
            }, 300);
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

    animatedLogo.mouseleave(function () {

        clearInterval(myOrangeInterval);
        myOrangeInterval = false;

        clearInterval(myBlueInterval);
        myBlueInterval = false;

        clearInterval(myYellowInterval);
        myYellowInterval = false;

        // audio["wave"].pause();
    });

    $('span').click(function () {
        animatedLogo.addClass('logoAnimatedSmall');
        $('.blue_wave').stop(true, true);
        $('.yellow_wave').stop(true, true);
        $('.orange_wave').stop(true, true);

        $('.contact-data').addClass("hide");

        $('.orange_wave')
                .addClass('animatedOrange')
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
        animatedLogo
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
                    height: "100%"
                }, 300);
        $('.footer')
                .animate({
                    height: "80px"
                }, 300)
        $(":animated").promise().done(function () {
            location.href = 'indexa.html'
        });
    });

    //-----------------------------------------------TILES ANIMATION-------------------------------------------------
    if ($(window).innerHeight() < 1020) {
        $('.tiles').click(function () {
            $('html, body').animate({
                scrollTop: "15"
            }, 200).animate({
                scrollTop: "0"
            }, 400);
        });
    }
    var openPeterWhite = function () {
        $('.img-about').removeClass('about-img-small');
        $('#artists-content').fadeIn(600).removeClass('hide');
        $('#about-content').addClass('hide');
        $('.tiles').addClass('hide');
        $('.links').addClass('hide');
        $('.entire-peter-wrapper').find('.description>p').fadeIn(700).toggleClass('hide');
        $('.entire-peter-wrapper').find('.arrow-wrapper').toggleClass('reverted');

        $('html, body').animate({
            scrollTop: $('.entire-peter-wrapper').offset().top
        }, 300);

        animatedLightContainer.animate({
            height: 220 + $('#artists-content').height()
        }, 300);
    };
    var openMattBianco = function () {
        var reilly= $('.entire-reilly-wrapper')
        $('.img-about').removeClass('about-img-small');
        $('#artists-content').fadeIn(600).removeClass('hide');
        $('#about-content').addClass('hide');
        $('.tiles').addClass('hide');
        $('.links').addClass('hide');
        reilly.find('.description>p').fadeIn(700).toggleClass('hide');
        reilly.find('.arrow-wrapper').toggleClass('reverted');

        $('html, body').animate({
            scrollTop: reilly.offset().top
        }, 300);

        animatedLightContainer.animate({
            height: 220 + $('#artists-content').height()
        }, 300);
    };
    var openAbout = function () {
        $('#artists-content').addClass('hide');
        $('#about-content').fadeIn(600).removeClass('hide');
        $('.tiles').addClass('hide');
        $('.links').addClass('hide');
        $('.img-about').addClass('about-img-small');
        animatedLightContainer.animate({
            height: 220 + $('#about-content').height()
        }, 300);
    };
    var openArtists = function () {
        $('#artists-content').fadeIn(600).removeClass('hide');
        $('.tiles').addClass('hide');
        $('.links').addClass('hide');
        animatedLightContainer.animate({
            height: 220 + $('#artists-content').height()
        }, 300);
    };
    var openTickets = function () {
        $('#tickets-content').fadeIn(600).removeClass('hide');
        $('.tiles').addClass('hide');
        $('.links').addClass('hide');
        animatedLightContainer.animate({
            height: 220 + $('#tickets-content').height()
        }, 300);
    };
    var openEvents = function () {
        $('#events-content').fadeIn(600).removeClass('hide');
        $('.tiles').addClass('hide');
        $('.links').addClass('hide');
        animatedLightContainer.animate({
            height: 220 + $('#events-content').height()
        }, 300);
    };
    var openPartners = function () {
        $('#partners-content').fadeIn(600).removeClass('hide');
        $('.tiles').addClass('hide');
        $('.links').addClass('hide');
        animatedLightContainer.animate({
            height: 220 + $('#partners-content').height()
        }, 300);
    };
    var openContact = function () {
        $('#contact-content').fadeIn(600).removeClass('hide');
        $('.contact-title').removeClass('rotated');
        $('.tiles').addClass('hide');
        $('.links').addClass('hide');
        animatedLightContainer.animate({
            height: 220 + $('#contact-content').height()
        }, 300);
    };
    var tilesView = function () {
        $('#tickets-content').fadeOut(300).addClass('hide');
        $('#artists-content').fadeOut(300).addClass('hide');
        $('#about-content').fadeOut(300).addClass('hide');
        $('#partners-content').fadeOut(300).addClass('hide');
        $('#contact-content').fadeOut(300).addClass('hide');
        $('#events-content').fadeOut(300).addClass('hide');
        $('.img-about').removeClass('about-img-small');
        $('.contact-title').addClass('rotated');
        $('.tiles').removeClass('hide');
        $('.links').removeClass('hide');
        //if (window.innerWidth<1050){
        //    animatedLightContainer.animate({
        //        height: "1350px"
        //    }, 300);
        //}
         animatedLightContainer.animate({
            height: "100%"
        }, 300);

    };

    if (window.location.hash === "#peter-white") {
        openPeterWhite();
    }
    if (window.location.hash === "#matt-bianco") {
        openMattBianco();
    }
    if (window.location.hash === "#about") {
        openAbout();
    }
    if (window.location.hash === "#artists") {
        openArtists();
    }
    if (window.location.hash === "#tickets") {
        openTickets();
    }
    if (window.location.hash === "#events") {
        openEvents();
    }
    if (window.location.hash === "#partners") {
        openPartners();
    }
    if (window.location.hash === "#contact") {
        openContact();
    }
    $(window).on('hashchange', function () {
        if (window.location.hash === "#peter-white") {
            openPeterWhite();
        }
        if (window.location.hash === "#matt-bianco") {
            openMattBianco();
        }
        if (window.location.hash === "#about") {
            openAbout();
        }
        if (window.location.hash === "#artists") {
            openArtists();
        }
        if (window.location.hash === "#tickets") {
            openTickets();
        }
        if (window.location.hash === "#events") {
            openEvents();
        }
        if (window.location.hash === "#partners") {
            openPartners();
        }
        if (window.location.hash === "#contact") {
            openContact();
        }
        if (window.location.hash === "") {
            tilesView();
        }
    });

    $(document).on("click", '.close', function () {
        tilesView();
    });

    $(document).on("click", '.animatedLogoXY', function () {
        window.location.href = "";
    });

    $('.contact').mouseenter(function () {
        var contactImage = $('.contact-img');
        contactImage.animate({
            marginTop: "-50px",
            opacity: "0"
        }, 200).animate({
            marginTop: "80px"
        }, 50).animate({
            marginTop: "60px",
            opacity: "1"
        }, 200)
    });

    $('.big').mouseenter(function () {
        $(this).find('h2, h1').textillate({in: {effect: 'flip', shuffle: true, delay: 100}}).textillate('start');
    });
    //---------------------------------------------------------------ARTISTS TILE---------------------------------------------
    $('.peter-wrapper, .reilly-wrapper').mouseenter(function () {
        $(this).find(':nth-child(2)').find('img').show();
        $(this).find(':nth-child(2)').animate({
            height: "22%"
        }, 400)
    });
    $('.peter-wrapper, .reilly-wrapper').mouseleave(function () {
        $(this).find(':nth-child(2)').find('img').hide();
        $(this).find(':nth-child(2)').animate({
            height: "0"
        }, 400)
    });

    $('.peter-wrapper, .reilly-wrapper').click(function (event) {
        $(this).parent().find('.description>p').fadeIn(700).toggleClass('hide');
        $(this).find('.arrow-wrapper').toggleClass('reverted');

        var target = $(event.target);

        $('html, body').animate({
            scrollTop: target.parent().offset().top
        }, 300);

        animatedLightContainer.animate({
            height: 220 + $('#artists-content').height()
        }, 300);

    });


    //------------------------------------------------FACEBOOK-------------------------------------------------------
    window.fbAsyncInit = function () {
        FB.init({
            appId: '863037597137965',
            xfbml: true,
            version: 'v2.6'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v2.6";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    $('.first, .third').slick({

        lazyLoad: 'ondemand',
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 300,
        variableWidth: true,
        slidesToShow:1,
        slidesToScroll:1,
    });

});