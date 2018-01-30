$(document).ready(function () {
    warningFadeIn();
    subHeaderSlideDown();
});
$(window).click(function () {
    warningfadeOut();
})
// Disclaimer Popup controls
function warningFadeIn() {
    setTimeout(function () {
        $('.popup-warning').fadeIn(400);
    }, 1500);
}

function warningfadeOut() {
    $('.popup-warning').fadeOut(400);
}
//
// Initial Page Load Sub-header Slide-out
function subHeaderSlideDown() {
    setTimeout(function () {
        $('#live-selected-container').css({
            "top": "70px",
            "transition": "1s"
        });
    }, 100)
}
//
// Header Navigation Buttons Glow & Sub-header Slide-outs
function liveBtnActive() {
    $('#upcoming-btn').css("box-shadow", "none");
    $('#live-btn').css("box-shadow", "0 0 12px #2e9ed8");
    $('#upcoming-selected-container').css({
        "top": "0px",
        "transition": ".7s"
    });
    $('#live-selected-container').css({
        "top": "70px",
        "transition": ".8s"
    });
    $('#upcoming-ico-list').css("display", "none");
    $('#live-ico-list').css("display", "flex");
}

function upcomingBtnActive() {
    $('#live-btn').css("box-shadow", "none");
    $('#upcoming-btn').css("box-shadow", "0 0 12px #2e9ed8");
    $('#upcoming-selected-container').css({
        "top": "70px",
        "transition": ".8s"
    });
    $('#live-selected-container').css({
        "top": "0px",
        "transition": ".7s"
    });
    $('#live-ico-list').css("display", "none");
    $('#upcoming-ico-list').css("display", "flex");
}
//