// ---------------------------
// CARGAR CARRITO AL INICIAR
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito();
    mostrarHistorial();
});


// ---------------------------
// AGREGAR PRODUCTOS AL CARRITO
// ---------------------------
function agregarCarrito(nombre, precio, imagen) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push({ nombre, precio, imagen });
    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();
}


// ---------------------------
// MOSTRAR CARRITO
// ---------------------------
function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let contenedor = document.getElementById("carrito-items");
    let total = document.getElementById("total");
    let carritoDiv = document.getElementById("carrito");

    contenedor.innerHTML = "";

    // 🔥 Mostrar carrito SOLO si hay productos
    carritoDiv.style.display = carrito.length > 0 ? "block" : "none";

    let suma = 0;

    carrito.forEach((item, index) => {
        suma += item.precio;

        contenedor.innerHTML += `
            <div class="item-carrito">
                <img src="${item.imagen}" alt="" class="carrito-img">
                <p>${item.nombre} - $${item.precio}</p>
                <button onclick="eliminarItem(${index})">X</button>
            </div>
        `;
    });

    total.innerText = `Total: $${suma}`;
}


// ---------------------------
// ELIMINAR ITEM
// ---------------------------
function eliminarItem(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}


// ---------------------------
// FINALIZAR PEDIDO (GUARDAR EN HISTORIAL)
// ---------------------------
function finalizarPedido() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let historial = JSON.parse(localStorage.getItem("historialPedidos")) || [];

    let pedido = {
        fecha: new Date().toLocaleString(),
        productos: carrito,
        total: carrito.reduce((sum, item) => sum + item.precio, 0)
    };

    historial.push(pedido);

    localStorage.setItem("historialPedidos", JSON.stringify(historial));

    // limpiar carrito
    localStorage.setItem("carrito", JSON.stringify([]));
    mostrarCarrito();

    alert("Pedido registrado.");

    mostrarHistorial();
}


// ---------------------------
// MOSTRAR HISTORIAL DE PEDIDOS
// ---------------------------
function mostrarHistorial() {
    let historial = JSON.parse(localStorage.getItem("historialPedidos")) || [];
    let contenedor = document.getElementById("lista-historial");

    contenedor.innerHTML = "";

    historial.forEach((pedido, index) => {
        contenedor.innerHTML += `
            <div class="pedido-item">
                <p><strong>Pedido #${index + 1}</strong></p>
                <p><strong>Fecha:</strong> ${pedido.fecha}</p>
                <p><strong>Total:</strong> $${pedido.total}</p>
                <p><strong>Productos:</strong></p>
                <ul>
                    ${pedido.productos.map(p => `<li>${p.nombre} - $${p.precio}</li>`).join("")}
                </ul>
            </div>
        `;
    });
}


// ---------------------------
// CERRAR SESIÓN
// ---------------------------
function cerrarSesion() {
    window.location.href = "login/login.html";
}
 

 
function pagar(metodo) {
    alert("Has seleccionado el método de pago: " + metodo);

    // Opcional: aquí puedes guardar el método usado en el historial
}


function consultarEstadoPedido() {
    let historial = JSON.parse(localStorage.getItem("historialPedidos")) || [];

    if (historial.length === 0) {
        alert("No tienes pedidos realizados.");
        return;
    }

    let ultimoPedido = historial[historial.length - 1];

    alert(
        "📦 Pedido #" + ultimoPedido.id +
        "\nEstado: " + ultimoPedido.estado +
        "\nTotal: $" + ultimoPedido.total +
        "\nFecha: " + ultimoPedido.fecha
    );
}


function actualizarEstadoPedido(nuevoEstado) {
    let usuario = localStorage.getItem("usuarioActivo");
    let historial = JSON.parse(localStorage.getItem("historial_" + usuario)) || [];

    if (historial.length === 0) return;

    historial[historial.length - 1].estado = nuevoEstado;

    localStorage.setItem("historial_" + usuario, JSON.stringify(historial));
}
actualizarEstadoPedido("Listo para entregar");
