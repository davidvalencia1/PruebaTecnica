const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("../Interface-Adapters/Routes/Product-Routes");
const login = require("../Interface-Adapters/Routes/Login");

const app = express();
app.use(bodyParser.json());

// Establecer la ruta base para products
app.use("/products", productRoutes);
// Se Establece la utilizacion de la ruta para login
app.use(login);
// Captura errores de Syntax en las requests
app.use((err, res, next) => {
     if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
          return res.status(400).send({ error: "JSON inválido" });
     }
     next();
});

// Atrapa errores generados al solicitar una ruta no existente
app.use((res) => {
     res.status(404).json({ error: "Ruta no encontrada" });
});

// Atrapa errores cuando no se brinda un parametro a una ruta que lo requiere
app.use((err, req, res, next) => {
     console.error(err);
     res.status(500).json({ error: "an error occurred" });
});

//Iniciar servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`Servidor escuchando en el puerto ${PORT}`);
});
