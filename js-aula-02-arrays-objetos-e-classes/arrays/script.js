// DECLARANDO E EXIBINDO TENS DE UM ARRAY
let produtos = [];
// document.write(typeof(produtos));

let products = ["Computador", "Notebook", "Celular", "Tablet"];
document.write(`<p>${products}</p>`);

document.write(`<hr><p>Exibindo os elementos do vetor atráves do índice:</p>`);
document.write(`<p>${products[0]}</p>`);
document.write(`<p>${products[1]}</p>`);
document.write(`<p>${products[2]}</p>`);
document.write(`<p>${products[3]}</p>`);

document.write(`<hr><p>Exibindo os elementos do vetor através do forEach: </p>`);
products.forEach((product) => {
    document.write(`<p>${product}</p>`);
});

document.write(`<hr><p>Exibindo os elementos do vetor através do forEach COM ÍNDICE: </p>`);
products.forEach((product, i) => {
    document.write(`<p>${i+1} - ${product}</p>`);
});

//MÉTODOS DE MANIPULAÇÃO DE VETORES
let frutas = ['Laranja', 'Maça','Banana']
document.write(`<hr><p>Nossa lista de frutas é: ${frutas}</p>`)
frutas[3] = 'Morango'
document.write(`<p>Agora nossa lista de frutas é: ${frutas}</p>`);

document.write(`<hr><h4>O método PUSH - Insere um novo elemento no FINAL do vetor.</h4>`);
frutas.push('Abacaxi');
document.write(`<p>Agora nossa lista de frutas é: ${frutas}</p>`);

document.write(`<hr><h4>O método PUSH - Insere um novo elemento no INICIO do vetor.</h4>`);
frutas.unshift('Pera')
document.write(`<p>Agora nossa lista de frutas é: ${frutas}</p>`)

//COMO CONTAR OS ELEMENTES DE UM VETOR - Método LENGTH
const itens = frutas.length

document.write(`<hr><p>Na nossa lista temos ${itens} frutas.</p>`)

