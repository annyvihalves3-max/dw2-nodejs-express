// O arquivo index.js é o arquivo principal do projeto

// IMPORTANDO O MÓDULO DO "EXPRESS"
const express = require("express");

// CRIANDO UMA INSTÂNCIA DO EXPRESS
const app = express();

//CONFIGURANDO O EJS
app.set("view engine", "ejs");

// CRIANDO A ROTA PRINCIPAL DO SITE ("/")
app.get("/", function(req, res){ //req- enviar um requisição para o servidor -- res- resposta para o usuario
    // res.send("<h1>Bem-vindo ao meu primeiro site em Node.js e Express.js!</h1>");
    res.render("index")
});

// CRIANDO A ROTA DE PERFIL DE USUARIO
app.get("/perfil", function(req,res){
    // res.send("<h2>Bem-vindo ao seu perfil!</h2>");
    res.render("perfil")
});
app.get("/clientes", function(req,res){
    res.render("clientes")
})
app.get("/produtos", function(req,res){
    res.render("produtos")
})
app.get("/servicos", function(req,res){
    res.render("servicos")
})

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

