const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});



//logger.log("hola estoy en pantalla ")

logger.info("Esto es un mensaje informatico")

logger.debug("Esto es un mensaje de debug")

logger.warn("Esto es una advertencia")

logger.error("Esto es un error")

/////////////--------------------//////////////////////

const miFuncion3 = val => {

    if(typeof val === "number"){
        return 2 * val
    }
    try{
    // parte del código que puede fallar 
        miFuncion3(7)
        console.log("Está ejecutándose de forma correcta")
    
    } catch (e){
    //En caso de falla quiero que ejecute 
    console.error("ERROR!")
    console.error(`El valor de e es: ${e}`)
    }
    }
    
    console.log(miFuncion3("Hola"))