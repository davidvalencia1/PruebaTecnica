const ProductUseCases = require("../../Use-Cases/Product-Use-Cases");

class ProductController {
     constructor() {
          // Inicializacion de Casos de Uso
          this.productUseCases = new ProductUseCases();
     }

     // Metodo para Creacion de Producto
     async createProduct(req, res) {
          // Prepracion de datos para creacion de Producto
          try {
               // Extraer datos del cuerpo de la solicitud (request body)
               const { name, description, price, category } = req.body;
               // LLamado al caso de uso para crear un producto
               const product = await this.productUseCases.createProduct(
                    name,
                    description,
                    price,
                    category
               );
               // Se envia respuesta exitosa con el producto creado
               res.status(201).json(product);
          } catch (error) {
               // Se envia respuesta con mensaje de error en caso de fallo
               res.status(500).json({ error: error.message });
          }
     }

     // Metodo de listado para todos los Productos
     async listProducts(req, res) {
          try {
               // LLamado de caso de uso para listar Productos
               const arrayProducts = await this.productUseCases.listProduct();
               // Retorna la lista de los productos pbtenidos junto con codigo de estado de la request
               res.status(200).json(arrayProducts);
          } catch (error) {
               // Se retorna error en caso de fallo
               res.status(500).json({ error: error.message });
          }
     }

     // Metodo de obtener un producto por ID
     async getByIdProduct(req, res) {
          try {
               // LLamado de caso de caso de uso para obtener un producto por ID
               const product = await this.productUseCases.getProduct(
                    req.params.id
               );
               res.status(200).json(product);
          } catch (error) {
               res.status(500).json({ error: error.message });
          }
     }

     // Metodo para actualizar un Producto
     async updateProduct(req, res) {
          try {
               // Se obtiene ID de los parametros de la solicitud
               const { id } = req.params;
               // Se exrae del cuerpo de la solicitud los datos de producto a actualizar
               const { name, description, price, category } = req.body;
               // LLamado de caso de uso para actualizar el producto con sus respectivos parametros
               const product = await this.productUseCases.updateProduct(
                    id,
                    name,
                    description,
                    price,
                    category
               );
               res.status(200).json(product);
          } catch (error) {
               res.status(500).json({ error: error.message });
          }
     }

     // Metodo para eliminar un producto
     async deleteProduct(req, res) {
          try {
               const response = await this.productUseCases.deleteProduct(
                    req.params.id
               );
               res.status(200).json(response);
          } catch (error) {
               res.status(500).json({ error: error.message });
          }
     }
}

module.exports = ProductController;
