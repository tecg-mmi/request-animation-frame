import {Rectangle} from "./shapes/Rectangle";
import {Monster} from "./Monster";

const canvasElement: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvasElement.getContext('2d');
const sprite = new Image();
sprite.src = 'src/img/sprite.png';
const rect = new Rectangle(ctx, canvasElement);
let monster: Monster;
let requestAnimationFrameID = {id: 0};
sprite.addEventListener('load', () => {
    monster = new Monster(sprite, rect, requestAnimationFrameID, ctx, canvasElement);
    animate();
});


function animate() {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    rect.draw();
    monster.draw()
    requestAnimationFrameID.id = requestAnimationFrame(animate);
    monster.update()
    rect.update();
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



