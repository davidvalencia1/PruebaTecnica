const Product = require("../Entities/Product");
const ProductRepository = require("../Frameworks-Drivers/In-Memory-Repository/Product-Repository");

class ProductUseCases {
     constructor() {
          // Incializa el repositorio de productos
          this.productRepository = new ProductRepository();
     }

     async createProduct(name, description, price, category) {
          // Crea un producto asignadole la fecha de creacion antes de hacerlo
          const createdAt = new Date().toISOString();
          const product = new Product(
               name,
               description,
               price,
               category,
               createdAt
          );
          return await this.productRepository.save(product);
     }

     async listProduct() {
          // Lista todos los productos
          return await this.productRepository.list();
     }

     async getProduct(id) {
          // Busca un producto por ID, en caso de no ser encontrado retorna error
          const product = await this.productRepository.findById(id);
          if (!product) throw new Error("Product not found");
          return await product;
     }

     async updateProduct(id, name, description, price, category) {
          // Busca el producto existente por ID
          const existingProduct = await this.productRepository.findById(id);
          if (!existingProduct) throw new Error("Product not found");

          // Crea un nuevo objeto Product, si el parametro pasado no esta definido usa los parametros
          // del producto ya existe
          const updatedProduct = new Product(
               name !== undefined ? name : existingProduct.name,
               description !== undefined
                    ? description
                    : existingProduct.description,
               price !== undefined ? price : existingProduct.price,
               category !== undefined ? category : existingProduct.category
          );
          (updatedProduct.id = existingProduct.id), // Mantiene el ID existente
               // Guarda el producto actualizado en el repositorio y despues lo devuelve
               await this.productRepository.save(updatedProduct);

          return await this.productRepository.findById(updatedProduct.id);
     }

     async deleteProduct(id) {
          // Busca un producto y lo elimina, en caso de que no exista retorna error
          const product = await this.productRepository.findById(id);
          if (!product) throw new Error("Product not found");
          this.productRepository.delete(id);
          return "delete product correctly";
     }
}

module.exports = ProductUseCases;
