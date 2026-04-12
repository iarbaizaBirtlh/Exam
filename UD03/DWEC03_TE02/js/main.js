import { AuthService } from "./service/auth.service.js";
import { initializeLocalStorage } from './data/user.data.js'
import { GameService } from './service/game.service.js';
import { UIService } from "./service/ui.service.js";

document.addEventListener('DOMContentLoaded', () => {
    initializeLocalStorage();
    const uiService = new UIService();

    const loginButton = document.getElementById('login-button');
    const showControlsButton = document.getElementById('show-controls-button');
    const showInfoButton = document.getElementById('show-info-button');
    const controlsContent = document.getElementById('controls-content');
    const infoContent = document.getElementById('info-content');
    const startGameButton = document.getElementById('start-game-button');
    const restartButton = document.getElementById('restart-button');
    const logoutButton = document.getElementById('logout-button');

    const handleLoginClick = () => {
        const username = document.getElementById('username-input').value;
        const password = document.getElementById('password-input').value;
        AuthService.login(username, password, uiService);
    };

    const toggleSideContent = (targetContent) => {
        if (targetContent === 'controls') {
            controlsContent.classList.toggle('visible');
        } else if (targetContent === 'info') {
            infoContent.classList.toggle('visible');
        }
    };

    if (loginButton) {
        loginButton.addEventListener('click', handleLoginClick);
    }
    if (showControlsButton) {
        showControlsButton.addEventListener('click', () => toggleSideContent('controls'));
    }
    if (showInfoButton) {
        showInfoButton.addEventListener('click', () => toggleSideContent('info'));
    }
    if (startGameButton) {
        startGameButton.addEventListener('click', () => GameService.startGame());
    }
    if (restartButton) {
        restartButton.addEventListener('click', () => GameService.restartGame());
    }
    if (logoutButton) {
        logoutButton.addEventListener('click', () => AuthService.logout(uiService));
    }
});
