class Game {
    constructor() {
        this.boardBorder = '#000000';
        this.boardBg = '#fff';
        this.snakeColor = '#cfb87c';
        this.snakeBorder = '#000';

        this.changingDirection = false;

        this.foodX = 0;
        this.foodY = 0;
        //  this.food = {x: 0, y: 0};

        this.score = 0;

        this.speed = 100;

        this.hasGameEnded() = false;

        this.snake = [
            {x: 200, y: 200}, 
            {x: 190, y:200},
            {x: 180, y: 200}, 
            {x: 170, y: 200}, 
            {x: 160, y: 200} 
        ]

        this.snakeBoard = document.getElementById('snakeBoard');
        this.snakeBoardCtx = this.snakeBoard.getContext('2d');

        this.dx = 10;
        this.dy = 0;
        // this.velocity = {x: 10. y: 0}
    }

    init() {
        if(this.hasGameEnded()) return;

    this.changingDirection = false;
    //set a timer
    //setTimeout(callback function, time in milliseconds)
    setTimeout(()=> {
        this.makeCanvas()
        this.drawSnake()
        this.drawFood()
        this.moveSnake()

        //call init()
        this.init()
    }, this.speed)
    }
    
    makeCanvas() {
        const snakeBoardCtx = this.snakeBoardCtx
        const snakeBoard = this.snakeBoard

    snakeBoardCtx.fillStyle = this.boardBg;
    snakeBoardCtx.strokeStyle = this.boardBorder;

    snakeBoardCtx.fillRect(0, 0, snakeBoard.width, snakeBoard.height)
    snakeBoardCtx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height)
    }

    drawSnake() {
        const snake = this.snake
        const snakeBoardCtx = this.snakeBoardCtx;

        snake.forEach(snakePart => {
            snakeBoardCtx.fillStyle = this.snakeColor;
            snakeBoardCtx.strokeStyle = this.snakeBorder;
            snakeBoardCtx.fillRect(snakePart.x, snakePart.y, 10, 10);
            snakeBoardCtx.strokeRect(snakePart.x, snakePart.y, 10, 10);
        })
    }

    moveSnake() {
        const snake = this.snake;
        // let score = this.score;
        const head = {x: snake[0].x + this.dx, y: snake[0].y + this.dy }; //x: 210, y: 200
    snake.unshift(head);

    const hasEatenFood = snake[0].x === this.foodX && snake[0].y === this.foodY;

    if(hasEatenFood) {

        this.score += 1;
        const displayScore = document.getElementById('score');
        displayScore.innerText = score;

        // if (score >= 5) {
        //     this.speed -= 10;
        // }
        this.generateFood()
    } else {
        snake.pop()
    }
    }

    changeDirection(e) {
        // let dx = this.dx;
        // let dy = this.dy;

        const LEFT = 37;
        const RIGHT = 39;
        const UP = 38;
        const DOWN = 40;
    
        if (changingDirection) return
        this.changingDirection = true;
    
        const keyPressed = e.keyCode
    
        const goingUp = this.dy === -10;
        const goingDown = this.dy === 10;
        const goingRight = this.dx === 10;
        const goingLeft = this.dx === -10;
    
        if (keyPressed === LEFT && !goingRight) {
            this.dx = -10;
            this.dy = 0;
        }
    
        if (keyPressed === UP && !goingDown) {
            this.dx = 0;
            this.dy = -10;
        }
    
        if (keyPressed === RIGHT && !goingLeft) {
            this.dx = 10;
            this.dy = 0;
        }
    
        if (keyPressed === DOWN && !goingUp) {
            this.dx = 0;
            this.dy = 10;
        }
    }

    hasGameEnded() {
        const snake = this.snake;
        const snakeBoard = this.snakeBoard;

        for (let i = 4; i < snake.length; i++) {
            if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
        }
    
        const hitLeftWall = snake[0].x < 0
        const hitRightWall = snake[0].x > snakeBoard.width - 10
        const hitTopWall = snake[0].y < 0
        const hitBottomWall = snake[0].y > snakeBoard.height - 10
    
        return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall
    }

    drawFood() {
        this.snakeBoardCtx.fillStyle = 'brown';
        this.snakeBoardCtx.strokeStyle = 'tan';
        this.snakeBoardCtx.fillRect(this.foodX, this.foodY, 10, 10);
        this.snakeBoardCtx.strokeRect(this.foodX, this.foodY, 10, 10);
    }

    randomFood(min, max) {
        return Math.round((Math.random() * (max - min) + min) / 10) * 10;
    }

    generateFood(){
        this.foodX = this.randomFood(0, this.snakeBoard.width - 10);
        this.foodY = this.randomFood(0, this.snakeBoard.height - 10);

        this.snake.forEach(part => {
            const hasEaten = part.x === this.foodX && part.y === this.foodY

            if (hasEaten) {
                this.generateFood()
            }
        })
    }
}

