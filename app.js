const rojo = document.querySelector(".rojo");
const amarillo = document.querySelector(".amarillo");
const azul = document.querySelector(".azul");
const listaCarrito = document.querySelector(".carrito");

const btns =[
    {
        nombre: rojo,
        selector: document.querySelector(".rojo")
    },
    {
        nombre: azul,
        selector: document.querySelector(".azul")
    },
    {
        nombre: amarillo,
        selector: document.querySelector(".amarillo")
    }
]




const crearListaCarrito = () => {
    listaCarrito.innerHTML = `<ul>Lista Carrito:</ul>
    <p>...............................</p>`}

const actualizarListaCarrito = () => {
    listaCarrito.innerHTML = `<ul>Lista Carrito:</ul>
    <p>...............................</p>`
    let total=0;
    for (const productos of carrito){
        if (productos.cantidad > 0){
            listaCarrito.innerHTML += `<ul>Nombre: ${productos.nombre}</ul>
            <ul class=cantidad>cantidad: ${productos.cantidad}</ul>
            <ul class=precio>precio: ${productos.precio}</ul>
            <ul>----------------------</ul>
            `
            total+=productos.precio * productos.cantidad;
        }
    }
    listaCarrito.innerHTML+=`Total: ${total}`
}
const agregarACarritoRojo = () => {
    carrito[2].cantidad++;
    actualizarListaCarrito()
}
const agregarACarritoAzul = () => {
    carrito[1].cantidad++;
    actualizarListaCarrito()
}
const agregarACarritoAmarillo = () => {
    carrito[0].cantidad++;
    actualizarListaCarrito()
}

crearListaCarrito();

rojo.addEventListener("click", agregarACarritoRojo);
azul.addEventListener("click", agregarACarritoAzul);
amarillo.addEventListener("click", agregarACarritoAmarillo);

