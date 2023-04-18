// --Inicio de pdfizame --
function pdfizame(contenido) {
    var pdf = new jsPDF("p", "pt", "letter");
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    source = contenido;
  
    // we support special element handlers. Register them with jQuery-style
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors
    // (class, of compound) at this time.
    specialElementHandlers = {
      // element with id of "bypass" - jQuery style selector
      "#bypassme": function (element, renderer) {
        // true = "handled elsewhere, bypass text extraction"
        return true;
      },
    };
    margins = {
      top: 80,
      bottom: 60,
      left: 40,
      width: 522,
    };
    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
      source, // HTML string or DOM elem ref.
      margins.left, // x coord
      margins.top,
      {
        // y coord
        width: margins.width, // max width of content on PDF
        elementHandlers: specialElementHandlers,
      },
  
      function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF
        //          this allow the insertion of new lines after html
        pdf.save("Taseichun.pdf");
      },
      margins
    );
  }
  // --Fin de pdfizame --
  
  //--Capturamos el submit para ver si quiere o no el pdf--
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
        if(document.getElementById("chkCopia").checked){
          let conte = armaDatosPdf();
          pdfizame(conte);
      }
  });
  
  function armaDatosPdf(){
  let fNombre = document.getElementById("inpNombre").value;
  let fMail= document.getElementById("inpMail").value;
  let fTel= document.getElementById("inpTelefono").value;
  let fHoraCont= document.getElementById("inpHoraContacto").value;
  const inmus = document.getElementsByName("rdTipoInmueble");
  let fTipoInmueble = getInmueble(inmus);
  let fDireccion = document.getElementById("inpDireccion").value;
  const SelOperacion = document.getElementById("selOperacion");
  let fSelOperacion = SelOperacion.options[SelOperacion.selectedIndex].text;
  const SelAmbientes = document.getElementById("selAmbientes");
  let fSelAmbientes = SelAmbientes.options[SelAmbientes.selectedIndex].text;
  const SelGarage = document.getElementById("selGarage");
  let fSelGarage = SelGarage.options[SelGarage.selectedIndex].text;
  let fSupCub = document.getElementById("inpSupCub").value;
  let fSupTot = document.getElementById("inpSupTotal").value;
  let fObser = document.getElementById("txtObs").value;
  
  return `<p>Nombre: ${fNombre}</p><p>Mail: ${fMail}</p><p>Telefono: ${fTel}</p><p>Horario de contacto: ${fHoraCont}</p><p>Tipo de Inmueble: ${fTipoInmueble}</p><p>Direccion: ${fDireccion}</p><p>Tipo de Operacion: ${fSelOperacion}</p><p>Cantidad de ambientes: ${fSelAmbientes}</p><p>Tiene Garage: ${fSelGarage}</p><p>Metros cuadrados de superficie cubierta: ${fSupCub}</p><p>Metros cuadrados de superficie Total: ${fSupTot}</p><p>Comentarios: ${fObser}</p>`;
  };
  
  
  function getInmueble(inm){
      let ti="No definido";
      for (let i = 0; i < inm.length; i++) {
          if(inm[i].checked){
              ti=inm[i].value;
          };
      };
      return ti;
  };