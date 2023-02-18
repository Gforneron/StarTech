// LLamadas de Librerias
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.port || 8080;

// declaracion y uso de recursos de public

const publico = path.resolve(__dirname, "./public");
app.use(express.static(publico));

// Levantar servidor

app.listen(port, () => console.log("Corriendo servidor"));

// Subir html

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views/home.html"));
});
app.get('/login',(req,res) => {
  res.sendFile(path.resolve(__dirname,'./views/index.html'))
})
app.get('/carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});