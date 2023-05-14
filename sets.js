
const array = ["Nicolas", "Santiago", "Gabriel", "Loreley", "Jose", "Jose", 1, 1, 1, 1, {id: 6}, {id: 6}]

const miSet = new Set(array)

//El set es con elementos únicos y sin repetir, aunque en el array esten repetidos
console.log(miSet)

console.log({id: 6} === {id: 6})//da false...por eso el set lo toma, no son lo mismo

miSet.add("Nicolas Melgar")
console.log(miSet); 

//si ya tiene el valor no lo va a añadir

miSet.delete("Nicolas")
console.log(miSet); 

//ojo que si descomento este me queda el set vacio ja 
// miSet.clear()
// console.log(miSet); 

console.log(miSet.has(40))//false si no tiene lo que se coloca
console.log(miSet.has("Jose"))//true si tiene lo que se coloca
console.log(miSet.has(1))

console.log(miSet.size)//me da el tamaño del set 

miSet.forEach(v => { console.log(v)})

const iterar_miSet = miSet.values()
console.log(iterar_miSet)

const ar_miSet = [...miSet]
console.log(ar_miSet)

