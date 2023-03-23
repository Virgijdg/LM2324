var arrayProductos = [
    {
    producto: {
        nombre: 'Pantalla de 27 pulgadas x',
        precio: '210'
        },
    idProducto: 0
    },
    {
    producto: {
        nombre: 'Ratón inalámbrico óptico x',
        precio: '6.99'
        },
    idProducto: 1
    },
    {
    producto: {
        nombre: 'Teclado gaming 75% x',
        precio: '52,90'
        },
    idProducto: 2
    },
    {
    producto: {
        nombre: 'Cascos gaming reducción de sonido x',
        precio: '106,99'
        },
    idProducto: 3
    },
    {
    producto: {
        nombre: 'Ordenador gaming - Intel core i7 x',
        precio: '1924,95'
        },
    idProducto: 4
    },
    {
    producto: {
        nombre: 'Stream deck de Elgato x',
        precio: '192,99'
        },
    idProducto: 5
    },
]

let carrito = [];
var numero = 0;
function quitar(){
    numero = numero - 1;
    document.getElementById("total").innerHTML = producto - numero;
}

function anadir(){
    numero = numero + 1;
    document.getElementById("total").innerHTML = producto + numero;
}

function anadirProducto(){
    carrito.push
}


