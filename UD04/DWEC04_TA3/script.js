$(document).ready(function() {
    $.ajax({
        url: "https://randomuser.me/api/",
        dataType: "json",
        success: function(data) {
            const user = data.results[0];

            const imagen = user.picture.large;
            const nombre = `${user.name.first} ${user.name.last}`;
            const mail = user.email;
            const direccion = `${user.location.street.name} ${user.location.street.number}, ${user.location.city}, ${user.location.country}`;
            const estado = user.location.state;

            $("#user-imagen").attr("src", imagen);
            $("#user-nombre").text(nombre);
            $("#user-mail").text(`📧 ${mail}`);
            $("#user-direccion").text(`🏠 ${direccion}`);
            $("#user-estado").text(`🌍 Estado/Provincia: ${estado}`);
        }
    })
})