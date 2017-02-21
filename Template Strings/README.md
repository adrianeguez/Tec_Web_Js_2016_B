# Template String
```
let edad = 18
const universidad = "Escuela Politecnica Nacional"

//Descomentar esta linea para que corra el codigo
//El error da porque es una variable constante
//y no se puede asignar otro valor
universidad = "ala"; 

//Los template strings nos permiten usar variables
//dentro de strings con el siguiente formato:
// >> ${NombreVariable}

console.log(`
Mi universidad es: ${universidad} y mi edad es ${edad}

npm link @angular/cli is needed 
because by default the globally installed @angular/cli just loads 
the local @angular/cli from the project which was fetched remotely from npm. 
npm link @angular/cli symlinks the global @angular/cli package to the local 
@angular/cli package. Now the angular-cli you cloned before is in three


places: The folder you cloned it into, npm's folder where it stores 
global packages and the Angular CLI project you just created.

You can also use ng new foo --link-cli to automatically link the 
@angular/cli package.

Please read the official npm-link documentation and the npm-link 
cheatsheet for more information
`)
```