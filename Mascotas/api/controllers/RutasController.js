/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    home:function(req,res){
        return res.view('vistas/home')
    },
    
    crearUsuario:function(req,res){
        
        return res.view('vistas/crearUsuario')
        
    }
    
};


    
    
    
    
    
    