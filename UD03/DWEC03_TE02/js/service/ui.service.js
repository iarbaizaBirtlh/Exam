//Manejar navegacion entre interfaces
export class UIService {
    constructor() {
        if (UIService.instance) {
            return UIService.instance;
        }

        this.screens = {
            'login': document.getElementById('login-screen'),
            'bienvenida': document.getElementById('welcome-screen'),
            'juego': document.getElementById('game-screen'),
            'resultados': document.getElementById('results-screen')
        };
        UIService.instance = this;
    }

    redirectTo(targetScreen) {
        Object.keys(this.screens).forEach(key => {
            const screenElement = this.screens[key];
            if (screenElement) {
                screenElement.classList.remove('active');
            }
        });
        
        const screenElement = this.screens[targetScreen];
        if (screenElement) {
            screenElement.classList.add('active');
        } else {
            console.error(`Error de UI: Pantalla no encontrada: ${targetScreen}`);
        }
    }
}