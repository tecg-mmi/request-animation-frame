import {Rectangle} from './shapes/Rectangle';

const canvasElement = document.getElementById('my-canvas');
const ctx = canvasElement.getContext('2d');
const shapes = [new Rectangle(50, 200, 'white'), new Rectangle(200, 50, 'white')];

ctx.fillStyle = 'red';
ctx.fillRect(0, 0, canvasElement.width, canvasElement.height);

function draw(rect) {
    ctx.fillStyle = rect.color;
    ctx.fillRect(canvasElement.width / 2 - rect.width / 2, canvasElement.height / 2 - rect.height / 2, rect.width, rect.height);
}

