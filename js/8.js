let contar = document.getElementById("btn");
let zerar = document.getElementById("btn2");
let i = 0

contar.addEventListener("click", function(){
    i++
    let contador = document.querySelector("p");
    contador.innerHTML = `O contador está em ${i} cliques`;
})

zerar.addEventListener("click", function(){
    let contador = document.querySelector("p");
    i = 0
    contador.innerHTML = null;
})