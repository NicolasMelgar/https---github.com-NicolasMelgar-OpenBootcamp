
// trabajo con errores 

console.log("Hola")

const miFunción = val => {
    return 2 * val
}
console.log(miFunción(9))

//una forma mejorada
const miFunción2 = val => {
  if(typeof val === "number") { 
  return 2 * val
}
throw new Error("El valor debe ser de tipo número")
}
console.log(miFunción2("hola"))

// posible solución 

const miFuncion3 = val => {

  if(typeof val === "number"){
      return 2 * val
  }
  try{
  // parte del código que puede fallar 
      miFuncion3(7)
      console.log("Está ejecutándose de forma correcta")
  
  } catch (e){
  //En caso de falla quiero que ejecute 
  console.error("ERROR!")
  console.error(`El valor de e es: ${e}`)
  }
  }
  
  console.log(miFuncion3("Hola"))
  
  //internal error 
  //SyntaxError
  //TypeError
  //RangeError
  //Reference Error
  