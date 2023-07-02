
// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)




let listaDeCompra = ["pan", "aceite", "vino", "agua", "sal"]

listaDeCompra.push("aceite de Girasol");
console.log(listaDeCompra);

listaDeCompra.pop(); 
console.log(listaDeCompra);

let películas = [
    {título: "Matrix",  director: "Wachowsky", fecha:  1999 },
    {título: "Batman",  director: "C. Nolan",  fecha:  2005 },
    {título: "Nueva II",  director: "Poco Cine", fecha: 2019},
    {título: "Revolver",  director: "Guy Ritchie", fecha: 2005},
    {título: "Nueva I",  director: "Poco Cine", fecha: 2015},
    
]

let pelFecha = películas.find(value => value.fecha > 2010);
//Pero porque no me muestra las 2 películas?
console.log(pelFecha);

let pelFecha2 = películas.filter(val => {
    if ( val.fecha > 2010) {
        return true
    } else {
        return false
    }
})

//Ahora sí muestra las dos 

console.log(pelFecha2)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)



let pelDir = películas.map ((valor, indice) => {
    console.log(indice)
    console.log(valor)
    return valor.director
})

console.log(pelDir)

let pelName = películas.map ((valor, indice) => {
    console.log(indice)
    console.log(valor)
    return valor.título
})

console.log(pelName)

let juntos = pelDir.concat(pelName)
console.log(juntos)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
console.log(...juntos)
console.log(...pelDir, ...pelName)