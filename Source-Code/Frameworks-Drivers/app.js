const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("../Interface-Adapters/Routes/Product-Routes");

const app = express();
app.use(bodyParser.json());

//establecer la ruta base para products
app.use("/products", productRoutes);

//Iniciar servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`Servidor escuchando en el puerto ${PORT}`);
});
