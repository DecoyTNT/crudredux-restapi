//================
//Puerto
//================
process.env.PORT = process.env.PORT || 4000;

//================
//Entorno
//================
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

//================
//Base de Datos
//================
let urlDB;
if (process.env.NODE_ENV === "dev") {
    urlDB = "mongodb://localhost:27017/productos";
} else {
    urlDB = process.env.MONGO_URL;
}

process.env.URLDB = urlDB;
