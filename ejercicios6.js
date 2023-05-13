//unir dos listas o arrays

let array1 = [true, 55, 1, "primero"];
let array2 = [ false, 33, 9, "segundo"];

console.log(array1.concat(array2));
console.log(array1);

let array3 = array1.concat(array2);
console.log(array3);

//como unir dos listas con el factor de propagación

console.log(...array3)

let array4 = [...array1, ...array2];
console.log(array4);

//ERROR Mal entendido el concepto de fact de propagación 

let array5 = [array1, array2];
console.log(array5);

//slice 
console.log(array1.slice(2))//elimina los dos primeros
console.log(array1.slice(0, 1))//asi me toma solo el valor que dice
console.log(array1.slice(0, -1))//me va sacando de atras para adelante


//iterar valores de una lista 

let arrayL = ["primero", 2, 800, false, null];

for (let i = 0; i <arrayL.length; i++) {
    console.log(arrayL[i])
}

//la forma actual mas eficiente

arrayL.forEach(valor => {
    console.log(valor)
})

let suma = 0; 
let arrayNum = [2, 5, 65, 900, 121];
arrayNum.forEach(valor => {
    suma += valor;
    console.log(valor)
})

console.log(suma); //acá me da la suma de todos


let listaObjetos = [
    { nombre:   "Nico", edad: 43  },
    { nombre:   "Maju", edad: 45},
    { nombre:   "Harry", edad: 13   },
    { nombre:   "Helga", edad: 4  },
    { nombre:   "Pelu", edad: 2  }
]

let objeto = listaObjetos.find(o => {
    if (o.nombre === "Nico") {
        return true
    }
})

console.log(objeto) //me devuelve todo
console.log(objeto.edad)// me devuelve la edad
console.log(objeto.nombre)//me devuelve solo el nombre 

//version corta

let objetoB = listaObjetos.find(o => {
    return o.nombre === "Nico"
})
console.log(objetoB) //me devuelve todo

//mas corto aún 
let objetoC = listaObjetos.find(o =>  o.nombre === "Nico")
console.log(objetoC) //me devuelve todo

