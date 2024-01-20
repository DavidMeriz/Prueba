<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}
require_once ('../Models/Estaciones.model.php');
$estaciones = new Clase_Estaciones;

switch ($_GET["op"]){
    case 'todos':
        $datos = array();
        $datos = $estaciones->todos();
        while($fila = mysqli_fetch_assoc($datos)){
            $todos[] = $fila;
        }
        echo json_encode($todos);
        break;
    case 'uno':
        $ID_estacion = $_POST["ID_estacion"];
        $datos = array();
        $datos = $estaciones->uno($ID_estacion);
        $uno = mysqli_fetch_assoc($datos);
        echo json_encode($uno);
        break;
    case 'insertar':        
        
        $Nombre = $_POST["Nombre"];
        $Ciudad = $_POST["Ciudad"];
        $Capacidad = $_POST["Capacidad"];
        $datos = array();
        $datos = $estaciones->insertar($Nombre,$Ciudad,$Capacidad);
        echo json_encode($datos);
        break;
    case 'actualizar':
        $ID_estacion = $_POST["ID_estacion"];
        $Nombre = $_POST["Nombre"];
        $Ciudad = $_POST["Ciudad"];
        $Capacidad = $_POST["Capacidad"];
        $datos = array();
        $datos = $estaciones->actualizar($ID_estacion,$Nombre,$Ciudad,$Capacidad);
        echo json_encode($datos);
        break;
    case 'eliminar':
            $ID_estacion = $_POST["ID_estacion"];
            $datos = array();
            $datos = $estaciones->eliminar($ID_estacion);
            echo json_encode($datos);
            break;
        
}