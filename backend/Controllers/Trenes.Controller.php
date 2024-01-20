<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}
require_once ('../Models/Trenes.model.php');
$trenes = new Clase_Trenes;
switch ($_GET["op"]){
    case 'todos':
        $datos = array();
        $datos = $trenes->todos();
        while($fila = mysqli_fetch_assoc($datos)){
            $todos[] = $fila;
        }
        echo json_encode($todos);
        break;
    case 'uno':
        $ID_tren = $_POST["ID_tren"];
        $datos = array();
        $datos = $trenes->uno($ID_tren);
        $uno = mysqli_fetch_assoc($datos);
        echo json_encode($uno);
        break;
    case 'insertar':
        $ID_estacion  = $_POST["ID_estacion"];
        $Modelo = $_POST["Modelo"];
        $Capacidad_pasajeros = $_POST["Capacidad_pasajeros"];
        $Fecha_fabricacion = $_POST["Fecha_fabricacion"];
        $datos = array();
        $datos = $trenes->insertar($ID_estacion, $Modelo, $Capacidad_pasajeros, $Fecha_fabricacion);
        echo json_encode($datos);
        break;
    case 'actualizar':
        $ID_tren = $_POST["ID_tren"];
        $ID_estacion  = $_POST["ID_estacion"];
        $Modelo = $_POST["Modelo"];
        $Capacidad_pasajeros = $_POST["Capacidad_pasajeros"];
        $Fecha_fabricacion = $_POST["Fecha_fabricacion"];
        $datos = array();
        $datos = $trenes->actualizar($ID_tren, $ID_estacion, $Modelo, $Capacidad_pasajeros, $Fecha_fabricacion);
        echo json_encode($datos);
        break;
    case 'eliminar':
        $ID_tren = $_POST["ID_tren"];
        $datos = array();
        $datos = $trenes->eliminar($ID_tren);
        echo json_encode($datos);
        break;

}