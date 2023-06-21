// LLamadas de Librerias
const express = require("express");                // framework para construir aplicaciones web
const session = require("express-session");        // manejo de sesiones
const methodOverride = require('method-override'); // permitir el uso de otros métodos HTTP en formularios
const cookieParser = require("cookie-parser");     // manejo de cookies
const path = require("path");                      // manejo de rutas
const cors = require("cors");

// Crear la aplicación de Express
const app = express();
const port = process.env.port || 3001; // obtener el puerto desde una variable de entorno o usar el 3000 por defecto

// Permitir el uso de otros métodos HTTP en formularios
app.use(methodOverride ("_method"));

// Configurar el motor de vistas a usar
app.set('view engine', 'ejs');                     // usar EJS como motor de vistas
app.set('views', path.resolve(__dirname,'views')); // establecer la carpeta de vistas en ./views

// Configurar la carpeta pública para servir archivos estáticos
const publico = path.resolve(__dirname, "../public");
app.use(express.static(publico));
app.use(cors());

// Configurar el manejo de sesiones
app.use(session({
    secret: 'secret-key',    // clave secreta para las cookies
    resave: false,           // no guardar la sesión si no se ha modificado
    saveUninitialized: false // no guardar la sesión si no se ha iniciado
}));

// Configurar el manejo de cookies
app.use(cookieParser());

// Configurar las rutas de la aplicación
app.use('/', require('./routers/mainRoutes.js'))              // rutas para el inicio de la aplicación
app.use('/productos', require('./routers/productsRoutes.js')) // rutas para los productos
app.use('/usuarios', require('./routers/userRoutes.js'));        // rutas para los usuarios
app.use('/api',require('./routers/apiRoutes.js'))
// Manejar errores 404
app.use((req, res, next) => {
    res.status(404).render("main/no-encontrado"); // renderizar la vista 404 cuando no se encuentra la ruta
});

// Transformar los datos de formularios a objetos y JSON
app.use(express.urlencoded({extended: false})); // transformar los datos de formularios a objetos
app.use(express.json());                        // permitir el uso de JSON en las solicitudes

// Iniciar el servidor
app.listen(port, () => console.log("Corriendo servidor en: http://localhost:3001/"));
