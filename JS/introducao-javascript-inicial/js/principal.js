// var titulo = document.querySelector(".titulo");
// titulo.textContent = "Nutricionista Aparecida";

var peso = document.querySelector(".info-peso"); 
var altura = document.querySelector(".info-altura");
var imc = document.querySelector(".info-imc");
imc.textContent =  peso.textContent/(altura.textContent * altura.textContent);
console.log(imc);

