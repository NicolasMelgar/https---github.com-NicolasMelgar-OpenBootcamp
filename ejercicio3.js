let saldo = 3000;
let retiro = 1000; 

if (saldo>retiro){
    console.log("Puede retirar dinero")
} else {
    console.log("Saldo insuficiente")
}


//Else if 

let nota = 3; 

if (nota === 5){
    console.log("Felicitaciones, sobresaliente!")
} else if (nota === 4)  {
        console.log("Felicitaciones, muy bien")
} else if (nota === 3)  {
    console.log("Felicitaciones, aceptable")
} else if (nota === 2)  {
    console.log("No has aprobado")
} else if (nota === 1)  {
    console.log("Debes volver a cursar")
}else{
    console.log("Introduce un valor correcto")
}


//Switch

switch(nota){
    case 5:  console.log("Switch Felicitaciones, sobresaliente!"); 
    break;
    case 4: console.log("Switch Felicitaciones, muy bien");
    break;
    case 3: console.log("Switch Felicitaciones, aceptable");
    break;
    case 2: console.log("Switch Debes volver a cursar");
    break;
    case 1: console.log("Switch Introduce un valor correcto");
    break;
    default:  console.log("Switch Introduce un valor correcto");
    break; 
}

console.log("esto funciona?"); 

// Bucles for 
// for ( inicialización; condicion; actualización) { }

for (let i = 0; i < 5; i++){
    console.log(i)
}

let lista = [1,4,6,2,3,7,10,12];
for (let i = 0; i < lista.length; i++){
    console.log(lista[i])
}

//una forma más específica de lograr eso es usando "for off"

for (let valor of lista){
    console.log(valor)
}

// estructura forEach --OJO CON LOS PARENTESIS EN ESTA-----

lista.forEach(valor =>{
    console.log(valor)
})

// estructura forIn

let persona = {
    nombre: "Nicolas",
    apellido: "Melgar",
    edad: 43,
    desarrollador: true

}

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad])
}



// Bucle While

let i = 0; 

while (i < 10){
    console.log(i);
    i++
}


let listaB = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < listaB.length; i++){

if (listaB[i] === 3){
    continue;  //este continue me hace volver al inicio el bucloe y el 3 no se llega a mostrar en consola
}

if (listaB[i] > 6){
    break; //esto le dice que si el valor en el arreglo es mayor a 6 pare
}

    console.log("Bucle for" + listaB[i])
}


let unidades = 0
let decenas = 0

while(true) {

    while (true) { 
            console.log('El número actual es: ${decenas}${unidades}')
            unidades++
            if(unidades === 10){
                unidades = 0
                break
            }
        }
    
        decenas++
        if (decenas === 2){
            break
        }
}























