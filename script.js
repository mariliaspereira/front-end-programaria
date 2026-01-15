document.getElementById("botao-enviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != ""){
    alert("Prontinho! Você receberá nossas novidades por email.")
  }else{
    alert("Por favor, preencha os campos nome e email!")
  }
}

