// LLamadas de Librerias
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.port || 3001;
const mainRuta = require('./routers/main.js')

// declaracion y uso de recursos de public

const publico = path.resolve(__dirname, "./public");
app.use(express.static(publico));

// Levantar servidor

app.listen(port, () => console.log("Corriendo servidor"));

// Subir html

app.use('/', mainRuta)