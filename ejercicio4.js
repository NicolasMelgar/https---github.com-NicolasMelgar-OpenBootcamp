let str1 = "string con comillas dobles";
let str2 = 'string con comillas simples';
let str3 = `string que usa backticks`;

console.log(str1)
console.log(str2)
console.log(str3)

let nombre = "Nicolás";
let saludo = `Hola, ${nombre} bienvenido`;

console.log(saludo)

//las comillas tipo backticks permiten saltos de línea..o sea---
let textoLargo = `
<html>
<h1> Esta es la página de ${nombre}  </h1>
</html>
`;
console.log(textoLargo)

let libros = ["Conversaciones con Dios", "El alquimista", "Discurso del método"]
console.log(libros);

//Métodos con string

console.log(str1.length) //Saber el largo de una cadena

//Ver una parte específica del string
let slice_str1 = str1.slice(10, 15)//desde el lugar 10 hasta el 15 muestra
console.log(slice_str1)

let substring_str1 = str1.substring(10, 15)//desde el lugar 10 hasta el 15 muestra
console.log(substring_str1)

let substr_str1 = str1.substr(5, 10)//empieza en la posición 5 y me muestra un largo de 10 caracteres
console.log(substr_str1)


//Reemplazar parte del contenido

let cadena = "Hola, mi nombre es Nicolás";

console.log(cadena)
console.log(cadena.replace('Nicolás','OtroNombre'))

// Si quiero que se reemplacen todas las palabras que deseo por otras debería ser 

let texto1 = "aca deberia ir un texto que aca tenga algo que aca cambie"
console.log(texto1.replace(/aca/g, "CAMBIADO"))

let input = "Geminis"
let baseDatos = "geminis"
console.log(input === baseDatos)

// toLowerCase() para minúsculas 
// toUpperCase() para mayúscula

console.log(input.toUpperCase())
console.log(input.toLowerCase())

console.log(input.toLowerCase() === baseDatos)