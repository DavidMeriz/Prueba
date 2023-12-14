<?php
require_once('../Models/cls_autores.model.php');
$autores = new Clase_Autores;
switch ($_GET["op"]) {
    case 'todos':
        $datos = array(); 
        $datos = $autores->todos(); 
        while ($fila = mysqli_fetch_assoc($datos)) {
            $todos[] = $fila;
        }
        echo json_encode($todos); 
        break;
    case "uno":
        $ID_autor = $_POST["ID_autor"]; 
        $datos = array(); 
        $datos = $autores->uno($ID_autor); 
        $uno = mysqli_fetch_assoc($datos); 
        echo json_encode($uno); 
        break;
    case 'insertar':
        $Nombre = $_POST["Nombre"];
        $Correo = $_POST["Correo"];
        $Pais = $_POST["Pais"]; 
        $datos = array(); 
        $datos = $autores->insertar($Nombre,$Correo,$Pais); 
        echo json_encode($datos); 
        break;
    case 'actualizar':
        $ID_autor = $_POST["ID_autor"];
        $Nombre = $_POST["Nombre"];
        $Correo = $_POST["Correo"];
        $Pais = $_POST["Pais"];
        $datos = array(); 
        $datos = $autores->actualizar($ID_autor, $Nombre, $Correo,$Pais);
        echo json_encode($datos); 
        break;
    case 'eliminar':
        $ID_autor = $_POST["ID_autor"];
        $datos = array(); 
        $datos = $autores->eliminar($ID_autor); 
        echo json_encode($datos); 
        break;
}