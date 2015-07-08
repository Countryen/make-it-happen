/*
    Project: Make It Happen (Toolset for Generation of choice - and - consequence games)
    Subproject: Author(Tool / App) - Writer(Person) uses the Author to create the game (*.book)
    Authors: Countryen
    This Project is Open Source, see the LICENCE - File for more information.
    https://github.com/countryen/make-it-happen

    File-Info:
    App.js - > The Application itself. Main Class for several usefull meta-methods.
              Should be created (instance) on appstart.
    Countryen, 8th July 2015 @ C0 | VS -Villingen, Germany.
*/
// General class for the whole app 
class App {
    private elementsBucket: ElementsBucket = new ElementsBucket(); 
    // closes the app / window
    static exit() {
        window.close();
    }

    // Returns the ElementsBucket of the app (containing info about all Elements)
    get Elements() {
        return this.elementsBucket;
    }

}

// On start -> Loads the app and registers all events etc...
window.onload = () => {
    var app = new App();
    var exitButton = document.getElementById(app.Elements.MenuExitButton.Id);
    exitButton.onclick = () => {
        App.exit();
    }

};