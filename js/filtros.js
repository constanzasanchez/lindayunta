//Selectores
const selectTipos = document.getElementById('tipos');
const selectPrecios = document.getElementById('precios');

//Creo funcion para localizar los productos segun tipo y precio
const filtrar = () => {
    let valorFiltroTipos = selectTipos.value;
    let valorFiltroPrecios = selectPrecios.value;
    
    let arrayFiltrado = [];

    if (valorFiltroTipos == 'all') {
        arrayFiltrado = allProducts;
    } else {
        arrayFiltrado = allProducts.filter(el => el.value == selectTipos.value); 
    }

    if (valorFiltroPrecios == 0) {
        arrayFiltrado = allProducts;
    } else if (valorFiltroPrecios == 1) {
        arrayFiltrado = allProducts.filter( el => el.precio <= 1500);
    } else if (valorFiltroPrecios == 2) {
        arrayFiltrado = allProducts.filter( el => el.precio >= 1500);
    }

    showProducts(arrayFiltrado);
}

//Eventos para los "select" del html
selectTipos.addEventListener('change', ()=>{
    filtrar();
});
selectPrecios.addEventListener('change', ()=>{
    filtrar();
});


