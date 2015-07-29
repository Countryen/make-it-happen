/*
    Project: Make It Happen (Toolset for Generation of choice-and-consequence games)
    Subproject: Author (Tool/App) - Writer (Person) uses the Author to create the game (*.book)
    Authors: Countryen
    This Project is Open Source, see the LICENCE-File for more information.
    https://github.com/countryen/make-it-happen

    File-Info:
    overview.js -> Controller for overview.html -> registering events etc.
    Countryen, July 2015 @ C0 | VS-Villingen.
*/

(function () {
    // Global app-class.
    var _app = new Author.App();
    // Global Overview-Instance. Of type ManualOverview
    var _overview = null;

    // TEST -> onclick -> Test the canvas with createjs http://createjs.com/
    window.addEventListener("load", function () {
        // Button1 Starts the Test -> Initializes the ManualOverview.
        var testButton1 = document.getElementById("TEST1");
        testButton1.onclick = function () {
            // Start of the Animation.
            var canvas = document.getElementById("overview-canvas");
            var stage = new createjs.Stage("overview-canvas");

            _overview = new Overview.ManualOverview(stage, 5, 10);
        };

        var testButton2 = document.getElementById("TEST2");
        var testButton3 = document.getElementById("TEST3");
        var testButton4 = document.getElementById("TEST4");
        var testButton5 = document.getElementById("TEST5");
        var testButton6 = document.getElementById("TEST6");

        testButton2.onclick = function () {
            _overview.addRow();
        };
        testButton3.onclick = function () {
            _overview.addCol();
        };
        testButton4.onclick = function () {
            _overview.removeRow();
        };
        testButton5.onclick = function () {
            _overview.removeCol();
        };
    });

    // Adds fullscreen support. Resizes the content to the window (+ onresize)
    // Only works when the html uses the full-editor* classes!
    window.addEventListener("load", function () {
        var editorContainer = document.querySelector(".full-editor-left");
        var toolbarContainer = document.querySelector(".full-editor-right");
        var pagesContainer = document.querySelector(".full-editor-page-box");
        // Resizing the elements to window-size (minus margins/paddings etc.)
        editorContainer.style.height = (window.innerHeight - 0.04 * window.innerHeight) + "px";
        toolbarContainer.style.height = (window.innerHeight - 0.04 * window.innerHeight) + "px";
        pagesContainer.style.height = (window.innerHeight - 0.11 * window.innerHeight) + "px";
        // Now the same onresize of the window (when the user ZOOMS out/in)
        window.addEventListener("resize", function () {
            editorContainer.style.height = (window.innerHeight - 0.04 * window.innerHeight) + "px";
            toolbarContainer.style.height = (window.innerHeight - 0.04 * window.innerHeight) + "px";
            pagesContainer.style.height = (window.innerHeight - 0.11 * window.innerHeight) + "px";
        });
    });

})();