class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    setMarca(marca){
        this.marca = marca;
    }

    getModelo(){
        return this.modelo;
    }

    buzina(){
        return this.modelo+" Biiiiii";
    }

}

const uno = new Carro("Fiat", "Uno", "2022");
console.log(uno);

uno.ano = 2010;
uno.setMarca("VW");

console.log(uno);
console.log(uno.buzina());

let texto = JSON.stringify(uno); //tranforma objeto em texto
console.log(texto);

let obj = JSON.parse(texto); //Transforma texto em objeto