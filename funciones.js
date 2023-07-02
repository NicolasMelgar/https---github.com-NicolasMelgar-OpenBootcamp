/* We've started Quokka for you automatically on this file.
 *
 * To open a new Quokka file:
 *   - Press `Ctrl K, J` to create a new JavaScript File
 *   - Press `Ctrl K, T` to create a new TypeScript File
 *   - Press `Ctrl K, L` to open an interactive sample from:
 *     https://github.com/wallabyjs/interactive-examples
 *
 * To start/restart Quokka on an existing file:
 *   - Press `Ctrl K, Q`
*/

//qué son las funciones, cómo se declaran y cómo se utilizan 


const nicolas = "Soy yo";
console.log(nicolas)

saludar("Nicolas")
function saludar (nombre){
  console.log(`Hola ${nombre}`)
}

//Ojo qu es comilla invertida simple no doble!!!

let persona = {nombre: "Nicolas", apellido: "Melgar"}

saludarPersona(persona)

console.log(persona)

function saludarPersona(objeto){
  console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

//numero = 5 me ahorra los indefinidos...si le ongo otro número lo muestra y sino el 5
function imprimirNumero(numero = 5){
  console.log(numero)
}

imprimirNumero()

function suma (...numeros){
  //me dice que cosa es
  console.log(typeof numeros)
  //me muestra todos los números
  console.log(numeros)
  //me muestra el índice que le digo
  console.log(numeros[3])
  //reduce
  return numeros.reduce((a, b)=>a+b)
}

const S = suma(1,2,3,4,5, 9)
console.log(S)

function multiplicar (a = 0, b = 0){
  return a * b
}

console.log(multiplicar(4, 9))
