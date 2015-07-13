/*
    Project: Make It Happen (Toolset for Generation of choice-and-consequence games)
    Subproject: Author (Tool/App) - Writer (Person) uses the Author to create the game (*.book)
    Authors: Countryen
    This Project is Open Source, see the LICENCE-File for more information.
    https://github.com/countryen/make-it-happen

    File-Info:
    demo.js -> Controller for demo.html -> registering events etc.
    Countryen, 12th July 2015 @ C0 | VS-Villingen.
*/
(function () {
    // Global app-class.
    var app = new Author.App();

    // Adds fullscreen support. Resizes the content to the window (+ onresize)
    // Only works when the html uses the full-editor* classes!
    window.addEventListener("load", function () {
        var overviewContainer = document.getElementById("overview-canvas-container");
        var pagesContainer = document.getElementById("overview-pages-container");
        var toolbarContainer = document.getElementById("overview-toolbar-container");
        // Resizing the elements to window-size (minus margins/paddings etc.)
        overviewContainer.style.height = (window.innerHeight - 0.04 * window.innerHeight) + "px";
        pagesContainer.style.height = (window.innerHeight - 0.11 * window.innerHeight) + "px";
        toolbarContainer.style.height = (window.innerHeight - 0.04 * window.innerHeight) + "px";
        // Now the same onresize of the window (when the user ZOOMS out/in)
        window.addEventListener("resize", function () {
            overviewContainer.style.height = (window.innerHeight - 0.04 * window.innerHeight) + "px";
            pagesContainer.style.height = (window.innerHeight - 0.11 * window.innerHeight) + "px";
            toolbarContainer.style.height = (window.innerHeight - 0.04 * window.innerHeight) + "px";

        });
    });




})();