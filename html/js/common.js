$(function() {

    'use strict';

    //------------------------------------------------------
    //hover fo ios
    //------------------------------------------------------
    $('.services__item').hover(function() {
            $(this).addClass('active');
        }, function() {
            $(this).removeClass('active');
        }
    );


    //------------------------------------------------------
    //Staff slider
    //------------------------------------------------------
    $('.staff__slider').addClass('owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: '',
        autoplayTimeout: 5000,
        autoplay: true,
        smartSpeed: 1200,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            481: {
                items: 3
            },
            641: {
                items: 4
            }
        }
    });

    //------------------------------------------------------
    //Reviews slider
    //------------------------------------------------------
    $('.reviews__slider').addClass('owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: '',
        // autoplayTimeout: 5000,
        // autoplay: true,
        smartSpeed: 1200,
        autoHeight: true
    });

    //---------------------------------------------
    //Аккордеон questions
    //---------------------------------------------
    var $questionsItem = $('.questions__item'),
        $questionsItemTitle = $('.questions__item-title'),
        $questionsItemText = $('.questions__item-text');

    $questionsItemTitle.not(":first").removeClass('active');
    $questionsItemText.not(":first").hide();

    $questionsItemTitle.on('click', function() {
        var $this = $(this);
        $questionsItemText.slideUp(300);
        if($this.hasClass('active')) {
            $this.removeClass('active')
        } else {
            $this.addClass('active').closest($questionsItem).find($questionsItemText).slideDown(300).addBack().siblings().find($questionsItemTitle).removeClass('active');
        }
    });

    //------------------------------------
    //popup
    //------------------------------------

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    //--------------------------------------------------------
    //E-mail Ajax Send
    //--------------------------------------------------------

    $(".form").submit(function() { //Change
        var $this = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: $this.serialize()
        }).done(function() {
            $.magnificPopup.open({
                items: {
                    src: '#success',
                    type: 'inline'
                }
            });
            setTimeout(function() {
                // Done Functions
                $this.trigger("reset");
                $.magnificPopup.close();
            }, 3000);
        });
        return false;
    });

    //------------------------------------------------------
    //Chrome Smooth Scroll
    //------------------------------------------------------
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });
});
