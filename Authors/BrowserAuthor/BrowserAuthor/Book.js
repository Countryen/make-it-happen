/*
Project: Make It Happen (Toolset for Generation of choice - and - consequence games)
Subproject: Author(Tool / App) - Writer(Person) uses the Author to create the game (*.book)
Authors: Countryen
This Project is Open Source, see the LICENCE - File for more information.
https://github.com/countryen/make-it-happen
File-Info:
Book.ts - > The Book of the Game. Contains all Pages and information. Also handels saving/loading books into memory.
Countryen, 8th July 2015 @ C0 | VS -Villingen, Germany.
*/
/**
* Represents a Book (from a *.book file or smth. else) containing the game and its Pages.
* Countryen, 8th of July, 2015 @ C0 | VS-Villingen, Germany.
*/
var Book = (function () {
    function Book() {
        // We should define the information a Book needs and set them here...
        // even when loaded from file or smth. -> we still have "last creation" or smth.
    }
    Book.prototype.loadFromFile = function (file) {
        // Load a *.book file and serialize the information (pages etc.) into the object
        // let the user choose the file to load from
        // alternative: serve a form where the user can copy the text of the *.book file into
    };

    Book.prototype.saveToFile = function (file) {
        // Save the book (as format...) to a file...
        // let the user choose the file to save to
        // alternative: print out the book (to screen) OR download.
    };
    return Book;
})();
//# sourceMappingURL=Book.js.map
