var tabela  = document.querySelector("#tabela_ferramentas");

tabela.addEventListener("click", function(event){
    
  var elementoClicado = event.target;

  if(elementoClicado.classList.contains("info-status")){

    elementoClicado.classList.toggle('muda_cor');
    elementoClicado.textContent = "Devolvida!";

  }

})