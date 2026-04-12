document.addEventListener("DOMContentLoaded", getRandomUser);

function getRandomUser() {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            const imagen = user.picture.large;
            const nombre = `${user.name.first} ${user.name.last}`;
            const mail = user.email;
            const direccion = `${user.location.street.name} ${user.location.street.number}, ${user.location.city}, ${user.location.country}`;
            const estado = user.location.state;

            document.getElementById("user-imagen").src = imagen;
            document.getElementById("user-nombre").textContent = nombre;
            document.getElementById("user-mail").textContent = `📧 ${mail}`;
            document.getElementById("user-direccion").textContent = `🏠 ${direccion}`;
            document.getElementById("user-estado").textContent = `🌍 Estado/Provincia: ${estado}`;
        })
        .catch(error => console.error("Error al otener el usuarioL: ", error))
}