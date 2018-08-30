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
