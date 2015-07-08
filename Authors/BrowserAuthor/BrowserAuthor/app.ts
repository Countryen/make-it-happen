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