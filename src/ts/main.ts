import {settings} from "./settings";
import {Monster} from "./Monster";
import {Hsl} from "./framework25/colors/Hsl";

const app = {
    init() {
        this.canvas = document.getElementById(settings.canvasID);
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.sprite = new Image();
        this.sprite.src = settings.monster.src;


        this.addEventListeners();
    },
    addEventListeners() {
        this.sprite.addEventListener("load", () => {

            this.monster = new Monster(
                this.sprite, this.ctx,
                {y: this.canvas.height - settings.monster.height / 2, x: settings.monster.x},
                new Hsl(234, 76, 87),
                settings.monster.width,
                settings.monster.height,
            );

            this.monster.draw();

            console.log("Loaded " + settings.monster.src);
        });
    }
};

app.init();
