//Cargo los productos que tengo en el Array segun stock
const cargarProductos = async () => {
  const resp = await fetch('./stock.json');
  const data = await resp.json();

  allProducts = data;
  showProducts(allProducts);
}

cargarProductos()

//Accedo a la seccion productos para crear las cards de cada producto automaticamente
const contenedorProductos = document.getElementById('contenedorProductos');

const showProducts = (array) => {
  contenedorProductos.innerHTML = '';
  array.forEach((producto) => {
   //Agrego divs por cada producto que esta en el array  
  const div = document.createElement('div');
  div.className = "col";
  div.innerHTML = `<div class="card">
                      <img src=${producto.img} class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">${producto.nombre}</h5>
                          <p class="card-text rojo">Precio: $${producto.precio}</p>
                          <button onclick="agregarAlCarrito(${producto.id})" class="btn-comprar">Comprar</button>
                      </div>
                   </div>`;  
contenedorProductos.appendChild(div);
});
}

showProducts(allProducts);

