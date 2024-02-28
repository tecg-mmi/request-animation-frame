import {Rectangle} from "./shapes/Rectangle";

const canvasElement: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvasElement.getContext('2d');

const rect = new Rectangle(ctx, canvasElement);

rect.draw();

function animate() {
    rect.animate();
    requestAnimationFrame(animate);
}


animate();

canvasElement.addEventListener('click', (event) => {
    console.log(event.offsetX, event.offsetY);
    const x = event.offsetX;
    const y = event.offsetY;
    if (x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height) {
        rect.color = 'red';
    }
});

const image = new Image();




