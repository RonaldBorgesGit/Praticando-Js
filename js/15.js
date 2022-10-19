let span = document.querySelector("span");
let btn = document.getElementById("btn").addEventListener("click", function(){
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let week = date.get;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    span.innerText = `Dia: ${day}
                    Mês: ${month}<br>
                    Ano: ${year}
                    Dia da semana: ${week}<br>
                    Horas: ${hours}<br>
                    Minutos: ${minutes}<br>
                    Segunds: ${seconds}`
})