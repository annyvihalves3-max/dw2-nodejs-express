// CLASSES N JAVASCRIPT

// Nome de classes deve iniciar com a primeira letra maiuscula 
class Carro {
    //DEFININDO OS ATRIBUTOS
    constructor(marca, modelo, ano){
        // this É UMA REFERENCIA ÀS INSTÂNCIAS QUESERÃO CRIADAS ATRAVÉS DESSA CLASSE
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;    
    }
    
    // DEFININDO OS MÉTODOS
    buzinar(){
        return "Beep, Beep!";
    }
}

// INSTÂNCIANDO OBJETOS
const carroPopular = new Carro("Fiat", "Uno","2012");

document.write(`<p>O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e quando buzina faz ${carroPopular.buzinar()}</p>`,);

class CarroEsportivo {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;    
    }
    
    // DEFININDO OS MÉTODOS
    buzinar(){
        return "Beep, Beep!";
    }
    turbo(){
        return "Vrummm...";
    }
}

const carroEsportivo = new CarroEsportivo ("Chevrolet", "Camaro","2020");

document.write(`<p>O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano}, turbo e quando acelera faz ${carroEsportivo.turbo()} e quando buzina faz ${carroEsportivo.buzinar()}</p>`,);
