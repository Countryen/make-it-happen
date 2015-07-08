/*
    Project: Make It Happen (Toolset for Generation of choice - and - consequence games)
    Subproject: Author(Tool / App) - Writer(Person) uses the Author to create the game (*.book)
    Authors: Countryen
    This Project is Open Source, see the LICENCE - File for more information.
    https://github.com/countryen/make-it-happen

    File-Info:
    ElementInfo.js - > Information about an Element (HTML). ClassName, Id and stuff...
    Countryen, 8th July 2015 @ C0 | VS -Villingen, Germany.
*/
// Info about an element - Id, ClassName ...
class ElementInfo {
    private id: string;
    private className: string;

    constructor(id: string, className: string) {
        this.id = id;
        this.className = className;
    }

    get Id(): string {
        return this.id;
    }


}