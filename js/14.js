let btn = document.getElementById("btn");
let res = document.querySelector("p");

btn.addEventListener("click", function(){
    let interacao = new Date;
    res.innerHTML = `<p>Foi recebido do sistema a seguinte informação <strong>${interacao}</strong></p>`
})