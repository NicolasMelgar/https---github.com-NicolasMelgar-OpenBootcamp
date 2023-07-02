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


lista.sort((a, b)=> b.edad - a.edad)
console.log(lista)
