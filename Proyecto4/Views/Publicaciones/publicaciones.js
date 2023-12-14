//aqui va a estar el codigo de usuarios.model.js

function init() {
    $("#frm_publicacion").on("submit", function (e) {
      guardaryeditar(e);
    });
  }
  
  $().ready(() => {
    todos();
  });
  
  var todos = () => {
    var html = "";
    $.get("../../Controllers/publicaciones.controller.php?op=todos", (res) => {
      console.log(res);
      res = JSON.parse(res);
      $.each(res, (index, valor) => {
        html += `<tr>
                  <td>${index + 1}</td>
                  <td>${valor.Contenido}</td>
                  <td>${valor.Fecha_publicacion}</td>
              <td>
              <button class='btn btn-success' onclick='editar(${
                valor.ID_publicacion
              })'>Editar</button>
              <button class='btn btn-danger' onclick='eliminar(${
                valor.ID_publicacion
              })'>Eliminar</button>
              <button class='btn btn-info' onclick='ver(${
                valor.ID_publicacion
              })'>Ver</button>
              </td></tr>
                  `;
      });
      $("#tabla_publicacion").html(html);
    });
  };
  
  var guardaryeditar = (e) => {
    e.preventDefault();
    var dato = new FormData($("#frm_publicacion")[0]);
    var ruta = "";
    var ID_publicacion = document.getElementById("ID_publicacion").value;
    if (ID_publicacion > 0) {
      ruta = "../../Controllers/publicacion.controller.php?op=actualizar";
    } else {
      ruta = "../../Controllers/publicacion.controller.php?op=insertar";
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
          Swal.fire("publicacion", "Registrado con éxito", "success");
          todos();
          limpia_Cajas();
        } else {
          Swal.fire("publicacion", "Error al guardo, intente mas tarde", "error");
        }
      },
    });
  };
  
  var cargaAutores = () => {
    return new Promise((resolve, reject) => {
      $.post("../../Controllers/autores.controller.php?op=todos", (res) => {
        res = JSON.parse(res);
        var html = "";
        $.each(res, (index, val) => {
          html += `<option value="${val.ID_autor}"> ${val.Contenido}</option>`;
        });
        $("#ID_autor").html(html);
        resolve();
      }).fail((error) => {
        reject(error);
      });
    });
  };
  
  var editar = async (ID_publicacion) => {
    await cargaAutores();
    $.post(
      "../../Controllers/publicacion.controller.php?op=uno",
      { ID_publicacion: ID_publicacion },
      (res) => {
        res = JSON.parse(res);
  
        $("#ID_publicacion").val(res.ID_publicacion);
        $("#ID_autor").val(res.ID_autor);
        //document.getElementById("PaisId").value = res.PaisesId;
  
  
        $("#Contenido").val(res.contenido); //----- nombre
      }
    );
    $("#Modal_publicacion").modal("show");
  };
  
  var eliminar = (ID_publicacion) => {
    Swal.fire({
      title: "Autores",
      text: "Esta seguro de eliminar la provincia",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        $.post(
          "../../Controllers/publicacion.controller.php?op=eliminar",
          { ID_publicacion: ID_publicacion },
          (res) => {
            res = JSON.parse(res);
            if (res === "ok") {
              Swal.fire("publicacion", "Provincia Eliminado", "success");
              todos();
            } else {
              Swal.fire("Error", res, "error");
            }
          }
        );
      }
    });
  
    impia_Cajas();
  };
  
  var limpia_Cajas = () => {
    document.getElementById("ID_publicacion").value = "";
    document.getElementById("ID_autor").value = "";
    document.getElementById("Nombre").value = "";
    document.getElementById("Contenido").value = "";
    document.getElementById("Fecha_publicacion").value = "";
    $("#Modal_publicacion").modal("hide");
  };
  init();