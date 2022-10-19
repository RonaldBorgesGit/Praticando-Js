let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let num = prompt(`Digite um número: `);
    let res = document.querySelector("p");
    res.innerHTML = `<p> O dobro de ${num} é ${num*2} e a metade é ${num/2}</p>`
})