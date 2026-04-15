import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";

//Criando o Model
// O método define() do Sequelize cria uma tabela no BD
const Cliente = connection.define("clientes", {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

// o MÉTODO SYNC() SICRONIZA OS DADOS COM O BANCO
// force: false não recria a tabela caso ela já exista
Cliente.sync({force:false});
export default Cliente;
