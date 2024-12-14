const { param, validationResult } = require("express-validator");

//Validacion de correcto formato para parametro Id
const validateProductId = [
     param("id")
          .notEmpty()
          .custom(async (id) => {
               // EL formato para id debe ser:
               // Iniciado en: XXXX
               // Seguido de: 17 digitos correspondiente a la fecha de creacion
               // Seguido de: 4 letras mayusculas correspondientes al acronimo del producto
               // Terminado en: 6 digitos que indican hora-minutos-segudos de creacion
               const regex = /^XXXX(\d{17})([A-Z]{4})(\d{6})$/;
               if (await !regex.test(id)) {
                    throw new Error("Invalid ID format");
               }
          }),

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
