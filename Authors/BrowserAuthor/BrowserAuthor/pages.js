/*
    Project: Make It Happen (Toolset for Generation of choice-and-consequence games)
    Subproject: Author (Tool/App) - Writer (Person) uses the Author to create the game (*.book)
    Authors: Countryen
    This Project is Open Source, see the LICENCE-File for more information.
    https://github.com/countryen/make-it-happen

    File-Info:
    pages.js -> Controller for pages.html -> registering events etc.
    Countryen, July 2015 @ C0 | VS-Villingen.
*/
(function () {
    // Global app-class.
    var app = new Author.App();

    var page = {},
        buttonSave = document.querySelector("#savePage"),
        pageList = document.querySelector("#listPages");

    buttonSave.addEventListener("click", savePage);

    /**
        * Save the page
    */
    function savePage() {
        page.id = document.querySelector("#pageId").value;
        page.text = document.querySelector("#pageText").value;
        page.option1 = document.querySelector("#option1Text").value;
        page.option2 = document.querySelector("#option2Text").value;
        page.target1 = document.querySelector("#target1Id").value;
        page.target2 = document.querySelector("#target2Id").value;

        var button = document.createElement("button");
        button.textContent = page.id;

        pageList.appendChild(button);
    }


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