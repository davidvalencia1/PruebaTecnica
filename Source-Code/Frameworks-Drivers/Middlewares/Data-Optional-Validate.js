const { check, validationResult } = require("express-validator");

// Midware para validacion de datos de request para Productos
// Se debe aplicar cuando la solicitud tenga datos que son opcionales
// Valida si el formato del dato es correcto
const validateProductOptionalData = [
     check("name").optional().isString().withMessage("Nombre debe ser String"),

     check("description")
          .optional()
          .isString()
          .withMessage("Description debe ser String"),

     check("price")
          .optional()
          .isNumeric()
          .withMessage("Price debe ser un numero")
          .isFloat({ gt: 0 })
          .withMessage("Price debe ser positivo"),

     check("category")
          .optional()
          .isString()
          .withMessage("Category debe ser String"),

     // Manejo de errores como middleware
     (req, res, next) => {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
               return res.status(400).json({ errors: errors.array() });
          }
          next();
     },
];

module.exports = validateProductOptionalData;
