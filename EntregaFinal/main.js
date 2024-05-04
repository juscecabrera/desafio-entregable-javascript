let botonResultadoServicio = document.getElementById("button-service-container")
let botonResultadoType = document.getElementById("button-type-container")
let botonResultadoSchedule = document.getElementById("button-horario-container")
let precioFinal = document.getElementById("precio-total")
let resultadoServicio = document.getElementById("resultado-servicio")
let resultadoHorario = document.getElementById("resultado-horario")
let resultadoTipo = document.getElementById("resultado-tipo")

//Fetch de la data en "./servicios.json"

const response = async () => {
    try {
        const resp = await fetch("./servicios.json")
        const data = await resp.json()    
        renderService(data)
        renderType(data);
        renderSchedule();
    } catch(err) {
        Swal.fire({
            title: 'Error al cargar datos',
            icon: 'error',
            color: "red",
            background: "white"
        })
    } 
} 

response()

//Renderiza todos los botones de servicios en la pagina
function renderService(productsArray) {
    productsArray.forEach(producto => {
        const serviceButton = document.createElement("div")
        serviceButton.innerHTML = `<button class="button-service" id="${producto.id}">${producto.nombre}</button>`
        botonResultadoServicio.appendChild(serviceButton)
    })
    addService (productsArray)
}


//Funcionalidad de agregar servicio
function addService(productsArray) {
    let addButton = document.querySelectorAll(".button-service")
    addButton.forEach(button => {
        button.onclick = (e) => {
            //Si el usuario decide cambiar de servicio antes de confirmar, 
            //se reinicia el tipo para que no haya confusión en los precios
            resultadoTipo.innerText = ""
            const productID = e.currentTarget.id
            const selectedProduct = productsArray.find (producto => producto.id == productID)
            resultadoServicio.innerText = selectedProduct.nombre
            precioFinal.innerHTML = `Precio final: ${selectedProduct.precio}`
            localStorage.setItem("servicio", JSON.stringify(selectedProduct.nombre))
            localStorage.setItem("precio", JSON.stringify(selectedProduct.precio))
        }
    })
    
}


//Renderiza todos los botones de tipos en la pagina
function renderType(productsArray) {
    const typeButton = document.createElement("div")
    typeButton.innerHTML = `<button id="button-tipo-1" class="button-type" >Premium (+10$)</button>
    <button id="button-tipo-2" class="button-type" >Normal</button>`
    botonResultadoType.appendChild(typeButton)
    
    addType(productsArray)
}

//Funcionalidad de agregar tipo
function addType (productsArray) {
    let addPrice = document.querySelectorAll(".button-type")
    addPrice.forEach(button => {
        button.onclick = (e) => {
            const typeID = e.currentTarget.id
            if (typeID == "button-tipo-1") {
                resultadoTipo.innerHTML = "Premium(+10$)"
                precioFinal.innerText = `Precio final: ${productsArray.find(producto => producto.nombre == resultadoServicio.innerText).precio + 10}`
                localStorage.setItem("tipo", "Premium(+10$)")
                localStorage.setItem("precio", JSON.stringify(productsArray.find(producto => producto.nombre == resultadoServicio.innerText).precio + 10))
            } else {
                resultadoTipo.innerText = "Normal"
                precioFinal.innerText = `Precio final: ${productsArray.find(producto => producto.nombre == resultadoServicio.innerText).precio}`
                localStorage.setItem("tipo", "Normal")
                localStorage.setItem("precio", JSON.stringify(productsArray.find(producto => producto.nombre == resultadoServicio.innerText).precio))
            }
            
        }
    })
}

//Renderiza todos los botones de horarios en la pagina
function renderSchedule() {
    const scheduleButton = document.createElement("div")
    scheduleButton.innerHTML = `
    <button id="button-horario-1" class="button-horario">Mañana: 10:00h - 13:00h</button>
    <button id="button-horario-2" class="button-horario">Tarde: 13:00h - 16:00h</button>
    <button id="button-horario-3" class="button-horario">Noche: 16:00h - 19:00h</button>
    `
    botonResultadoSchedule.appendChild(scheduleButton)
    
    addSchedule();
}

//Funcionalidad de agregar horario
function addSchedule () {
    let addTime = document.querySelectorAll(".button-horario")
    addTime.forEach(button => {
        button.onclick = (e) => {
            const typeID = e.currentTarget.id
            if (typeID == "button-horario-1") {
                resultadoHorario.innerText = "Mañana: 10:00h - 13:00h"
                localStorage.setItem("horario", "Mañana: 10:00h - 13:00h")
            } else if (typeID == "button-horario-2") {
                resultadoHorario.innerText = "Tarde: 13:00h - 16:00h"
                localStorage.setItem("horario", "Tarde: 13:00h - 16:00h")
            } else {
                resultadoHorario.innerText = "Noche: 16:00h - 19:00h"
                localStorage.setItem("horario", "Noche: 16:00h - 19:00h")
            }
        }
    })
}


//SweetAlert y Toastify
//El Swal aparece cuando se confirma la compra y despliega el servicio, el tipo y el horario
//El Toastify aparece cuando no se han llenado todos los datos
const botonConfirmar = document.querySelector('#button-confirm')
botonConfirmar.addEventListener('click', () => {
    if (resultadoServicio.innerText == "" || resultadoHorario.innerText == "" || resultadoTipo.innerText == "") {
        Toastify({
            text: "Por favor complete su orden",
            duration: 3000
            }).showToast();
    } else {
        Swal.fire({
            title: '¡Gracias por su compra!',
            text: '¡Su reserva ha sido confirmada!',
            html: `
                <p>¡Su reserva ha sido confirmada!</p>
                <br>
                <p>Servicio : ${document.querySelector("#resultado-servicio").innerHTML}</p>
                <br>
                <p>Tipo : ${document.querySelector("#resultado-tipo").innerHTML}</p>
                <br>
                <p>Horario : ${document.querySelector("#resultado-horario").innerHTML}</p>
                <br>
                <p>${document.querySelector("#precio-total").innerHTML}</p>
            `,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            color: "black",
            background: "white"
        })
        reset()
    }
})