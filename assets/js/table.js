var adicionarPaciente = document.querySelector("#adicionar");
adicionarPaciente.addEventListener("click", function(event) {

    event.preventDefault(); 

    var form = document.querySelector("#form-adiciona");

    var ferramenta = obtemFerramentaDoFormulario(form);

    adicionaFerramentaNaTabela(ferramenta);

    form.reset();

});

function obtemFerramentaDoFormulario(form) {

    var ferramenta = {
        nome: form.nome.value,
        qtd: form.qtd.value,
        nomeUsuario: form.nomeUsuario.value,
        status: "Em uso"
        
    }

    return ferramenta;
}

function montaTr(ferramenta_uso) {
    var ferramentaTr = document.createElement("tr");
    ferramentaTr.classList.add("ferramenta_uso");

    ferramentaTr.appendChild(montaTd(ferramenta_uso.nome, "info-nome"));
    ferramentaTr.appendChild(montaTd(ferramenta_uso.qtd, "info-Qtd."));
    ferramentaTr.appendChild(montaTd(ferramenta_uso.nomeUsuario, "info-user"));
    ferramentaTr.appendChild(montaTd(ferramenta_uso.status, "info-status"));

    return ferramentaTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function adicionaFerramentaNaTabela(ferramenta_uso) {
    var ferramentaTr = montaTr(ferramenta_uso);
    var tabela = document.querySelector("#tabela-corpo");
    tabela.appendChild(ferramentaTr);
}
