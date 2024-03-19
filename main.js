const servicios = ["Manicura Gel", "Manicura Rubber Gel", "Uñas acrílicas", "Uñas Polygel", "Pedicure Gel", "Pedicure Rubber Gel"]
const precios = [60, 50, 70, 60, 30, 20]

//Servicio Elegido

let servicioPrompt = parseInt(prompt(`Por favor elija el servicio deseado: \n 1: ${servicios[0]} \n 2: ${servicios[1]} \n 3: ${servicios[2]} \n 4: ${servicios[3]} \n 5: ${servicios[4]} \n 6: ${servicios[5]}`))

let servicioElegido = "";
let precioElegido = 0;

function selectService() {
    switch (servicioPrompt) {
        case 1: 
        servicioElegido = servicios[0]
        precioElegido = precios[0]
        break
        case 2: 
        servicioElegido = servicios[1]
        precioElegido = precios[1]
        break
        case 3: 
        servicioElegido = servicios[2]
        precioElegido = precios[2]
        break
        case 4: 
        servicioElegido = servicios[3]
        precioElegido = precios[3]
        break
        case 5: 
        servicioElegido = servicios[4]
        precioElegido = precios[4]
        break
        case 6: 
        servicioElegido = servicios[5]
        precioElegido = precios[5]
        break
        default: 
        alert("Por favor ingrese un valor válido")
        break
        }
}  

if (servicioPrompt == 1 || servicioPrompt == 2 || servicioPrompt == 3 || servicioPrompt == 4 || servicioPrompt == 5 || servicioPrompt == 6 ) {
    selectService()
} else {
    while (servicioPrompt !== 1 && servicioPrompt !== 2 && servicioPrompt !== 3 && servicioPrompt !== 4 && servicioPrompt !== 5 && servicioPrompt !== 6) {
        alert("Por favor ingrese un valor válido")
        servicioPrompt = parseInt(prompt(`Por favor elija el servicio deseado: \n 1: ${servicios[0]} \n 2: ${servicios[1]} \n 3: ${servicios[2]} \n 4: ${servicios[3]} \n 5: ${servicios[4]} \n 6: ${servicios[5]}`))
    }
    selectService()
}

//Tipo de servicio elegido

let premiumPrompt = parseInt(prompt("¿Desea el servicio premium por 10$ extras o el servicio normal? \n 1: Premium \n 2: Normal"))

function selectPrice () {
    if (premiumPrompt == 1) {
        precioElegido += 10
    } else {
        precioElegido += 0
    }
}

if (premiumPrompt == 1 || premiumPrompt == 2) {
    selectPrice()
} else {
    while (premiumPrompt !== 1 && premiumPrompt !== 2) {
        alert("Por favor ingrese un valor válido")
        premiumPrompt = parseInt(prompt("¿Desea el servicio premium por 10$ extras o el servicio normal? \n 1: Premium \n 2: Normal"))
    }
    selectPrice()
}

//Horario elegido

let horarioPrompt = parseInt(prompt("Por favor elija el horario deseado: \n 1: 10:00h - 13:00h \n 2: 13:00h - 16:00h \n 3: 16:00h - 19:00h"))

let horarioElegido = "";

function selectHorario () {
    switch (horarioPrompt) {
        case 1: 
        horarioElegido = "10:00h a 13:00h"
        break
        case 2: 
        horarioElegido = "13:00h a 16:00h"
        break
        case 3: 
        horarioElegido = "16:00h a 19:00h"
        break
        default: 
        console.log("Por favor ingrese un valor válido")
        break
    }
}

if (horarioPrompt == 1 || horarioPrompt == 2 || horarioPrompt == 3) {
    selectHorario();
} else {
    while (horarioPrompt !== 1 && horarioPrompt !== 2 && horarioPrompt !== 3) {
        alert("Por favor ingrese un valor válido")
        horarioPrompt = parseInt(prompt("Por favor elija el horario deseado: \n 1: 10:00h - 13:00h \n 2: 13:00h - 16:00h \n 3: 16:00h - 19:00h"))
    }
    selectHorario();
}


console.log(`Muchas gracias! Usted ha reservado el servicio de ${servicioElegido} en el horario de ${horarioElegido} por un precio a pagar de ${precioElegido}`); 