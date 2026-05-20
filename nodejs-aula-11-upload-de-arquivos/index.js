import express from "express";

// Importando a biblioteca multer
import multer from 'multer';
// IMPORTANDO ARQUIVO DE CONEXÃO
import connection from "./config/sequelize-config.js";

import Galeria from "./models/Galeria.js";

const app = express();

// Realizando conexão
connection.authenticate().then(() => {
    console.log( "Conexão realizada com sucesso!");
}).catch((error) => {
    console.log(error);
});

// Criando o BD
connection.query("CREATE DATABASE IF NOT EXISTS galeria;").then(() => {
    console.log("O bando de dados está criado!");
}).catch(error => {
    console.log(error);
});

// Configurando a pasta public
app.use(express.static('public'))

// Configurando o EJS
app.set('view engine', 'ejs')

// Configurando o MULTER
const upload = multer({dest: "public/uploads/"})

const port = 8081;

// ROTA PRINCIPAL
app.get("/", (req,res) => {
    // Selecionando todas as imagens do banco
    Galeria.findAll().then(imagens => {
        res.render("index", {
            imagens : imagens
        });
    }).catch(error => {
        console.log(error)
    });
});

// ROTA DE UPLOAD
app.post("/upload", upload.single("file"),(req,res) =>{
    // GRAVANDO O NOME DO ARQUIVO GERADO PELO MULTER NA VARIAVEL "FILE"
    const file = req.file.filename
    Galeria.create({
        arquivo : file
    }).then(() => {
        res.redirect("/")
    }).catch(error => {
        console.log("Não foi possível gravar o arquivo no banco de dados!" +error)
    })
});

app.listen(port, (error) => {
    if(error){
        console.log(`Ocoreu um erro ao iniciar o servidor! ${error}`);
    }else {
        console.log(`Servidor iniciado com sucesso em : http://localhost:${port}`);
    }
});