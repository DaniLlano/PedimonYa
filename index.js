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
const $carritoLista = document.getElementById("carritoLista")
const $precioTotal = document.getElementById("precioTotal")
const btnToggle = document.getElementById("btnToggle")
let carrito = [];
let carritoCantidad = 0;

function pintarProductos(array) {
    return($paVender.innerHTML = array.map((item) =>
    `<div class="pokemoncitos" id="${item.id}">
    <img src="${item.img}">
    <h3>${item.nombre}</h3>
    <h3>$${item.precio}</h3>
    <button class="btncomprar">AGREGAR AL CARRITO</button></div>`
    ));
}




function agregarAlCarrito(e) {
    const productitoABuscar = e.target.parentNode.attributes.id.value;
    const buscarProductito = productos.find((item) => item.id == productitoABuscar);
    carrito.push(buscarProductito);
    $carritoLista.innerHTML = `<table>
    <thead>
        <tr>
        <td></td>
        <td>Nombre</td>
        <td>Precio</td>
        <td></td>
        </tr>
    </thead>
    <tbody class="miniContainer">${carrito.map((item) => `
        <tr>
        <th><img src="${item.img}"></th>
        <td>${item.nombre}</td>
        <td>$${item.precio}</td>
        <td id="${item.id}"><ion-icon name="trash" size="small" class="deleteBtn"></ion-icon></td>
        </tr>`).join(" ")}
    </tbody>
    </table>`;
    $precioTotal.innerHTML = `
    <p>Total</p>
    <p>$${carrito[0].precio}</p>
    <button id="Comprar">COMPRAR</button>
    `;
    carritoCantidad++;
    btnToggle.innerHTML = `<ion-icon name="cart-sharp" size="large"></ion-icon>
    <span class="numerito" id="cart-cantidad">${carritoCantidad}</span>
    `
    if (carrito.length > 1) {
        const carritoSuma = carrito.map((item) => item.precio);
        const carritoTotal = carritoSuma.reduce((accu, item) => accu + item);
        $precioTotal.innerHTML = `
        <p>TOTAL</p>
        <p>$${carritoTotal}</p>
        <button id="Comprar">COMPRAR</button>
        `;
    }
}

function borrarProducto(e){
    if (e.target.id === "deleteBtn") {
        const paraBorrar = e.target.parentNode.attributes.id.value;
        const aEliminar = carrito.indexOf(paraBorrar);

        carrito.splice(aEliminar, 1);

        
    }
}

document.addEventListener("click", agregarAlCarrito)

document.addEventListener("click", borrarProducto)



pintarProductos(productos);




