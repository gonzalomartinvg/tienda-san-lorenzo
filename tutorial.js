// 1) Creamos un array con todos los botones de compra

const todosLosBotonesDeCompra = document.querySelectorAll(".boton-comprar");

// 2) Indicamos que por cada uno de los botones haga un evento al hacer click y que ejecute la función "agregarACarrito"

todosLosBotonesDeCompra.forEach(botonDeCompra => {
    botonDeCompra.addEventListener("click", agregarACarrito);
});

// 3) Creamos la función "agregarACarrito"

function agregarACarrito(event){
    const boton = event.target
    const contenedorProductos = boton.closest(".productos"); //Indicamos que de la constante boton (que es el botón de compra) busquemos el elemento con la clase ".productos" más cercano (por eso el .closest). En este caso, vamos a acceder al div contenedor de toda la tarjeta de compra. De esta forma, accedemos al div contenedor de la tarjeta a la que le hicimos click en el paso 2.

    const nombreProducto = contenedorProductos.querySelector(".nombre-producto").textContent;
    const imagenProducto = contenedorProductos.querySelector(".imagen-producto").src;
    const precioProducto = contenedorProductos.querySelector(".precio").textContent;

// Hasta acá, le dijimos que cuando le demos click en comprar capturemos todos los datos de cada tarjeta. Ahora, vamos a hacer que coloque esos datos en el carrito de compras con una nueva función.

sumarAlCarrito(nombreProducto, imagenProducto, precioProducto); //Declarando esto guardamos los valores obtenidos en esta función y la relacionamos con la función que trabajaremos abajo.
    
};

const contenedorFilasDeCarrito = document.querySelector(".contenedor-filas-productos-autogenerados"); //Seleccionamos el div "filas-productos-autogenerados". Corresponde a la función "sumarAlCarrito", pero como la vamos a usar después necesitamos que tenga alcance global fuera de esa función. Dentro de acá, vamos a poner la información autogenerada.

function sumarAlCarrito (nombreProducto, imagenProducto, precioProducto){ //Utilizamos lo obtenido en la función "agregarACarrito"

    
    const filaDeCarrito = document.createElement("div"); //Creamos una variable que crea un elemento html (div). Acá adentro va a ir la info capturada de los productos.

    const contenidoAutoGeneradoCarrito = //Las `` siguientes se utilizan para hacer un html literal
    `
    <div class="productos-autogenerados">
        <div class="carrito-producto"><p>${nombreProducto}</p> <img src=${imagenProducto} alt=""></div>
        <div class="carrito-talle"><p class="texto-filas">XS</p></div>
        <p class="carrito-precio texto-filas">${precioProducto}</p>
        <input class="input-cantidad" type="number" value="1"></input>
        <button class="boton-borrar">X</button>
    </div>
    `; 
    
    //En el paso anterior, creamos una variable con la estructura html del carrito y utilizamos las variables con los valores obtenidos de nombreProducto, imagenProducto y precioProducto. Se agrega con $ y {}.

    filaDeCarrito.innerHTML = contenidoAutoGeneradoCarrito; //Le decimos que el html de la variable filaDeCarrito (la que crea el nuevo div con la info) sea igual al contenido que generamos con la variable contenidoAutoGeneradoCarrito.

    contenedorFilasDeCarrito.append(filaDeCarrito); //Le decimos que en el contenedorFilasDeCarrito (es un selector de la clase ".contenedor-filas-productos-autogenerados" aparezca la variable filaDeCarrito)

    //BOTÓN DE BORRAR

    filaDeCarrito
    .querySelector(".boton-borrar") //Primero, seleccionamos el botón mediante la clase ".boton-borrar" 
    .addEventListener("click", borrarProductoAgregado); //Segundo, le agregamos un evento que cuando clickeamos haga la función borrarProductoAgregado. La función borrarProductoAgregado, se encuentra en el punto 5.

/*  Lo anterior también se puede escribir todo junto, pero así es más fácil de leer. 
    Ejemplo de todo junto= 
    filaDeCarrito.querySelector(".boton-borrar").addEventListener("click", borrarProductoAgregado); */

    //MANIPULAR CANTIDADES

    filaDeCarrito
    .querySelector(".input-cantidad") //Primero, seleccionamos el botón, mediante la clase ":input-cantidad"
    .addEventListener("change", cambioEnCantidad); //Segundo, le agregamos un evento que cuando cambie el elemento haga la función cambioEnCantidad. La función cambioEnCantidad, se encuentra en el punto 6.

    actualizacionPrecioTotal()
}

// 4) ACTUALIZACIÓN DE PRECIO

function actualizacionPrecioTotal (){

    let total = 0;

    const carritoPrecioTotal = document.querySelector(".total");

    const selectorDeTodosLosProductos = document.querySelectorAll(".productos-autogenerados"); //Seleccionamos todos los productos autogenerados

    selectorDeTodosLosProductos.forEach((productoAutogenerado) => {

        const elementoPrecioDeProducto = productoAutogenerado.querySelector(".carrito-precio"); //Seleccionamos solamente los precios.

        const precio = Number (elementoPrecioDeProducto.textContent.replace("$", "")); //Lo que hacemos es extraer del elementoPrecioDeProducto solamente el texto y con la función replace le sacamos el signo $ y lo reemplazamos por unas "" (las comillas en este caso, son un string vacío, es decir no se ven). Replace funciona colocando primero lo que queremos reeamplazar entre comillas, luego una coma y luego lo que queremos agregar.

        const elementoCantidadDeProducto = productoAutogenerado.querySelector(".input-cantidad"); //Seleccionamos solamente las cantidades

        const cantidad = Number (elementoCantidadDeProducto.value); //Hacemos una variable con el valor de la cantidad ingresada en el input.

        total = total + precio * cantidad;

    });

    carritoPrecioTotal.innerHTML = `$${total.toFixed(3)}`; //Las `` se utilizan para colocar un html literal. Colocando "toFixed(3) le indicamos que siempre genere 3 decimales, entonces nos muestra los 000 en ejemplos como 21.000"


}

// 5) GENERAMOS LA FUNCIÓN "borrarProductoAgregado". Esta función la usamos al final del punto 3.

function borrarProductoAgregado(event) {
    const clickEnBoton = event.target;
    clickEnBoton.closest(".productos-autogenerados").remove();

    actualizacionPrecioTotal(); //Al llamar la función acá, hacemos que el valor total se remueva también cuando sacamos al producto de la lista.
}

// 6) GENERAMOS LA FUNCIÓN "cambioEnCantidad". Esta función la usamos al final del punto 3.

function cambioEnCantidad(event) {
    const cantidad = event.target;
    if (cantidad.value <= 0){
        cantidad.value = 1
    }

    actualizacionPrecioTotal(); //Al llamar la función acá, hacemos que el valor total se modifique también cuando modificamos las cantidades.
}