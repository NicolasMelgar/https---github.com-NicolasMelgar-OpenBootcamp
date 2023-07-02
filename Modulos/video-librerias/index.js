// import axios from "axios"

// axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then(function (response) {
//     // handle success
//     console.log("Perfecto!!!!")
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log("ERROR!!!")
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });


import chalk from 'chalk';

console.log(chalk.green('Hello world!'));

import {suma, multiplica} from "../Mod/controller.js";

const uno = suma(1, 2)

const dos = suma(4, 5)

const tres = multiplica(uno, dos)

console.log(tres)

