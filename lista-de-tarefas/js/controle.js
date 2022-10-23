let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
let contador = 0;

 function adicionarTarefa(){
    let valorInput = input.value;

    if((valorInput !== "") && (valorInput != null) && (valorInput != undefined)){
        
        ++contador;

        let novoItem = `<div class="item" id="${contador}">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
        ${valorInput}
        </div>
        <div class="item-botao">
            <button class="delete" onclick="deletar(${contador})"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>
    </div>`;

    main.innerHTML += novoItem;

    input.value = "";
    input.focus();
    }
}

function marcarTarefa(indice){
    var item = document.getElementById(indice);
    var classe = item.getAttribute('class');
    if(classe == "item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_'+ indice);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);//Vai pro final da lista
    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_'+ indice);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

function deletar(indice){
    var tarefa = document.getElementById(indice);
    tarefa.remove();
}


input.addEventListener("keyup", function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        btnAdd.click();
    }
});