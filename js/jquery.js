$(() => {
    console.log('El DOM esta listo');
});

//Animaciones para el texto Yunta
$("#textoFade").fadeOut("slow", function(){
    $("#textoFade").fadeIn(2000);
}); 

$("#imgAbout").fadeIn(3000);

$("#textoanimado1").css("margin-top", "40px")
.slideUp(2000)
.slideDown(2000);
$("#textoanimado2")
.css("margin-top", "40px")
.slideUp(2000)
.slideDown(2000);
