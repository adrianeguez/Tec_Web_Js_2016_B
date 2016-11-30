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



app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/Usuario', function (req, res) {

    res.json(usuarios);
    
})

app.get('/Usuario/:idUsuario', function (req, res) {
    
    var idActual = req.params.idUsuario;
    for(var i=0;i<usuarios.length;i++){
        if(idActual == usuarios[i].id){
            res.json(usuarios[i]);
        }
    }
    res.send('No existe el Usuario');
    
})

app.get('/TecnologiasWeb', function (req, res) {
    res.send('con Javascript!')
})


app.post('/TecnologiasWeb', function (req, res) {

    //request => req
    //response => res
    
    var parametros = req.params;
    
    console.log(parametros);
    
    var usuario = {
        nombre:'Adrian',
        cedula:'000000000'
    }
    
    
    res.append('token', '1234');
    res.json(usuario);
    
    
//    usuario = {
//        nombre:usuario.nombre,
//        cedula:usuario.cedula,
//        apellido:''
//    }
    
    
    
    
    
    
    
    
//    console.log('Lo que tengo en el REQUEST es:')
//    console.log(req);
//    console.log('Lo que tengo en el RESPONSE es:')
//    console.log(res);
//    
//    console.log('Cabeceras Req:')
//    console.log(req.headers);
//    console.log('Cabeceras Res:')
//    console.log(res.headers);
//    

  
    
//    res.send('{nombre:Adrian,cedula:171813714}');
    
//    if(si los minutos son pares){
//        res.send('minutos pares')
//    }else{
//        res.send('minutos impares')
//    }

    
    //res.send('Picachu');


})



app.listen(puerto, function () {
    console.log('Example app listening on port ' + puerto + '!')
})