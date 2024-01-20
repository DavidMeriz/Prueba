-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-01-2024 a las 04:03:25
-- Versión del servidor: 10.4.28-MariaDB-log
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
-- Estructura de tabla para la tabla `estaciones`
--

CREATE TABLE `estaciones` (
  `ID_estacion` int(11) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Ciudad` varchar(255) NOT NULL,
  `Capacidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estaciones`
--

INSERT INTO `estaciones` (`ID_estacion`, `Nombre`, `Ciudad`, `Capacidad`) VALUES
(1, 'Madera', 'Quito', 20),
(3, 'Juan', 'Guayaquil', 7),
(11, 'Pica', 'Machala', 8),
(13, 'Mercedez', 'Riobamba', 333),
(15, 'Hino', 'Zamora', 100),
(16, 'DADA', 'ZZZ', 333),
(17, 'CEDA', 'QUITO', 400),
(19, 'ddsada', 'nnnnnn', 4444),
(20, 'ffdsf', 'fasdfdf', 2);

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
(3, 11, 'Picaaa', 50, '2024-01-03'),
(5, 1, 'cacssca', 1222, '2024-01-20'),
(7, 3, 'qqqqqq', 13333333, '2024-01-31'),
(9, 11, 'AAA', 3333, '2024-01-21'),
(10, 13, 'CCCCC', 30, '2024-01-17'),
(11, 16, 'BBBBBB', 55, '2024-01-25'),
(12, 11, 'ggggggg', 3333, '2024-01-27'),
(13, 17, 'zxc', 2333, '2024-06-14'),
(14, 3, 'asddad', 344, '2024-01-20'),
(15, 20, 'dasdada', 321321, '2024-01-28');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estaciones`
--
ALTER TABLE `estaciones`
  ADD PRIMARY KEY (`ID_estacion`);

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
-- AUTO_INCREMENT de la tabla `estaciones`
--
ALTER TABLE `estaciones`
  MODIFY `ID_estacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `trenes`
--
ALTER TABLE `trenes`
  MODIFY `ID_tren` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

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
