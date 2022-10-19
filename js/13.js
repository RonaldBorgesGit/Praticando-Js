let descobrir = document.getElementById("btn");

descobrir.addEventListener("click", function(){
    let num1 = Number(window.prompt("Digite o 1° Número: "));
    let num2 = Number(window.prompt("Digite o 2° Número: "));
    let res = document.querySelector("p");
    if(num1 > num2){
        res.innerHTML = `<p>O 1°número: ${num1} é maior que o 2°número: ${num2}</p>`;
    }
    else if(num2 > num1){
        res.innerHTML = `<p>O 2°número: ${num2} é maior que 1°número: ${num1}</p>`;;
    }
    else{
        res.innerHTML = `<p>O 1°número: ${num1} e o 2°número: ${num2} são iguais</p>`;
    }
});