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
    var _app = new Author.App();
    // Global Overview-Instance. Of type ManualOverview
    var _overview = null;

    // TEST -> onclick -> Test the canvas with createjs http://createjs.com/
    window.addEventListener("load", function () {
        // Button1 Starts the Test -> Initializes the ManualOverview.
        var testButton1 = document.getElementById("TEST1");
        testButton1.onclick = function () {
            // Start of the Animation.
            var canvas = document.getElementById("overview-canvas");
            var stage = new createjs.Stage("overview-canvas");

            _overview = new ManualOverview(stage, 5, 10);
        };

        var testButton2 = document.getElementById("TEST2");
        var testButton3 = document.getElementById("TEST3");
        var testButton4 = document.getElementById("TEST4");
        var testButton5 = document.getElementById("TEST5");
        var testButton6 = document.getElementById("TEST6");

        testButton2.onclick = function () {
            _overview.addRow();
        };
        testButton3.onclick = function () {
            _overview.addCol();
        };
        testButton4.onclick = function () {
            _overview.removeRow();
        };
        testButton5.onclick = function () {
            _overview.removeCol();
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

        This container will become a grid with pages and blanks in between them.
        The grid must contain out of columns and rows (starting 1x1)

        First we will fill the object with pages. Defining the col and row of each page.

        The grid then determines the number cols needed by counting the max amount of pages in one (each) row.
        The grid determines the number of rows needed by taking the highest row added.
        
        Then we must draw the actual pages (little, coloured rects fitting to the grid)
        -> starting in the middle-col of the top row.
        // Question: How do we define the order of adding? Do we have to add them recursively?
        
        Finally, we add the strokes (connections) to the canvas.
        // Question: How do we add those?
    */
    /*************************************************************************************/
    var ManualOverview = function (stage, rowCount, colCount) {
        this.stage = null; /* createjs.Stage */
        this.grid = null; /* Grid */

        /* Actual Constructor.*/
        {
            this.stage = stage;
            this.grid = new Grid(stage, rowCount, colCount);
        }

        this.addRow = function () {
            this.grid.rowCount++;
            this.grid.update();
        };

        this.addCol = function () {
            this.grid.colCount++;
            this.grid.update();
        };

        this.removeRow = function () {
            this.grid.rowCount--;
            this.grid.update();
        };

        this.removeCol = function () {
            this.grid.colCount--;
            this.grid.update();
        };




    }; // End of: private class ManualOverview

    var Grid = function (stage, rowCount, colCount) {
        this.stage = null; /* createjs.stage */
        this.rowCount = 0;
        this.colCount = 0;
        this.gridWidth = 0;
        this.gridHeight = 0;
        this.boxWidth = 0;
        this.boxHeight = 0;

        /* Actual Constructor.*/
        {
            this.stage = stage;
            this.stage.enableMouseOver(5);

            this.rowCount = rowCount;
            this.colCount = colCount;

            /* The grid fills the canvas of the stage completely. */
            this.gridWidth = this.stage.canvas.width;
            this.gridHeight = this.stage.canvas.height;

            //this.update();
        }

        this.update = function () {
            /* We want squares, so either the rowCount or the colCount is the numerator. */
            var factor = this.colCount > this.rowCount ? this.colCount : this.rowCount;

            /* We calculate the square-length of each box.*/
            this.boxWidth = this.gridWidth / factor;
            this.boxHeight = this.gridHeight / factor;

            /* We command the grid to draw itself afterwards. */
            this.draw();
        };

        this.draw = function () {
            this.stage.clear();
            this.stage.removeAllChildren();

            for (var row = 0; row < this.rowCount; row++)
                for (var col = 0; col < this.colCount; col++) {

                    var box = new BlankBox(col * this.boxWidth, row * this.boxHeight, this.boxWidth, this.boxHeight).getShape();
                    this.stage.addChild(box);
                    console.log(box);
                }
            this.stage.update();
        }

    }; // End of: private class Grid

    var BlankBox = function (x, y, w, h) {
        this.xPos = 0;
        this.yPos = 0;
        this.width = 0;
        this.height = 0;

        this.STROKE_COLOR = "#000";
        this.STROKE_STYLE = 1;
        this.FILL_COLOR = "#FFF";
        this.FILL_ROLLOVER_COLOR = "#EEE";

        {
            this.xPos = x;
            this.yPos = y;
            this.width = w;
            this.height = h;
        };

        this.getShape = function () {
            var box = new createjs.Shape();
            box.graphics
                .ss(this.STROKE_STYLE)
                .s(this.STROKE_COLOR)
                .f(this.FILL_COLOR)
                .r(this.xPos, this.yPos, this.width, this.height);
            box.addEventListener("click", this.box_click);
            box.addEventListener("dblclick", this.box_dblclick);
            box.addEventListener("rollover", this.box_rollover);
            box.addEventListener("rollout", this.box_rollout);
            return box;
        };

        this.box_click = function (e) {
            console.log(e);
            var box = e.target;
            var stage = box.parent;
            box.graphics._fill.style = "black";
            stage.update();
        };

        this.box_dblclick = function (e) {
            console.log(e);
            var box = e.target;
            var stage = box.parent;
            box.graphics._fill.style = "red";
            stage.update();
        };

        this.box_rollover = function (e) {
            console.log(e);
            var box = e.target;
            var boxDimensions = box.graphics.command;
            var stage = box.parent;
            box.graphics
                .f(new BlankBox().FILL_ROLLOVER_COLOR)
                .r(boxDimensions.x, boxDimensions.y, boxDimensions.w, boxDimensions.h);
            stage.update();
        };

        this.box_rollout = function (e) {
            console.log(e);
            var box = e.target;
            var boxDimensions = box.graphics.command;
            var stage = box.parent;
            box.graphics
                .f(new BlankBox().FILL_COLOR)
                .r(boxDimensions.x, boxDimensions.y, boxDimensions.w, boxDimensions.h);
            stage.update();
        };

    }; 




})();