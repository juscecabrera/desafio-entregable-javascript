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
        const texto = document.createElement("div")
        texto.innerHTML = `<button class="button-service" id="${producto.id}">${producto.nombre}</button>`
        resultadoServicio.appendChild(texto)
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

            } else {
                document.getElementById("resultado-tipo").innerText = "Normal"
                document.getElementById("precio-total").innerText = `A un precio total de: ${preciosArray.find(producto => producto.nombre == document.getElementById("resultado-servicio").innerText).precio}`
            }
        }
    })
}

addType()

function addSchedule () {
    let addTime = document.querySelectorAll(".button-horario")
    addTime.forEach(button => {
        button.onclick = (e) => {
            const typeID = e.currentTarget.id
            if (typeID == "button-horario-1") {
                document.getElementById("resultado-horario").innerText = "Mañana: 10:00h - 13:00h"
            } else if (typeID == "button-horario-2") {
                document.getElementById("resultado-horario").innerText = "Tarde: 13:00h - 16:00h"
            } else {
                document.getElementById("resultado-horario").innerText = "Noche: 16:00h - 19:00h"
            }
        }
    })
}
addSchedule();
