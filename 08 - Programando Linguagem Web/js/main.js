var titulo = document.querySelector("[data-titulo]");
titulo.textContent = "Skynet Nutricionista";
var paciente1 = document.querySelector("[data-paciente1]")

var pesoPaciente1 = document.querySelector("[data-info-peso1]")
var peso = pesoPaciente1.textContent

var alturaPaciente1 = document.querySelector("[data-info-altura1]")
var altura = alturaPaciente1.textContent

var tdIMC = document.querySelector("[data-info-imc1]")

tdIMC.textContent = imc

var alturaEhValido = true
var pesoEhValido = true


if (peso <= 0 || peso >= 200) {
    console.log("Peso invalido")
    var pesoEhValido = false
    tdIMC.textContent = "Peso invalido"
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura invalida")
    var alturaEhValido = false
    tdIMC.textContent = "Altura invalida"
}

if (alturaEhValido && pesoEhValido) {
    var imc = peso / (altura * altura)
    tdIMC.textContent = imc

}













