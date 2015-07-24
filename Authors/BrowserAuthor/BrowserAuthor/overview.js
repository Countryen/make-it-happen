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
            oc.addPage(null, 0, 0);

            oc.addPage(null, 1, 0);

            oc.addPage(null, 2, 0);
            oc.addPage(null, 3, 0);
            oc.addPage(null, 3, 1);

            oc.addPage(null, 2, 1);
            oc.addPage(null, 3, 2);
            oc.addPage(null, 3, 3);
            oc.draw();
            stage.update();
            console.log(stage.children);
          

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
    var OverviewCanvas = function (stage) {
        /* The stage/canvas of this overview. Set by constructor */
        this.stage = null;
        /* A createjs.Container inside the stage. Holds all boxes as a flat array */
        this.container = new createjs.Container();
        /* The columns of the grid (amount of boxes in one row). Starting at 1 */
        this.cols = 1;
        /* The rows of the grid (amount of boxes in one column) Starting at 1 */
        this.rows = 1;
        /* DrawnPage[] */
        this.pages = [];

        /* Constructor. */
        {
            this.stage = stage;
        }

        /* STC */
        this.addPage = function (page, col, row) {
            var newPage = new DrawnPage(page, col, row);
            this.pages.push(newPage);
        };

        /**
            Draws the canvas/stage.
            STC
        */
        this.draw = function () {
            this.rows = this.determineRowsNeeded();
            this.cols = this.determineColsNeededForEveryRow();
            
            
            
            this.createGrid();

            // Creating the pages
            {
                 
            }

            this.stage.addChild(this.container);
            this.stage.update();

        };

        /**
        * Creates the "grid" and then puts it into the container.
        * First determines the higher value (cols or rows) and then takes the higher as factor.
        * Then calculates height&width of the squares drawn by canvasHeight&Width / factor
        * Finally, adds for every cell (rows*cols) a white rect with a black stroke.
        * Countryen, 23th July 2015 @ C0 | VS-Villingen.
        */
        this.createGrid = function () {
            var factor = this.cols > this.rows ? this.cols : this.rows;

            var canvasHeight = this.stage.canvas.height;
            var canvasWidth = this.stage.canvas.width;
            var drawnPageWidth = canvasWidth / (factor);
            var drawnPageHeight = canvasHeight / (factor);

            for (var rowCount = 0; rowCount < this.rows; rowCount++)
                for (var colCount = 0; colCount < this.cols; colCount++) {
                    this.createBox("black", "white", colCount, rowCount);
                }
        };

        this.createBox = function (s, f, x, y) {
            var factor = this.cols > this.rows ? this.cols : this.rows;

            var canvasHeight = this.stage.canvas.height;
            var canvasWidth = this.stage.canvas.width;
            var drawnPageWidth = canvasWidth / (factor);
            var drawnPageHeight = canvasHeight / (factor);

            var box = new createjs.Shape();
            box.graphics.s(s).f(f).r(x * drawnPageWidth, y * drawnPageHeight, drawnPageWidth, drawnPageHeight);
            this.container.addChild(box);
        };


        /**
        * Determines the needed amount of columns for the grid.
        * It finds the most amount of pages in one row, adds the space between the pages and returns that number.
        */
        this.determineColsNeededForEveryRow = function () {
            var returnColsNeeded = null;

            var pagesAmountInOneRow = 0;
            var maxPagesInAllRows = 0;
            var maxPagesInOneRow = 0;
            /* We check each row for a highest amount of pages in a single row -> because thats what we need to have our grid-cols-width */
            for (var rowCount = 0; rowCount < this.rows; rowCount++) {
                /* Reset of the count is mandatory! */
                pagesAmountInOneRow = 0;
                /* First find all pages in this row */
                for (var key in this.pages)
                    if (this.pages[key].row === rowCount) pagesAmountInOneRow++;

                /* Then, if there were more pages in this row then in all before -> reset maxPagesInAllRows to current maxPagesInOneRow */
                maxPagesInOneRow = pagesAmountInOneRow;
                maxPagesInAllRows = (maxPagesInOneRow > maxPagesInAllRows) ? maxPagesInOneRow : maxPagesInAllRows;
            }

            /* Because we want every page seperated by a blank box ( [PAGE] [BLANK] [PAGE] ) we add the number-1 */
            returnColsNeeded = maxPagesInAllRows + (maxPagesInAllRows - 1);

            return returnColsNeeded;
        }; // End of: this.determineColsNeededForEveryRow

        /**
        * Determines the needed amount of rows for the grid.
        * It just takes the highest number of any page.row
        * -> Also adds +1 because of the starting index 0!
        */
        this.determineRowsNeeded = function () {
            var returnRowsNeeded = null;

            var yetFoundHighestRow = 0;

            /* We check every page */
            for (var key in this.pages)
            {
                var page = this.pages[key];
                var pageRow = page.row;

                /* If the row of the page is a higher one then ever before -> this is the needed amount of rows!*/
                yetFoundHighestRow = (pageRow > yetFoundHighestRow) ? pageRow : yetFoundHighestRow;
            }

            /* Because we have an 0-starting index -> we need to add 1*/
            returnRowsNeeded = yetFoundHighestRow + 1;

            return returnRowsNeeded;
        }; // End of: this.determineRowsNeeded


        //var middleCol = (this.cols / 2) + 0.5; // 9 cols => (9/2) + 0.5 = 4,5 + 0.5 = 5

    }; // End of: var OverviewCanvas

    var DrawnPage = function (page, row, col) {
        this.page = page;
        this.col = col;
        this.row = row;
    };

})();