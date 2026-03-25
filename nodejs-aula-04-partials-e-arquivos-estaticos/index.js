// O arquivo index.js é o arquivo principal do projeto

// IMPORTANDO O MÓDULO DO "EXPRESS"
const express = require("express");

// CRIANDO UMA INSTÂNCIA DO EXPRESS
const app = express();

//CONFIGURANDO O EJS
app.set("view engine", "ejs");

// DEFININDO A PASTA "PUBLIC" COMO DIRETORIO PARA ARQUIVOS ESTÁTICOS
app.use(express.static('public'));

// CRIANDO A ROTA PRINCIPAL DO SITE ("/")
app.get("/", function(req, res){ //req- enviar um requisição para o servidor -- res- resposta para o usuario
    // res.send("<h1>Bem-vindo ao meu primeiro site em Node.js e Express.js!</h1>");
    res.render("index")
});

// CRIANDO A ROTA DE PERFIL DE USUARIO
app.get("/perfil", function(req,res){
    // res.send("<h2>Bem-vindo ao seu perfil!</h2>");
    res.render("perfil");
});

//ROTA DE CLIENTES
app.get("/clientes", function(req,res){
    const listarClientes = ["Anny","Carol", "Natasha","Maria","Elias"];
    res.render("clientes",{
        listarClientes : listarClientes,
    });
});

//ROTA DE CLIENTES - COM PARAMETROS
app.get("/clientes/:cliente", function(req,res){
    const cliente = req.params.cliente;

    res.render("detalhesCliente",{
        cliente : cliente,
    });
});

//ROTA DE PRODUTOS 
app.get("/produtos/", function(req,res){
     const listaProdutos = ["Computador","Celular","Tablet", "Notebook"];
    // Enviando uma variavel a pagina HTML
    res.render("produtos", {
         listaProdutos : listaProdutos,
    });
});

//ROTA DE PRODUTOS - COM PARAMETROS
app.get("/produtos/:produto", function(req,res){
    const produto = req.params.produto;

    res.render("detalhesProduto", {
        produto : produto,
    });
});


app.get("/servicos", function(req,res){

    // ARRAY DE OBJETO
    const servicos = [
        {servico:"Desenvolvimento de websites", 
        descricao: "Criação de sites com Node.js e integração a banco de dados", 
        preco: 3500},
        {servico:"Auditoria de UX/UI", 
        descricao: "Avaliação da usabilidade de sistemas com sugestões de melhora", 
        preco: 1800},
        {servico:"Infraestrututa em nuvem", 
        descricao: "Configuração de serviços e hospedagem de aplicações", 
        preco: 2900},
        {servico:"Chatbot com IA", 
        descricao: "Desenvolvimento de chatbot para atendimento automático", 
        preco: 2750},
    ]

    res.render("servicos",{
        //Enviando o array de objeto para pagina
        servicos : servicos
    });
});

// INICIANDO O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port, (error) => {
    if (error){
        console.log("Ocorreu um erro ao iniciar o servidor!" + error);
    } else{
        console.log(`Servidor iniciado com sucesso na porta no endereço: http://localhost:${port}`);
    }
});

// node index.js 

