var express = require('express');

var app = express();

var puerto = 6060;

var usuarios = [
    {
        id:1,
        nombre:'Pepe',
        cedula:'123409182'
    },
    {
        id:2,
        nombre:'Carlos',
        cedula:'981237918'
    },
    {
        id:3,
        nombre:'Juan',
        cedula:'011283934'
    }
]
var contador = 3

app.get('/', function (req, res) {
    res.send('Bienvenidos al Api de Usuarios!')
})


app.get('/Usuario', function (req, res) {

    res.json(usuarios);
    
})


app.get('/Usuario/:idUsuario', function (req, res) {
    
    var idActual = req.params.idUsuario;
    
    for(var i=0;i<usuarios.length;i++){
        //Buscamos en todo el arreglo de Usuarios
        if(idActual == usuarios[i].id){
            //respondemos al usuario con idActual
            res.json(usuarios[i]);
        }
    }
       
    //Si no lo encuentra responda que no existe
    res.send('No existe el Usuario');
    
})


app.post('/Usuario', function (req, res) {
    
    
    console.log(req.query.nombre);
    
    console.log(req.query.cedula);
    
    if(!req.query.nombre){
        res.send('No envio el nombre');
    }
    
    if(!req.query.cedula){
        res.send('No envio la cedula');
    }
    
    var nuevoUsuario = {
        id:contador+1,
        nombre:req.query.nombre,
        cedula:req.query.cedula
    }
    usuarios.push(nuevoUsuario);
    contador = contador+1;
    res.json(nuevoUsuario)

//    //Deprecated
//    console.log(req.param('nombre'));
//    
//    //Busca el parametro nombre
//    console.log(req.query.nombre);
//    
//    //Parametros URL
//    //console.log(req.params);
//
//    res.json(usuarios);
    
})

app.put('/Usuario/:idUsuario', function (req, res) {
    //implementacion
    //El Usuario Actualizado
})

app.delete('/Usuario/:idUsuario', function (req, res) {
    //implementacion
    //El Usuario Borrado
})


app.listen(puerto, function () {
    console.log('Example app listening on port ' + puerto + '!')
})