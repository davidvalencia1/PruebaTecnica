const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Credenciales fijas para pruebas
const users = {
     user1: "password1",
     user2: "password2",
};

// Creacion de simulacion de login con ruta /auth/login
router.post("/auth/login", (req, res) => {
     const { username, password } = req.body;
    
     // Si las credenciales se encuentra entre las credenciales simuladas genera un token
     if (users[username] && users[username] === password) {
          const token = jwt.sign({ username }, "SECRET", { expiresIn: "1h" });
          return res.json({ token });
     }
     // Si las credenciales son incorrectas devuelve error 401 Unauthorized
     return res.status(401).json({ message: "Credenciales inválidas" });
});

module.exports = router;
