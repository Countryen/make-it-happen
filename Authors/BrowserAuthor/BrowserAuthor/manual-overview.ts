/*
    Project: Make It Happen (Toolset for Generation of choice-and-consequence games)
    Subproject: Author (Tool/App) - Writer (Person) uses the Author to create the game (*.book)
    Authors: Countryen
    This Project is Open Source, see the LICENCE-File for more information.
    https://github.com/countryen/make-it-happen

    File-Info:
    overview.js -> Controller for overview.html -> registering events etc.
    Countryen, 26. July 2015 @ C0 | VS-Villingen, Germany.
*/

/**
 * This defines the toplevel structure (and all we need) of the createjs framework.
 * See: http://www.createjs.com/
 * Now, our module/classes know the external classes used.
 * Important: This is no official d.ts and only accurate as needed.
 * 
 * See: http://www.typescriptlang.org/Handbook#modules
 * Countryen, 26. July 2015 @ C0 | VS-Villingen, Germany.
*/
declare module createjs {

    /** createjs.Stage */
    class Stage {
        enableMouseOver(interval: number): void;
        canvas: HTMLCanvasElement;
        clear(): void;
        removeAllChildren(): void;
        addChild(child: Shape): void;
        update(): void;
    } // End of: class Stage

    /** createjs.Shape */
    class Shape {
        graphics: any;
        addEventListener(name: string, target: Function);

    } // End of: class Shape
} // End of: declare module createjs

/**
 * Module for the work with the canvas on the overview.js.
 * Uses classes from createjs (see: http://www.createjs.com/)
 * Countryen, 26. July 2015 @ C0 | VS-Villingen, Germany.
*/
module Overview {

    /**
     * ManualOverview -> An Overview-Canvas. Users drag and drop / click pages manually.
     * The Overview must save the "picture". (because auto is hard)
     * Countryen, 26. July 2015 @ C0 | VS-Villingen, Germany.
    */
    export class ManualOverview {
        private stage: createjs.Stage = null;
        private grid: Grid = null;

        public constructor(stage, rowCount, colCount) {
            this.stage = stage;
            this.grid = new Grid(stage, rowCount, colCount);
        }

        public addRow(): void {
            this.grid.rowCount++;
            this.grid.update();
        }

        public addCol(): void {
            this.grid.colCount++;
            this.grid.update();
        }

        public removeRow(): void {
            this.grid.rowCount--;
            this.grid.update();
        }

        public removeCol(): void {
            this.grid.colCount--;
            this.grid.update();
        }

    } // End of: export class ManualOverview

    /**
     * STC -> Class that holds the Grid -> Boxes.
     * Countryen, 26. July 2015 @ C0 | VS-Villingen, Germany.
    */
    class Grid {
        private stage: createjs.Stage = null; /* createjs.stage */
        public rowCount: number = 0;
        public colCount: number = 0;
        private gridWidth: number = 0;
        private gridHeight: number = 0;
        private boxWidth: number = 0;
        private boxHeight: number = 0;

        public constructor(stage: createjs.Stage, rowCount: number, colCount: number) {
            this.stage = stage;
            this.stage.enableMouseOver(5);

            this.rowCount = rowCount;
            this.colCount = colCount;

            /* The grid fills the canvas of the stage completely. */
            this.gridWidth = this.stage.canvas.width;
            this.gridHeight = this.stage.canvas.height;

            //this.update();
        }

        public update(): void {
            /* We want squares, so either the rowCount or the colCount is the numerator. */
            var factor = this.colCount > this.rowCount ? this.colCount : this.rowCount;

            /* We calculate the square-length of each box.*/
            this.boxWidth = this.gridWidth / factor;
            this.boxHeight = this.gridHeight / factor;

            /* We command the grid to draw itself afterwards. */
            this.draw();
        }

        public draw(): void {
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

    } // End of: class Grid

    /**
     * STC -> Boxes in a Grid -> getShape().
     * Countryen, 26. July 2015 @ C0 | VS-Villingen, Germany.
    */
    class BlankBox {
        private xPos: number = 0;
        private yPos: number = 0;
        private width: number = 0;
        private height: number = 0;

        private static STROKE_COLOR: string = "#000";
        private static STROKE_STYLE: number = 1;
        private static FILL_COLOR: string = "#FFF";
        private static FILL_ROLLOVER_COLOR: string = "#EEE";

        public constructor(x: number, y: number, w: number, h: number) {
            this.xPos = x;
            this.yPos = y;
            this.width = w;
            this.height = h;
        }

        public getShape(): createjs.Shape {
            var box : createjs.Shape = new createjs.Shape();
            box.graphics
                .ss(BlankBox.STROKE_STYLE)
                .s(BlankBox.STROKE_COLOR)
                .f(BlankBox.FILL_COLOR)
                .r(this.xPos, this.yPos, this.width, this.height);
            box.addEventListener("click", this.box_click);
            box.addEventListener("dblclick", this.box_dblclick);
            box.addEventListener("rollover", this.box_rollover);
            box.addEventListener("rollout", this.box_rollout);
            return box;
        }

        private box_click(e: any): void {
            console.log(e);
            var box = e.target;
            var stage = box.parent;
            box.graphics._fill.style = "black";
            stage.update();
        }

        private box_dblclick(e: any): void {
            console.log(e);
            var box = e.target;
            var stage = box.parent;
            box.graphics._fill.style = "red";
            stage.update();
        }

        private box_rollover(e: any): void {
            console.log(e);
            var box = e.target;
            var boxDimensions = box.graphics.command;
            var stage = box.parent;
            box.graphics
                .f(BlankBox.FILL_ROLLOVER_COLOR)
                .r(boxDimensions.x, boxDimensions.y, boxDimensions.w, boxDimensions.h);
            stage.update();
        }

        private box_rollout(e: any): void {
            console.log(e);
            var box = e.target;
            var boxDimensions = box.graphics.command;
            var stage = box.parent;
            box.graphics
                .f(BlankBox.FILL_COLOR)
                .r(boxDimensions.x, boxDimensions.y, boxDimensions.w, boxDimensions.h);
            stage.update();
        }

    }// End of: class BlankBox
} // End of: module Overview