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
    /*PIN*/
    if(document.getElementById("pi").value == ''){
        document.getElementById("pin").innerHTML = "Este campo es obligatorio"
    }
    else{
        document.getElementById("pin").style.display = "none"
    }
    /*Repetir PIN*/
    if(document.getElementById("rep").value == ''){
        document.getElementById("repetir").innerHTML = "Este campo es obligatorio"
    }
    else{
        document.getElementById("repetir").style.display = "none"
    }
    /*Condiciones*/
    if(condiciones.checked == false){
        document.getElementById("condicion").innerHTML = "Debes aceptar las condiciones del formulario"
    }
    else{
        document.getElementById("condicion").style.display = "none"
    }
}   