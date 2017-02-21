# Object Literals

```

function definirObjetoUsuario(nombre){
  return {
    nombre:nombre,
    saludar:function(){
      return "Hola"+this.nombre;
    },
    twitteo:function(tweet){
      return this.nombre+" twitteo sobre: "+tweet;
    },
  }
}

let nuevoUsuario1 = definirObjetoUsuario("Vicente")

console.log(nuevoUsuario1.nombre)
console.log(nuevoUsuario1.saludar())
console.log(nuevoUsuario1.twitteo("Los mensajes escondidos en la web"))


function definirObjetoUsuarioObjectLiterals(nombre){
  return {
    nombre,
    saludar(){
      return "Hola"+this.nombre;
    },
    twitteo(tweet){
      return this.nombre+" twitteo sobre: "+tweet;
    },
  }
}

let nuevoUsuario2 = definirObjetoUsuario("Adrian")

console.log(nuevoUsuario2.nombre)
console.log(nuevoUsuario2.saludar())
console.log(nuevoUsuario2.twitteo("Nuevo Pokemon DOCMAF"))
```