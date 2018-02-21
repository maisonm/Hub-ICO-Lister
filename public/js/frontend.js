$(document).ready(function () {
    warningFadeIn();
    subHeaderSlideDown();

});
// Disclaimer Popup controls !!DISABLED¡¡
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

const upcomingBtn = $('#upcoming-btn');
const liveBtn = $('#live-btn');
const upcomingSelectedContainer = $('#upcoming-selected-container');
const liveSelectedContainer = $('#live-selected-container');
const upcomingIcoList = $('#upcoming-ico-list');
const liveIcoList = $('#live-ico-list');

function liveBtnActive() {
    upcomingBtn.css("box-shadow", "none");
    liveBtn.css("box-shadow", "0 0 12px #2e9ed8");
    upcomingSelectedContainer.css({
        "top": "0px",
        "transition": ".7s"
    });
    liveSelectedContainer.css({
        "top": "70px",
        "transition": ".8s"
    });
    upcomingIcoList.css("display", "none");
    liveIcoList.css("display", "flex");
}

function upcomingBtnActive() {
    liveBtn.css("box-shadow", "none");
    upcomingBtn.css("box-shadow", "0 0 12px #2e9ed8");
    upcomingSelectedContainer.css({
        "top": "70px",
        "transition": ".8s"
    });
    liveSelectedContainer.css({
        "top": "0px",
        "transition": ".7s"
    });
    liveIcoList.css("display", "none");
    upcomingIcoList.css("display", "flex");
}
//