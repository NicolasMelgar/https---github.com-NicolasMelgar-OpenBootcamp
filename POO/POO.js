class persona {
    //estas serían las variables
    nombre; 
    edad; 
    isDeveloper;

    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    //a las funciones se les llama métodos
    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} y ${this.isDeveloper} `)
    }
}

const nueva_persona = new persona("Nicolas", 43, true) 
console.log(nueva_persona)
nueva_persona.saludo()

let numero = 60 //inicializar 
let persona_2 = new persona("Maria", 34, false) //instanciar

//para saber de que typo es
console.log(typeof persona_2) 


console.log(persona_2 instanceof persona)
//instanceof es similar al typeof pero para clases


//-------------------------------------//

// Getter : son metodos que nos permiten obtener atributos/métodos privados o protegidos
// Setter : son metodos que nos permiten cambiar el valor de algun atributo

class estudiante {
    //estas serían las variables
    nombre;
    #nombre2 = "YO";
    asignatura = ["Javascript", "HTML", "CSS"];
  
    constructor(nombre, nombre2, asignatura) {
        this.nombre = nombre
        this.#nombre2 = nombre2
        this.asignatura = asignatura
  
    }
    //a las funciones se les llama métodos
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, ${this.nombre2}, estudio ${this.asignatura[1]}`)
    }
    //Esto es un getter que no es ni privado ni protect
    obtenDatos() {
        const datos = (this.nombre + " - " + this.asignatura);
        return datos
    }
    //Getter
    getDatos() {
      return this.#nombre2
    }
    //Setter
    setDatos(nuevo_nombre){
      this.#nombre2 = nuevo_nombre
    }
  }
  
  
  
  //Nuevo estudiante
  const nuevo_alumno = new estudiante("Nicolas", "x", "HTML")
  
  //Llamar a obtenDatos
  console.log(nuevo_alumno.obtenDatos())
  
  console.log(nuevo_alumno.getDatos())
  
  nuevo_alumno.setDatos("Nosotros")
  console.log(nuevo_alumno.getDatos("Nosotros"))

  // INHERITANCE - HERENCIA

class Desarrollador extends estudiante{

}

const nuevoDev = new Desarrollador("Alan", "Segundo", "JavaScript")
console.log(nuevoDev.obtenDatos())