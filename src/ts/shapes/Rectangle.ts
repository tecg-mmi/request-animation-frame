import {random} from "../helper";
import {settings} from "../settings";

export class Rectangle {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public speed: number;
    public color: string;
    public ctx: CanvasRenderingContext2D;
    public canvasElement: HTMLCanvasElement;

    constructor(ctx: CanvasRenderingContext2D, canvasElement: HTMLCanvasElement) {
        this.ctx = ctx;
        this.canvasElement = canvasElement;
        this.speed = 0;
        this.init();
    }

    private init() {
        this.width = random(settings.rectangle.minWidth, settings.rectangle.maxWidth);
        this.height = random(settings.rectangle.minHeight, settings.rectangle.maxHeight);
        this.color = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
        this.x = this.canvasElement.width;
        this.y = this.canvasElement.height - this.height;
        if (this.speed < settings.rectangle.maxSpeed) {
            this.speed++;
        }
    }

    public update() {
        if (this.x <= 0) {
            this.init();
        } else {
            this.x -= this.speed;
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


}
