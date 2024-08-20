/* Problema 1: Crie uma função com dois parâmetros, um inteiro e um booleano (True or False), 
               que determina se uma pessoa pode dirigir com base na idade e se ela tem ou não
               carteira de motorista.
    Exemplos de saída:
        ● Idade maior ou igual a 18 e é habilitada: "Você está apto(a) a dirigir."
        ● Idade maior ou igual a 18, mas não é habilitada: "Você não está apto(a) a dirigir."
    
   Dica: Utilize estruturas condicionais e trabalhe com os operadores lógicos do JavaScript. */

function podeDirigir (idade, temCNH){
    if(idade >= 18 && temCNH){
        console.log("Você está apto(a) a dirigir."); // Caso em que a idade é maior ou igual a 18 e é habilitada.
    }else if(idade >= 18 && !temCNH){
        console.log("Você não está apto(a) a dirigir."); // Caso em que a idade é maior ou igual a 18, mas não é habilitada.
    }else
        console.log("Você não está apto(a) a dirigir."); // Caso em que a idade é menor que 18, portanto não é habilitada.
}

// Valores para teste direto
console.log("====> Problema 1");
podeDirigir(18, true);  
podeDirigir(36, false); 
podeDirigir(17, false);
podeDirigir(17, true);
