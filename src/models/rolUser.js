const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = new Schema({
  tipoRol: { //los roles del user por defecto user comun
      type: String,
      enum : ['USER','ADMIN'],
      default: 'USER'
  },
  descripcion: String
});