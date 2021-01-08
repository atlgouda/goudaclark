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
function contactScroll() {
    var elmnt = document.getElementById("footer-div");
    elmnt.scrollIntoView();
};

        // Get the modal
        var modal = document.getElementById('myModal');
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        var cancel = document.getElementById("cancel-btn");
        cancel.onclick = function () {
            modal.style.display = "none"
        }
        // When the user clicks the button, open the modal 
        btn.onclick = function () {
            modal.style.display = "block";
        }
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";

        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        // Jeopardy
        var jModal = document.getElementById('jeopardyModal');
        var jBtn = document.getElementById("jeopardyBtn");
        var jSpan = document.getElementById("jeopardyClose");
        var jcancel = document.getElementById("jeopardyCancel");
        jcancel.onclick = function () {
            jModal.style.display = "none"
        }
        jBtn.onclick = function () {
            jModal.style.display = "block";
        }
        jSpan.onclick = function () {
            jModal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == jModal) {
                jModal.style.display = "none";
            }
        }
        // League of your imagination
        // var lModal = document.getElementById('leagueModal');
        // var lBtn = document.getElementById("leagueBtn");
        // var lSpan = document.getElementById("leagueClose");
        // var lcancel = document.getElementById("leagueCancel");
        // lcancel.onclick = function () {
        //     lModal.style.display = "none"
        // }
        // lBtn.onclick = function () {
        //     lModal.style.display = "block";
        // }
        // lSpan.onclick = function () {
        //     lModal.style.display = "none";
        // }
        // window.onclick = function (event) {
        //     if (event.target == lModal) {
        //         lModal.style.display = "none";
        //     }
        // }

        // Atlantazon
        var aModal = document.getElementById('azModal');
        var aBtn = document.getElementById("azBtn");
        var aSpan = document.getElementById("azClose");
        var acancel = document.getElementById("azCancel");
        acancel.onclick = function () {
            aModal.style.display = "none"
        }
        aBtn.onclick = function () {
            aModal.style.display = "block";
        }
        aSpan.onclick = function () {
            aModal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == aModal) {
                aModal.style.display = "none";
            }
        }

        // ATL VIPS
        var vModal = document.getElementById('vipModal');
        var vBtn = document.getElementById("vipBtn");
        var vSpan = document.getElementById("vipClose");
        var vcancel = document.getElementById("vipCancel");
        vcancel.onclick = function () {
            vModal.style.display = "none"
        }
        vBtn.onclick = function () {
            vModal.style.display = "block";
        }
        vSpan.onclick = function () {
            vModal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == vModal) {
                vModal.style.display = "none";
            }
        }

        // Restaurant Guide 
        var pModal = document.getElementById('parkModal');
        var pBtn = document.getElementById("parkBtn");
        var pSpan = document.getElementById("parkClose");
        var pcancel = document.getElementById("parkCancel");
        pcancel.onclick = function () {
            pModal.style.display = "none"
        }
        pBtn.onclick = function () {
            pModal.style.display = "block";
        }
        pSpan.onclick = function () {
            pModal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == pModal) {
                pModal.style.display = "none";
            }
        }
        // Waka Tata Flame 
        var wModal = document.getElementById('wtfModal');
        var wBtn = document.getElementById("wtfBtn");
        var wSpan = document.getElementById("wtfClose");
        var wcancel = document.getElementById("wtfCancel");
        wcancel.onclick = function () {
            wModal.style.display = "none"
        }
        wBtn.onclick = function () {
            wModal.style.display = "block";
        }
        wSpan.onclick = function () {
            wModal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == wModal) {
                wModal.style.display = "none";
            }
        }
        // Beat.box
        var bModal = document.getElementById('bbModal');
        var bBtn = document.getElementById("bbBtn");
        var bSpan = document.getElementById("bbClose");
        var bcancel = document.getElementById("bbCancel");
        bcancel.onclick = function () {
            lModal.style.display = "none"
        }
        bBtn.onclick = function () {
            bModal.style.display = "block";
        }
        bSpan.onclick = function () {
            bModal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == bModal) {
                bModal.style.display = "none";
            }
        }        