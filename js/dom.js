//Llamo al div contenedor en la seccion de productos
const contenedorProductos = document.getElementById('contenedorProductos');

allProducts.forEach((producto) => {
    //Agrego Iva
    producto.precio = producto.precio * 1.21;
    //Agrego divs por cada producto que esta en el array
    const div = document.createElement('div');
    div.className = "col";
    div.innerHTML = `<div class="card">
                        <img src=${producto.img} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text rojo">Precio: $${producto.precio}</p>
                            <button href="#" class="btn-comprar">Comprar</button>
                        </div>
                     </div>`;  
contenedorProductos.appendChild(div);
})
