// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const objeto = { 
    nombre: "Pepito",
    apellido: "García",
    edad: 18,
    altura: 150,
    eresDesarrollador: true
}

//acceder a una propiedad del objeto 
const edad2 = objeto.edad
console.log(edad2)

//acceder a una propiedad desde una variable 
const heigth = "altura"
console.log(objeto[heigth])

//DUplicar el objeto, pero CUIDADO 
const objeto2 = objeto
console.log(objeto2)

//modifico el nombre del objeto 2 y modifica también el objeto 1
objeto2.nombre = "Otro Nombre"
console.log(objeto2.nombre)
console.log(objeto.nombre)

//con las variables no pasa esto 

let val1 = 6
let val2 = val1

val2 = 18
console.log(val2)
console.log(val1)

//Como puedo evitar esa sobreescritura 

const objeto3 = {...objeto}//usando el metodo de propagación
console.log(objeto3)

console.log(objeto3.nombre)
console.log(objeto.nombre)

//como se ve la modificación de uno no signifca la moficiación del otro 
objeto3.nombre = "Vuleve atras"
console.log(objeto3.nombre)
console.log(objeto.nombre)















// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const objeto = { 
    nombre: "Pepito",
    apellido: "García",
    edad: 18,
    altura: 150,
    eresDesarrollador: true
}

//acceder a una propiedad del objeto 
const edad2 = objeto.edad
console.log(edad2)

const objetoB = { 
    nombre: "Juan",
    apellido: "Gatti",
    edad: 28,
    altura: 180,
    eresDesarrollador: true
}

const objetoC = { 
    nombre: "Maju",
    apellido: "España",
    edad: 38,
    altura: 161,
    eresDesarrollador: false
}

const lista = [objeto, objetoB, objetoC]
console.log(lista)

//para ordenar uso sort() --> muta el valor de la lista original 

// lista.sort((a, b) => a.altura - b.altura)
// console.log(lista)

lista.sort((a, b) => a.edad + b.edad)
console.log(lista)


const listaB = [
    {  nombre: "A" , year: 15},
    {  nombre: "B" , year: 4},
    {  nombre: "C" , year: 99},
    {  nombre: "D" , year: 3},
    {  nombre: "E" , year: 1000}

]

listaB.sort((a, b)=> a.year - b.year)
console.log(listaB)

lista.sort((a, b)=> b.edad - a.edad)
console.log(lista)
