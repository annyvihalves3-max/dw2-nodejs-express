// MIDDLEWARE DE AUTENTICAÇÃO

function Auth(req, res, next) {
  //Verifica se existe uma sessão para o usuário
  if (req.session.usuario != undefined) {
    // Permite o prosseguimento
    next();
    // Se não existir a sessão
  } else {
    // Exibe a página de login para o usuário
    res.render("login");
  }
}

export default Auth;


