
// Importando o Express com ES6 Modules (nova)
import express from "express";
// Método do Express usado para criar as rotas da aplicação
const router = express.Router();

import Produto from "../models/Produto.js";

// ROTA PRODUTOS
router.get("/produtos",function(req,res){
    Produto.findAll().then(produtos => {
        res.render("produtos", {
             produtos : produtos
    });
}).catch(error => {
    console.log("Ocorreu um erro ao buscar os produtos" + error)
});
});

router.post("/produtos/cadastrar", (req,res) => {
    const nome = req.body.nome;
    const preco = req.body.preco;
    const categoria = req.body.categoria;

    Produto.create({
        nome : nome,
        preco : preco,
        categoria : categoria
    }).then(() => {
        res.redirect("/produtos")
    }).catch(error => {
        console.log("Ocorreu um erro ao cadastrar o produto." + error)
    });
});



// Exportando o módulo para usá-lo em outro arquivo
export default router;
