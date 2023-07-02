function saludar(){
    hola()
  }
  
  function hola(){
    console.log("Hola soy la función hola()")
  }
  
  saludar()
  
  // Cómo funciona la carga de funciones
  
  //1.- global ()
  //2.- saludar() global()
  //3.- hola() saludar() global()
  //4.- saludar() global()
  //5.- global()
  
  //esta sobrecarga me muestra un error...se llama al infinito
  function recursiva(){
    recursiva()
  }
  
  recursiva()
  