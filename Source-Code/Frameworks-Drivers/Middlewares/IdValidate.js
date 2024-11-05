const { param, validationResult } = require("express-validator");

//Validacion de correcto formato para parametro Id
const validateProductId = [
     param("id")
          .isInt()
          .withMessage("El ID debe ser un número entero.")
          .toInt(),

     // Manejo de errores como middleware
     (req, res, next) => {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
               return res.status(400).json({ errors: errors.array() });
          }
          next();
     },
];

module.exports = validateProductId;
