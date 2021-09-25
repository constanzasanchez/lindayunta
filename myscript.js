//function saludo() {
//    let nombre = prompt('Escribe tu nombre');
//    alert('Bienvenido/a'+ nombre);
//}
//saludo();

class Productos {
    constructor(nombre, precio){
        this.nombre = nombre.toLowerCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
let allProducts = [];

allProducts.push(new Productos ('heladito', 1500));
allProducts.push(new Productos ('bombito', 1600));
allProducts.push(new Productos ('palito', 1500));
allProducts.push(new Productos ('boomerang', 1200));
allProducts.push(new Productos ('cubik', 1600));
allProducts.push(new Productos ('dados', 1000));
allProducts.push(new Productos ('caramelito', 1000));
allProducts.push(new Productos ('bom', 2000));

console.log(allProducts);

allProducts.forEach((producto) => {
    producto.sumaIva();
    console.log(producto);    
});

const busquedaProducto = allProducts.find ((producto)=> producto.nombre === 'palito');
console.log(busquedaProducto);

const busquedaPrecio = allProducts.filter ((producto) => producto.precio <= 1500);
console.log(busquedaPrecio);