verdad()
function verdad(){
  console.log(`True`)
}


async function funAsinc() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log("Hola soy una promesa");
}

//Funciones generadoras (lleva asterisco al final)

function* generaID(){
  let ID = 0;

  for (let ID = 0; ID < 20; ID++) {
    if (ID % 2 == 0)

    yield ID // esperando hasta que la vuelva a llamar
  }
}

const gen = generaID();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
