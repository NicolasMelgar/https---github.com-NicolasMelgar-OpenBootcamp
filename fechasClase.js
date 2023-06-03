// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy

// - La fecha de tu nacimiento

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

// - Una variable que contenga el día de tu nacimiento

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const fecha = new Date()
    console.log(fecha)

//enero = 0 y diciembre = 11
const fechaB = new Date(1980, 5)
console.log(fechaB)
const fechaB_2 = new Date(1980, 5, 3, 09, 45, 35)
console.log(fechaB_2)

//milisegundos
const fechaC = new Date(200000000000)
console.log(fechaC)

const fechaD = new Date("October 13, 1972")
console.log(fechaD)
const fechaD_2 = new Date("October 13, 1972 15:25:36")
console.log(fechaD_2)


//compara fechas 

console.log(fechaB < fechaC)

//pero una fecha que es igual me daría error
const fechaE = new Date(1980, 5)
const fechaF = new Date(1980, 5)
//en todos los casos da FALSE
console.log(fechaE === fechaF)
console.log(fechaE == fechaF)
console.log(fechaE > fechaF)
console.log(fechaE < fechaF)

//las fechas se comparan a partir de la conversión a milisegundos. 
const fechaE_2 = fechaE.getTime()
const fechaF_2 = fechaF.getTime()
console.log(fechaE_2 === fechaF_2)

// Obtener día mes y año de una fecha 
//getDate

console.log(fechaB.getDate())
console.log(fechaB.getMonth())
console.log(fechaB.getFullYear())

//toLocalDateString

console.log(fechaB.toLocaleDateString("en-GB"))
console.log(fechaB.toLocaleDateString("en-US"))





