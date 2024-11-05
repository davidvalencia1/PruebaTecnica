const mongoose = require("mongoose");

// Configuracion de conexcion a una base de mongoDB
const connectDB = async () => {
     try {
          // Intenta conectarse a la base de mongoDB
          // En un entorno de produccion los campos se llamarian desde un archivo .env
          await mongoose.connect(
               "mongodb://usuario:contraseña@localhost:27017/miBaseDeDatos",
               {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
               }
          );
          console.log("Conectado a MongoDB");
     } catch (error) {
          // Captura del error en caso de falla en la conexcion
          console.error("Error al conectar a MongoDB:", error);
          process.exit(1);
     }
};

// Simulacion de un repositorio con consulta a MongoDB
// En un entorno de clean architecture este codigo iria en un archivo separado 
const Product = require("../models/Product");

class ProductRepository {
     async findById(id) {
          try {
               // Se usa la funcion findById de Mongoose para encontrar el id del producto
               const product = await Product.findById(id);
               return product;
          } catch (error) {
               console.error("Error al buscar el producto por ID:", error);
               throw error; 
          }
     }
}

module.exports = new ProductRepository();

module.exports = connectDB;
