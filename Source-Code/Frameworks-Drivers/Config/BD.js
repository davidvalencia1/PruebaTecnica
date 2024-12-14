const mongoose = require("mongoose");

// Configuracion de conexcion a una base de mongoDB
const connectDB = async () => {
     try {
          // Intenta conectarse a la base de mongoDB
          // En un entorno de produccion los campos se llamarian desde un archivo .env
          await mongoose.connect("mongodb://localhost:27017/tienda", {
               useNewUrlParser: true,
               useUnifiedTopology: true,
          });
          console.log("Conectado a MongoDB");
     } catch (error) {
          // Captura del error en caso de falla en la conexcion
          console.error("Error al conectar a MongoDB:", error);
          process.exit(1);
     }
};

module.exports = connectDB;
