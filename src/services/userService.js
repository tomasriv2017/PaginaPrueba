const {UserModel} = require('../database/connection');

class UserService{

    static async addUser(nuevoUser){
        const newUser = new UserModel(nuevoUser);
        
        /*USING PRIMISE
        newUser.save().
        then( (user)=> console.log(`Nuevo usuario creado --> ${user}`))
        .catch(err => console.log(`Error al crear al usuario: ${err}`));
        */

       //USING ASYNC-AWAIT
       const usuarioGuardado = await newUser.save();
       return usuarioGuardado;
    }

    static async findUserById(idUser) {
        /*USING CALLBACK
        UserModel.findById(idUser, (err, user)=> {
            if( err ) console.log(`Error al buscar al usuario: ${err}`);
            else{ console.log(`Usuario encontrado : ${user}`); }
        });
        */

        //USING ASYNC-AWAIT
        try{
            const usuarioBuscado = await UserModel.findById(idUser);
            return usuarioBuscado;    
        }catch(err){
            console.log(`Erro al buscar al usuario: ${err}`);
        }
    }

}

module.exports = {UserService};
