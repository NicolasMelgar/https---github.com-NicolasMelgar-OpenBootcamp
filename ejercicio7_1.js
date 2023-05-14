const array = ["Nicolas", "Santiago", "Gabriel", "Loreley", "Jose"]

const miSet = new Set(array)

//El set es con elementos únicos y sin repetir, aunque en el array esten repetidos
console.log(miSet)

miSet.add("Nicolas")
console.log(miSet)

miSet.add("Java Script")
console.log(miSet)

