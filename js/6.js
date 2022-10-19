let somar = document.getElementById("btn");
somar.addEventListener("click", function(){
    let num1 = prompt("Digite o 1º Número: ");
    let num2 = prompt("Digite o 2º Número: ");
    let result = document.querySelector("p");

    let numSoma1 = parseFloat(num1);
    let numSoma2 = parseFloat(num2);
    let somar = numSoma1 + numSoma2
    result.innerHTML = `<p>A soma de ${num1} e ${num2} será ${somar}</p>`
})

