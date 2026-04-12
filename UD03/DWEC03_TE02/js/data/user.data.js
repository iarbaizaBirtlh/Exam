import { User } from '../model/user.model.js';

const USUARIOS = [
    { "id": 1, "nombre": "Iker", "apellido": "Arana", "usuario": "iarana", "contraseña": "1234Abcd" },
    { "id": 2, "nombre": "Ander", "apellido": "Goikoetxea", "usuario": "agoikoetxea", "contraseña": "5678Efgh" },
    { "id": 3, "nombre": "Jokin", "apellido": "Olano", "usuario": "jolano", "contraseña": "9012Ijkl" }
];

//Inicializa localStorage con los usuarios
export const initializeLocalStorage = () => {
    if (!localStorage.getItem('validUsers')) {
        localStorage.setItem('validUsers', JSON.stringify(USUARIOS));
    }
};

initializeLocalStorage();

//Obtener usuarios de localStorage
export const getValidUsers = () => {
    try {
        const storedUsers = localStorage.getItem('validUsers');
        if (storedUsers) {
            return JSON.parse(storedUsers).map(data => 
                new User(
                    data.id,
                    data.nombre,
                    data.apellido,
                    data.usuario,
                    data.contraseña
                )
            );
        }
    } catch (e) {
        console.error("Error al cargar usuarios de localStorage: ", e);
    }
    return USUARIOS.map(data => new User(
        data.id,
        data.nombre,
        data.apellido,
        data.usuario,
        data.contraseña
    ));
};