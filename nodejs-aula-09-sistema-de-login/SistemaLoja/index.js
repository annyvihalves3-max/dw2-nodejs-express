// Importando o Express
// const express = require("express");
import express from "express";
// Importante o Controller de cliente (onde estão as rotas)
import ClienteController from "./controllers/ClienteController.js";
import PedidoController from "./controllers/PedidoController.js";
import ProdutoController from "./controllers/ProdutoController.js";
import UsuarioController from "./controllers/UsuarioController.js";

// Importando o EXPRESS-SESSION (gerador de sessões do express)
import session from "express-session";


// Importando o arquivo de conexão com o banco
import connection from "./config/sequelize-config.js";


// Importando os Models
import Cliente from "./models/Cliente.js";
import Pedido from "./models/Pedido.js";
import Usuario from "./models/Usuario.js";


// Importando o MIDDLEWARE DE AUTENTIFICAÇÃO
import Auth from "./middlewares/Auth.js";

// Importando as associações
import associations from "./config/associations.js";

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
    console.log(`Ocorreu um erro ao criar o banco de dados. Erro: ${error}`);
});

// Ivocando a função que cria as associações
associations();

// Sincronizando os Models de cliente e pedido
// Transformando as funções em promessas
Promise.all(
    [
        Cliente.sync({force: false}),
        Pedido.sync({force: false})
    ]
).then(() => {
    console.log("Entidades criadas e relacionadas com sucesso!")
}).catch(error => {
    console.log("Ocorreu um erro ao sincronizar os Models." + error);
});


// Iniciando o Express 
 const app = express();
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs');
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'));
// Configurando o Express para aceitar dados vindo de formularios
app.use(express.urlencoded({extended: false}));

// CONFIGURANDO A SESSÃO DE USUÁRI9O
app.use(session({
    secret: "minhalojasecret",
    cookie: {maxAge: 3600000}, // sessão expira em 1 hora (MUDAR DEPOIS)
    saveUninitialized: false, // Não salva sessões vazias (sem informações)
    resave: false, // Evita que ele re-salve sessão
}));

// Ativando o uso das Rotas
app.use("/", ClienteController);
app.use("/", PedidoController);
app.use("/", ProdutoController);
app.use("/", UsuarioController);

// ROTA PRINCIPAL
app.get("/", Auth, function(req,res){
    res.render("index")
});

// INICIA O SERVIDOR NA PORTA 8080
const port = 8081
app.listen(port, function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
});