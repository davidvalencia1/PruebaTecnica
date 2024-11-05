const { check, validationResult } = require("express-validator");

// Middleware para validacion de datos de request para productos
// Se debe aplicar cuando todos los campos son obligatorios
// Valida formato correcto de los datos
const validateProductData = [
     check("name").isString().withMessage("Name debe ser string"),
     check("description")
          .isString()
          .withMessage("Description debe ser string"),
     check("price")
          .isNumeric()
          .withMessage("Price debe ser un nomero")
          .isFloat({ gt: 0 })
          .withMessage("Price debe ser un numero positivo"),
     check("category").isString().withMessage("Category debe ser string"),

     // Manejo de errores como middleware
     (req, res, next) => {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
               return res.status(400).json({ errors: errors.array() });
          }
          next();
     },
];

module.exports = validateProductData;
