const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es necesario"],
    },
    precio: {
        type: Number,
        required: [true, "El precio es necesario"],
    },
});

module.exports = mongoose.model("Producto", productoSchema);
