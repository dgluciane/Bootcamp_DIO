// var nome = "Luciane Dorneles Gama";
// var n1 = 5;
// var n2 = 3;
// var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade + " anos");
// alert(idade + idade2)
// console.log(nome)
// console.log(n1*n2)
// console.log(frase.replace("Japão","Brasil"));
// alert(frase.replace("Japão","Brasil"));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());


// var lista = ["maça", "pêra", "laranja"];
// lista.push("uva");
// // lista.pop();
// console.log(lista)
// console.log(lista.toString()[0]);
// console.log(lista.join("-"));

// var fruta = {nome: "maçã", cor: "vermelha"}
// console.log(fruta.nome);
// alert(fruta.cor);


// var frutas = [
//     {nome: "maçã", cor: "vermelha"},
//     {nome: "uva", cor: "roxa"}
// ]
// console.log(frutas);
// alert(frutas[1].nome);

// var idade = prompt("Qual sua idade?");
// if(idade >=18){
//     alert("Maior de idade");
// }else{
//     alert("Menor de idade");
// };

// var contador = 0;
// while(contador<=5){
//     console.log(contador);
//     contador++
// }

// var contador;
// for(contador=0; contador <=5; contador++){
//     alert(contador);    
// };


// var data = new Date();
// console.log(data.getDay()+1);
// console.log(data.getHours());
// console.log(data.getMinutes());

var data = new Date();
var agora = ("Hoje é dia "+
(data.getDay()+1) +
" do mês " +
(data.getMonth()+1) +
" do ano de " +
data.getFullYear()) +
" e o horário atual é " +
data.getHours() +
" horas e "+
data.getMinutes() +
" minutos."


console.log(agora);


// function soma(n1,n2){
//     return n1+n2;
// }
// console.log(soma(5,10))

// function setReplace(frase, nome,  novo_nome){
//     return frase.replace(nome, novo_nome)
// }
// console.log(setReplace("Vai Japão", "Japão", "Brasil"));

// function validaIdade(idade){
//     var validar;
//     if(idade >= 18){
//         return true
//     }else{
//         return false
//     }
// }
// var idade = prompt("Qual sua idade?")
// console.log(validaIdade(idade));


// function validaIdade(idade){  
//     return (idade >= 18)
// }
// var idade = prompt("Qual sua idade?")
// console.log(validaIdade(idade));

// function clicou(){
//     document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
//     // console.log(document.getElementById("agradecimento"));
// }

// function redirecionar(){
//     // // window.open("https://digitalinnovation.one/");
//     // window.location.href = "https://digitalinnovation.one/";
// }

function trocar(elemento){
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";
    // document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
    // alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "<b>Passe o mouse aqui</b>";
    // document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui</b>";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}