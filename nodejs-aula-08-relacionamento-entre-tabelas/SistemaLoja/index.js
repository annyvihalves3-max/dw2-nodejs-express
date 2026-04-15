// Importando o Express
// const express = require("express");
import express from "express";
// Importante o Controller de cliente (onde estão as rotas)
import ClienteController from "./controllers/ClienteController.js";
import PedidoController from "./controllers/PedidoController.js";
import ProdutoController from "./controllers/ProdutoController.js";


// Importando o arquivo de conexão com o banco
import connection from "./config/sequelize-config.js";

// Realizando a conexão com o banco de dados
connection.authenticate().then(() => {
    console.log("Conexão com o banco de dados realizado com sucesso!")
}).catch((error) => {
    console.log(`Ocorreu um erro ao se conectar ao banco. ${error}`)
});

// Criando o banco de dados (somente se ainda não existe)
connection.query("CREATE DATABASE IF NOT EXISTS loja_relacional;").then(() => {
    console.log("O banco de dados está criado!");
}).catch((error) =>{
    console.log("Ocorreu um erro ao criar o banco de dados. Erro: ${error}");
});

// Iniciando o Express 
 const app = express();
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs');
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'));
// Configurando o Express para aceitar dados vindo de formularios
app.use(express.urlencoded({extended: false}));

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
});

// Ativando o uso das Rotas
app.use("/", ClienteController);
app.use("/", PedidoController);
app.use("/", ProdutoController);


// INICIA O SERVIDOR NA PORTA 8080
const port = 8081
app.listen(port, function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
});