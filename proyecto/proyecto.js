//Declaración de variables
let catalogo = [
    {
        id: 0,
        nombre: 'Pantalla de 27 pulgadas x',
        precio: 210,
        cantidad: 0
    },
    {
        id: 1,
        nombre: 'Ratón inalámbrico óptico x',
        precio: 6.99,
        cantidad: 0
    },
    {
        id: 2,
        nombre: 'Teclado gaming 75% x',
        precio: 52.90,
        cantidad: 0
    },
    {
        id: 3,
        nombre: 'Cascos gaming reducción de sonido x',
        precio: 106.99,
        cantidad: 0

    },
    {
        id: 4,
        nombre: 'Ordenador gaming - Intel core i7 x',
        precio: 1924.95,
        cantidad: 0
    },
    {
        id: 5,
        nombre: 'Stream deck de Elgato x',
        precio: 192.99,
        cantidad: 0
    }
];

//Declaración de funciones
function iniciar(){
    almacenado = localStorage.getItem("catalogo");
    if (almacenado!=null){
        almacenado = JSON.parse(almacenado);
        catalogo = almacenado;
        refrescar();
    }
}

function anadir(producto){
    let objeto = catalogo[producto];
    objeto['cantidad'] += 1;
    catalogo[producto] = objeto;
    document.getElementById("id"+ producto).value = objeto['uds'];
    localStorage.setItem("catalogo", JSON.stringify(catalogo));
}

function refrescar(){
    let listaCatalogo = document.getElementById("catalogo");
    let total = 0;
    listaCatalogo.innerHTML = 0;
    for (var i=0; i<carro.length; i++){
        let producto = carro[i];
        if (producto[cantidad]>0){
            total = total + producto['cantidad']*producto['precio'];
        }
    }
    
}



//Scripts de página web de pago

function validar(){
    /*Nombre*/
    if(document.getElementById("nom").value == ''){
        document.getElementById("nombre").innerHTML = "Este campo es obligatorio"
    }
    else{
        document.getElementById("nombre").style.display = "none"
    }
    /*Apellidos*/
    if(document.getElementById("ape").value == ''){
        document.getElementById("apellido").innerHTML = "Este campo es obligario"
    }
    else{
        document.getElementById("apellido").style.display = "none"
    }
    /*Correo*/
    if(document.getElementById("cor").value == ''){
        document.getElementById("correo").innerHTML = "Este campo es obligatorio"
    }
    else{
        document.getElementById("correo").style.display = "none"
    }
    /*Tarjeta de crédito*/
    if(document.getElementById("credit").value == ''){
        document.getElementById("cr").innerHTML = "Este campo es obligatorio"
    }
    else{
        document.getElementById("cr").style.display = "none"
    }
    /*Condiciones*/
    if(condiciones.checked == false){
        document.getElementById("condicion").innerHTML = "Debes aceptar las condiciones del formulario"
    }
    else{
        document.getElementById("condicion").style.display = "none"
    }
}   
