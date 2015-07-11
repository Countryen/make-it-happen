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

    // menu-btn-exit -> OnClick -> Exit the app
    window.addEventListener("load", function () {
        var exitButton = document.getElementById(app.elements.menuExitButton.id);
        exitButton.onclick = function () {
            app.exit();
        }
    });

    // menu-btn-load -> OnClick -> Load the selected book
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
        }
    });

})();