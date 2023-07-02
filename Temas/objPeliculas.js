let películas = [
    {título: "Matrix",  director: "Wachowsky", fecha:  1999 },
    {título: "Batman",  director: "C. Nolan",  fecha:  2005 },
    {título: "Nueva II",  director: "Poco Cine", fecha: 2019},
    {título: "Revolver",  director: "Guy Ritchie", fecha: 2005},
    {título: "Nueva I",  director: "Poco Cine", fecha: 2015},
    
]

let existeBatman = películas.some(peli => peli.título === "Batman")
console.log(existeBatman)

let existeBatman2 = películas.some(peli => peli.título === "Batman2")
console.log(existeBatman2)



console.log(películas)