//1. Apply colors to canvas
// const boardBorder = '#000';
// const boardBg = '#fff';
// const snakeColor = 'gold';
// const snakeBorder = '#000';

//for directions
// let changingDirection = false;

//food
// let foodX;
// let foodY;

// Score
// let score = 0;

// Speed

// let speed = 100;

//2. Make the snake => array of coordinates 

// let snake = [
//     {x: 200, y: 200}, 
//     {x: 190, y:200},
//     {x: 180, y: 200}, 
//     {x: 170, y: 200}, 
//     {x: 160, y: 200}
// ];

//3. Make the canvas
// const snakeBoard = document.getElementById('snakeBoard');
// const snakeBoardCtx = snakeBoard.getContext('2d');

// const makeCanvas =()=> {
//     snakeBoardCtx.fillStyle = boardBg;
//     snakeBoardCtx.strokeStyle = boardBorder;
//     snakeBoardCtx.fillRect(0, 0, snakeBoard.width, snakeBoard.height)
//     snakeBoardCtx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height)
// }

//4. Draw Snake
// const drawSnake =()=> {
//     snake.forEach(snakePart => {
//         snakeBoardCtx.fillStyle = snakeColor;
//         snakeBoardCtx.strokeStyle = snakeBorder;
//         snakeBoardCtx.fillRect(snakePart.x, snakePart.y, 10, 10);
//         snakeBoardCtx.strokeRect(snakePart.x, snakePart.y, 10, 10);
//     })
// }

//5. Move snake
// let dx = 10 //10px horizontal
// let dy = 0 //0px vertical

// const moveSnake =()=> {
//     const head = {x: snake[0].x + dx, y: snake[0].y + dy }; //x: 210, y: 200
//     snake.unshift(head);

//     const hasEatenFood = snake[0].x === foodX && snake[0].y === foodY;

//     if(hasEatenFood) {

//         score += 1;
//         const displayScore = document.getElementById('score');
//         displayScore.innerText = score;

//         if (score >= 5) {
//             speed -= 10;
//         }
//         generateFood()
//     } else {
//         snake.pop()
//     }
// }

//6. Change directions
// const changeDirection =(e)=> {
    // const LEFT = 37;
    // const RIGHT = 39;
    // const UP = 38;
    // const DOWN = 40;

    // if (changingDirection) return
    // changingDirection = true;

    // const keyPressed = e.keyCode

    // const goingUp = dy === -10;
    // const goingDown = dy === 10;
    // const goingRight = dx === 10;
    // const goingLeft = dx === -10;

    // if (keyPressed === LEFT && !goingRight) {
    //     dx = -10;
    //     dy = 0;
    // }

    // if (keyPressed === UP && !goingDown) {
    //     dx = 0;
    //     dy = -10;
    // }

    // if (keyPressed === RIGHT && !goingLeft) {
    //     dx = 10;
    //     dy = 0;
    // }

    // if (keyPressed === DOWN && !goingUp) {
    //     dx = 0;
    //     dy = 10;
    // }
// }

//7. Collision = snake hits wall or snake bites itself
// const hasGameEnded =()=> {
    // for (let i = 4; i < snake.length; i++) {
    //     if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
    // }

    // const hitLeftWall = snake[0].x < 0
    // const hitRightWall = snake[0].x > snakeBoard.width - 10
    // const hitTopWall = snake[0].y < 0
    // const hitBottomWall = snake[0].y > snakeBoard.height - 10

    // return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall
// }

// 8. Collision => snake eats food
//draw food

// const drawFood =()=> {
//     snakeBoardCtx.fillStyle = 'brown';
//     snakeBoardCtx.strokeStyle = 'tan';
//     snakeBoardCtx.fillRect(foodX, foodY, 10, 10);
//     snakeBoardCtx.strokeRect(foodX, foodY, 10, 10);
// }

// randomize food
// const randomFood = (min, max)=> {
//     return Math.round((Math.random() * (max - min) + min) / 10) * 10;
// }

// generate food
// const generateFood =()=> {
//     foodX = randomFood(0, snakeBoard.width - 10);
//     foodY = randomFood(0, snakeBoard.height - 10);

//     snake.forEach(part => {
//         const hasEaten = part.x === foodX && part.y === foodY

//         if (hasEaten) {
//             generateFood()
//         }
//     })
// }

// const init =()=> {

//     if(hasGameEnded()) return;

//     changingDirection = false;
//     //set a timer
//     //setTimeout(callback function, time in milliseconds)
//     setTimeout(()=> {
//         makeCanvas()
//         drawSnake()
//         drawFood()
//         moveSnake()

//         //call init()
//         init()
//     }, 100)
// }

// init();

const snake = new Game ();

const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', ()=> {
    snake
})
snake.init();
// document.addEventListener('keydown', snake.changeDirection);
document.addEventListener('keydown', ()=> {
    // console.log(event);
    snake.changeDirection(event)
})

snake.generateFood();
