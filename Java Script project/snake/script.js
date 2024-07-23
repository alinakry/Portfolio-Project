//--------------------------all variables-----------------------------

const canv = document.getElementById('canv');
const ctx = canv.getContext('2d');


const apple = new Image();
apple.src = './img/apple.png';

const background = new Image();
background.src = './img/background.png';




let foodPlace = {
    x: Math.floor(Math.random() * 17 + 1) * 32, //one cell is 32 pixels
    y: Math.floor(Math.random() * 15 + 3) * 32
}; //random placement of food


let snake = [];
snake[0] = {
    x: 9 * 32,
    y: 10 * 32
};


let score = 0;

let highScore = localStorage.getItem('highScore') || 0;
//------------------------------functions-----------------------



document.addEventListener('keydown', direction); //start moving
let dir;

function direction(e) { // wont turn from right to left in one move
    if (e.keyCode == 37 && dir != 'right') {
        dir = 'left'
    } else if (e.keyCode == 38 && dir != 'down') {
        dir = 'up'
    } else if (e.keyCode == 39 && dir != 'left') {
        dir = 'right'
    } else if (e.keyCode == 40 && dir != 'up') {
        dir = 'down'
    }
}

function eatTail(head, arr) { // stop game if got snake's body
    for (let i = 0; i < arr.length; i++) {
        if (head.x == arr[i].x && head.y == arr[i].y)
            clearInterval(game);
    }
}




function createGame() { //draw background and food
    ctx.drawImage(background, 0, 0);

    ctx.drawImage(apple, foodPlace.x, foodPlace.y);

    let fullSnake = new Array([snake]);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = 'black';
        ctx.fillRect(snake[i].x, snake[i].y, 32, 32)
    } //create snake 



    ctx.fillStyle = 'white';
    ctx.font = '30px Arial';
    ctx.fillText(score, 32 * 2.5, 32 * 1.5);

    ctx.fillText(`High Score: ${highScore}`, 32 * 11, 32 * 1.5);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (snakeX < 32 || snakeX > 32 * 17
        || snakeY < 3 * 32 || snakeY > 32 * 17)
        clearInterval(game);
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
    }

    if (dir == 'left') snakeX -= 32;
    if (dir == 'right') snakeX += 32;
    if (dir == 'up') snakeY -= 32;
    if (dir == 'down') snakeY += 32;

    let newHead = {
        x: snakeX,
        y: snakeY
    };


    if (snakeX == foodPlace.x && snakeY == foodPlace.y) {
        score++
        foodPlace = {
            x: Math.floor(Math.random() * 17 + 1) * 32,
            y: Math.floor(Math.random() * 15 + 3) * 32
        }; foodPlace != fullSnake;
    } else {
        snake.pop();
    }


    eatTail(newHead, snake);
    snake.unshift(newHead);

}


createGame();
let game = setInterval(createGame, 100);