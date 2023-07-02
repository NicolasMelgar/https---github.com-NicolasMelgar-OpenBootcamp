//Funciones generadoras (lleva asterisco al final)

function* generaID(){
    let ID = 0;
    while(true){
      ID++
      if(ID === 10){
        return ID
      }
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