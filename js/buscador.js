//Selector
const buscador = document.getElementById('buscador')

//Funcion de busqueda
const buscar = (search) => {
    return allProducts.filter((prod) => prod.nombre.toLowerCase().includes(search));
}

buscador.addEventListener('input', () => {
    const search = buscador.value.trim().toLowerCase();
    showProducts( buscar(search) );
})