//Utilizo la libreria Typed.js para darle la animacion a la seccion de loader
const typed = new Typed('.typed', {
    strings: [
		'<i class="palabra">Cargando...</i>',
		'<i class="palabra">Cargando...</i>',
	],
	stringsElement: '#cadenas-texto', 
	typeSpeed: 60, // Velocidad en mlisegundos para poner una letra,
	startDelay: 0, // Tiempo de retraso para iniciar la animacion
	backSpeed: 60, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Repetir infinito.
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});