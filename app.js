const rojo = document.querySelector(".rojo");
const amarillo = document.querySelector(".amarillo");
const azul = document.querySelector(".azul");
const listaCarrito = document.querySelector(".carrito");




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

const agregarACarritoColor = (e) => {
    const color = e.target.dataset.id;
    carrito[color].cantidad++;
    actualizarListaCarrito();    
}

crearListaCarrito();

rojo.addEventListener("click",agregarACarritoColor)
azul.addEventListener("click",agregarACarritoColor)
amarillo.addEventListener("click",agregarACarritoColor)


