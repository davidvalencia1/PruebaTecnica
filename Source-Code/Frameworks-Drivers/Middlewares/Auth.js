const jwt = require("jsonwebtoken");

// Middleware para verificar el token JWT
function authMiddleware(req, res, next) {
     // Se obtiene el toquen del los headers en la request
     const token = req.headers["authorization"]?.split(" ")[1];

     try {
          // Se valida que el token proporcionado sea correcto
          jwt.verify(token, "SECRET", (err, user) => {
               if (err) {
                    // En caso de generarse error se devuelve error 401
                    return res
                         .status(401)
                         .json({ message: "Token inválido o expirado" });
               }
               req.user = user;
               next();
          });
     } catch (err) {
          // En caso de generarse error se devuelve error 401
          return res.status(401).json({ message: "Token inválido o expirado" });
     }
}

module.exports = authMiddleware;
