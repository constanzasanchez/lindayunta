//Array de los productos
let allProducts = [
    {img: 'img/prod1.jpg', id: 'helado', nombre: 'heladO', precio: 1500},
    {img: 'img/prod2.jpg', id: 'bombito', nombre: 'bOmbitO', precio: 1600},
    {img: 'img/prod2.jpg', id: 'palito', nombre: 'palitO', precio: 1500},
    {img: 'img/prod3.jpg', id: 'boomerang', nombre: 'boOmerang', precio: 1200},
    {img: 'img/prod4.jpg', id: 'cubik', nombre: 'cubik', precio: 1600},
    {img: 'img/prod5.jpg', id: 'dados', nombre: 'dadOs', precio: 1000},
    {img: 'img/prod6.jpg', id: 'bom', nombre: 'bOm', precio: 2000},
    {img: 'img/prod7.jpg', id: 'caramelito', nombre: 'caramelitOs', precio: 1000},];

//Sumo Iva a los productos
//allProducts.forEach(product => {
  //  product.precio = product.precio * 1.21});

//Utilizo metodos para buscar o filtrar productos
const busquedaProducto = allProducts.find ((producto)=> producto.id === 'palito');
console.log(busquedaProducto);

const busquedaPrecio = allProducts.filter ((producto) => producto.precio <= 1500);
console.log(busquedaPrecio);