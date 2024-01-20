<?php
require_once('../Config/cls_conexion.model.php');
class Clase_Trenes
{
    public function todos()
    {
        try {
            $con = new Clase_Conectar_Base_Datos();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT
            T.ID_tren,
            E.Nombre AS ID_estacion,
            T.Modelo,
            T.Capacidad_pasajeros,
            T.Fecha_fabricacion
        FROM
            Trenes T
        JOIN
            Estaciones E ON T.ID_estacion = E.ID_estacion;";
            $result = mysqli_query($con, $cadena);
            return $result;
           } catch (Throwable $th) {
            return $th->getMessage();
            }finally{
                $con->close();
            }
        }
        public function uno($ID_tren)
        {
            try {
                $con = new Clase_Conectar_Base_Datos();
                $con = $con->ProcedimientoConectar();
                $cadena = "SELECT * FROM `trenes` WHERE ID_tren = $ID_tren";
                $result = mysqli_query($con, $cadena);
                return $result;
               } catch (Throwable $th) {
                return $th->getMessage();
                }finally{
                    $con->close();
                }
            }
        public function insertar($ID_estacion ,$Modelo,$Capacidad_pasajeros,$Fecha_fabricacion)
        {
            try {
                $con = new Clase_Conectar_Base_Datos();
                $con = $con->ProcedimientoConectar();
                $cadena = "INSERT INTO `trenes`(`ID_estacion`, `Modelo`, `Capacidad_pasajeros`, `Fecha_fabricacion`) VALUES ($ID_estacion,'$Modelo',$Capacidad_pasajeros,'$Fecha_fabricacion')";
                $result = mysqli_query($con, $cadena);
                return $result;
               }catch (Throwable $th) {
                return $th->getMessage();
                }finally{
                    $con->close();
                }
            }
        
        public function actualizar($ID_tren,$ID_estacion,$Modelo,$Capacidad_pasajeros,$Fecha_fabricacion){
            try {
                $con = new Clase_Conectar_Base_Datos();
                $con = $con->ProcedimientoConectar();
                $cadena = "UPDATE `trenes` SET `ID_estacion`=$ID_estacion,`Modelo`='$Modelo',`Capacidad_pasajeros`=$Capacidad_pasajeros,`Fecha_fabricacion`='$Fecha_fabricacion' WHERE ID_tren = $ID_tren";
                $result = mysqli_query($con, $cadena);
                return $result;
               }catch (Throwable $th) {
                return $th->getMessage();
                }finally{
                    $con->close();
                }
            }
    
        public function eliminar($ID_tren){
            try {
                $con = new Clase_Conectar_Base_Datos();
                $con = $con->ProcedimientoConectar();
                $cadena = "DELETE FROM `trenes` WHERE ID_tren = $ID_tren";
                $result = mysqli_query($con, $cadena);
                return $result;
               }catch (Throwable $th) {
                return $th->getMessage();
                }finally{
                    $con->close();
                }
            }
        }