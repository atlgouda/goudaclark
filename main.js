// Scroll functions
function myFunction() {
    var elmnt = document.getElementById("content");
    elmnt.scrollIntoView();
};

function experienceScroll() {
    var elmnt = document.getElementById("experience");
    elmnt.scrollIntoView();
};
function portfolioScroll() {
    var elmnt = document.getElementById("portfolio");
    elmnt.scrollIntoView();
};

// Modal JS-parks
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

