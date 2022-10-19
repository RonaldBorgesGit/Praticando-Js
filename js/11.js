let media = document.getElementById("btn");
let res = document.querySelector("p");

media.addEventListener("click", function(){
    let nome = prompt("Digite o nome do aluno: ")
    let n1 = Number(prompt(`Digite a 1ª Nota do Aluno ${nome}: `));
    let n2 = Number(prompt(`Digite a 2ª Nota do Aluno ${nome}: `));
    let mediaAluno = (n1+n2)/2;
    if(mediaAluno>=6){
        res.innerHTML = `<p>O aluno ${nome} tirou a notas</p>`
        res.innerHTML += `<p>${n1} e ${n2} com uma média de ${mediaAluno}</p>`
        res.innerHTML += `<p>e foi aprovado</p>`
    }
    else if(mediaAluno<6){
        res.innerHTML = `<p>O aluno ${nome} tirou a notas</p>`
        res.innerHTML += `<p>${n1} e ${n2} com uma média de ${mediaAluno}</p>`
        res.innerHTML += `<p>e foi reprovado</p>`
    };
})