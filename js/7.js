let calcular = document.getElementById("btn");
calcular.addEventListener("click", function(){
    let x = prompt("Digite o número a calcular: ");
    let num = parseFloat(x);
    let result = document.querySelector("p")
    let absoluto = Math.abs(num);
    let inteiro = Math.trunc(num);
    let inteiroProx = Math.round(num);
    let raiz2 = Math.sqrt(num);
    let raiz3 = Math.cbrt(num);
    let quadrado = Math.pow(num, 2);
    let cubo = Math.pow(num, 3);
    result.innerHTML =  `<p></p>Os resultados para o número ${num}</p>`;
    result.innerHTML += `<p>O valor absoluto é ${absoluto}</p>`;
    result.innerHTML += `<p>O valor inteiro é ${inteiro}</p>`;
    result.innerHTML += `<p>O valor inteiro aproximado é ${inteiroProx}</p>`;
    result.innerHTML += `<p>A raiz quadrada é ${raiz2}</p>`;
    result.innerHTML += `<p>A raiz cubica é ${raiz3}</p>`;
    result.innerHTML += `<p>O valor de ${num}² é ${quadrado}</p>`;
    result.innerHTML += `<p>O valor de ${num}³ é ${cubo}</p>`;
});