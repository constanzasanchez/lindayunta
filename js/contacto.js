//Selectores
    let nombreUsuario = document.getElementById("nombre");
    let apellidoUsuario = document.getElementById("apellido");
    let emailUsuario = document.getElementById("email");
    let mensajeUsuario = document.getElementById('msj');

//Guardo en consola los datos del usuario ingresado y una vez que
//se vuelve a cargar la pagina se reinician los datos

const formulario = document.getElementById("formulario");

//formulario.addEventListener("submit", mostrarFormulario);

let valorNombreUsuario = nombreUsuario.value;
let valorApellidoUsuario = apellidoUsuario.value;
let valorEmailUsuario = emailUsuario.value;
let valorMensajeUsuario = mensajeUsuario.value;

$('#formulario').click(function(){
    mostrarFormulario();
}); 

$('#formulario').keypress(function(e) {
    if(e.which == 13) {
        mostrarFormulario();
    }
 });

function mostrarFormulario(e) {
    e.preventDefault();
    console.log("Formulario enviado:");
    console.log(valorNombreUsuario);
    console.log(valorApellidoUsuario);
    console.log(valorEmailUsuario);
    console.log(valorMensajeUsuario);
    e.target.reset();
}

//Agrego un color gris cuando se completa el campo 

nombreUsuario.addEventListener("focusin", () => {
    nombreUsuario.style.backgroundColor = "#E3E4E5"});
apellidoUsuario.addEventListener("focusin",() => {
    apellidoUsuario.style.backgroundColor = "#E3E4E5"});
emailUsuario.addEventListener("focusin",() => {
    emailUsuario.style.backgroundColor = "#E3E4E5"});
mensajeUsuario.addEventListener("focusin",() => {
    mensajeUsuario.style.backgroundColor = "#E3E4E5"});