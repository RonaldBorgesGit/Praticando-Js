let result = document.getElementById("btn");
result.addEventListener("click", function(){
    let nome = prompt("Digite seu nome aqui: ");
    let res = document.querySelector("p");
    res.innerHTML = `<p>Olá ${nome} prazer em te conhecer e seja bem vindo!</p>`
})