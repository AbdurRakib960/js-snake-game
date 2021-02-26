import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, getSnakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import {outsideGrid} from './grid.js';
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {

    if(gameOver) {
        if(confirm('Game is over.Press ok to restart the game.')) {
            window.location= '/'
        }
        
        return
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRenderTime = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRenderTime < 1 / SNAKE_SPEED) return 

    
    lastRenderTime = currentTime;
    
    update()
    draw()
}

window.requestAnimationFrame(main); 

function update() {
    updateSnake()
    updateFood()
    checkOver()
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkOver() {
    gameOver = outsideGrid(getSnakeHead()) || getSnakeIntersection()
}