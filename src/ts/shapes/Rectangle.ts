import {random} from "../helper";

export class Rectangle {
    private _x: number;
    private _y: number;
    private readonly _width: number;
    private readonly _height: number;
    private _color: string;
    private ctx: CanvasRenderingContext2D;
    private canvasElement: HTMLCanvasElement;

    constructor(width: number, height: number, color: string, ctx: CanvasRenderingContext2D, canvasElement: HTMLCanvasElement) {
        this.ctx = ctx;
        this.canvasElement = canvasElement;
        this._width = width;
        this._height = height;
        this._color = color;
        this._x = 0;
        this._y = 0;
    }

    set color(value: string) {
        this._color = value;
    }

    set x(value: number) {
        this._x = value;
    }

    set y(value: number) {
        this._y = value;
    }

    public update() {
        if (this.x >= this.canvasElement.width) {
            this.color = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
            this.x = 0;
            this.y = random(0, this.canvasElement.height - this.height);
        } else {
            this.x += 1;
        }
    }

    public animate() {
        this.update();
        this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.draw();
    }

    public draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get color(): string {
        return this._color;
    }
}
