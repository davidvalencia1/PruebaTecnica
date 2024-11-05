const ProductUseCases = require("../../Use-Cases/Product-Use-Cases");

class ProductController {
     constructor() {
          this.productUseCases = new ProductUseCases();
     }

     async createProduct(req, res) {
          try {
               const { name, description, price, category } = req.body;
               const product = await this.productUseCases.createProduct(
                    name,
                    description,
                    price,
                    category
               );
               res.status(201).json(product);
          } catch (error) {
               res.status(500).json({ error: error.message });
          }
     }

     async listProducts(req, res) {
          try {
               const arrayProducts = await this.productUseCases.listProduct();
               res.status(200).json(arrayProducts);
          } catch (error) {
               res.status(500).json({ error: error.message });
          }
     }

     async getByIdProduct(req, res) {
          try {
               const product = await this.productUseCases.getProduct(
                    req.params.id
               );
               res.status(200).json(product);
          } catch (error) {
               res.status(500).json({ error: error.message });
          }
     }

     async updateProduct(req, res) {
          try {
               const { id } = req.params;
               const { name, description, price, category } = req.body;
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
