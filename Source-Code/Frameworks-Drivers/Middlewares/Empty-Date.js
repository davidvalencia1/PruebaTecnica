const { check, validationResult } = require("express-validator");

// Middware para validacion de datos que no deberian estar vacios
const emptyDateValidate = [
     check("name")
          .not()
          .isEmpty()
          .withMessage("name no puede ser una cadena vacia"),
     check("description")
          .not()
          .isEmpty()
          .withMessage("Name no puede ser una cadena vacia"),
     check("price").not().isEmpty().withMessage("price no puede estar vacio"),
     check("category")
          .not()
          .isEmpty()
          .withMessage("category no puede ser una cadena vacia"),

     // Manejo de errores como middleware
     (req, res, next) => {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
               return res.status(400).json({ errors: errors.array() });
          }
          next();
     },
];

module.exports = emptyDateValidate;
