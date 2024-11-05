const express = require("express");
const ProductController = require("../Controllers/Product-Controller");

const router = express.Router();
const productController = new ProductController();

//Se indican las rutas para el controlador de Product
router.post("/", (req, res) => productController.createProduct(req, res));
router.get("/", (req, res) => productController.listProducts(req, res));
router.get("/:id", (req, res) => productController.getByIdProduct(req, res));
router.put("/:id", (req, res) => productController.updateProduct(req, res));
router.delete("/:id", (req, res) => productController.deleteProduct(req, res));

module.exports = router;
