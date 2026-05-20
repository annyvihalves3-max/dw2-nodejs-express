// CONTROLLER DE USUÁRIO
import express from "express";
const router = express.Router();
// IMPORTANDO O MODEL
import Usuario from "../models/Usuario.js";

// importando o bcrypt (hash de senha)
import bcrypt from "bcrypt";


// ROTA DE LOGIN
router.get("/login", (req, res) => {
  res.render("login", {
    // COLETANDO AS MENSAGENS
    messages: req.flash(),
    loggedOut: true,
  });
});

// ROTA DE LOGOUT
router.get("/logout", (req, res) => {
  // Lipando a sessão
  req.session.usuario = undefined
  res.redirect("/")
});

// ROTA DO FORMULÁRIO DE CADASTRO DO USUÁRIO
router.get("/cadastro", (req, res) => {
  res.render("cadastro", {
    // RECEBENDO AS MENSAGENS
    messages : req.flash(),
    loggedOut: true,
  });
});

// ROTA DE CRIAÇÃO DE USUÁRIO NO BANCO
router.post("/caduser", (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;
  // VERIFICANDO SE O USUÁRIO JÁ EXISTE
  Usuario.findOne({ where: { email: email }}).then((usuario) => {
    if (usuario == undefined) {
      // AQUI SERÁ FEITO O HASH DE SENHA
      // Criando "sal" do hash
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(senha, salt);
      // Enviando para o banco
      Usuario.create({
        email: email,
        senha: hash,
      }).then(() => {
          res.redirect("/login");
        }).catch((error) => {
          console.log("Não foi possível cadastrar o usuário." + error);
        });
    } else {
        req.flash('danger', 'O usuário já está cadastrado! Faça o login')
        res.redirect("/cadastro")
    }
  });
});

// ROTA DE AUTENTIFICAÇÃO (LOGIN)
router.post("/autenticacao", (req, res) => {
    // CAPTURANDO OS DADOS DO FORMULÁRIO DE LOGIN
    const email= req.body.email
    const senha = req.body.senha
    // BUSCANDO O USÚARIO NO BANCO
    Usuario.findOne({where: {email:email}}).then((usuario) => {
        if (usuario != undefined) {
            // VALIDA A SENHA
            const correct = bcrypt.compareSync(senha, usuario.senha)
            // SE A SENHA FOR VÁLIDA
            if(correct){
                // AUTORIZA O LOGIN
                // CRIA A SESSÃO PARA O USUÁRIO
                req.session.usuario = {
                    // INSERINDO AS INFORMAÇÕES DO USUARIO NA SESSÃO
                    id:  usuario.id,
                    email: usuario.email
                }
                // res.send(`Sessão do usuário criada com sucesso!
                //     <br> ID do usuário logado: ${req.session.usuario['id']}
                //     <br> E-mail do usuário logado: ${req.session.usuario['email']}`)


                // ENVIANDO ALERTA DE SUCESSO
                req.flash('success', 'Login efetuado com sucesso!');
                res.redirect("/");
                // SE A SENHA ESTIER INCORRETA
            } else {
              // ENVIANDO ALERTA
              req.flash('danger', "A senha informada está incorreta! Tente novamente.")
              res.redirect("/login")
                
            }
            // CASO O USUÁRIO NÃO EXISTA
        } else {
            req.flash('danger', "O usuário não existe! Verifique os dados e tente novamente.")
            res.redirect("/login")
        }
    });
});


// EXPORTANDO O MÓDULO
export default router;
