// Importando o Express com ES6 Modules (nova)
import express from "express";
// Método do Express usado para criar as rotas da aplicação
const router = express.Router();

import Pedido from "../models/Pedido.js";
import Cliente from "../models/Cliente.js";

// Importando o MIDDLEWARE DE AUTENTIFICAÇÃO
import Auth from "../middlewares/Auth.js";

// ROTA PEDIDOS
router.get("/pedidos", Auth, function(req,res){
    //  Fazendo INNER JOIN para trazer as informações do Clinete junto com as informações do pedido

    // Realizando ambas as consultas em paralelo
    Promise.all([
    Pedido.findAll({
        include: [
            {
                model:  Cliente, // Inclui o modelo Cliente relacionado
                required: true, // Garante que somente pedidos com cliente relacionados sejam retornados
            },
        ],
    }),
    // Buscando todos os clientes
    Cliente.findAll(),
    ])
    .then(([pedidos, clientes]) => {
        // Passando a lista de pedidos para a página
        res.render ("pedidos", {
            pedidos : pedidos,
            clientes : clientes
    });
    })
.catch(error => {
        console.log(`Ocorreu um erro ao listar os pedidos. ${error}`)
    });
});

// ROTA DE CADASTRO DE PEDIDOS
router.post("/pedidos/cadastrar", Auth, (req, res) => {
    // CAPTURAR OS DADOS DO FORMULARIO
    const numero = req.body.numero;
    const valor = req.body.valor;
    const clienteId = req.body.clienteId;
    // CADASTRANDO NO BANCO
    Pedido.create({
        numero : numero,
        valor: valor,
        cliente_id: clienteId,
    }).then(() => {
        res.redirect("/pedidos");
    }).catch(error => {
        console.log(error);
    });
});

// ROTA DE EXCLUSÃO DE PEDIDOS
router.get("/pedidos/excluir/:id", Auth, (req, res) => {
    const id = req.params.id;
    Pedido.destroy({
        where: {
            id:id,
        },
    }).then(() => {
        res.redirect("/pedidos");
    }).catch(error => {
        console.log(error);
    });
});

// Exportando o módulo para usá-lo em outro arquivo
export default router;