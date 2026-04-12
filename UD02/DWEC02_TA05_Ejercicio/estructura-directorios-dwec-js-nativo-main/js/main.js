import { UserData } from "./data/user.data.js";
import { UserService } from "./services/user.service.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const avg = UserService.mediaEdad();
    if (!app) {
        console.error("No existe #app en el HTML");
        return;
    }

    const listHTML = `
        <h2>Lista de usuarios</h2>
        <ul>
            ${UserData.map(u => `<li>${u.nombre} (${u.edad} años)</li>`).join("")}
        </ul>
        <p><strong>Edad media:</strong> ${avg}</p>
    `;
    app.innerHTML = listHTML;
});
