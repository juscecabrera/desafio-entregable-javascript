//Local Storage

//Para el boton reset: resetea el localStorage y los resultados
function reset() {
    localStorage.setItem("servicio", "")
    localStorage.setItem("horario", "")
    localStorage.setItem("tipo", "")
    localStorage.setItem("precio", "")
    document.getElementById("resultado-servicio").innerText = ``
    document.getElementById("resultado-horario").innerText = ``
    document.getElementById("resultado-tipo").innerText = ``
    document.getElementById("precio-total").innerText = `Precio final: `
}

let resetButton = document.getElementById("button-reset")
resetButton.addEventListener("click", reset)


//Al abrir el html, los condicionales recogen el localStorage
if (JSON.parse(localStorage.getItem("servicio")) !== "") {
    document.getElementById("resultado-servicio").innerText = JSON.parse(localStorage.getItem("servicio"))
} else {
    document.getElementById("resultado-servicio").innerText = ""
}

//Estos no estan parseados porque ya son strings
if (localStorage.getItem("tipo") !== "") {
    document.getElementById("resultado-tipo").innerText = localStorage.getItem("tipo")
} else {
    document.getElementById("resultado-tipo").innerText = ""
}

if (localStorage.getItem("horario") !== "") {
    document.getElementById("resultado-horario").innerText = localStorage.getItem("horario")
} else {
    document.getElementById("resultado-horario").innerText = ""
}

if (localStorage.getItem("precio") !== "") {
    document.getElementById("precio-total").innerText =  `Precio final: ${localStorage.getItem("precio")}`
} else {
    document.getElementById("precio-total").innerText =  `Precio final: `
}