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
app.get('/home',(req,res) => res.sendFile(path.resolve('./views/home.html')))

app.get('/detalles',(req,res) => res.sendFile(path.resolve(__dirname,'./views/detalle-producto.html')));

app.get('/register',(req,res) => res.sendFile(path.resolve(__dirname,'./views/register.html')))

app.get('/login',(req,res) => {
  res.sendFile(path.resolve(__dirname,'./views/login.html'))
})
app.get('/carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});