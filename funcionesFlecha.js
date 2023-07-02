//Funciones de flecha
//No se las puede llamar si no han sido inicializadas

const array = [1, 2, 5, 18, 50]

//Crear un array del doble que el otro 

const array2 = array.map(function(valor){
  return valor * 2
})

console.log(array2)


//Optimización de esa función 
//Veo que es el mismo resultado que antes

const array2b = array.map((valor) => valor * 2)
console.log(array2b)

const dobleDelValor = valor => valor * 2

console.log(dobleDelValor(6))



//Se muestra el mismo resultado que antes

const array3 = array.map(dobleDelValor)

console.log(array3)

