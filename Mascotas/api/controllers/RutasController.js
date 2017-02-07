/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    home:function(req,res){
        return res.view('vistas/home');
    },
    
    crearUsuario:function(req,res){
        return res.view('vistas/Usuario/crearUsuario');
    },
    error:function(req,res){
        return res.view('vistas/Error',{
            error:{
                desripcion:"Usted esta por error en esta Ruta dirijase a Inicio",
                rawError:"Ruta equivocada",
                url:"/Inicio"
            }
        });
    }
    
};


    
    
    
    
    
    