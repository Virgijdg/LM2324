function farcel(){
    var numfar;
    numfar = document.getElementById("celcius").value;
    division = (numfar/1.8);
    resta = (division-32);
    alert('los celsius dados: '+numfar+' son: '+resta);
}

function celfar(){
    var numfar;
    numfar = document.getElementById("celcius").value;
    resta = (numfar-32);
    multiplicacion = (resta*5/9);
    alert('los celsius dados: '+numfar+' son: '+multiplicacion);
}