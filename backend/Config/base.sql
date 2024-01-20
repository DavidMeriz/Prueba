-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-01-2024 a las 01:17:24
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trenes`
--

CREATE TABLE `trenes` (
  `ID_tren` int(11) NOT NULL,
  `ID_estacion` int(11) DEFAULT NULL,
  `Modelo` varchar(255) NOT NULL,
  `Capacidad_pasajeros` int(11) NOT NULL,
  `Fecha_fabricacion` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `trenes`
--

INSERT INTO `trenes` (`ID_tren`, `ID_estacion`, `Modelo`, `Capacidad_pasajeros`, `Fecha_fabricacion`) VALUES
(1, 1, 'Tren De Madera', 30, '2024-01-01'),
(3, 1, 'ZZZZZZZ', 1999, '2024-01-19'),
(4, 1, 'EEEEEE', 12345, '2024-01-20'),
(5, 3, 'CUANTICO', 1929292, '2024-01-31'),
(6, 6, 'RTX', 2000, '2024-02-09');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `trenes`
--
ALTER TABLE `trenes`
  ADD PRIMARY KEY (`ID_tren`),
  ADD KEY `ID_estacion` (`ID_estacion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `trenes`
--
ALTER TABLE `trenes`
  MODIFY `ID_tren` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `trenes`
--
ALTER TABLE `trenes`
  ADD CONSTRAINT `trenes_ibfk_1` FOREIGN KEY (`ID_estacion`) REFERENCES `estaciones` (`ID_estacion`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
