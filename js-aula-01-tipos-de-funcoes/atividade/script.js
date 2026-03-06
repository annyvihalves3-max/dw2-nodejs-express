// EXERCICIO 1

document.write(`<hr><h3>Exercicio 1</h3>`)
function showMessage(){
    const message = "<p>Anny Vitoria, 21, Sete Barras</p>"
    document.write(message)
};

showMessage();

// EXERCICIO 2 

document.write(`<hr><h3>Exercicio 2</h3>`)
const n1 = 10;
const n2 = 5;

function divisao(n1, n2){
    let result = n1 / n2;
    document.write(`<p>O resultado da divisão de ${n1} / ${n2} é igual a ${result}</p>`)
};

divisao(n1, n2);


// EXERCICIO 3

document.write(`<hr><h3>Exercicio 3</h3>`)
const num1 = 50;
const num2 = 3;
const num3 = 2;

function mult(num1, num2, num3){
    return num1 * num2 * num3;
};
document.write(`<p>O resultado da multiplicação de ${num1} * ${num2} * ${num3} é igual a ${mult(num1, num2, num3)}.</p>`);

// EXERCICIO 4

document.write(`<hr><h3>Exercicio 4</h3>`)
const number = 20;

function idade(number){
    if (number >= 18){
    return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}
document.write(`<p>Você tem ${number} anos e é ${idade(number)}.</p>`);

// EXERCICIO 5

document.write(`<hr><h3>Exercicio 5</h3>`)
const nota1 = 4;
const nota2 = 5;

const calcularNota = function(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    
    if (media <= 5) {
        return "Reprovado";
    } else {
        return "Aprovado";
    }
};


document.write(`<p>Com resultado da média do aluno ele está ${calcularNota(nota1, nota2)}.</p>`);

// EXERCICIO 6
document.write(`<hr><h3>Exercicio 6</h3>`)
const triplo = (x) => { 
    return x * 3;
};

const x =300;
document.write(`<p> O triplo de ${x} é ${triplo(x)}.</p>`);

// EXERCICIO 7

const a = 20;
const b = 6;
const c = 4;
const d = 12;

const calculadora = (a, b, c, d) => {
    return a + b + c + d;
};

document.write(`<hr><h3>Exercicio 7</h3>`)
document.write(`<p>O resultado da operação matemática é ${calculadora(a, b, c, d)}.</p>`);