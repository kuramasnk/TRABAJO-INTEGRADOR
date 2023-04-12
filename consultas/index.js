
const enviarconsulta = () => {
  var nombre = document.getElementById("nombre").value
  var correo = document.getElementById("correo").value
  var telefono = document.getElementById("telefono").value
  var consulta = document.getElementById("consulta").value
  console.log("Consulta realizada por " + nombre + ",correo electrónico " + correo + ", teléfono " + telefono + ". CONSULTA: " + consulta)
  mostrardiv("guardado")
}
const mostrardiv = (id) => {
  document.getElementById(id).style.display = "block"
}

function iniciarMap() {
  var coord = { lat: -34.595998, lng: -58.375530 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}

/*---------------------------------- validacion j query ---------------------------------------------------------*/

$(document).ready(function() {
  $("#formulariocontacto").validate({
    submitHandler: function(form) {
      enviarconsulta();
    }
  });
});
