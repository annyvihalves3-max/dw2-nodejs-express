// EXERCICIO 1

const listaClientes = [
    {
        nome: "Anny",
        endereco: "Rua das Flores, 123",
        cpf: 20382921000,
    }, 
    {
        nome: "Julia",
        endereco: "Avenida Brasil, 456",
        cpf: 12345678900,
    }, 
    {
        nome: "Michele",
        endereco: "Travessa das Palmeiras, 789",
        cpf: 98765432100,
    },
];

// EXERCICIO 2

document.write(`<hr><h3>Exercício 1 e 2:</h3>`)
listaClientes.forEach((cliente) => {
    document.write(`
        Nome do cliente: ${cliente.nome} <br>
        Endereço do cliente: ${cliente.endereco} <br>
        CPF do cliente: ${cliente.cpf} <br><br><hr>
        `);
});

// EXERCICIO 3
document.write(`<h3>Exercício 3:</h3>`)
listaClientes.push({
    nome: "Carol",
    endereco: "Rua das Frutas, 100",
    cpf: 12221333110,
});

document.write("<h4>Lista Atualizada:</h4>");

listaClientes.forEach(cliente => {
    document.write(`
        Nome: ${cliente.nome} <br> 
        Endereço: ${cliente.endereco} <br>
        CPF: ${cliente.cpf} <br><br><hr>
        `);
});

// EXERCICIO 4

document.write("<h3>Exercício 4:</h3>");
listaClientes.unshift({
    nome: "Natasha",
    endereco: "Avenida das Árvores, 200",
    cpf: 99887766554,
});

document.write("<h4>Lista Atualizada:</h4>");
listaClientes.forEach(cliente => {
    document.write(`
        Nome: ${cliente.nome} <br> 
        Endereço: ${cliente.endereco} <br>
        CPF: ${cliente.cpf} <br><br><hr>
        `);
});

// EXERCICIO 5

document.write("<h3>Exercício 5:</h3>");

const clientes = listaClientes.length
document.write(`<p>O número de clientes existentes na lista é: ${clientes}</p>`)