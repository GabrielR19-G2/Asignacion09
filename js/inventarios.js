/**
 * inventario.js
 * 
 * Contiene las funciones que implementan las operaciones para el inventario.
 * 
 * Karla Ximena Islas Cruz ID: 213090
 * Gabriel Francisco Piñuelas Ramos ID: 230626
 */

/**
 * Despliega la lista del inventario de revistas.
 */
function despliegaInventarioRevistas() {

    //Limpia la seccion de resultados
    borraHijos("mainId");

    let titulo = "Inventario revistas";

    //Datos ficticios
    let inventario = [{ isbn: "987898765601", titulo: "Vogue", existencia: 2, disponibilidad: 2},
    { isbn: "098787656781", titulo: "Noticias", existencia: 5, disponibilidad: 5},
    { isbn: "176890975212", titulo: "Deporte", existencia: 3, disponibilidad: 3}];

    let encabezados = ["Isbn", "Título", "Existencia", "Disponibilidad"];

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
    titulo.innerHTML = "Inventariar revista";
    padre.appendChild(titulo);

    // Crea un formulario y lo agrega al elemento padre
    let formulario = document.createElement("form");
    padre.appendChild(formulario);

    // Crea un layout tipo cuadricula
    let contenedorFormulario = document.createElement("div");
    contenedorFormulario.setAttribute("class", "contenedorFormulario");
    formulario.appendChild(contenedorFormulario);

    // Crea celda para la etiqueta de la revista
    let celdaEtiqRevista = document.createElement("div");
    celdaEtiqRevista.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaEtiqRevista);

    // Crea una etiqueta de la revista
    let etiqRevista = document.createElement("label");
    etiqRevista.setAttribute("for", "revistaId");
    etiqRevista.innerHTML = "Revista *";
    celdaEtiqRevista.appendChild(etiqRevista);

    // Crea celda para campo de texto para capturar la revista
    let celdaRevista = document.createElement("div");
    celdaRevista.setAttribute("class", "celda");
    celdaRevista.setAttribute("id", "celdaRevistaId");
    contenedorFormulario.appendChild(celdaRevista);

    //Datos ficticios
    // Agrega una lista de seleccion para seleccionar la revista
    let valores = ["Vogue", "Noticias", "Deportes"];
    let sel = "Vogue";
    despliegaListaSel("celdaRevistaId", "revistaId", valores, valores, sel);

    // Crea celda para la etiqueta de la cantidad
    let celdaEtiqCantidad = document.createElement("div");
    celdaEtiqCantidad.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaEtiqCantidad);

    // Crea una etiqueta de la cantidad
    let etiqCantidad = document.createElement("label");
    etiqCantidad.setAttribute("for", "campoCantidadId");
    etiqCantidad.innerHTML = "Cantidad *: ";
    celdaEtiqCantidad.appendChild(etiqCantidad);

    // Crea celda para campo de texto para capturar la cantidad
    let celdaCantidad = document.createElement("div");
    celdaCantidad.setAttribute("id", "celdaExistenciaId");
    contenedorFormulario.appendChild(celdaCantidad);

    // Crea un campo de entrada de texto para capturar la cantidad
    let campoCantidad = document.createElement("input");
    campoCantidad.setAttribute("type", "text");
    campoCantidad.setAttribute("id", "campoCantidadId");
    campoCantidad.setAttribute("maxlength", "10");
    campoCantidad.setAttribute("title", "M&aacute;ximo 10 caracteres");
    celdaCantidad.appendChild(campoCantidad);

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
    boton.setAttribute("onclick", "");
    boton.innerHTML = "Enviar";
    celdaBoton.appendChild(boton);
}