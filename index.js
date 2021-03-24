let productos = [
    {
        nombre: "Bulbasaur",
        precio: 1500,
        img : "assets/bulbasaur.png",
        id: 1
    },
    {
        nombre: "Squirtle",
        precio: 1500,
        img : "assets/squirtle.png",
        id: 2
    },
    {
        nombre: "Charmander",
        precio: 1500,
        img : "assets/charmander.png",
        id: 3
    },
];


const $paVender = document.getElementById("paVender");
const $carritoLista = document.getElementById("carritoLista");
const $precioTotal = document.getElementById("precioTotal");
const btnToggle = document.getElementById("btnToggle");
let carritoCantidad = 0;
let carrito = [];

document.addEventListener("click", agregarAlCarrito)
document.addEventListener("click", borrarProducto)

function pintarProductos(array) {
    $paVender.innerHTML = array.map((item) =>
    `<div class="pokemoncitos" id="${item.id}">
    <img src="${item.img}">
    <h3>${item.nombre}</h3>
    <h3>$${item.precio}</h3>
    <button id="btncomprar">AGREGAR AL CARRITO</button></div>`
    ).join(" ");
}

function pintarProductosEnCarrito() {
    $carritoLista.innerHTML = `<ul>${carrito.map((item) => `
    <li>
    <p><img src="${item.img}"></p>
    <p>${item.nombre}</p>
    <p>$${item.precio}</p>
    <p id="${item.id}"><ion-icon name="trash" size="small" id="deleteBtn"></ion-icon></p>
    </li>
    `).join(" ")}
    </ul>`;
}

function restarTotal() {
    if (carrito.length >= 1) {
        const carritoRestar = carrito.map((item) => item.precio);
        const carritoRestaTotal = carritoRestar.reduce((accu, item) => accu + item);
        $precioTotal.innerHTML = `
        <p>TOTAL</p>
        <p>$${carritoRestaTotal}</p>
        <button id="Comprar">COMPRAR</button>
        `;
    }
}

function sumarTotal() {
    if (carrito.length >= 1) {
        const carritoSuma = carrito.map((item) => item.precio);
        const carritoTotal = carritoSuma.reduce((accu, item) => accu + item);
        $precioTotal.innerHTML = `
        <p>TOTAL</p>
        <p>$${carritoTotal}</p>
        <button id="Comprar">COMPRAR</button>
        `;
    }
}

function agregarAlCarrito(e) {
    if(e.target.id === "btncomprar") {
        const productitoABuscar = e.target.parentNode.attributes.id.value;
        const buscarProductito = productos.find((item) => item.id == productitoABuscar);
        carrito.push(buscarProductito);
        carritoCantidad++;
        btnToggle.innerHTML = `<ion-icon name="cart-sharp" size="large"></ion-icon>
        <span class="numerito" id="cart-cantidad">${carritoCantidad}</span>`;
        sumarTotal(carrito);
    }
    pintarProductosEnCarrito(carrito);
}

function borrarProducto(e){
    if (e.target.id === "deleteBtn") {
        const paraBorrar = e.target.parentNode.attributes.id.value;
        const aEliminar = carrito.indexOf(paraBorrar);
        carrito.splice(aEliminar, 1);
        carritoCantidad--;
        btnToggle.innerHTML = `<ion-icon name="cart-sharp" size="large"></ion-icon>
        <span class="numerito" id="cart-cantidad">${carritoCantidad}</span>`;
        restarTotal(carrito);
    };
    pintarProductosEnCarrito(carrito);
}

pintarProductos(productos);



