var tabela = document.querySelector("table");

var titulo = document.querySelector(".subtitulo");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut"); //Removendo o texto com transition
    setTimeout( function(){
        event.target.parentNode.remove();
    },500);    
})

titulo.addEventListener("dblclick", function(event){
    event.target.classList.add("fadeOut");
    setTimeout(function(){
        event.target.remove();
    },500);
})
