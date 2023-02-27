// LLamadas de Librerias
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.port || 3000;
const mainRuta = require('../routers/main.js');

// Declaracion EJS

app.set('view engine', 'ejs');

// declaracion y uso de recursos de public

const publico = path.resolve(__dirname, "../public");
app.use(express.static(publico));

// Levantar servidor

app.listen(port, () => console.log("Corriendo servidor"));

// Subir html

app.use('/', mainRuta)