const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = new Schema({
  tipoRol: { //los roles del user por defecto user comun
      type: String,
      required: true,
      enum : ['USER','ADMIN'],
      default: 'USER'
  },
  descripcion: {type: String, required: true}
});