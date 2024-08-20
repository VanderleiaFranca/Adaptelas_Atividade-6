/* Problema 6: Crie uma função para calcular o valor total de um pedido em uma lanchonete. 
               A função deve receber o valor total das compras e verificar se o valor é superior a R$200,00. 
               Se for, o cliente receberá um desconto de 10% no total. Caso contrário, não haverá desconto.
               
               A função deve:
                1. Solicitar ao usuário o valor total das compras (Você pode declarar uma variável já contendo esse valor).
                2. Calcular o desconto se o valor total exceder R$200,00.
                3. Exibir o valor total com o desconto (se aplicável) e o valor do desconto.

              Use as seguintes mensagens:
                ● Se o desconto for aplicado: "O valor total do pedido com desconto é de R$ XX.XX", onde "O desconto aplicado foi de R$ YY.YY".
                ● Se não houver desconto: "O valor total do pedido é de R$ ZZ.ZZ".

   Dica: Utilize estruturas condicionais, trabalhe com operadores e manipulação de dados usando a lógica correta. */

function pedidoLanchonete(TotalCompras) {
    
    const taxaDesconto = 0.1
    const desconto = TotalCompras * taxaDesconto;
    const conta = TotalCompras - desconto;

    if (valorTotalCompras > 200) {
        console.log(`O valor total do pedido com desconto é de R$ ${conta.toFixed(2)}`);
        console.log(`O desconto aplicado foi de R$ ${desconto.toFixed(2)}`); 
    }else {
        console.log(`O valor total do pedido é de R$ ${TotalCompras.toFixed(2)}`);
    }
}

const valorCompras = prompt("Qual o valor total das compras na lanchonete? ");
const valorTotalCompras = Number(valorCompras);
   
console.log("====> Problema 6");
pedidoLanchonete(valorTotalCompras);