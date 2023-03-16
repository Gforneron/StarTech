// LLamadas de Librerias
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.port || 3000;
const mainRoutes = require('./routers/mainRoutes.js');
const productsRoutes = require('./routers/productsRoutes.js');
const userRoutes = require('./routers/userRoutes');

// Declaracion EJS

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'views'));

// declaracion y uso de recursos de public

const publico = path.resolve(__dirname, "../public");
app.use(express.static(publico));

// Levantar servidor

app.listen(port, () => console.log("Corriendo servidor"));

// Subir html

app.use('/', mainRoutes)
app.use('/productos', productsRoutes)
app.use('/', userRoutes)


// error 404

app.use((req, res, next) => {
    res.status(404).render("no-encontrado")
})