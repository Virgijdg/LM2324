let posts = ["Mi primer tweet","LM es la mejor clase","¡Por fin viernes!"]
imprimePosts();
function ordenar(){
    posts.sort();
    imprimePosts();
}
function eliminar(elemento){
    let pos = posts.index0f(elemento);
    posts.splice(pos,1);
    imprimePosts();
}
function anadir(){
    var mensaje = document.getElementById("post").value;
    posts.push(mensaje)
    imprimePosts();
}
function imprimePosts(){
    let longitud=posts.length;
    let i=0, codigoHTML="";
    let icono="<div class='tweet'><img src='iconoTwitter.png'>";
    for(i=0;i<longitud;i++){
        codigoHTML+=icono+posts[i]+" <button class=\"btn-image\" onclick='eliminar(posts["+i+"]);''></button><br></div>";
    }
    document.getElementById("demo").innerHTML=codigoHTML;
}