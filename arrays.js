let array = ["hola", false, 3, 9, 6];

array.push("none");//agrega al final 
console.log(array);

array.unshift("325"); //agrega al inicio
console.log(array)

array.pop(); //no lleva valor en () porque saca elemento final
console.log(array);

array.shift(); //elimina el primer elemento
console.log(array);

//Todo lo anterior con ideas sale usando splice
//metodo para eliminar, modificar, añadir valores en arrays

console.log(array);
array.splice(2,1); //a partir del índice 2 saca un elemento

console.log(array);

array.splice(2, 2); //a partir del índice 2 saca dos elemento
//si me paso de elementos que quiero borrar no tiene problemas
console.log(array);

array.splice(2,0); //asi no borra nada
console.log(array);

array.splice(2, 0, "suma", true);
console.log(array);

//si quiero sumarlo al principio
array.splice(0,0, "Inicio");
console.log(array);

//si quiero sumarlo al final 
array.splice(5, 0, "Finalización");//el número del índice debe ser array+1
console.log(array);

//si quiero modificar o sustituir un valor 
array.splice(1, 1, "Cambio hola por adios");
console.log(array);






