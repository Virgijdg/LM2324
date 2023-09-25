function eurodolar(){
    var numeuro;
    numeuro = document.getElementById("euro").value;
    multiplicación = (numeuro*1.08);
    alert('los euros dados: '+numeuro+' son: '+multiplicación);
}
function dolareuro(){
    var numdolar;
    numdolar = document.getElementById("dolar").value;
    multiplicación = (numdolar*0.92);
    alert('los dolares dados: '+numdolar+' son: '+multiplicación);
}