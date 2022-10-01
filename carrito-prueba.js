//LISTA DE CARRITO

const listaCarrito = document.querySelector(".carrito")

//VARIABLES A DEFINIR

let nombreProducto = undefined;
let talleProducto = undefined;
let precioCarrito = undefined;

//NOMBRE PRODUCTO

//Producto 1

//Lógica: Cree constantes para cada nombre de producto y para cada botón específico de compra. Luego, con el CONDICIONAL, arranqué a preguntar, si hago click, por ejemplo, en el BOTÓN DE COMPRA DE PRODUCTO 1, la LET RESULTADONOMBRE tiene que ser igual al texto del nombre del producto. Así, el programa va chequeando todo dependiendo en que haga click, y el RESULTADONOMBRE retornado, se lo adjudica a la variable NombreProducto, que después usamos en la función COMPRAR.

const nombreP1 = document.querySelector(".nombreP1");
const compraP1 = document.querySelector(".compraP1");

const nombreP2 = document.querySelector(".nombreP2");
const compraP2 = document.querySelector(".compraP2");

const nombreP3 = document.querySelector(".nombreP3");
const compraP3 = document.querySelector(".compraP3");

const nombreP4 = document.querySelector(".nombreP4");
const compraP4 = document.querySelector(".compraP4");

const nombreP5 = document.querySelector(".nombreP5");
const compraP5 = document.querySelector(".compraP5");

const nombreP6 = document.querySelector(".nombreP6");
const compraP6 = document.querySelector(".compraP6");

const nombreP7 = document.querySelector(".nombreP7");
const compraP7 = document.querySelector(".compraP7");

if (compraP1.addEventListener("click")){

    let resultadoNombre = nombreP1.textContent;

    return resultadoNombre;

} else if (compraP2.addEventListener("click")){
    
    let resultadoNombre = nombreP2.textContent;

    return resultadoNombre;

} else if (compraP3.addEventListener("click")){
    
    let resultadoNombre = nombreP3.textContent;

    return resultadoNombre;

}else if (compraP4.addEventListener("click")){
    
    let resultadoNombre = nombreP4.textContent;

    return resultadoNombre;

}else if (compraP5.addEventListener("click")){
    
    let resultadoNombre = nombreP5.textContent;

    return resultadoNombre;

}else if (compraP6.addEventListener("click")){
    
    let resultadoNombre = nombreP6.textContent;

    return resultadoNombre;

}else if (compraP7.addEventListener("click")){
    
    let resultadoNombre = nombreP7.textContent;

    return resultadoNombre;

} else {resultadoNombre = undefined};

nombreProducto = resultadoNombre;

console.log (nombreProducto);

/* //BOTONES DE SELECCIÓN DE TALLES Y SUS FUNCIONES

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

botonComprar.addEventListener("click", comprar); */