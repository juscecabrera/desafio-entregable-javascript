const preciosArray = [
    {
        id: 1,
        nombre: "Manicura Gel",
        precio: 60
    }, 
    {
        id: 2,
        nombre: "Manicura Rubber Gel",
        precio: 50
    }, 
    {
        id: 3,
        nombre: "Uñas acrílicas",
        precio: 70
    },
    {
        id: 4,
        nombre: "Uñas Polygel",
        precio: 60
    },
    {
        id: 5,
        nombre: "Pedicure Gel",
        precio: 30
    },
    {
        id: 6,
        nombre: "Pedicure Rubber Gel",
        precio: 20
    },
]

let resultadoServicio = document.getElementById("button-service-container")

function renderService(productsArray) {
    productsArray.forEach(producto => {
        const serviceButton = document.createElement("div")
        serviceButton.innerHTML = `<button class="button-service" id="${producto.id}">${producto.nombre}</button>`
        resultadoServicio.appendChild(serviceButton)
    })
    addService ()
}

renderService(preciosArray)

//addButton es un array con todos los botones y sus ids
function addService() {
    let addButton = document.querySelectorAll(".button-service")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productID = e.currentTarget.id
            const selectedProduct = preciosArray.find (producto => producto.id == productID)
            document.getElementById("resultado-servicio").innerText = selectedProduct.nombre
            document.getElementById("precio-total").innerHTML = `<p>A un precio total de : ${selectedProduct.precio}</p>`
            localStorage.setItem("servicio", JSON.stringify(selectedProduct.nombre))
            localStorage.setItem("precio", JSON.stringify(selectedProduct.precio))
        }
    })
    
}

function addType () {
    let addPrice = document.querySelectorAll(".button-type")
    addPrice.forEach(button => {
        button.onclick = (e) => {
            const typeID = e.currentTarget.id
            if (typeID == "button-tipo-1") {
                document.getElementById("resultado-tipo").innerHTML = "Premium(+10$)"
                document.getElementById("precio-total").innerText = `A un precio total de: ${preciosArray.find(producto => producto.nombre == document.getElementById("resultado-servicio").innerText).precio + 10}`
                localStorage.setItem("tipo", "Premium(+10$")
                localStorage.setItem("precio", JSON.stringify(preciosArray.find(producto => producto.nombre == document.getElementById("resultado-servicio").innerText).precio + 10))
            } else {
                document.getElementById("resultado-tipo").innerText = "Normal"
                document.getElementById("precio-total").innerText = `A un precio total de: ${preciosArray.find(producto => producto.nombre == document.getElementById("resultado-servicio").innerText).precio}`
                localStorage.setItem("tipo", "Normal")
                localStorage.setItem("precio", JSON.stringify(preciosArray.find(producto => producto.nombre == document.getElementById("resultado-servicio").innerText).precio))
            }
            
        }
    })
}

addType();

function addSchedule () {
    let addTime = document.querySelectorAll(".button-horario")
    addTime.forEach(button => {
        button.onclick = (e) => {
            const typeID = e.currentTarget.id
            if (typeID == "button-horario-1") {
                document.getElementById("resultado-horario").innerText = "Mañana: 10:00h - 13:00h"
                localStorage.setItem("horario", "Mañana: 10:00h - 13:00h")
            } else if (typeID == "button-horario-2") {
                document.getElementById("resultado-horario").innerText = "Tarde: 13:00h - 16:00h"
                localStorage.setItem("horario", "Tarde: 13:00h - 16:00h")
            } else {
                document.getElementById("resultado-horario").innerText = "Noche: 16:00h - 19:00h"
                localStorage.setItem("horario", "Noche: 16:00h - 19:00h")
            }
        }
    })
}
addSchedule();

//Para el boton reset: resetea el localStorage y los resultados
function reset() {
    localStorage.setItem("servicio", "")
    localStorage.setItem("horario", "")
    localStorage.setItem("tipo", "")
    localStorage.setItem("precio", "")
    document.getElementById("resultado-servicio").innerText = ``
    document.getElementById("resultado-horario").innerText = ``
    document.getElementById("resultado-tipo").innerText = ``
    document.getElementById("precio-total").innerText = `A un precio total de: `
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
    document.getElementById("precio-total").innerText =  `A un precio total de: ${localStorage.getItem("precio")}`
} else {
    document.getElementById("precio-total").innerText =  `A un precio total de: `
}


