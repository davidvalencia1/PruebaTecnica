const mongoDbConnection = require("../Config/BD");
const productSchema = require("../../Entities/ProductSchema");

class ProductRepository {
     list() {
          return productSchema.find();
     }

     async save(product) {
          try {
               // si el producto a guardar tiene id se remplaza el producto ya existente
               if (product._id != null) {
                    // Se buscar el producto en la base de datos
                    const existingProduct = await productSchema.findById(
                         product._id
                    );
                    // Si el producto ya existe, lo reemplazamos
                    if (existingProduct) {
                         Object.assign(existingProduct, product);
                         return await existingProduct.save();
                    }
               }
               // Si es un producto nuevo se añade el producto
               product._id = this.generateUniqueId(product.name);
               const newProduct = new productSchema(product);
               return await newProduct.save();
          } catch (error) {
               throw new Error(
                    "Error al guardar el producto: " + error.message
               );
          }
     }

     findById(id) {
          return productSchema.findById(id);
     }

     delete(id) {
          return productSchema.findByIdAndDelete(id);
     }

     // Funcion para generar un ID unico
     generateUniqueId(name) {
          //Se genera una acronimo basado en las primeras 4 letras del nombre
          let acronym = name.slice(0, 4).toUpperCase();
          //Se genera la fecha de creacion del producto
          const now = new Date();
          //Se genera una sequencia basada en en Horas, minutos y segundos de creacion
          //siempre tienen la misma longitud
          const seq =
               now.getHours().toString().padStart(2, "0") +
               now.getMinutes().toString().padStart(2, "0") +
               now.getSeconds().toString().padStart(2, "0");
          // Se genera la hora de creacion segun Timezone GTM -5     
          const date = new Date(now.getTime() - 5 * 60 * 60 * 1000)
               .toISOString()
               .replace(/[-:.TZ]/g, "");

          // Funcion interna para general letras aleatorias
          function getRandomLetter() {
               const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
               return letters[Math.floor(Math.random() * letters.length)];
          }

          // Si el acronimo es demasiado corto se generan letras aleatorias hasta completar la longitud minima
          while (acronym.length < 4) {
               acronym += getRandomLetter();
          }
          // Se genera ID segun formato y se retorna
          return `XXXX${date}${acronym}${seq}`;
     }
}

module.exports = ProductRepository;
