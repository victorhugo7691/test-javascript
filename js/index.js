document.getElementById("texto").innerHTML= "Texto do javascript";

let a,b,c;
a=5;
b=6;
c=7;

var ba = 1;
console.log(ba+a);

/* Tipos de variáveis
var: aceita atribuir os valores várias vezes
let: a variável é unica, não pode ser redeclarada e trabalha dentro do escopo
const: nunca muda
*/
var idade = 18;

eleitor = (idade<18) ? "Não eleitor" : "Eleitor";

function soma(x, y){
    return x+y;
}

mensagem = function(){
    alert("OLA WORLD");
}

let carro = {
    marca:"VW", 
    modelo:"Gol", 
    ano:2020, 
    placa:"ABC-1232",
    buizina: function(){ alert("Biiiiiii")},
    completo: function(){ return "A marca e "+ this.marca }
};//objeto literal, é determinado os valores diretamente
console.log(carro);
//carro.buizina();

document.getElementById("texto").innerHTML= soma(a, b);

alteraACor = function(){
    let div = document.getElementById("div");
    div.style.backgroundColor = "red";
};

select = function(){
    console.log("Mudou a opção")
}

//array

const lista = ["arroz", "feijão", "carne", "macarrão"];
const lista2 = ["Leite", "Suco", "Bolo", "Salgado", "Chá"];
lista.push("Pamonha");
//Remove o ultimo item lista.pop();
//Remove o primeito item lista.shift();
//Altera o item lista.unshift("Bonitao");
//Deleta elemento da posição delete lista[0];
//Adiciona novos itens lista.splice(1, 0, "Item adicionado 1", "Item adicionado 2");

Array.isArray(lista);

const superLista = lista.concat(lista2);
console.log(superLista);

imprimirALista = function(){
    for(let i=0; i < lista.length; i++){
        console.log(lista[i]);
    }

    console.log("");
    lista.forEach(elemento => console.log(elemento));
}

//Fatiar o array
const fatia = lista2.slice(1, 3);
console.log(fatia);

console.log(lista.sort()); //imprime em ordem alfabética
//sort para numeros
//numeros.sort(function(a, b){ return a-b });
lista.reverse(); //inverte a ordem atual

const numeros = [10, 20, 50, 9, 2];
const maior20 = numeros.filter(filtragem);

document.getElementById("vetor").innerHTML = lista.join(" - "); //separa cada elemento com -

console.log(maior20);

function filtragem(value, index, array){
    return value > 20;
}

var horaAtual = new Date().getHours();
document.getElementById("relogio").innerHTML = horaAtual;

//tornar a letra minuscula
// palavra.toLowerCase();

for(let i = 0; i < 11; i++){
    document.getElementById("texto2").innerHTML += i + ", ";
}

selecaoDeAno = function (){
    var ano = new Date().getFullYear();

    for(let i = ano; i >= 1996; i--){
        document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
    }
}

var tempo = 0;

apresentarTime = function(){
    setTimeout(function(){
        console.log("Executou timeout com 5000s");
    },5000);
}

timerDeVisualizacao = function(){//Roda a cada 5000s
    setInterval(function(){
        tempo = tempo + 5000;
        console.log("Visualização em "+ tempo);
    }, 5000);
}

selecaoDeAno();
timerDeVisualizacao();
apresentarTime();