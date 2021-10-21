$(() => {
    console.log('El DOM esta listo');
});

//Animaciones para el texto Yunta
$("#textoFade").fadeOut("slow", function(){
    $("#textoFade").fadeIn(2000);
}); 

//$('.left-img').fadeOut(2000);