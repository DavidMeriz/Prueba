<?php
require_once('../Config/cls_conexion.model.php');
class Clase_Estaciones{
    public function todos(){
        try{
        $con = new Clase_Conectar_Base_Datos();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM `estaciones`";
        $result = mysqli_query($con, $cadena);
            return $result;
        } catch (Throwable $th) {
            return $th->getMessage();
        } finally {
            $con->close();
    }
}
public function uno ($ID_estacion){
    try{
    $con = new Clase_Conectar_Base_Datos();
    $con = $con->ProcedimientoConectar();
    $cadena = "SELECT * FROM `estaciones` WHERE ID_estacion = $ID_estacion";
    $result = mysqli_query($con, $cadena);
        return $result;
    } catch (Throwable $th) {
        return $th->getMessage();
    } finally {
        $con->close();
    }
}
public function insertar($Nombre,$Ciudad,$Capacidad){
    try{
    $con = new Clase_Conectar_Base_Datos();
    $con = $con->ProcedimientoConectar();
    $cadena = "INSERT INTO `estaciones`(`Nombre`, `Ciudad`, `Capacidad`) VALUES ('$Nombre','$Ciudad','$Capacidad')";
    $result = mysqli_query($con, $cadena);
        return $result;
    } catch (Throwable $th) {
        return $th->getMessage();
    } finally {
        $con->close();
    }
}

public function actualizar($ID_estacion,$Nombre,$Ciudad,$Capacidad){
    try{
    $con = new Clase_Conectar_Base_Datos();
    $con = $con->ProcedimientoConectar();
    $cadena = "UPDATE `estaciones` SET `Nombre`='$Nombre',`Ciudad`='$Ciudad',`Capacidad`='$Capacidad' WHERE ID_estacion = $ID_estacion";
    $result = mysqli_query($con, $cadena);
        return $result;
    } catch (Throwable $th) {
        return $th->getMessage();
    } finally {
        $con->close();
    }
}

public function eliminar($ID_estacion){
    try{
    $con = new Clase_Conectar_Base_Datos();
    $con = $con->ProcedimientoConectar();
    $cadena = "DELETE FROM `estaciones` WHERE ID_estacion = $ID_estacion";
    $result = mysqli_query($con, $cadena);
        return $result;
    } catch (Throwable $th) {
        return $th->getMessage();
    } finally {
        $con->close();
    }
}
}



