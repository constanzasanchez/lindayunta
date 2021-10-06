const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", mostrarFormulario);

function mostrarFormulario(e) {
    e.preventDefault();
    console.log("Formulario Enviado");
    let nombreUsuario = document.getElementById("nombre").value;
    let apellidoUsuario = document.getElementById("apellido").value;
    let emailUsuario = document.getElementById("apellido").value;

    console.log(nombre);
    console.log(numero);
    
    e.target.reset();
}

//const nombreUsuario = document.getElementById('nombre');
//const apellidoUsuario = document.getElementById('apellido');
//const emailUsuario = document.getElementById('email');
//const mensajeUsuario = document.getElementById('msj');

//nombreUsuario.addEventListener("focusin", () => {
//    nombreUsuario.style.backgroundColor = "#E3E4E5"});
//apellidoUsuario.addEventListener("focusin",() => {
//    apellidoUsuario.style.backgroundColor = "#E3E4E5"});

//nombreUsuario.addEventListener('blur',validarTexto);
//document.getElementById('email').addEventListener('blur',validarEmail);
//document.getElementById('numero').addEventListener('blur',validarNumero);
