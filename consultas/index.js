const guardarcontacto = () => {
  var nombre = document.getElementById("nombre").value
  var correo = document.getElementById("correo").value
  var telefono = document.getElementById("telefono").value
  var consulta = document.getElementById("consulta").value
  console.log("guardarcontacto")

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      nombre: 'nombre1',
      correo: 'correo1',
      telefono: 'telefono1',
      consulta: 'consulta',

    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

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



$(document).ready(function () {
  $("#formulariocontacto").validate();
});
