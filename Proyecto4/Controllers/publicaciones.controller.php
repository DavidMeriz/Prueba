<?php
require_once('../Models/cls_publicaciones.model.php');
$publicaciones = new Clase_Publicaciones;
switch ($_GET["op"]) {
    case 'todos':
        $datos = array(); 
        $datos = $publicaciones->todos(); 
        while ($fila = mysqli_fetch_assoc($datos)) { 
            $todos[] = $fila;
        }
        echo json_encode($todos); 
        break;
    case "uno":
        $ID_publicacion = $_POST["ID_publicacion"]; 
        $datos = array(); 
        $datos = $publicaciones->uno($ID_publicacion); 
        $uno = mysqli_fetch_assoc($datos); 
        echo json_encode($uno); 
        break;
    case 'insertar':
        $ID_autor = $_POST["ID_autor"];
        $Contenido = $_POST["Contenido"];
        $Fecha_publicacion = $_POST["Fecha_publicacion"];
        $datos = array(); 
        $datos = $publicaciones->insertar($Contenido, $ID_autor,$Fecha_publicacion);
        echo json_encode($datos); 
        break;
    case 'actualizar':
        $ID_publicacion = $_POST["ID_publicacion"];
        $ID_autor = $_POST["ID_autor"];
        $Contenido = $_POST["Contenido"];
        $Fecha_publicacion = $_POST["Fecha_publicacion"];
        $datos = array(); 
        $datos = $publicaciones->actualizar($ID_publicacion, $ID_autor, $Contenido,$Fecha_publicacion); 
        echo json_encode($datos); 
        break;
    case 'eliminar':
        $ID_publicacion = $_POST["ID_publicacion"]; 
        $datos = array(); 
        $datos = $publicaciones->eliminar($ID_publicacion); 
        echo json_encode($datos); 
        break;
}