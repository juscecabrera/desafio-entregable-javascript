let precioTotal = localStorage.getItem("precio")

if (precioTotal == null) {
    precioTotal = 0
}

const preciosObject = {
    "Manicura Gel" : 60,
    "Manicura Rubber Gel" : 50,
    "Uñas acrílicas" : 70,
    "Uñas Polygel" : 60,
    "Pedicure Gel" : 30,
    "Pedicure Rubber Gel" : 20
}
let servicioElegido = localStorage.getItem("servicio")
document.getElementById("resultado-servicio").innerText = `${servicioElegido}`

let horarioElegido = localStorage.getItem("horario")
document.getElementById("resultado-horario").innerText = `${horarioElegido}`

let tipoElegido = localStorage.getItem("tipo")
document.getElementById("resultado-tipo").innerText = `${tipoElegido}`

document.getElementById("precio-total").innerText = `A un precio total de: ${precioTotal}`

function service(id) {
    let idElegido = `button-service-${id}`
    servicioElegido = (document.getElementById(idElegido).innerText)
    precioTotal = preciosObject[servicioElegido]
    document.getElementById("resultado-servicio").innerText = `${servicioElegido}`
    document.getElementById("precio-total").innerText = `A un precio total de: ${precioTotal}`
    localStorage.setItem("servicio", servicioElegido)
}

function horario(id) {
    let idElegido = `button-horario-${id}`
    horarioElegido = (document.getElementById(idElegido).innerText)
    document.getElementById("resultado-horario").innerText = `${horarioElegido}`
    localStorage.setItem("horario", horarioElegido)
}

function tipo(id) {
    let idElegido = `button-tipo-${id}`
    let servicioElegido = document.getElementById("resultado-servicio").innerText
    let precioMaximo = preciosObject[servicioElegido] + 10
    tipoElegido = (document.getElementById(idElegido).innerText)
    document.getElementById("resultado-tipo").innerText = `${tipoElegido}`
    if (id == 1 && precioTotal < precioMaximo) {
        precioTotal+= 10
    } else if (id == 2 && precioTotal == precioMaximo){
        precioTotal-= 10
    } else {
        precioTotal+=0
    }
    document.getElementById("precio-total").innerText = `A un precio total de: ${precioTotal}`
    localStorage.setItem("tipo", tipoElegido)
    localStorage.setItem("precio", precioTotal)
}

function reset() {
    localStorage.setItem("servicio", "")
    localStorage.setItem("horario", "")
    localStorage.setItem("tipo", "")
    localStorage.setItem("precio", "")
    servicioElegido = localStorage.getItem("servicio")
    horarioElegido = localStorage.getItem("horario")
    tipoElegido = localStorage.getItem("tipo")
    precioTotal = localStorage.getItem("precio")
    document.getElementById("resultado-servicio").innerText = `${servicioElegido}`
    document.getElementById("resultado-horario").innerText = `${horarioElegido}`
    document.getElementById("resultado-tipo").innerText = `${tipoElegido}`
    document.getElementById("precio-total").innerText = `A un precio total de: ${precioTotal}`
}