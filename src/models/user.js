const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema =new Schema({
  nombre: String,
  apellido: String,
  dni: String,
  email: String,
});


module.export =mongoose.model('user',userSchema);