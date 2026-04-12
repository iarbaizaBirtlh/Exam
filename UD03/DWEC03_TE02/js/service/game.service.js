import { UIService } from './ui.service.js';
import { SnakeGame } from './snake.game.service.js';

const uiService = new UIService();

export class GameService {
    static GAME_PARAMETERS = {
        "Principiante": { time: 45, boardSize: 18, elements: 1, canvasSize: 630, cellSize: 35, stars: '⭐', speed: 200, level: 'Principiante' }, 
        "Intermedio": { time: 30, boardSize: 13, elements: 2, canvasSize: 455, cellSize: 35, stars: '⭐⭐', speed: 150, level: 'Intermedio' },  
        "Avanzado": { time: 20, boardSize: 10, elements: 3, canvasSize: 350, cellSize: 35, stars: '⭐⭐⭐', speed: 120, level: 'Avanzado' }
    };
    
    static activeInterval = null;
    static currentLevelParams = null;
    static currentScore = 0;
    static initialTime = 0;
    static timeElapsed = 0; 
    static activeGameInstance = null;

    static startGame() { 
        const levelSelect = document.getElementById('level-select');
        if (!levelSelect) {
            return;
        }

        const level = levelSelect.value;
        const params = GameService.GAME_PARAMETERS[level];
        let remainingTime = params.time;
        GameService.initialTime = params.time;
        GameService.currentScore = 0;
        
        uiService.redirectTo('juego');
        
        const canvas = document.getElementById('snake-canvas');
        const centeredContent = document.getElementById('centered-game-content');
        centeredContent.style.setProperty('--board-size', `${params.canvasSize}px`);
        canvas.width = params.canvasSize;
        canvas.height = params.canvasSize;
        
        GameService.activeGameInstance = new SnakeGame( 
            params.boardSize, 
            params.cellSize, 
            canvas, 
            GameService.updateScore, 
            GameService.stopGame,
            params.speed
        );
        GameService.activeGameInstance.start(); 

        const timerDisplay = document.getElementById('timer-display');
        const scoreDisplay = document.getElementById('score-display');
        const levelStarsDisplay = document.getElementById('level-stars');
        const topScoreDisplay = document.getElementById('top-score-display');
        const topScoreKey = `topScore_${level}`;
        const topScore = localStorage.getItem(topScoreKey) || 0;

        scoreDisplay.textContent = `🍎 ${GameService.currentScore}`;
        topScoreDisplay.textContent = `🏆 ${topScore}`;
        levelStarsDisplay.textContent = params.stars; 
        
        if (!timerDisplay) {
            return;
        }
        timerDisplay.textContent = `Tiempo restante: ${remainingTime} segundos`;
        
        const timerInterval = setInterval(() => {
            remainingTime--;
            GameService.timeElapsed = GameService.initialTime - remainingTime;
            timerDisplay.textContent = `Tiempo restante: ${remainingTime} segundos`;
        
            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = "¡¡Tiempo terminado!!";
                GameService.stopGame(true); 
            }
        }, 1000);
        GameService.activeInterval = timerInterval;
        GameService.currentLevelParams = params;
    }

    static updateScore(points) {
        GameService.currentScore += points;
        const scoreDisplay = document.getElementById('score-display');
        if (scoreDisplay) {
            scoreDisplay.textContent = `🍎 ${GameService.currentScore}`;
        }
    }

    static stopGame(timeUp = false) { 
        if (GameService.activeInterval) {
            clearInterval(GameService.activeInterval);
            GameService.activeInterval = null;
        }
        if (GameService.activeGameInstance) {
            GameService.activeGameInstance.stop();
        }
        
        let level;
        if (GameService.currentLevelParams) {
            level = GameService.currentLevelParams.level;
        } else {
            level = 'Desconocido';
        }
        
        const topScoreKey = `topScore_${level}`;
        const storedTopScore = localStorage.getItem(topScoreKey);
        let currentTopScore = 0; 
        if (storedTopScore) {
            currentTopScore = parseInt(storedTopScore);
        }
        if (GameService.currentScore > currentTopScore) {
            localStorage.setItem(topScoreKey, GameService.currentScore);
        }
        
        let isGameOverByCollision = false; 
        if (!timeUp) {
            isGameOverByCollision = true;
        }
        
        setTimeout(() => {
            GameService.showResults(
                isGameOverByCollision, 
                GameService.currentScore, 
                GameService.timeElapsed,
                level
            );
        }, 1000);
    }
    
    static showResults(isGameOver, score, time, level) {
        uiService.redirectTo('resultados');
        const titleElement = document.getElementById('result-title');
        const messageElement = document.getElementById('result-message');
        const finalLevelElement = document.getElementById('final-level');
        const finalScoreElement = document.getElementById('final-score');
        const timePlayedElement = document.getElementById('time-played');
        const levelTopScoreElement = document.getElementById('level-top-score');
        
        if (!titleElement || !messageElement || !finalLevelElement || !finalScoreElement || !timePlayedElement || !levelTopScoreElement) {
            console.error("ERROR: No se encontraron todos los elementos de la pantalla de resultados.");
            return;
        }

        titleElement.style.color = ''; 
        
        if (isGameOver) {
            titleElement.textContent = "¡GAME OVER!";
            titleElement.style.color = '#cc0000'; 
            messageElement.textContent = "Has chocado con la pared o contigo mismo. ¡Más suerte la próxima vez!";
        } else if (score > 0) {
            titleElement.textContent = "¡Tiempo Terminado!";
            titleElement.style.color = '#008000'; 
            messageElement.textContent = "¡Sobreviviste al reloj y conseguiste una gran puntuación!";
        } else {
            titleElement.textContent = "Fin de Partida";
            messageElement.textContent = "El tiempo se acabó. ¡Intenta conseguir puntos la próxima vez!";
        }
        
        finalLevelElement.textContent = level;
        finalScoreElement.textContent = score;
        timePlayedElement.textContent = time;
        levelTopScoreElement.textContent = localStorage.getItem(`topScore_${level}`) || 0;
    }
    
    static restartGame() {
        uiService.redirectTo('bienvenida');
    }
}