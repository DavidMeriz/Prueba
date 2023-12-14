
function init(){
  $("#frm_autores").on("submit", function(e){
      guardaryeditar(e);
  });
}


$().ready(()=>{
  todos();
});

var todos = () =>{
   var html = "";
  $.get("../../Controllers/autores.controller.php?op=todos", (res) => {
    res = JSON.parse(res);
    $.each(res, (index, valor) => {

      html += `<tr>
              <td>${index + 1}</td>
              <td>${valor.Nombre}</td>
              <td>${valor.Pais}</td>
          <td>
          <button class='btn btn-success' onclick='editar(${
            valor.ID_autor
          })'>Editar</button>
          <button class='btn btn-danger' onclick='eliminar(${
            valor.ID_autor
          })'>Eliminar</button>
          <button class='btn btn-info' onclick='ver(${
            valor.ID_autor
          })'>Ver</button>
          </td></tr>
              `;
    });
    $("#tabla_autores").html(html);
  });
};

var guardaryeditar=(e)=>{
  e.preventDefault();
  var dato = new FormData($("#frm_autores")[0]);
  var ruta = '';
  var ID_autor = document.getElementById("ID_autor").value
  if(ID_autor > 0){
   ruta = "../../Controllers/autores.controller.php?op=actualizar"
  }else{
      ruta = "../../Controllers/autores.controller.php?op=insertar"
  }
  $.ajax({
      url: ruta,
      type: "POST",
      data: dato,
      contentType: false,
      processData: false,
      success: function (res) {
        res = JSON.parse(res);
        if (res == "ok") {
          Swal.fire("Autores", "Registrado con éxito" , "success");
          todos();
          limpia_Cajas();
        } else {
          Swal.fire("Autores", "Error al guardo, intente mas tarde", "error");
        }
      },
    });
}

var editar = (ID_autor)=>{

  $.post(
    "../../Controllers/autores.controller.php?op=uno",
    { ID_autor: ID_autor },
    (res) => {
      res = JSON.parse(res);
      $("#ID_autor").val(res.ID_autor);
      $("#Nombre").val(res.Nombre);
      $("#Correo").val(res.Correo);
      $("#Pais").val(res.Pais);
  
    }
  );
  $("#Modal_autores").modal("show");
}


var eliminar = (ID_autor)=>{
  Swal.fire({
      title: "Autores",
      text: "Esta seguro de eliminar el Autor",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        $.post(
          "../../Controllers/autores.controller.php?op=eliminar",
          { ID_autor: ID_autor },
          (res) => {
            res = JSON.parse(res);
            if (res === "ok") {
              Swal.fire("Autores", "Autor Eliminado", "success");
              todos();
            } else {
              Swal.fire("Error", res, "error");
            }
          }
        );
      }
    });

    impia_Cajas();
}

var limpia_Cajas = ()=>{
  document.getElementById("ID_autor").value = "";
  document.getElementById("Nombre").value = "";
  document.getElementById("Correo").value = "";
  document.getElementById("Pais").value = "";
  $("#Modal_autores").modal("hide");

}
init();