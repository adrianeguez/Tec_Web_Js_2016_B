/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Passwords = require('machinepack-passwords');

module.exports = {

    login: function (req, res) {


        var parametros = req.allParams();

        if (parametros.correo && parametros.password) {

            Usuario.findOne({
                correo: parametros.correo
            }).exec(function (errorInesperado, UsuarioEncontrado) {

                if (errorInesperado) {
                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "Error inesperado del servidor",
                            rawError: errorInesperado,
                            url: "/Login"
                        }
                    });
                }
                if (UsuarioEncontrado) {

                    Passwords.checkPassword({
                        passwordAttempt: parametros.password,
                        encryptedPassword: UsuarioEncontrado.password,
                    }).exec({
                        error: function (err) {
                            return res.view('vistas/Error', {
                                error: {
                                    desripcion: "Error Inesperado",
                                    rawError: err,
                                    url: "/Login"
                                }
                            });
                        },
                        incorrect: function () {

                            return res.view('vistas/Error', {
                                error: {
                                    desripcion: "Ingrese su password correctamente",
                                    rawError: "Password Incorrecta",
                                    url: "/Login"
                                }
                            });

                        },
                        success: function () {

                            req.session.credencialSegura = UsuarioEncontrado;

                            return res.view("vistas/home");



                        },
                    });



                } else {

                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "No se encontro al Usuario",
                            rawError: "No existe Usuario",
                            url: "/Login"
                        }
                    });
                }
            })
        } else {
            return res.view('vistas/Error', {
                error: {
                    desripcion: "Necesitamos su correo y password",
                    rawError: "No envia Parametros",
                    url: "/Login"
                }
            });
        }






    },
    tieneSesion: function (req, res) {
        if (req.session.credencialSegura) {
            return res.ok("Si tiene la credencial Segura")
        } else {
            return res.forbidden();
        }
    },
    logout: function (req, res) {
        req.session.credencialSegura = undefined;

        return res.view("login");
    }



    //    DONE - Validar si envian parametros

    //    DONE - Buscar por correo al usuario

    //    DONE - Comparar el password

    //    DONE - Entregar credencial









};