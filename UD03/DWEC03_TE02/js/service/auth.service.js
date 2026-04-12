import { getValidUsers } from '../data/user.data.js';
import { UIService } from './ui.service.js';

const uiService = new UIService();

export class AuthService {
    static PASSWORD_REGEXP = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]+$/;

    static login(username, password) {
        const errorDisplay = document.getElementById('login-error');
        errorDisplay.textContent = '';
        errorDisplay.style.color = '#D32F2F';

        if (!AuthService.PASSWORD_REGEXP.test(password)) {
            errorDisplay.textContent = "Error: La contraseña solo debe contener caracteres alfanuméricos (letras y números).";
            return false;
        }
        
        const users = getValidUsers();
        const userFound = users.find(user => 
            user.usuario === username && user.contraseña === password
        );

        if (userFound) {
            errorDisplay.style.color = '#4CAF50';
            errorDisplay.textContent = `Acceso concedido para ${userFound.usuario}`;
            setTimeout(() => {
                uiService.redirectTo('bienvenida');
            }, 500);
            return true;
        } else {
            errorDisplay.textContent = "Usuario o contraseña incorrectos.\nIntentalo de nuevo";
            return false;
        }
    }

    static logout() {
        const usernameInput = document.getElementById('username-input');
        const passwordInput = document.getElementById('password-input');
        const errorDisplay = document.getElementById('login-error');

        if (usernameInput) usernameInput.value = '';
        if (passwordInput) passwordInput.value = '';
        if (errorDisplay) errorDisplay.textContent = '';

        const uiService = new UIService();
        uiService.redirectTo('login');
    }
}