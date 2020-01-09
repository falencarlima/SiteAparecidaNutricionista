var pacientes = document.querySelectorAll(".paciente");
var tdPeso = 0;
var tdAltura = 0;
var peso = 0;
var altura = 0;
var tdImc = 0;
for(var i = 0; i < pacientes.length; i++){
    tdPeso = pacientes[i].querySelector(".info-peso");
    tdAltura = pacientes[i].querySelector(".info-altura");
    peso = tdPeso.textContent;
    altura = tdAltura.textContent;
    tdImc = pacientes[i].querySelector(".info-imc");
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        tdPeso.textContent = "Peso Inválido";
        pacientes[i].classList.add("paciente-invalido");
        tdImc.textContent = "IMC Inválido";    
    }else if(!alturaEhValida){
        tdAltura.textContent = "Altura Inválida";
        pacientes[i].classList.add("paciente-invalido");
        tdImc.textContent = "IMC Inválido";
    }else{
        tdImc.textContent = calculaImc(peso, altura);
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / Math.pow(altura, 2);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura < 3){
        return true;
    }else{
        return false;
    }
}