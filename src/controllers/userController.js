const {UserService} = require('../services/userService');

const agregarUsuario = async(req,res)=>{
    try{
        const {apellido,nombre,dni,email,username,password,rolUser} = req.body;

        const nuevoUsuario = await UserService.addUser({
            apellido,
            nombre,
            dni,
            email,
            username,
            password,
            rolUser
        });
    
        res.status(200).json({
            "message": "User creado exitoasamente",
            "data": {nuevoUsuario: nuevoUsuario}
        });
    }catch(err){
        res.status(400).json({
            "message": "Error al crear el user --> "+err
        });
    }
}

const buscarUsuarioPorId = async (req,res)=>{
    try{
        const id =  req.params.id;
        const usuarioBuscado = await UserService.findUserById(id);
        if(usuarioBuscado !== null ){
            res.status(200).json({
                "message": "Usuario encontrado exitosamente",
                "data": usuarioBuscado
            }); 
        }else res.status(200).json({
            "message": `El usuario con id: ${id} no existe`,
        });
    }catch(err){
        res.status(400).json({
            "message": `Error al buscar al usuario: ${err}`
        });
    }
}

module.exports = { agregarUsuario , buscarUsuarioPorId }