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
overview = null;
(function () {
    // Global app-class.
    var app = new Author.App();
    

    // TEST -> onclick -> Test the canvas with createjs http://createjs.com/
    window.addEventListener("load", function () {
        var testButton1 = document.getElementById("TEST1");
        var testButton2 = document.getElementById("TEST2");
        var testButton3 = document.getElementById("TEST3");
        var testButton4 = document.getElementById("TEST4");
        var testButton5 = document.getElementById("TEST5");
        testButton1.onclick = function () {
            // Start of the Animation.
            var canvas = document.getElementById("overview-canvas");
            var stage = new createjs.Stage("overview-canvas");
            //var box = new createjs.Shape();
            //box.graphics.beginFill("red").drawCircle(0, 0, 40);
            //stage.addChild(box);

            // Test
            overview = new ManualOverview(stage, 5, 10);
        };
        testButton2.onclick = function () {
            overview.addRow();
        };
        testButton3.onclick = function () {
            overview.addCol();
        };
        testButton4.onclick = function () {
            overview.removeRow();
        };
        testButton5.onclick = function () {
            overview.removeCol();
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

                    var box = new createjs.Shape();
                    box.graphics.s("black").f("white").r(col * this.boxWidth, row * this.boxHeight, this.boxWidth, this.boxHeight);
                    box.addEventListener("click", this.box_clicked);
                    this.stage.addChild(box);
                    console.log(box);
                }
            this.stage.update();
        }

        this.box_clicked = function (e) {
            console.log(e);
            console.log(e.currentTarget.graphics.command);
            var box = new createjs.Shape();
            box.graphics.s("black").f("red").r(e.currentTarget.graphics.command.x, e.currentTarget.graphics.command.y, e.currentTarget.graphics.command.w, e.currentTarget.graphics.command.h);
            box.addEventListener("click", this.box_clicked);
            console.log(box);
            overview.stage.addChild(box);
            overview.stage.update();
        }

    }; // End of: private class Grid

    var Box = function () {

    }; 




})();