/* const listaCarrito = document.querySelector(".carrito")

const nombreProducto = document.getElementById("nombre-p7").textContent;

const nombreProductoCarrito = document.createElement("p");

nombreProductoCarrito.textContent = nombreProducto;

listaCarrito.appendChild(nombreProductoCarrito) */

//LISTA DE CARRITO

const listaCarrito = document.querySelector(".carrito")

//VARIABLES A DEFINIR

let nombreProducto = undefined;
let talleProducto = undefined;
let precioCarrito = undefined;

//NOMBRE PRODUCTO

//Producto 1

const nombreP1 = document.querySelector(".nombreP1");
const compraP1 = document.querySelector(".compraP1");

compraP1.addEventListener("click", seleccionNombreP1);

function seleccionNombreP1 () {
    let resultadoNombre = nombreP1.textContent;

    return resultadoNombre;
}

nombreProducto = seleccionNombreP1;

//BOTONES DE SELECCIÓN DE TALLES Y SUS FUNCIONES

// Talle S

const botonTalleS = document.querySelector(".talle-S");

botonTalleS.addEventListener("click", seleccionTalleS);

function seleccionTalleS () {
    let resultado = S;

    return resultado;
}

talleProducto = seleccionTalleS;

//Talle 36

const botonTalle36 = document.querySelector(".talle-36");

botonTalle36.addEventListener("click", seleccionTalle36);

function seleccionTalle36 () {
    let resultado = 36;

    return resultado;
}

talleProducto = seleccionTalle36;

//BOTÓN COMPRAR Y SUS FUNCIONES

const botonComprar = document.querySelector(".boton-comprar");

function comprar () {

    //Nombre
    const nombreProductoCarrito = document.createElement("p");

    nombreProductoCarrito.textContent = nombreProducto;

    listaCarrito.appendChild(nombreProductoCarrito)

    // Talle

    const talleCarrito = document.createElement("p");

    talleCarrito.textContent = talleProducto;

    listaCarrito.appendChild(talleCarrito)

    // Cantidad

    const cantidadCarrito = document.createElement("p");

    cantidadCarrito.textContent = 1; 

    listaCarrito.appendChild(cantidadCarrito);

    // Precio

    const precioCarrito = document.createElement("p");

    precioCarrito.textContent = precioProducto;

    listaCarrito.appendChild(precioCarrito)

};

botonComprar.addEventListener("click", comprar);