//-------------------------------------------------------------------------------//
    //const num = 5;

    function Fibo(num) {
        let arrayFibo = []
        //arrayFibo.length = num;
            var N = 1;
            var M = 1;
        for (let i = 0; i < num; i++) {
            const suma = N + M;
            N = M;
            M = suma;
            console.log(suma)
            arrayFibo = [...arrayFibo, suma]
        }
        return suma
    }
    
    const Final = [Fibo(2)];
    console.log(Final)
    //console.log(arrayFibo)
    