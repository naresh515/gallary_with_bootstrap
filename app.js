$(document).ready(function () {
    $('.gallery').click(function () {
        $("body").addClass("body-open");
    });
    $('#close-button').click(function () {
        $("body").removeClass("body-open");
    });
    $('#baguetteBox-slider').click(function () {
        $("body").removeClass("body-open");
    });
})