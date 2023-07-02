

var factorial = 1; 

for (let i = 1; i <= 10; i++){

         factorial = factorial * i;

        console.log(factorial)
    }
    

//Otra forma usando una variable para determinar la cantidad de factorial
var factorialA = 1;
var n = 10; 

    for (let i = 1; i <= n; i++){
    
            factorialA = factorialA * i;
    
            console.log(factorialA)
        }

//usando while
var factorialB = 1;      
var i = 1;
    while (i <= 10){
            factorialB = factorialB * i;
            console.log(factorialB);
            i++
            
        }

//usando while con if y break
var factorialC = 1;      
        var i = 1;
            while (i >= 1){
                    factorialC = factorialC * i;
                    console.log(factorialC);
                    i++
                if (i === 11){
                        factorialC=factorialC;
                        console.log(factorialC);
                        break;
                } 
            }
        