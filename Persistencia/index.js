//LOCAL STORAGE

localStorage.setItem("nombre", "Nicolás")

localStorage.setItem("apellido", "García")

console.log(localStorage.getItem("nombre"));
console.log(localStorage.getItem("apellido"));

localStorage.setItem("persona", JSON.stringify({nombre: "Nicolas", apellido: "García"}))

console.log(JSON.parse(localStorage.getItem("persona")))

//JSON.stringify => convierte un objeto /array en string

//JSON.parse convierto un objeto/array en un objeto de JS 

localStorage.removeItem("nombre")


//SESION STORAGE

sessionStorage.setItem("nombre-sesion", "Nicolas")
console.log("nombre-sesion")

//COKIES

document.cookie = "nombreCookie=NicolasCookie";
document.cookie = "nombreCaducidad = Nombre; expires=" + new Date(2024, 0, 1).toUTCString()

console.log(document.cookie);

