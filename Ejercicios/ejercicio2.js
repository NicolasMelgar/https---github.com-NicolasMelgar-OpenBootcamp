let nombre = "Nicolás";
console.log(nombre);


let miEdad = 43; 
console.log(miEdad);

let eresDesarrollador = true;
console.log(eresDesarrollador);

//fecha de nacimiento (Date)

const miNacimiento = new Date("june 3 1980");
console.log(miNacimiento);

const miNacimiento2 = new Date(1980, 5, 3);
console.log(miNacimiento2);


//libro favorito como objeto con propiedades título autor fecha url

const libroFavorito = {
    autor: "Cervantes", 
    titulo: "Don Quijote de la Mancha",
    fecha: new Date(1605, 0, 16), 
    url: "https://es.wikipedia.org/wiki/Don_Quijote_de_la_Mancha"

} 

console.log(libroFavorito);