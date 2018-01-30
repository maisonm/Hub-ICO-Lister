// **** This file is no longer used! **** 
// I have left it here to documet my first attempt
// at accessing and dynamically loading the API data into my webpage. The current version is built on
// Node.js using Express for the server and EJS to dynamically load API data.


// GET API Data when DOM is ready and init HTML rendering
$(document).ready(() => {
    loadLiveApi();
    loadUpcomingApi();
});
// Handles 'Live' API request and HTML render init
const loadLiveApi = () => {
    const liveRequest = new XMLHttpRequest(),
    	  url = 'https://api.icowatchlist.com/public/v1/live';
    liveRequest.open('GET', url, true);
    liveRequest.onload = () => {
        let liveData = liveRequest.responseText;
        // Render 'Live' list on data load
        renderLiveHtml(liveData);
    };
    liveRequest.send();
}
// Handles 'Upcoming' API request and HTML render init
const loadUpcomingApi = () => {
    let upcomingRequest = new XMLHttpRequest(),
    	  url = 'https://api.icowatchlist.com/public/v1/upcoming';
    upcomingRequest.open('GET', url, true);
    upcomingRequest.onload = () => {
        let upcomingData = upcomingRequest.responseText;
        // Render 'Upcoming' list on data load
        renderUpcomingHtml(upcomingData);
    };
    upcomingRequest.send();
}
// Renders 'Live' ICO list to the DOM
const renderLiveHtml = (liveData) => {
    buildLiveIcoList(liveData);
};
// Renders 'Upcoming' ICO list to the DOM
const renderUpcomingHtml = (upcomingData) => {
    buildUpcomingIcoList(upcomingData);
};

// Builds 'Live' ICO list from API data and outputs an HTML string
function buildLiveIcoList(liveData) {
    const parse = JSON.parse(liveData),
        icoList = parse.ico.live,
        div = document.getElementById('live-ico-list');
    for (let i = 0; i < icoList.length; i++) {
        let htmlStr = " ";
        if (i % 2 === 0) {
            htmlStr += "<div class=\"ico-box\">" + "<div class=\"ico-img\">" + "<a target=\"_blank\" href=\"" + icoList[i].website_link + "\">" + "<img src=\"" + icoList[i].image + " \" " + ">" + "</a>" + "</div>" + "<div class=\"ico-name\">" + icoList[i].name + "</div>" + "<div class=\"ico-description\">" + icoList[i].description + "</div>" + "<div class=\"ico-end\">" + icoList[i].end_time + "</div>" + "</div>";
        } else {
            htmlStr += "<div class=\"ico-box ico-alt-box\">" + "<div class=\"ico-img\">" + "<a target=\"_blank\" href=\"" + icoList[i].website_link + "\">" + "<img src=\"" + icoList[i].image + " \" " + ">" + "</a>" + "</div>" + "<div class=\"ico-name\">" + icoList[i].name + "</div>" + "<div class=\"ico-description\">" + icoList[i].description + "</div>" + "<div class=\"ico-end\">" + icoList[i].end_time + "</div>" + "</div>";
        }
        div.insertAdjacentHTML('beforeend', htmlStr);
    }
};
// Builds 'Live' ICO list from API data and outputs an HTML string
function buildUpcomingIcoList(upcomingData) {
    const parse = JSON.parse(upcomingData),
        icoList = parse.ico.upcoming,
        div = document.getElementById('upcoming-ico-list');
    for (let i = 0; i < icoList.length; i++) {
        let htmlStr = " ";
        if (i % 2 === 0) {
            htmlStr += "<div class=\"ico-box\">" + "<div class=\"ico-img\">" + "<a target=\"_blank\" href=\"" + icoList[i].website_link + "\">" + "<img src=\"" + icoList[i].image + " \" " + ">" + "</a>" + "</div>" + "<div class=\"ico-name\">" + icoList[i].name + "</div>" + "<div class=\"ico-description\">" + icoList[i].description + "</div>" + "<div class=\"ico-end\">" + icoList[i].end_time + "</div>" + "</div>";
        } else {
            htmlStr += "<div class=\"ico-box ico-alt-box\">" + "<div class=\"ico-img\">" + "<a target=\"_blank\" href=\"" + icoList[i].website_link + "\">" + "<img src=\"" + icoList[i].image + " \" " + ">" + "</a>" + "</div>" + "<div class=\"ico-name\">" + icoList[i].name + "</div>" + "<div class=\"ico-description\">" + icoList[i].description + "</div>" + "<div class=\"ico-end\">" + icoList[i].start_time + "</div>" + "</div>";
        }
        div.insertAdjacentHTML('beforeend', htmlStr);
    }
};