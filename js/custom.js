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