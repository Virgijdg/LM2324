function ocultar_mostrar(caja){
    if (document.getElementById(caja).style.visibility="hidden" || document.getElementById(caja).style.visibility == '')
        document.getElementById(caja).style.visibility="visible"
    else
    document.getElementById(caja).style.visibility="hidden"
}