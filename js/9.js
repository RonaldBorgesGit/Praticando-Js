let botao1 = document.getElementById("btn1");
let botao2 = document.getElementById("btn2");
let botao3 = document.getElementById("btn3");
let botao4 = document.getElementById("btn4");
let res = document.querySelector("p");
res.innerHTML = (`<p>Aqui irei registrar os botôes clicados ...</p>`)

botao1.addEventListener("click", function(){
    res.innerHTML += `<p>Voce Clicou no 1º botão</p>`;
});

botao2.addEventListener("click", function(){
    res.innerHTML += `<p>Voce Clicou no 2º botão</p>`;
});

botao3.addEventListener("click", function(){
    res.innerHTML += `<p>Voce Clicou no 3º botão</p>`;
});

botao4.addEventListener("click", function(){
    res.innerHTML += `<p>Voce Clicou no 4º botão</p>`;
});