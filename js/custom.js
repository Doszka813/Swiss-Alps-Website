/*============================================================
                            NAVIGATION
============================================================= */

//toggle navbar navbar-top class
$(document).ready(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("navbar-top");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("navbar-top");
            $("#back-to-top").fadeIn();
            
        }
    })
});

//smooth scrolling
$(document).ready(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 94
        }, 1250, "easeInOutExpo");
    })
});

//back-to-top

/*============================================================
                            HIKES
============================================================= */
$(document).ready(function () {
    //animate on scroll
    new WOW().init();
});
/*============================================================
                            GALLERY
============================================================= */

$(document).ready(function () {
    $("#gallery").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*============================================================
                            RESORTS
============================================================= */
$(document).ready(function () {
    $("#ski-resorts").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true

    });
});

/*============================================================
                            DESTINATIONS
============================================================= */
$(document).ready(function () {
    $("#destination").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true

    });
});

/*============================================================
                            COUNTERUP
============================================================= */
jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*============================================================
                            LOGOS
============================================================= */
$(document).ready(function () {
    $("#logos-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 500,
        loop: true

    });
});
