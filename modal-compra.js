const botonComprar = document.querySelector(".boton-finalizar-compra");
const contenedorModal = document.querySelector(".modal-after-compra")
const modalClose = document.querySelector(".modal-close")

botonComprar.addEventListener('click', (e)=>{
    e.preventDefault();
    contenedorModal.classList.add("contenedor-modal--show");
});

modalClose.addEventListener('click', (e)=>{
    e.preventDefault();
    contenedorModal.classList.remove("contenedor-modal--show"); 
});