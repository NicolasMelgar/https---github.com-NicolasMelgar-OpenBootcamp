//Funciones asíncronas
//cuando llamamos a una base de datos externa por ejemplo

function asincrona(){
    //hace una llamada a una base de datos externa
    //puede llegar a dar algún error
  
  }
  
  //Promesa
  
  //notese que si pongo false se resalta el reject()
  const Promesa = new Promise((resolve, reject) => {
  
    if(true) {
      resolve()
    }else{
      reject()
    }
  })
  
  
  Promesa
  //si esta true dará
    .then(() => console.log("Se ha ejecutado de forma correcta"))
  
  
  //gestón de error 
  //Si está false daá
  .catch(() => console.log("ERROR"))
  
  //este se ejecuta sea correcto o no lo anterior
  .finally(() => console.log("Yo me ejecuto siempre"))
  
  
  