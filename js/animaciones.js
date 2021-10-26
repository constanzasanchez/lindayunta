$(document).ready( () => {
    setTimeout( () => {
    $('.loader')
    .css({
    opacity: 0,
    visibility: "hidden"})
    }, 1000);
})

//Animaciones para el texto Yunta
$("#textoFade").fadeOut("slow", function(){
    $("#textoFade").fadeIn(2000);
}); 

//Animacion para la imagen principal
$("#imgAbout").fadeIn(3000);

//Animacion para el texto de Yunta debajo
$("#textoanimado1").css("margin-top", "40px")
.slideUp(2000)
.slideDown(2000);
$("#textoanimado2")
.css("margin-top", "40px")
.slideUp(2000)
.slideDown(2000);
