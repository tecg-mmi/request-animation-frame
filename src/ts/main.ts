import {Monster} from "./Monster";
import {settings} from "./settings";
import {Hsl} from "./framework25/colors/Hsl";
import {randomInt} from "./framework25/helpers/random";
import {Wall} from "./Wall";

const app = {
    init() {
        console.log("Bonjour");
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.sprite = new Image();
        this.sprite.src = 'src/img/sprite.png';
        this.walls = [];
        this.addEventListeners();

        this.monster = new Monster(
            this.sprite,
            this.ctx,
            {
                y: this.canvas.height - settings.monster.height / 2,
                x: settings.monster.x
            },
            new Hsl(0, 0, 0),
            settings.monster.width,
            settings.monster.height
        );
        this.addWalls();
    },
    addWalls() {
        const height = randomInt(settings.rectangle.minHeight, settings.rectangle.maxWidth);
        const width = randomInt(settings.rectangle.minWidth, settings.rectangle.maxWidth);
        this.walls.push(
            new Wall(
                this.ctx,
                {
                    y: this.canvas.height - height / 2,
                    x: this.canvas.width + width / 2
                },
                new Hsl(230, 80, 70),
                width,
                height,
                randomInt(settings.rectangle.minSpeed, settings.rectangle.maxSpeed),
            )
        );
    },
    addEventListeners() {
        this.sprite.addEventListener('load', () => {
            this.update();
        });
    },
    update() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Clear canvas...

        this.monster.update();

        this.walls.forEach((wall: Wall) => {
            wall.update();
        });

        requestAnimationFrame(this.update.bind(this));
    },
}
app.init();