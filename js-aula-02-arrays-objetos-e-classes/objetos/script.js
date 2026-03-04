//OBJETOS LITERAIS NO JAVASCRIPT
document.write(`<h4>Objetos literais possuem Atributos (propriedades) e Métodos (funções)</h4>`)

const pessoa = {};
// document.write(typeof(pessoa))

// CRIANDO UM OBJETO
const carro = {
    //PROPRIEDADES
    modelo: "gol",
    cor:"vermelho",
    //MÉTODOS
    acelera() {
        return "Vrummmm...";
    },
    frear() {
        return "Freando...";
    },
};
document.write(`<hr><p>O modelo do carro é: ${carro.modelo}</p>`)
document.write(`<p>A cor do carro é: ${carro.cor}</p>`)
document.write(`<p>Quando o carro acelerar ele faz: ${carro.acelera()}</p>`)
document.write(`<p>Ativando os freios: ${carro.frear()}</p>`)

//MANIPULANDO ARRAYS DE OBJETOS
const productList = [
    {
        nome: "Computador",
        marca: "Lenovo",
        preco: 3000,
        descricao: "PC moderno com bom desempenho",
    }, 
    {
        nome: "Tablet",
        marca: "Sansung",
        preco: 2000,
        descricao: "Ótimo velocidade de processamento",
    }, 
    {
        nome: "Celular",
        marca: "Apple",
        preco: 12000,
        descricao: "Ultra resistente",
    },
];

//EXIBINDO O ARRAY OBJETOS ATRAVÉS DO FOREACH
document.write(`<hr><h4>Exibindo o array de objetos através do forEach:</h4>`)
productList.forEach((product) => {
    document.write(`
        Produto: ${product.nome} <br>
        Marca: ${product.marca} <br>
        Preço: ${product.preco} <br>
        Descricão: ${product.descricao} <br><br><hr>
        `);
});

