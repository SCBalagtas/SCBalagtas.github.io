
// Fade in and out headerLogo when scrolling
// Will probably replace this with vanilla JavaScript
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $("#headerLogo").css({"opacity" : "0"})
        }
        else {
            $("#headerLogo").css({"opacity" : "1"})
        }
    })
})

// Add event handlers for scrolling to anchors
window.onload = function() {
    // Get all the refereneces needed
    const header = document.querySelector('#mainHeader');    
    const headerLogo = document.querySelector("#headerLogo > img");
    const projects = document.querySelector('#projectsButton');
    const name = document.querySelector('#contact > h1');
    const aboutSection = document.querySelector('#about');
    const footerLogo = document.querySelector("#footerLogo > img");

    // Handle events
    headerLogo.addEventListener('click', function() {header.scrollIntoView(false)}); // Scrolls all the way to the top
    projects.addEventListener('click', function() {aboutSection.scrollIntoView(true)}); // Scrolls to the about section
    name.addEventListener('click', function() {aboutSection.scrollIntoView(true)}); // Scrolls to the about section
    footerLogo.addEventListener('click', function() {header.scrollIntoView(false)}); // Scrolls all the way to the top
};