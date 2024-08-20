/* Problema 4: Crie uma função que recebe um número como parâmetro e decrementa esse número de 1 em 1.
               Ao passar o número 5 como parâmetro da função, ela deve exibir no console:
                4
                3
                2
                1
                0
   Dica: Utilize laços de repetição (For ou While). */

function decrementa(n) {
    console.log(`O decremento do número ${n} é: `);
    for (let i = n - 1; i >= 0; i--) {
        console.log(i);
    }
}

const num1 = prompt("Qual o número a ser decrementado? ");
const numero1 = Number(num1);

console.log("====> Problema 4");
decrementa(numero1);