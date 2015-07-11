/*
    Project: Make It Happen (Toolset for Generation of choice-and-consequence games)
    Subproject: Author (Tool/App) - Writer (Person) uses the Author to create the game (*.book)
    Authors: Countryen
    This Project is Open Source, see the LICENCE-File for more information.
    https://github.com/countryen/make-it-happen

    File-Info:
    index.js -> Controller for index.html (the menu) -> registering events etc.
    Countryen, 11th July 2015 @ C0 | VS-Villingen.
*/
(function () {
    // Global app-class.
    var app = new Author.App();

    // menu-btn-exit -> onclick -> Exit the app
    window.addEventListener("load", function () {
        var exitButton = document.getElementById(app.elements.menuExitButton.id);
        exitButton.onclick = function () {
            app.exit();
        }
    });

    // menu-btn-load -> onclick -> Load the selected book
    // Help by: http://www.htmlgoodies.com/beyond/javascript/read-text-files-using-the-javascript-filereader.html#fbid=cv2OE3ULtAv
    // The file MUST be utf-8!
    window.addEventListener("load", function () {
        var loadButton = document.getElementById(app.elements.menuLoadButton.id);
        loadButton.onclick = function () {
            // HTMLInputElement = https://developer.mozilla.org/de/docs/Web/API/HTMLInputElement
            var loadInput = document.getElementById(app.elements.menuLoadInput.id);

            var selectedFiles = loadInput.files;
            if (selectedFiles.length !== 1)
                throw Error("No file selected, loading can not proceed");

            // Create a new book and load from file.
            // The file must be utf-8!

            var selectedFile = selectedFiles[0];
            var fileReader = new FileReader();

            // Asynchronous reading. The file must be utf-8!
            fileReader.onload = fileReader_OnLoad; // see below.
            fileReader.readAsText(selectedFile);

            function fileReader_OnLoad(fileReaderEvent) {
                var content = fileReaderEvent.target.result;
                console.log(content);
            }

            // TODO: -> new Book()~.loadFromFile(file);
        };
    });

    // menu-a-save -> onclick -> save the current book -> means sending it to the browser (download)
    window.addEventListener("load", function () {
        var saveButton = document.getElementById(app.elements.menuSaveButton.id);
        saveButton.onclick = function () {
            // TODO: -> Book~.sendToBrowserAsDownload();
            alert("Here the book will be sent to the browser as downloadable file")
            // http://cwestblog.com/2014/10/21/javascript-creating-a-downloadable-file-in-the-browser/
            window.location = 'data:application/text;chraset=utf-8,' + encodeURIComponent("hello world");
            // ! window.location = 'data:text/plain;chraset=utf-8,' + encodeURIComponent("hello world"); ! Prints to screen (copy!)
        };

    });

})();