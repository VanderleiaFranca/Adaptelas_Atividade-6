/* Problema 3: Crie uma função que recebe um número (x) como parâmetro e determine se ele é impar ou par. 
               A função deve exibir as seguintes mensagens em seus devidos casos.

               ● Caso o número seja par: “O número 2 é par.”
               ● Caso o número seja ímpar: “O número 25 é ímpar.”
   
   Dica: Utilize estruturas condicionais e trabalhe com operadores. */

function impar_par(x) {
    if (x % 2 == 0) {
         return `O número ${x} é par.`;
    } else {
        return `O número ${x} é ímpar.`;
    }
}

const num = prompt("Qual o número? ");
const numero = Number(num);

const resultado = impar_par(numero);
console.log("====> Problema 3");
console.log(resultado);
