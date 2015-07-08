/*
    Project: Make It Happen (Toolset for Generation of choice - and - consequence games)
    Subproject: Author(Tool / App) - Writer(Person) uses the Author to create the game (*.book)
    Authors: Countryen
    This Project is Open Source, see the LICENCE - File for more information.
    https://github.com/countryen/make-it-happen

    File-Info:
    ElementsBucket.js - > Container Singleton for ElementInfos. Should be contained by an App
    Countryen, 8th July 2015 @ C0 | VS -Villingen, Germany.
*/
// contains info about all Controls, Elements and such ... ids and classnames etc.
class ElementsBucket {
    private menuExitButton: ElementInfo;

    constructor() {
        this.menuExitButton = new ElementInfo("menu-btn-exit", null);
        
    }

    get MenuExitButton() {
        return this.menuExitButton;
    }
    

}

