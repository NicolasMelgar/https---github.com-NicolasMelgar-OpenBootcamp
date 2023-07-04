class estudiante {
    //estas serían las variables
    nombre;
    #nombre2;
    asignatura = ["Javascript", "HTML", "CSS"];

    constructor(nombre, asignatura) {
        this.nombre = nombre
        this.asignatura = asignatura

    }
    //a las funciones se les llama métodos
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, estudio ${this.asignatura[1]}`)
    }
    //Esto es un getter que no es ni privado ni protect
    obtenDatos() {
        const datos = (this.nombre + " - " + this.asignatura);
        return datos
    }
    obtenDatos2() {
        const datos2 = (this.nombre2 + " - " + this.asignatura);
        return datos2
    }
}

//Nuevo estudiante
const nuevo_alumno = new estudiante("Nicolas", "HTML")

//Llamar a obtenDatos
console.log(nuevo_alumno.obtenDatos())

console.log(nuevo_alumno.obtenDatos2())