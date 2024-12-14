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

     generateUniqueId() {
          return ++this.currentMaxId;
     }
}

module.exports = ProductRepository;
