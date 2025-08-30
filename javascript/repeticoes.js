function adicionarLog () {

    let divlogs = document.querySelector(".logs");

    let tagP = document.createElement("p");

    tagP.innerHTML = "Exercício executado às " + new Date().toLocaleDateString();

    divlogs.appendChild(tagP);

}








// console.log("FOR")

// function rep01() {


//     for (let contadora = 1; contadora <= 5; contadora++) {

//         console.log(contadora);      

//     }
//     alert("Função executada no Console");

//____________________________________________________________________
// console.log("WHILE")


// let controladoraWhile = 1;
// while (controladoraWhile <=5) {

//     console.log(controladoraWhile);

//     controladoraWhile++;

// }
///////////////////////////////////////////////////////////////
// console.log("DO WHILE SIMPLES");

// do {

//     console.log("Mostrou o valor na tela, ainda que a condição seja falsa.l")

// } while (1 == 2);

// console.log("DO WHILE COMPLEXO");

// let operacao = "";
// do {

//   operacao = prompt("Qual operação deseja fazer?");

//   if (operacao != "+" &&
//       operacao != "-" &&
//       operacao != "*" &&
//       operacao != "/") {

//     alert("Operação inválida.");

//   }

// } while (operacao != "+" &&
//         operacao != "-" &&
//         operacao != "*" &&
//         operacao != "/");

// alert("Opção válida!");

//Atividades Repetições
//01

// debugger
function rep01() {
    console.log("FOR");
    for (let contadora = 1; contadora <= 10; contadora++) {

        console.log(contadora)
    }
    alert("Função executada no Console");
}
//02

// debugger
function rep02() {
    let numero1 = prompt("Insita um numero");

    for (let contadora = 1; contadora <= 10; contadora++) {

        console.log(contadora * numero1)
    }
    alert("Função executada no Console");
}

//03

// debugger
function rep03() {
    let numero = Number(prompt("Insira um numero"))
    let i = 1
    let soma = 0

    while (i <= numero) {
        soma = soma + i

        i++
    }
    console.log(soma)
    alert("Função executada no Console");
}
//Intermediario - numero pares

//for (let contadora = 2; contadora <= 50; contadora+=2){
//
//    console.log(contadora)
//}

//Intermediario - numero pares

// debugger

// let numero = Number (prompt("INSIRA UM NUMERO"))
// let contadora = 0;


// while (numero >= contadora) {
//     console.log(numero)
//     numero = numero - 1

// }

//Intermediario - Jogo da Adivinhacao
// Geração do número aleatório
// const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// let palpite = 0;

// // Loop para adivinhação
// while (palpite !== numeroSecreto) {
//     palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));

//     if (isNaN(palpite)) {
//         alert("Por favor, insira um número válido.");
//     } else if (palpite < numeroSecreto) {
//         alert("O número secreto é MAIOR.");
//     } else if (palpite > numeroSecreto) {
//         alert("O número secreto é MENOR.");
//     }
// }

// // Mensagem de sucesso
// alert(`Parabéns! O número secreto era ${numeroSecreto}.`);

// NIVEL AVANÇADO

