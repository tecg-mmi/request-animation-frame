import {settings} from "./settings";

export class Monster {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    private ctx: CanvasRenderingContext2D;
    private canvasElement: HTMLCanvasElement;
    private sprite: HTMLImageElement;
    private frame: number;


    constructor(sprite: HTMLImageElement, ctx: CanvasRenderingContext2D, canvasElement: HTMLCanvasElement) {
        this.ctx = ctx;
        this.canvasElement = canvasElement;
        this.x = settings.monster.x;
        this.y = settings.monster.y;
        this.width = settings.monster.width;
        this.height = settings.monster.height;
        this.sprite = sprite;
        this.frame = 0;
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
        this.frame++;
        if (this.frame === settings.monster.frames.length) {
            this.frame = 0;
        }
    }

}