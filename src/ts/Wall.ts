import {Rectangle} from "./framework25/shapes/Rectangle";
import {iPosition} from "./framework25/types/iPosition";
import {iColor} from "./framework25/types/iColor";

export class Wall extends Rectangle {

    private speed: number

    constructor(ctx: CanvasRenderingContext2D, position: iPosition, color: iColor, width: number, height: number, speed: number) {
        super(ctx, position, color, width, height, 0);
        this.speed = speed;
    }

    update() {
        if (this.position.x <= this.width/2) {
        }
        this.position.x -= this.speed;
        super.draw();

    }
}