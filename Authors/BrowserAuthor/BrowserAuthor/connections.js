/*
    Project: Make It Happen (Toolset for Generation of choice-and-consequence games)
    Subproject: Author (Tool/App) - Writer (Person) uses the Author to create the game (*.book)
    Authors: Countryen
    This Project is Open Source, see the LICENCE-File for more information.
    https://github.com/countryen/make-it-happen

    File-Info:
    connections.js -> Controller for connections.html (the overview) -> registering events etc.
    Countryen, 11th July 2015 @ C0 | VS-Villingen.
*/
(function () {
    // Global app-class.
    var app = new Author.App();

    // TEST -> onclick -> Test the canvas with createjs http://createjs.com/
    window.addEventListener("load", function () {
        var testButton = document.getElementById("TEST");
        var id = -1;
        stage = new createjs.Stage("overview");
        testButton.onclick = function () {
            // Start of the Animation.
            var canvas = document.getElementById("overview");
            //stage = (id == -1) ? new createjs.Stage("overview") : new createjs.Stage(id + "");

            var rect = new createjs.Shape();
            console.log(rect);
            rect.graphics.beginFill("red").drawRect(0, 0, 100, 50);
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
        };
    });




})();