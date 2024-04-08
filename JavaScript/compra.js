const abrirCarrito = document.querySelector("#compra");
const cerrarCarrito = document.querySelector("#cerrar-carrito");
const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('.main-productos');
const contenedorCarrito = document.querySelector('.lista-carrito tbody');
const vaciarCarrito = document.querySelector('.vaciar');
let articulosCarrito = [];



cargarEventsListeners();
function cargarEventsListeners() {
    // abrir menu compra
    abrirCarrito.addEventListener('click', abrirCompra);

    // cerrar menu compra
    cerrarCarrito.addEventListener('click', cerrarCompra);

    //añadir Producto pulsando en la cesta
    listaProductos.addEventListener('click', agregarProducto);

    //elimina los productos uno a uno
    carrito.addEventListener('click', eliminarProducto);

    // vaciar todo el carro
    vaciarCarrito.addEventListener('click', () => {
        articulosCarrito = [];
        
        limpiarHTML();
    })
}


// FUNCIONES
function abrirCompra() {
    carrito.style.display = "flex"; 
}

function cerrarCompra() {
    carrito.style.display = "none"; 
}

function agregarProducto(e) {
    if (e.target.classList.contains('agregar-carrito')) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
}

// elimina un producto del carrito
function eliminarProducto(e) {
    console.log(e.target.classList);
    if (e.target.classList.contains('borrar')) {
        const productoID = e.target.getAttribute('id');
   
        // elimina del array
        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoID);

        carritoHTML();
    }
}

function leerDatosProducto(producto) {
    const infoProducto = {
        nombre: producto.querySelector('.nombre-seccion').textContent,
        titulo: producto.querySelector('.nombre-titulo').textContent,
        precio: producto.querySelector('.precio-producto').textContent,
        id: producto.querySelector('.titulo-datos').getAttribute('id'),
        cantidad: 1
    }

    // Comprobar si el producto ya existe en el carrito
    const existe = articulosCarrito.find(producto => producto.titulo === infoProducto.titulo);

    if (existe) {
        // Si el producto existe, incrementar la cantidad
        existe.cantidad++;
    } else {
        // Si el producto no existe, agregarlo al carrito
        articulosCarrito.push(infoProducto);
    }

    console.log(articulosCarrito);

    // Actualizar el HTML del carrito
    carritoHTML();
}


// mostrar producto en el carrito
function carritoHTML() {

    // limpiar html
    limpiarHTML();

    //crear tabla
    articulosCarrito.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${producto.nombre} -
                ${producto.titulo}
            </td>
            
            <td>
                ${producto.precio}
            </td>

            <td>
                ${producto.cantidad}
            </td>

            <td>
                <img src="/imagenes/iconos/cerrar.svg" class="borrar" id="${producto.id}">
            </td>
        `;


        // agrega el html en el tbody
        contenedorCarrito.appendChild(row);
    })
}

// elimina los productos del html al añadir
function limpiarHTML() {
    contenedorCarrito.innerHTML = '';
}