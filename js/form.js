var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); // faz parar de dar refresh na pagina.
    
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    
    if(erros.length > 0){
        exibeMensagemDeErro(erros);
        return;
    }
    adicionaPacienteTabela(paciente);    
    form.reset();
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.innerHTML = "";
});


function adicionaPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes"); // selecionando o tBody no documento html
    tabela.appendChild(pacienteTr); //aqui falo para ele pegar esse elemento da tbody e adicionar nele como filho a pacientetr 

}


function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}


function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura:  form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){    
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura")); 
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}


function validaPaciente(paciente){

    var erros = [];

    if( paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco.");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é invalido");    
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é Invalida");
    }

    if( paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco.");
    }

    if(paciente.peso.length == 0){
        erros.push("Peso não pode ser em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("Altura não pode ser em branco");  
    }
    return erros;
}