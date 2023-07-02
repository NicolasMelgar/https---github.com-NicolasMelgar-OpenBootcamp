let unidades = 0
let decenas = 0

while(true) {

    while (true) { 
            console.log('El número actual es: ${decenas}${unidades}')
            unidades++
            if(unidades === 10){
                unidades = 0
                break;
            }
        }
    
        decenas++
        if (decenas === 2){
            break;
        }
}


bucledecenas: while(true) {

    bucleunidades: while (true) { 
            console.log('El número actual es: ${decenas}${unidades}')
            unidades++
            if(unidades === 10){
                unidades = 0
                break bucleunidades
            } 
            if (decenas === 2){
            break bucledecenas
        }
    }
    
    decenas++
    
}

console.log("ya terminó")
