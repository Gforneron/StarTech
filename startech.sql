-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-05-2023 a las 17:17:21
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `startech`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clases`
--

CREATE TABLE `clases` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clases`
--

INSERT INTO `clases` (`id`, `nombre`) VALUES
(1, 'Electrodomesticos'),
(2, 'Lavado'),
(3, 'Tv y audio'),
(4, 'Congeladores'),
(5, 'Celular'),
(6, 'Nootebook'),
(7, 'Componente'),
(8, 'Tablet');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(10) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descuento` decimal(65,0) NOT NULL,
  `precio` decimal(65,0) NOT NULL,
  `imagen` longblob NOT NULL,
  `clase_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descuento`, `precio`, `imagen`, `clase_id`) VALUES
(1, 'Celular Motorola', '13', '129999', 0x696d6167656e2d313638323730343839343633382e6a7067, 5),
(2, 'Celular Samgung', '10', '49999', 0x696d6167656e2d313638323730353233393438302e6a7067, 5),
(3, 'Notebook Asus', '13', '180777', 0x696d6167656e2d313638323730353335343234312e6a7067, 6),
(4, 'Notebook Noblex', '30', '148000', 0x696d6167656e2d313638323730353431343038312e6a7067, 6),
(5, 'Placa de Video', '39', '120000', 0x696d6167656e2d313638323730353536313330392e6a7067, 7),
(6, 'Smart TV LED', '27', '270000', 0x696d6167656e2d313638323730353632383932392e6a7067, 3),
(7, 'Smart TV Samsung', '15', '99999', 0x696d6167656e2d313638323730353636373439362e6a7067, 3),
(8, 'Tablet Lenovo', '15', '91218', 0x696d6167656e2d313638323730353830363935332e6a7067, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `perfil` blob NOT NULL,
  `confirmed` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `username`, `password`, `perfil`, `confirmed`) VALUES
(1, 'gonzaloforneron@gmail.com', 'gonzalo', '$2a$08$s6BlzDEQuS6POxE0BeTKAOMPsfYfEk6ny.TQxqOJvWwsaKsBD7zQO', 0x70657266696c2d313638323730333533393336332e6a7067, '$2a$08$ru.zPEz.bhnufTNXXzlfS.nZUHXNZwiCwxarLIC73vyGucWNAIaku'),
(2, 'maximovelasquez@gmail.com', 'maximo', '$2a$08$BqF1UVTnn.ucY.7djstN0ONt6/5cC7oUqH/HitMXYzTYmRUvZ.Xy2', 0x70657266696c2d313638323730333731303138322e6a7067, '$2a$08$Gf2vQlPnWS2C15WhR2U.lei7G0SWvHr0r1SFDw/wq2AoutXoO6q9.'),
(3, 'franciscoquiroga@gmail.com', 'francisco', '$2a$08$/Qu5kcOz1ar8dg6AFrgDJOfxI8v9AwU2aeJFRYuUDKswldyxacGdu', 0x70657266696c2d313638323730333734373639382e6a7067, '$2a$08$s8F6fwzj074b9dyUJaRoY.MN7lN7vFTbGJ43yqO6ftEoBZfhMIurq'),
(4, 'urielblanco@gmail.com', 'uriel', '$2a$08$s9jw80UmWa0IM35oireFn.OeFtrhFBL/PMnNbLFTjWB57Ag/xb48a', 0x70657266696c2d313638323730333737303330302e6a7067, '$2a$08$6KHk2hmY1fhNvmqsV4Tg..7.LFN8ft/y5xsKsSAn1wueel0y5alq2');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clases`
--
ALTER TABLE `clases`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `clase_id` (`clase_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clases`
--
ALTER TABLE `clases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_productos_clases` FOREIGN KEY (`clase_id`) REFERENCES `clases` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
