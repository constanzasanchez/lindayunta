//Selectores
const selectTipos = document.getElementById('tipos');
const selectPrecios = document.getElementById('precios');

//Creo funcion para localizar los productos segun tipo y precio
const filtrar = () => {
    let valorFiltroPrecios = selectPrecios.value;
    
    let arrayFiltrado = [];

    if (valorFiltroPrecios == 0) {
        arrayFiltrado = allProducts;
    } else if (valorFiltroPrecios == 1) {
        arrayFiltrado = allProducts.filter( el => el.precio <= 1000);
    } else if (valorFiltroPrecios == 2) {
        arrayFiltrado = allProducts.filter( el => (el.precio <= 1500) && (el.precio >= 1000));
    } else if (valorFiltroPrecios == 3) {
        arrayFiltrado = allProducts.filter( el => el.precio >= 1500);
    }

    showProducts(arrayFiltrado);
}

//Eventos para los "select" del html
selectPrecios.addEventListener('change', ()=>{
    filtrar();
});


