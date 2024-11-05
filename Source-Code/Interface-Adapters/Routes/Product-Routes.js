const express = require("express");
const ProductController = require("../Controllers/Product-Controller");
const validateProductData = require("../../Frameworks-Drivers/Middlewares/Data-Validate");
const emptyDateValidate = require("../../Frameworks-Drivers/Middlewares/Empty-Date");
const validateProductOptionalData = require("../../Frameworks-Drivers/Middlewares/Data-Optional-Validate");
const validateProductId = require("../../Frameworks-Drivers/Middlewares/IdValidate");

const router = express.Router();
const productController = new ProductController();

// Se indican las rutas para el controlador de Product
// Ruta para agregar un producto, se Valida que no este vacio y que los datos sean correctos
router.post("/", emptyDateValidate, validateProductData, (req, res) =>
     productController.createProduct(req, res)
);
// Ruta para obtener todos los productos
router.get("/", (req, res) => productController.listProducts(req, res));
// Ruta para obtener un producto por Id,se valida que el parametro sea valido
router.get("/:id", validateProductId, (req, res) =>
     productController.getByIdProduct(req, res)
);
// Ruta para Actualizar el producto, se valida que el parametro sea valido
// Y que los datos de la solicitud tengan los formatos correctos
router.put("/:id", validateProductId, validateProductOptionalData, (req, res) =>
     productController.updateProduct(req, res)
);
// Ruta para eliminar un producto por Id,se valida que el parametro sea valido
router.delete("/:id", validateProductId, (req, res) =>
     productController.deleteProduct(req, res)
);

module.exports = router;
