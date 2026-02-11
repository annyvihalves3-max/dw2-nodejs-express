// Comentario de linha
/* Comentario de bloco*/

// Variaveis podem ser declaradas de tres formas:
// VAR, LET E CONST

// VAR: No geral evita o seu o useOptimistic, pode não ser muito seguro.
// LET: Utilize quando for necessário reatribuir o valor da variável.
// CONST: Utilize quando NÃO precisar reatribuir o valor da variável.

var cidade = "Registro";
var cidade = "Sete Barras";
document.write(cidade);

let nome = "Diego";
nome = "Anny";
document.write("<br>");
document.write(nome);

const pais = "Brasil";
pais = "Argentina";
document.write("<br>");
document.write(pais);
// O valor de uma constante não pode ser alterado
