var titulo = document.querySelector(".titulo");
var tituloPacientes = document.querySelector(".subtitulo");

titulo.textContent = "Nutricionismo para pobres";
tituloPacientes.textContent = "Pacientes da ZL";

var pacientes = document.querySelectorAll(".paciente");
for(var i=0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var pesoPaciente = paciente.querySelector(".info-peso");
    var alturaPaciente = paciente.querySelector(".info-altura");

    var peso = pesoPaciente.textContent;
    var altura = alturaPaciente.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

        
    var resulimc = paciente.querySelector(".info-imc");

    var cordoerro = "lightcoral";

    if(!pesoValido){
        resulimc.textContent = "Peso invalido";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
        pesoPaciente.classList.add("peso-invalido");
    }

    if(!alturaValida){
        resulimc.textContent = "Altura Invalida";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
        alturaPaciente.classList.add("altura-invalida");
    }

    if(alturaValida && pesoValido){
        var imc = calculaImc(peso,altura);
        resulimc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 500){
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if(altura >= 0 && altura <= 3.50){
        return true;
    }else{
        return false;
    }
}


function calculaImc(peso,altura){
    var imc = 0;
    imc = peso/(altura * altura);
    return imc.toFixed(2);
}

