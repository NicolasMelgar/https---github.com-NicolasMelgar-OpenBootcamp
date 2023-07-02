let nombre = "Nicolas";
let apellido = "Perez";

let estudiante = (`${nombre} ${apellido}`);

let estudianteMayus = estudiante.toLocaleUpperCase();

let estudianteMins = estudiante.toLocaleLowerCase();

let espacios = estudiante.length; 

let primNom = nombre[0];

let B = apellido.length;

let ultAp = apellido[4]


let estudianteB = " Nicolas Perez "; 
let sinEsp = estudianteB.trim().length;
console.log(estudianteB)
console.log(sinEsp)
console.log(estudianteB.length)


let buscar = estudiante.includes(`${nombre}`);
console.log(buscar)


























