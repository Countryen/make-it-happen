/*
    Project: Make It Happen (Toolset for Generation of choice - and - consequence games)
    Subproject: Author(Tool / App) - Writer(Person) uses the Author to create the game (*.book)
    Authors: Countryen
    This Project is Open Source, see the LICENCE - File for more information.
    https://github.com/countryen/make-it-happen

    File-Info:
    author.js - > The Application itself. All 'classes' for several usefull meta-methods.
                  For simplicity we create ALL classes inside this file!
                  Should be created (instance) on appstart.
    Countryen, 8th July 2015 @ C0 | VS -Villingen, Germany.
*/
(function () {
    /**
     * Author is the namespace of the app and should countain all classes and functions!
    */
    window.Author = window.Author || {};

    /**
     * Author.App -> Main (general) class for the whole app. Should contain everything needed by the devs involving the environment etc.
    */
    window.Author.App = function App() {
        // list of elements and their ids
        this.elements = {
            menuExitButton: { id: "menu-btn-exit" },
            menuLoadButton: { id: "menu-btn-load" },
            menuLoadInput: { id: "menu-input-load" },
            menuSaveButton: { id: "menu-btn-save" }
        };

        // closes the app / window
        this.exit = function () {
            window.close();
        }

        // helper-functions for global use
        this.helper = {
            // like [].indexOf.call() -> C#
            contains: function (container, item) {
                if (([].indexOf.call(container, item) != -1) || ((container.indexOf) && (container.indexOf(item) != -1)))
                    return true;
                else
                    return false;
            }
        }
    }

})();