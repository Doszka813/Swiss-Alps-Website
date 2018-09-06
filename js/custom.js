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
    $("#destinations").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true

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
