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

