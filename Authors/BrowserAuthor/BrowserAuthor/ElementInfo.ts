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