//Creo funcion para guardar productos en el local storage
const storeProducts = (clave, valor) => {
    localStorage.setItem(clave, valor)};

//Aplico la funcion por cada producto de mi array 
for (const producto of allProducts) {
    storeProducts (producto.id, JSON.stringify(producto));
}