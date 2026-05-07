import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

//Criando o Model
// O método define() do Sequelize cria uma tabela no BD
const Produto = connection.define("produtos", {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    preco: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

// o MÉTODO SYNC() SICRONIZA OS DADOS COM O BANCO
// force: false não recria a tabela caso ela já exista
Produto.sync({force:false});
export default Produto;