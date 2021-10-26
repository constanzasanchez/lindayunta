//Se muestra una pagina de carga antes de que el dom este listo
$(document).ready( () => {
    setTimeout( () => {
    $('.loader')
    .css({
    opacity: 0,
    visibility: "hidden"})
    }, 1000);
})
