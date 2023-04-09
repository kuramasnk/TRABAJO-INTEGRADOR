const guardarcontacto= () => {
    var nombre= document.getElementById("nombre").value
    var correo= document.getElementById("correo").value
    var telefono= document.getElementById("telefono").value
    var consulta= document.getElementById("consulta").value
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
        .then((json) => {console.log(json);mostrardiv("guardado")});

}
const mostrardiv= (id) => {
    document.getElementById(id).style.display="block"
}
