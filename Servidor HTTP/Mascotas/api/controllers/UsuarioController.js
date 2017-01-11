/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

    crearUsuario: function (req, res) {
        //   Se accede asi: /Usuario/crearUsuario

        // Guardando todos los parametros en la variable parametros

        var parametros = req.allParams();
        console.log(parametros);

        if (req.method == 'POST') {
            if (parametros.nombres && parametros.apellidos) {
                //creo el usuario
                Usuario.create({
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }).exec(function (error, usuarioCreado) {
                    if (error) return res.serverError()
                    sails.log.info(usuarioCreado);
                    return res.ok(usuarioCreado);
                });
            } else {
                // bad Request
                return res.badRequest('No envia todos los parametros');
            }
        } else {
            return res.badRequest('Metodo invalido');
        }

    },
    crearUsuarioForm: function (req, res) {

        var parametros = req.allParams();
        console.log(parametros);

        if (req.method == 'POST') {
            if (parametros.nombres && parametros.apellidos) {
                //creo el usuario
                Usuario.create({
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }).exec(function (error, usuarioCreado) {
                    if (error) return res.serverError()
                    sails.log.info(usuarioCreado);

                    return res.view('vistas/home', {
                        titulo: 'Inicio',
                        numero: 1,
                        mauricio: {
                            nombre: 'Mauricio',
                            cedula: 1718137159
                        }
                    });
                });




            } else {
                // bad Request
                return res.badRequest('No envia todos los parametros');
            }
        } else {
            return res.badRequest('Metodo invalido');
        }

    }

};