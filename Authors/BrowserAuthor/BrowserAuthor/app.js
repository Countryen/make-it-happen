/*
Project: Make It Happen (Toolset for Generation of choice - and - consequence games)
Subproject: Author(Tool / App) - Writer(Person) uses the Author to create the game (*.book)
Authors: Countryen
This Project is Open Source, see the LICENCE - File for more information.
https://github.com/countryen/make-it-happen

File-Info:
app.js - > The Application itself. Main Class for several usefull meta-methods.
          Should be created (instance) on appstart.
Countryen, 8th July 2015 @ C0 | VS -Villingen, Germany.
*/
/**
 * Main (general) class for the whole app. Should contain everything needed by the devs involving the environment etc.
*/
(function () {
    window.Author = window.Author || {};

    window.Author.App = function App() {
        this.elements = {
            menuExitButton: { id: "menu-btn-exit" },
            menuLoadButton: { id: "menu-btn-load" },
            menuLoadInput: { id: "menu-input-load" }
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
            },
            // like document.getElementById / .getElementsByClassName / getElementsByTagName
            get: function (selector) {
                if (this.contains(selector, "#"))
                    return document.getElementById(selector.replace("#", ""));
                else if (this.contains(selector, "."))
                    return document.getElementsByClassName(selector.replace(".", ""));
                else
                    return document.getElementsByTagName(selector);
            }

        }
    }

})();