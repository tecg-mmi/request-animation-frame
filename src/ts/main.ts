import {Rectangle} from "./shapes/Rectangle";
import {Monster} from "./Monster";

const canvasElement: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvasElement.getContext('2d');
const sprite = new Image();
sprite.src = 'src/img/sprite.png';
const rect = new Rectangle(ctx, canvasElement);
let monster: Monster;
sprite.addEventListener('load', () => {
    monster = new Monster(sprite,rect, ctx, canvasElement);
    animate();
});


function animate() {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    monster.update()
    rect.update();
    rect.draw();
    monster.draw()
    requestAnimationFrame(animate);
}


canvasElement.addEventListener('click', (event) => {
    console.log(event.offsetX, event.offsetY);
    const x = event.offsetX;
    const y = event.offsetY;
    if (x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height) {
        rect.color = 'red';
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        monster.goUp();
    }
});



