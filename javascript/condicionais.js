// Exercicio 1

function exercicio01() {
let idade = prompt("Qual é a idade");

    if (idade >= 18) {

        alert("Parabens! Voce é maior de idade.");

     } 
     else {

         alert("Vai pra Super Nani!");
     }
      adicionarLog();

}

function exercicio02(){
let numero = prompt("Digite um numero com sinal")

if (numero > 0) {

    alert("Seu numero é positvo")

} else {

    if (numero == 0) {
        alert("Neutro")

    } else{
        alert("Seu numero é negativo")

    }

}
adicionarLog();
}

//Exercicio 3
function exercicio03(){
    let nota = prompt("Qual é a sua nota? 0 a 100");

if (nota >= 60) {

    alert("APROVADO");

}
else {

    alert("REPROVADO");

}
adicionarLog();
}


//Exercicio 4
function exercicio04(){
let numero = prompt("Digite um numero com sinal")

if (numero > 0) {

    alert("Seu numero é positvo")


} else {

    if (numero == 0) {
        alert("Neutro")

    } else {
        alert("Seu numero é negativo")

    }
}
adicionarLog();

}


function exercicio05(){
let idade = prompt("5 Insira sua idade:");

if (idade > 0 && idade <= 12) {

    alert("Criança");

} else {

    if (idade > 12 && idade <= 17) {

        alert("Adolescente");

    }else 
        alert("Adulto")
}
adicionarLog();
}


//Exercicio 6

function exercicio06(){
let numero =prompt("Digite um numero");

    if (numero %2 == 0) {

        alert("O numero é par")
    }else{

        alert("O numero é impar")
    } 
adicionarLog();

}


// INTERMEDIARIO
// Exercicio 1
function exercicio07(){
let numero1 = Number(prompt("insira um numero"))
let numero2 = Number(prompt("insira um numero"))
let operacao = prompt("insira a operação")

if (operacao == "+") {
    alert(numero1 + numero2)
} else {
    if (operacao == "-") {
        alert(numero1 - numero2)
    } else {
        if (operacao == "*") {
            alert(numero1 * numero2)
        } else {
            if (operacao == "/")
                alert(numero1 / numero2)
        }
    }
}
adicionarLog();
}
function exercicio08(){
let valorcompra = Number (prompt("Digite o valor da compra:"))
if (valorcompra > 100){
    let desconto = valorcompra * 0.10;
    let valorcomdesconto = valorcompra - desconto;
    alert(`O valor com desconto é: R$ ${valorcomdesconto.toFixed(2)}`);
    }else{
        alert(`O valor da compra é: R$ ${valorcompra.toFixed(2)}`)
    }
}

function exercicio09(){

let numero1 = Number(prompt("Insita um numero"))
let numero2 = Number(prompt("Insita um numero"))
let numero3 = Number(prompt("Insita um numero"))
    
    if (numero1 > numero2 && numero1 > numero3){
        alert (numero1)
    }else{ 
        if (numero2 > numero1 && numero2 > numero3){
            alert (numero2)
        }else { 
            alert (numero3)
        }   
    }
adicionarLog();
}

//Exercicio 4
function exercicio10(){
const user1 = prompt("Insira o nome de usuario")
const password1 = prompt("Insira sua senha")

if (user1 == "admin" && password1 == 1234) {
    alert("Login bem sucedido")
} else{
    alert("Negado")
}
adicionarLog();
}
//Avançados
