var express = require('express');

var app = express();

var puerto = 6060;

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/TecnologiasWeb', function (req, res) {
    res.send('con Javascript!')
})


app.post('/TecnologiasWeb', function (req, res) {

    //request => req
    //response => res
    
    var parametros = req.params;
    
    var usuario = {
        nombre:'Adrian',
        cedula:'000000000'
    }
    
    usuario.apellido = '';
    usuario.mascotas = [];
    usuario.casado = false;
    
    
//    usuario = {
//        nombre:usuario.nombre,
//        cedula:usuario.cedula,
//        apellido:''
//    }
    
    
    
    
    
    
    
    
    console.log('Lo que tengo en el REQUEST es:')
    console.log(req);
    console.log('Lo que tengo en el RESPONSE es:')
    console.log(res);
    
    console.log('Cabeceras Req:')
    console.log(req.headers);
    console.log('Cabeceras Res:')
    console.log(res.headers);
    

    res.append('token', '1234');
    
//    res.headers.token = 1234;
    
    res.json(usuario);
    
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