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
};//objeto literal, é determinado os valores deretamente
console.log(carro);
//carro.buizina();

document.getElementById("texto").innerHTML= soma(a, b);