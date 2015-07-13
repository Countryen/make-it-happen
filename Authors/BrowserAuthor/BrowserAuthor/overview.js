/*
    Project: Make It Happen (Toolset for Generation of choice-and-consequence games)
    Subproject: Author (Tool/App) - Writer (Person) uses the Author to create the game (*.book)
    Authors: Countryen
    This Project is Open Source, see the LICENCE-File for more information.
    https://github.com/countryen/make-it-happen

    File-Info:
    overview.js -> Controller for overview.html -> registering events etc.
    Countryen, 11th July 2015 @ C0 | VS-Villingen.
    + "12th July 2015"
*/
(function () {
    // Global app-class.
    var app = new Author.App();

    // TEST -> onclick -> Test the canvas with createjs http://createjs.com/
    window.addEventListener("load", function () {
        var testButton = document.getElementById("TEST");
        var id = -1;
        testButton.onclick = function () {
            // Start of the Animation.
            var canvas = document.getElementById("overview");
            //stage = (id == -1) ? new createjs.Stage("overview") : new createjs.Stage(id + "");
            var stage = new createjs.Stage("overview-canvas");
            var rect = new createjs.Shape();
            console.log(rect);
            rect.graphics.beginFill("red").drawRect(0, 0, 15, 15);
            rect.x = rect.y = 50;
            rect.addEventListener("pressup", rect_pressup);

            stage.addChild(rect);

            stage.update();

            function rect_pressup(mousePressupEvent) {
                console.log(mousePressupEvent.currentTarget);
                console.log(mousePressupEvent.currentTarget.x + " " + mousePressupEvent.currentTarget.y);
                console.log(mousePressupEvent.stageX + " " + mousePressupEvent.stageY);
                mousePressupEvent.currentTarget.x = mousePressupEvent.stageX;
                mousePressupEvent.currentTarget.y = mousePressupEvent.stageY;
                stage.update();

            }
            id = stage.id;
            var p1 = new DrawnPage(null);
            p1.addToStage(stage);
            stage.update();
        };
    });

    // Adds fullscreen support. Resizes the content to the window (+ onresize)
    // Only works when the html uses the full-editor* classes!
    window.addEventListener("load", function () {
        var overviewContainer = document.getElementById("overview-canvas-container");
        var pagesContainer = document.getElementById("overview-pages-container");
        var toolbarContainer = document.getElementById("overview-toolbar-container");
        // Resizing the elements to window-size (minus margins/paddings etc.)
        overviewContainer.style.height = (window.innerHeight - 0.04 * window.innerHeight) + "px";
        pagesContainer.style.height = (window.innerHeight - 0.11 * window.innerHeight) + "px";
        toolbarContainer.style.height = (window.innerHeight - 0.04 * window.innerHeight) + "px";
        // Now the same onresize of the window (when the user ZOOMS out/in)
        window.addEventListener("resize", function () {
            overviewContainer.style.height = (window.innerHeight - 0.04 * window.innerHeight) + "px";
            pagesContainer.style.height = (window.innerHeight - 0.11 * window.innerHeight) + "px";
            toolbarContainer.style.height = (window.innerHeight - 0.04 * window.innerHeight) + "px";
           
        });
    });

    /*************************************************************************************/
    /* Region: Classes and Functions for the use of the canvas -> rendering the overview */
    /*************************************************************************************/

    /**
     * Class -> A page on the canvas -> a little shape with the ID in it
     *
    */
    function DrawnPage(page) {
        this.page = page;
        this.shape = null;

        // Constructor?
        {
            var box = new createjs.Shape();
            box.graphics.beginFill("red").drawCircle(0, 0, 10);
            this.shape = box;

            // Wow... this is so difficult with JS... TS?
        }
        

        this.addToStage = function (stage) {
            if (!this.shape)
                throw new Error("Could not add DrawnPage with page: " + page + " to the stage: " + stage + ". No shape defined!");
            else
                stage.addChild(this.shape);


        };

    }




})();