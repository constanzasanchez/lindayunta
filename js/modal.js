//Selectores
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0];
const botonAbrir = document.getElementById('boton-carrito');
const botonCerrar = document.getElementById('carritoCerrar');
const modalCarrito = document.getElementsByClassName('modal-carrito')[0];

//Al hacer click en modal se hace visible el modal
botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active');
})
//Cerrar modal
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active');
})
contenedorModal.addEventListener('click', ()=>{
    botonCerrar.click();
})
//Evito que al hacer click en cualquier parte del modal el mismo se cierre
modalCarrito.addEventListener('click', (event)=>{
    event.stopPropagation();
})