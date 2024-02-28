import {settings} from "./settings";
import {checkCollision} from "./helper";
import {Rectangle} from "./shapes/Rectangle";

export class Monster {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly canvasElement: HTMLCanvasElement;
    private readonly sprite: HTMLImageElement;
    private frame: number;
    private fallSpeed: number;
    private readonly maxFallSpeed: number;
    private readonly rect: Rectangle;


    constructor(sprite: HTMLImageElement, rect: Rectangle, ctx: CanvasRenderingContext2D, canvasElement: HTMLCanvasElement) {
        this.ctx = ctx;
        this.canvasElement = canvasElement;
        this.x = settings.monster.x;
        this.y = settings.monster.y;
        this.width = settings.monster.width;
        this.height = settings.monster.height;
        this.sprite = sprite;
        this.frame = 0;
        this.fallSpeed = 0;
        this.maxFallSpeed = settings.monster.maxFallSpeed;
        this.rect = rect;
        this.draw();
    }

    public draw() {
        this.ctx.drawImage(
            this.sprite,
            settings.monster.frames[this.frame].sx,
            settings.monster.frames[this.frame].sy,
            settings.monster.width,
            settings.monster.height,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }

    public update() {
        checkCollision();

        this.frame++;

        if (this.fallSpeed < this.maxFallSpeed) {
            this.fallSpeed += settings.gravity;
        }

        this.y += this.fallSpeed;
        if (this.y >= this.canvasElement.height - this.height) {
            this.y = this.canvasElement.height - this.height;
        }

        if (this.frame === settings.monster.frames.length) {
            this.frame = 0;
        }
    }

    goUp() {
        this.fallSpeed = -this.maxFallSpeed;
    }
}