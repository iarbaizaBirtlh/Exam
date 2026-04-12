export class SnakeGame {
    constructor(boardSize, cellSize, canvas, scoreUpdateCallback, gameOverCallback, speed) { 
        this.boardSize = boardSize; 
        this.cellSize = cellSize;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.scoreUpdateCallback = scoreUpdateCallback; 
        this.gameOverCallback = gameOverCallback;     
        const startX = 1;
        const startY = Math.floor(boardSize / 2);
        this.snake = [{ x: startX, y: startY }]; 
        this.food = this.generateFood();
        this.dx = 1; 
        this.dy = 0; 
        this.speed = speed; 
        this.activeGameLoop = null; 
        this.keyListener = this.changeDirection.bind(this); 
    }

    start() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
        this.drawFood();
        this.drawSnake(); 
        
        document.addEventListener('keydown', this.keyListener);
        this.activeGameLoop = setInterval(this.updateGame.bind(this), this.speed);
    }

    stop() {
        if (this.activeGameLoop) {
            clearInterval(this.activeGameLoop);
            this.activeGameLoop = null;
        }
        document.removeEventListener('keydown', this.keyListener);
    }

    drawSnake() {
        const borderRadius = this.cellSize * 0.2;
        const padding = 2;
        const segmentSize = this.cellSize - padding * 2;

        this.snake.forEach((segment, index) => {
            const x = segment.x * this.cellSize + padding;
            const y = segment.y * this.cellSize + padding;

            if (index === 0) {
                this.ctx.fillStyle = '#1E90FF';
            } else {
                this.ctx.fillStyle = '#1eadffff';
            }
            this.roundRect(this.ctx, x, y, segmentSize, segmentSize, borderRadius, true);

            if (index === 0) {
                this.drawEyes(x, y, segmentSize);
            }
        });
    }

    roundRect(ctx, x, y, width, height, radius, fill) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        if (fill) {
            ctx.fill();
        }
    }
    
    drawEyes(x, y, segmentSize) {
        const eyeSize = segmentSize * 0.15;
        const offset = segmentSize * 0.25;

        this.ctx.fillStyle = 'white';
        this.ctx.beginPath();
        this.ctx.arc(x + offset, y + offset, eyeSize, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(x + segmentSize - offset, y + offset, eyeSize, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.fillStyle = 'black';
        this.ctx.beginPath();
        this.ctx.arc(x + offset, y + offset, eyeSize * 0.5, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(x + segmentSize - offset, y + offset, eyeSize * 0.5, 0, Math.PI * 2);
        this.ctx.fill();
    }

    drawFood() {
        const emoji = '🍎';
        this.ctx.font = `${this.cellSize * 1}px Arial`; 
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        const x = this.food.x * this.cellSize + this.cellSize / 2;
        const y = this.food.y * this.cellSize + this.cellSize / 2;
        this.ctx.fillText(emoji, x, y);
    }

    generateFood() {
        let newFood;
        do {
            newFood = {
                x: Math.floor(Math.random() * this.boardSize),
                y: Math.floor(Math.random() * this.boardSize)
            };
        } while (this.snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
        return newFood;
    }

    changeDirection(event) {
        const keyPressed = event.key;
        const goingLeft = this.dx === -1;
        const goingRight = this.dx === 1;
        const goingUp = this.dy === -1;
        const goingDown = this.dy === 1;

        if (keyPressed.startsWith('Arrow')) {
            event.preventDefault();
        }
                
        if (keyPressed === 'ArrowLeft' && !goingRight) { 
            this.dx = -1; 
            this.dy = 0; 
        } else if (keyPressed === 'ArrowUp' && !goingDown) { 
            this.dx = 0; 
            this.dy = -1; 
        } else if (keyPressed === 'ArrowRight' && !goingLeft) { 
            this.dx = 1; 
            this.dy = 0; 
        } else if (keyPressed === 'ArrowDown' && !goingUp) { 
            this.dx = 0; 
            this.dy = 1; 
        }
    }

    updateGame() {
        const head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };

        if (head.x < 0 || head.x >= this.boardSize || head.y < 0 || head.y >= this.boardSize) {
            this.gameOverCallback(false);
            return;
        }
        for (let i = 1; i < this.snake.length; i++) {
            if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
                this.gameOverCallback(false);
                return;
            }
        }

        this.snake.unshift(head); 

        if (head.x === this.food.x && head.y === this.food.y) {
            this.scoreUpdateCallback(10); 
            this.food = this.generateFood();
        } else {
            this.snake.pop();
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawFood();
        this.drawSnake();
    }
}