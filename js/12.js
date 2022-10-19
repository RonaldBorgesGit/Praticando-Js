let botao = document.getElementById("btn");
let res = document.querySelector("p");

botao.addEventListener("click", function () {
    let num = Number(prompt("Digite o número desejado: "));
    let result = num % 2
    if (result == 0) {
        res.innerHTML = `<p>O número ${num} é Par!</p>`
    }
    else {
        res.innerHTML = `<p>O número ${num} é Ímpar!</p>`
    };
})