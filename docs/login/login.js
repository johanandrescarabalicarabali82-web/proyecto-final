// Registrar nuevo usuario
function registrar() {
    let usuario = prompt("Crea un usuario:");
    let password = prompt("Crea una contraseña:");

    if (usuario && password) {
        localStorage.setItem("usuarioGuardado", usuario);
        localStorage.setItem("passwordGuardado", password);

        alert("Registro exitoso. Ahora inicia sesión.");
    } else {
        alert("Debes ingresar usuario y contraseña válidos.");
    }
}

// Iniciar sesión
function iniciarSesion() {
    let usuarioIngresado = document.getElementById("usuario").value;
    let passwordIngresado = document.getElementById("password").value;

    let usuarioGuardado = localStorage.getItem("usuarioGuardado");
    let passwordGuardado = localStorage.getItem("passwordGuardado");

    if (usuarioIngresado === usuarioGuardado && passwordIngresado === passwordGuardado) {
        alert("Inicio de sesión exitoso");
        window.location.href = "../productos.html";

    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
