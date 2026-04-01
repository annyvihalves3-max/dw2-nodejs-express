// Importando o Express
// const express = require("express");
import express from "express";
// Importante o Controller de cliente (onde estão as rotas)
import ClienteController from "./controllers/ClienteController.js";
import PedidoController from "./controllers/PedidoController.js";
import ProdutoController from "./controllers/ProdutoController.js";


// Iniciando o Express 
 const app = express();
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})

// Ativando o uso das Rotas
app.use("/", ClienteController);
app.use("/", PedidoController);
app.use("/", ProdutoController);


// INICIA O SERVIDOR NA PORTA 8080
const port = 8080
app.listen(port, function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})