function convertir(divisa){
    let valor = document.getElementById("cantidad").value;
    let resultado = 0;
    if (divisa == "euro"){
        resultado = valor * 0.91;
        document.getElementById("resultado").innerHTML = resultado + " €";
    }
    else{
        resultado = valor * 1.09504;
        document.getElementById("resultado").innerHTML = resultado + " $";
    }
}