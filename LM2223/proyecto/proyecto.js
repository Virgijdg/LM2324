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

var precioTotal = 0;

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
    document.getElementById("id"+ producto).value = objeto['cantidad'];
    localStorage.setItem("catalogo", JSON.stringify(catalogo));
    refrescar();
}

function quitar(producto){
    let objeto = catalogo[producto];
    let unidades = objeto['cantidad'];
    if (unidades >= 1){
        objeto['cantidad'] -= 1;
        catalogo[producto] = objeto;
        document.getElementById("id" + producto).value = objeto['cantidad'];
        localStorage.setItem("catalogo", JSON.stringify(catalogo));
        refrescar();
    }
}

function refrescar(){
    let listaCatalogo = document.getElementById("catalogo");
    let total = 0;
    listaCatalogo = 0;
    for (var i=0; i<catalogo.length; i++){
        let producto = catalogo[i];
        if (producto['cantidad']>0){
            document.getElementById("id"+i).value = producto["cantidad"];
            total = total + producto['cantidad']*producto['precio'];
        }
    }
    document.getElementById("enTotal").innerHTML =  total.toFixed(2) + "€";
    localStorage.setItem("total", JSON.stringify(total));
}

function pagar(){
    window.location.href = "pago.html";
}

function inicio(){
    precioTotal = localStorage.getItem("total");
    document.getElementById("aPagar").innerHTML = "El precio total a pagar es de: " + precioTotal + "€";
}

//Scripts de página web de pago

function pagarTotal(){
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
    /*Condiciones*/
    if(condiciones.checked == false){
        document.getElementById("condicion").innerHTML = "Debes aceptar las condiciones del formulario"
    }
    else{
        document.getElementById("condicion").style.display = "none"
    }
}   

function cardFormValidate(){
    var cardValid = 0;

    //card number validation
    $('#card_number').validateCreditCard(function(result){
        if(result.valid){
            $("#card_number").removeClass('required');
            cardValid = 1;
        }else{
            $("#card_number").addClass('required');
            cardValid = 0;
        }
    });
      
    //card details validation
    var cardName = $("#name_on_card").val();
    var expMonth = $("#expiry_month").val();
    var expYear = $("#expiry_year").val();
    var cvv = $("#cvv").val();
    var regName = /^[a-z ,.'-]+$/i;
    var regMonth = /^01|02|03|04|05|06|07|08|09|10|11|12$/;
    var regYear = /^2017|2018|2019|2020|2021|2022|2023|2024|2025|2026|2027|2028|2029|2030|2031$/;
    var regCVV = /^[0-9]{3,3}$/;
    if (cardValid == 0) {
        $("#card_number").addClass('required');
        $("#card_number").focus();
        return false;
    }else if (!regMonth.test(expMonth)) {
        $("#card_number").removeClass('required');
        $("#expiry_month").addClass('required');
        $("#expiry_month").focus();
        return false;
    }else if (!regYear.test(expYear)) {
        $("#card_number").removeClass('required');
        $("#expiry_month").removeClass('required');
        $("#expiry_year").addClass('required');
        $("#expiry_year").focus();
        return false;
    }else if (!regCVV.test(cvv)) {
        $("#card_number").removeClass('required');
        $("#expiry_month").removeClass('required');
        $("#expiry_year").removeClass('required');
        $("#cvv").addClass('required');
        $("#cvv").focus();
        return false;
    }else if (!regName.test(cardName)) {
        $("#card_number").removeClass('required');
        $("#expiry_month").removeClass('required');
        $("#expiry_year").removeClass('required');
        $("#cvv").removeClass('required');
        $("#name_on_card").addClass('required');
        $("#name_on_card").focus();
        return false;
    }else{
        $("#card_number").removeClass('required');
        $("#expiry_month").removeClass('required');
        $("#expiry_year").removeClass('required');
        $("#cvv").removeClass('required');
        $("#name_on_card").removeClass('required');
        return true;
    }
}
$(document).ready(function() {
    //card validation on input fields
    $('#paymentForm input[type=text]').on('keyup',function(){
        cardFormValidate();
    });
});