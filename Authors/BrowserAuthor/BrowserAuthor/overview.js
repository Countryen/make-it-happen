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
        testButton.onclick = function () {
            // Start of the Animation.
            var canvas = document.getElementById("overview-canvas");
            var stage = new createjs.Stage("overview-canvas");
            //var box = new createjs.Shape();
            //box.graphics.beginFill("red").drawCircle(0, 0, 40);
            //stage.addChild(box);

            // Test
            var oc = new OverviewCanvas(stage);
            oc.addPage();
            oc.addPage();
            oc.addPage();
            oc.draw();
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
    /**
        Region: Classes and Functions for the use of the canvas -> rendering the overview
        Uses classes from createjs (see: http://www.createjs.com/)

        Explanation:
        A canvas/stage holds a container.

        This container holds first a grid.
        The grid must contain out of columns and rows (starting 1x1)
        For every StoryPage we must add one row.
        For every DecisionPage we must multiply the cols by 3

        Then we must draw the actual pages (little, coloured rects fitting to the grid)
        -> starting in the middle-col of the top row.
        // Question: How do we define the order of adding? Do we have to add them recursively?
        
        Finally, we add the strokes (connections) to the canvas.
        // Question: How do we add those?
    */
    /*************************************************************************************/
    var OverviewCanvas = function (stage) {
        this.stage = null;
        this.container = null;
        this.cols = 15;
        this.rows = 9;
        this.pages = [];
        /* Constructor. */
        {
            this.stage = stage;
            this.container = new createjs.Container();
        }

        /* STC */
        this.addPage = function (page) {
            this.pages.push(page);
        };

        /**
            Draws the canvas/stage.
            STC
        */
        this.draw = function () {
            this.addGrid();

            console.log(this.container);
            this.stage.addChild(this.container);
            this.stage.update();

        };

        /**
        * Adds the grid to the container.
        * First determines the higher value (cols or rows) and then takes the higher as factor.
        * Then calculates height/width of the squares drawn by canvasHeight / factor
        * Finally, adds for every cell (rows*cols) a white rect with a black stroke.
        * Countryen, 23th July 2015 @ C0 | VS-Villingen.
        */
        this.addGrid = function () {
            var factor = this.cols > this.rows ? this.cols : this.rows;

            var canvasHeight = this.stage.canvas.height;
            var canvasWidth = this.stage.canvas.width;
            var drawnPageWidth = canvasWidth / (factor);
            var drawnPageHeight = canvasHeight / (factor);

            for (var rowCount = 0; rowCount < this.rows; rowCount++)
                for (var colCount = 0; colCount < this.cols; colCount++) {
                    var drawnPage = new createjs.Shape();
                    drawnPage.graphics.s("black").f("white").r(colCount * drawnPageWidth, rowCount * drawnPageHeight, drawnPageWidth, drawnPageHeight);
                    this.container.addChild(drawnPage);
                }
        };

        /* STC */
        this.drawPages = function () {
            var middleCol = (this.cols / 2) + 0.5; // 9 cols => (9/2) + 0.5 = 4,5 + 0.5 = 5
            // place first and then other pages //
            console.log(middleCol);
        };




    };

    var DrawnPage = function (page) { };

})();