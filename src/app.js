// LLamadas de Librerias
const express = require("express");
const session = require("express-session");
const app = express();
const path = require("path");
const port = process.env.port || 3000;
const methodOverride = require('method-override');
const cookieParser = require("cookie-parser");
app.use(methodOverride ("_method"));


// Declaracion EJS

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'views'));

// declaracion y uso de recursos de public

const publico = path.resolve(__dirname, "../public");
app.use(express.static(publico));

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
  }));

  // declarar uso de cookies
app.use(cookieParser());
// Levantar servidor

app.listen(port, () => console.log("Corriendo servidor en: http://localhost:3000/"));

// Subir html

app.use('/', require('./routers/mainRoutes.js'))
app.use('/productos', require('./routers/productsRoutes.js'))
app.use('/usuarios', require('./routers/userRoutes'));


// error 404

app.use((req, res, next) => {
    res.status(404).render("main/no-encontrado")
})

// transformar lo de formularios a objetos y json
app.use(express.urlencoded({extended: false}));
app.use(express.json());

