/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

    crearUsuario: function (req, res) {

        if (req.method == "POST") {

            var parametros = req.allParams();

            if (parametros.nombres && parametros.apellidos) {

                var usuarioCrear = {
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }

                if (usuarioCrear.correo == "") {
                    delete usuarioCrear.correo
                }

                Usuario.create(usuarioCrear).exec(function (err, usuarioCreado) {

                    if (err) {
                        return res.view('vistas/Error', {
                            error: {
                                desripcion: "Fallo al crear el Usuario",
                                rawError: err,
                                url: "/CrearUsuario"
                            }

                        });
                    }

                    return res.view('vistas/Usuario/crearUsuario');


                })


            } else {

                return res.view('vistas/Error', {
                    error: {
                        desripcion: "Llena todos los parametros, apellidos y nombres",
                        rawError: "Fallo en envio de parametros",
                        url: "/CrearUsuario"
                    }

                });

            }


        } else {

            return res.view('vistas/Error', {
                error: {
                    desripcion: "Error en el uso del Metodo HTTP",
                    rawError: "HTTP Invalido",
                    url: "/CrearUsuario"
                }
            });

        }

    }
};