/**
 * inventario.js
 * 
 * Contiene las funciones que implementan las operaciones para el inventario.
 * 
 * Karla Ximena Islas Cruz ID: 213090
 * Gabriel Francisco Piñuelas Ramos ID: 230626
 */


var tipoMedio;
var isbn;

/**
 * Despliega la lista del inventario de revistas.
 */
function despliegaInventarioRevistas() {

    //Limpia la seccion de resultados
    borraHijos("mainId");

    let titulo = "Inventario revistas";
    let existencia = 0;

    //Datos ficticios
    let inventario = [{ isbn: "987898765601", titulo: "Vogue", existencia: 2 },
    { isbn: "098787656781", titulo: "Noticias", existencia: 5 },
    { isbn: "176890975212", titulo: "Deporte", existencia: 3 }];

    let encabezados = ["Isbn", "título", "Cantidad"];

    despliegaTabla("mainId", titulo, encabezados, inventario);

}

/**
 * Despliega un formulario para capturar los datos de una revista a inventariar.
 */
function capturaRevistaInventariar() {
    // Limpia la seccion main
    borraHijos("mainId");

    // Obten el elemento dentro del que se desplegara la tabla.
    let padre = document.getElementById("mainId");

    // Crea un titulo y lo agrega al elemento padre
    let titulo = document.createElement("h2");
    titulo.innerHTML = "Captura revista";
    padre.appendChild(titulo);

    // Crea un formulario y lo agrega al elemento padre
    let formulario = document.createElement("form");
    padre.appendChild(formulario);

    // Crea un layout tipo cuadricula
    let contenedorFormulario = document.createElement("div");
    contenedorFormulario.setAttribute("class", "contenedorFormulario");
    formulario.appendChild(contenedorFormulario);

    // Crea celda para la etiqueta del ISBN
    let celdaEtiqIsbn = document.createElement("div");
    celdaEtiqIsbn.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaEtiqIsbn);

    // Crea una etiqueta del ISBN
    let etiqIsbn = document.createElement("label");
    etiqIsbn.setAttribute("for", "campoIsbnId");
    etiqIsbn.innerHTML = "Isbn *: ";
    celdaEtiqIsbn.appendChild(etiqIsbn);

    // Crea celda para campo de texto para capturar el ISBN
    let celdaIsbn = document.createElement("div");
    celdaIsbn.setAttribute("id", "celdaIsbnId");
    contenedorFormulario.appendChild(celdaIsbn);

    // Crea un campo de entrada de texto para capturar el ISBN
    let campoIsbn = document.createElement("input");
    campoIsbn.setAttribute("type", "text");
    campoIsbn.setAttribute("id", "campoIsbnId");
    campoIsbn.setAttribute("size", "13");
    campoIsbn.setAttribute("maxlength", "13");
    campoIsbn.setAttribute("title", "Trece d&iacute;gitos");
    celdaIsbn.appendChild(campoIsbn);

    // Crea celda para la etiqueta del titulo
    let celdaEtiqTitulo = document.createElement("div");
    celdaEtiqTitulo.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaEtiqTitulo);

    // Crea una etiqueta del titulo
    let etiqTitulo = document.createElement("label");
    etiqTitulo.setAttribute("for", "campoTituloId");
    etiqTitulo.innerHTML = "Titulo *: ";
    celdaEtiqTitulo.appendChild(etiqTitulo);

    // Crea celda para campo de texto para capturar el titulo
    let celdaTitulo = document.createElement("div");
    celdaTitulo.setAttribute("id", "celdaTituloId");
    contenedorFormulario.appendChild(celdaTitulo);

    // Crea un campo de entrada de texto para capturar el titulo 
    let campoTitulo = document.createElement("input");
    campoTitulo.setAttribute("type", "text");
    campoTitulo.setAttribute("id", "campoTituloId");
    campoTitulo.setAttribute("size", "20");
    campoTitulo.setAttribute("maxlength", "20");
    campoTitulo.setAttribute("title", "M&aacute;ximo 20 caracteres");
    celdaTitulo.appendChild(campoTitulo);

    // Crea celda para la etiqueta de la existencia
    let celdaEtiqExistencia = document.createElement("div");
    celdaEtiqExistencia.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaEtiqExistencia);

    // Crea una etiqueta de la existencia
    let etiqExistencia = document.createElement("label");
    etiqExistencia.setAttribute("for", "campoExistenciaId");
    etiqExistencia.innerHTML = "Existencia *: ";
    celdaEtiqExistencia.appendChild(etiqExistencia);

    // Crea celda para campo de texto para capturar la existencia
    let celdaExistencia = document.createElement("div");
    celdaExistencia.setAttribute("id", "celdaExistenciaId");
    contenedorFormulario.appendChild(celdaExistencia);

    // Crea un campo de entrada de texto para capturar la existencia 
    let campoEx = document.createElement("input");
    campoEx.setAttribute("type", "text");
    campoEx.setAttribute("id", "campoExistenciaId");
    campoEx.setAttribute("minlength", "3");
    campoEx.setAttribute("maxlength", "3");
    campoEx.setAttribute("title", "M&aacute;ximo 3 caracteres");
    celdaExistencia.appendChild(campoEx);

    // Crea una celda en blanco
    let celdaVacia = document.createElement("div");
    celdaVacia.setAttribute("class", "span centrada");
    celdaVacia.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia);


    // Crea una celda con boton enviar
    let celdaBoton = document.createElement("div");
    celdaBoton.setAttribute("class", "span centrada");
    contenedorFormulario.appendChild(celdaBoton);

    // Crea un boton
    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.setAttribute("onclick", "despliegaRevista()");
    boton.innerHTML = "Enviar";
    celdaBoton.appendChild(boton);
}