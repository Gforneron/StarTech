// LLamadas de Librerias
const express = require("express"); // framework para construir aplicaciones web
const session = require("express-session"); // manejo de sesiones
const methodOverride = require("method-override"); // permitir el uso de otros métodos HTTP en formularios
const cookieParser = require("cookie-parser"); // manejo de cookies
const path = require("path"); // manejo de rutas
const cors = require("cors"); // permitir el acceso a peticiones del Dashboad
const helmet = require("helmet"); // Implementacion de seguridad
const expressRate = require("express-rate-limit"); // Permitidos de frecuencias de las solicitudes(evitar ataques DoS)
// Crear la aplicación de Express
const app = express();
const port = process.env.port || 3001; // obtener el puerto desde una variable de entorno o usar el 3000 por defecto
// const limit = require('express-rate-limit')
// Permitir el uso de otros métodos HTTP en formularios
app.use(methodOverride("_method"));

// Configurar el motor de vistas a usar
app.set("view engine", "ejs"); // usar EJS como motor de vistas
app.set("views", path.resolve(__dirname, "views")); // establecer la carpeta de vistas en ./views

// Configurar la carpeta pública para servir archivos estáticos
const publico = path.resolve(__dirname, "../public");
app.use(express.static(publico));

// Configurar el manejo de sesiones
app.use(
  session({
    secret: "secret-key", // clave secreta para las cookies
    resave: false, // no guardar la sesión si no se ha modificado
    saveUninitialized: false, // no guardar la sesión si no se ha iniciado
  })
);

// Configurar el manejo de cookies
app.use(cookieParser());

// Configuracion de cors y implementacion de seguridad
app.use(helmet.xPoweredBy());
app.use(helmet.xXssProtection());
app.use(helmet.xssFilter());
app.use(
  helmet.hsts({ maxAge: 31536000, includeSubDomains: true, preload: true })
);
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], // Permite solo peticiones locales del puerto 3000(REACT)
    methods: ["GET"], // Solo permite usar metodos GET, osea solo de consulta para la api
  })
);
// Configuracion de numero de peticiones en un determinado tiempo
const limite = expressRate.rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
});
// Configurar las rutas de la aplicación
app.use("/", require("./routers/mainRoutes.js")); // rutas para el inicio de la aplicación
app.use("/productos", require("./routers/productsRoutes.js")); // rutas para los productos
app.use("/usuarios", require("./routers/userRoutes.js")); // rutas para los usuarios
app.use("/api", limite, require("./routers/apiRoutes.js"));
// Manejar errores 404
app.use((req, res, next) => {
  res.status(404).render("main/no-encontrado"); // renderizar la vista 404 cuando no se encuentra la ruta
});

// Transformar los datos de formularios a objetos y JSON
app.use(express.urlencoded({ extended: false })); // transformar los datos de formularios a objetos
app.use(express.json()); // permitir el uso de JSON en las solicitudes

// Iniciar el servidor
app.listen(port, () =>
  console.log("Corriendo servidor en: http://localhost:3001/")
);
