-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-06-2023 a las 22:51:52
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
  `imagen` text NOT NULL,
  `clase_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descuento`, `precio`, `imagen`, `clase_id`) VALUES
(1, 'Celular Motorola', '13', '129999', 'imagen-1682704894638.jpg', 5),
(2, 'Celular Samgung', '10', '49999', 'imagen-1682705239480.jpg', 5),
(3, 'Notebook Asus', '13', '180777', 'imagen-1682705354241.jpg', 6),
(4, 'Notebook Noblex', '30', '148000', 'imagen-1682705414081.jpg', 6),
(5, 'Placa de Video', '39', '120000', 'imagen-1682705561309.jpg', 7),
(6, 'Smart TV LED', '27', '270000', 'imagen-1682705628929.jpg', 3),
(7, 'Smart TV Samsung', '15', '99999', 'imagen-1682705667496.jpg', 3),
(8, 'Tablet Lenovo', '15', '91218', 'imagen-1682705806953.jpg', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `perfil` text NOT NULL,
  `confirmed` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `username`, `password`, `perfil`, `confirmed`) VALUES
(1, 'gonzaloforneron@gmail.com', 'gonzalo', '$2a$08$DGOV2LbkOTomg.IoBCqGve4dbLYSDegDjp3SbVFPwypAIQ4lz.QwG', 'perfil-1687725574411.jpg', '$2a$08$Gn0STFDoJtwX7CklePnflO6PPEq4ZLp42T5I4CDInGhmQcZE67jNO'),
(2, 'urielblanco@gmail.com', 'uriel', '$2a$08$NDk5FuOkWFiaftU1KB3zBeM8DCib0hxoAqHN9066gWMRxkv2WqAJi', 'perfil-1687725656515.jpg', '$2a$08$Xvpb0sgmU0.m530pBBJSduGNGe6beKf09DfMKmPl4WAZSqQwN.d4W'),
(3, 'maximovelasquez@gmail.com', 'maximo', '$2a$08$FLpZseimnt/kYfsSy0BEMex9d3VO5/8N0YeGQ3nFZK/RvUaIkXBZ.', 'perfil-1687725732614.jpg', '$2a$08$8Mgt6sy/d.m/f0fTm.sA0.bMmouiDpu7zAXWndew76RGoOb/nCja.'),
(4, 'franciscoquiroga@gmail.com', 'francisco', '$2a$08$wWhkjWWSjObxvm9qjuAbGOhic9FHUYT8yKfY6ak13myZ53hNQLsZG', 'perfil-1687725768655.jpg', '$2a$08$Czk9aI7ehAiQvOKf1zd3PeboFJ7oGzYV.MQUNARvAUD5KiRbfrJpy');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
