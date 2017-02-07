/**
 * SaludoController
 *
 * @description :: Server-side logic for managing Saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var nodemailer = require('nodemailer');

module.exports = {

    hola: function (req, res) {
        
//        var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
//        var mailOptions = {
//    from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
//    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
//    subject: 'Hello ✔', // Subject line
//    text: 'Hello world ?', // plaintext body
//    html: '<b>Hello world ?</b>' // html body
//};


        
        var parametros = req.allParams()

        if (req.method == 'GET') {
            
            res.json({
                    nombre: 'hola post',
                    para:parametros
                });
            
//            transporter.sendMail(mailOptions, function(error, info){
//                if(error){
//                    return console.log(error);
//                }
//                console.log('Message sent: ' + info.response);
//                            
//                    res.send('ok');
//                
//            });


        } else {

            if (req.method == 'POST') {
                res.json({
                    nombre: 'hola post'
                });
            } else {
                res.json({
                    nombre: 'hola todos'
                });
            }

        }



    },
    adios: function (req, res) {
        res.send('Adios');
    },
    hora: function (req, res) {
        res.send('Hora');
    }
    
    

};