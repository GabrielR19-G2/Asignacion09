/* 
 * revistas.js
 * 
 * Contiene las funciones que implementan las operaciones con las revistas.
 * 
 * Karla Ximena Islas Cruz ID: 213090
 * Gabriel Francisco Piñuelas Ramos ID: 230626
 */

/**
 * Esta funcion despliega un formulario para capturar el isbn
 * de una revista a guardar en la BD catalogoRevistas.
 */
function capturaIsbn() {
    // Limpia la seccion main
    borraHijos("mainId");

    // Obten el elemento dentro del que se desplegara la tabla.
    let padre = document.getElementById("mainId");

    // Crea un titulo y lo agrega a su elemento padre
    let titulo = document.createElement("h2");
    titulo.innerHTML = "Captura ISBN de la revista";
    padre.appendChild(titulo);

    // Crea un formulario y lo agrega a su elemento padre
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
    etiqIsbn.innerHTML = "ISBN *: ";
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
    campoIsbn.setAttribute("title", "Trece d&iacute;gitos");

    // Agrega la celda a la fila 
    celdaIsbn.appendChild(campoIsbn);

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
    boton.setAttribute("onclick", "capturaRevista()");
    boton.innerHTML = "Enviar";
    celdaBoton.appendChild(boton);

    // Crea una celda en blanco
    let celdaVacia2 = document.createElement("div");
    celdaVacia2.setAttribute("class", "span centrada");
    celdaVacia2.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia2);

    // Crea una seccion para mostrar resultados
    let resultados = document.createElement("div");
    resultados.setAttribute("id", "resultadosId");
    padre.appendChild(resultados);
}

/**
 * Despliega un formulario para capturar los datos de una revista.
 */
function capturaRevista() {
    // Obtiene el valor capturado en el campo de entrada campoIsbn del formulario desplegado por la funcion capturaIsbn()
    isbn = document.getElementById("campoIsbnId").value;

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
    campoIsbn.setAttribute("title", "Trece d&iacute;gitos");
    campoIsbn.setAttribute("readonly", "readonly");
    campoIsbn.setAttribute("value", isbn);
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

    // Crea celda para la etiqueta de la editorial
    let celdaEtiqEditorial = document.createElement("div");
    celdaEtiqEditorial.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaEtiqEditorial);

    // Crea una etiqueta de la editorial de la revista
    let etiqEditorial = document.createElement("label");
    etiqEditorial.setAttribute("for", "campoEditorialId");
    etiqEditorial.innerHTML = "Editorial: ";
    celdaEtiqEditorial.appendChild(etiqEditorial);

    // Crea celda para campo de texto para capturar la editorial
    let celdaEditorial = document.createElement("div");
    celdaEditorial.setAttribute("id", "celdaEditorialId");
    contenedorFormulario.appendChild(celdaEditorial);

    // Crea un campo de entrada de texto para capturar la editorial
    let campoEditorial = document.createElement("input");
    campoEditorial.setAttribute("type", "text");
    campoEditorial.setAttribute("id", "campoEditorialId");
    campoEditorial.setAttribute("size", "20");
    campoEditorial.setAttribute("maxlength", "35");
    campoEditorial.setAttribute("title", "M&aacute;ximo 35 caracteres");
    celdaEditorial.appendChild(campoEditorial);

    // Crea celda para la etiqueta de la periodicidad
    let celdaEtiqPeriodicidad = document.createElement("div");
    celdaEtiqPeriodicidad.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaEtiqPeriodicidad);

    // Crea una etiqueta de la periodicidad
    let etiqPeriodicidad = document.createElement("label");
    etiqPeriodicidad.setAttribute("for", "campoPeriodicidadId");
    etiqPeriodicidad.innerHTML = "Periodicidad: ";
    celdaEtiqPeriodicidad.appendChild(etiqPeriodicidad);

    // Crea celda para campo de texto para capturar la periodicidad
    let celdaPeriodicidad = document.createElement("div");
    celdaPeriodicidad.setAttribute("id", "celdaPeriodicidadId");
    contenedorFormulario.appendChild(celdaPeriodicidad);

    // Crea un campo de entrada de texto para capturar la periodicidad
    let campoPeriodicidad = document.createElement("input");
    campoPeriodicidad.setAttribute("type", "text");
    campoPeriodicidad.setAttribute("id", "campoPeriodicidadId");
    campoPeriodicidad.setAttribute("size", "20");
    campoPeriodicidad.setAttribute("maxlength", "20");
    campoPeriodicidad.setAttribute("title", "M&aacute;ximo 20 caracteres");
    celdaPeriodicidad.appendChild(campoPeriodicidad);

    // Crea celda para la etiqueta de la fecha
    let celdaEtiqFecha = document.createElement("div");
    celdaEtiqFecha.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaEtiqFecha);

    // Crea una etiqueta de la fecha
    let etiqFecha = document.createElement("label");
    etiqFecha.setAttribute("for", "campoFechaId");
    etiqFecha.innerHTML = "Fecha: ";
    celdaEtiqFecha.appendChild(etiqFecha);

    // Crea celda para campo de texto para capturar la fecha
    let celdaFecha = document.createElement("div");
    celdaFecha.setAttribute("id", "celdaFechaId");
    contenedorFormulario.appendChild(celdaFecha);

    // Crea un campo de entrada de texto para capturar la fecha
    let campoFecha = document.createElement("input");
    campoFecha.setAttribute("type", "text");
    campoFecha.setAttribute("id", "campoFechaId");
    campoFecha.setAttribute("size", "20");
    campoFecha.setAttribute("maxlength", "20");
    campoFecha.setAttribute("title", "M&aacute;ximo 20 caracteres");
    celdaFecha.appendChild(campoFecha);

    // Crea celda para la etiqueta de la clasificacion
    let celdaEtiqClasificacion = document.createElement("div");
    celdaEtiqClasificacion.setAttribute("class", "derecha");
    contenedorFormulario.appendChild(celdaEtiqClasificacion);

    // Crea una etiqueta de la clasificacion
    let etiqClasificacion = document.createElement("label");
    etiqClasificacion.setAttribute("for", "campoClasificacionId");
    etiqClasificacion.innerHTML = "Clasificación *: ";
    celdaEtiqClasificacion.appendChild(etiqClasificacion);

    // Crea celda para campo de texto para capturar la clasificacion
    let celdaClasificacion = document.createElement("div");
    celdaClasificacion.setAttribute("id", "celdaClasificacionId");
    contenedorFormulario.appendChild(celdaClasificacion);

    // Crea un campo de entrada de texto para capturar la clasificacion
    let campoClasificacion = document.createElement("input");
    campoClasificacion.setAttribute("type", "text");
    campoClasificacion.setAttribute("id", "campoClasificacionId");
    campoClasificacion.setAttribute("size", "20");
    campoClasificacion.setAttribute("maxlength", "20");
    campoClasificacion.setAttribute("title", "M&aacute;ximo 20 caracteres");
    celdaClasificacion.appendChild(campoClasificacion);

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

    // Crea una celda en blanco
    let celdaVacia2 = document.createElement("div");
    celdaVacia2.setAttribute("class", "span centrada");
    celdaVacia2.innerHTML = "&nbsp;";
    contenedorFormulario.appendChild(celdaVacia2);

    // Crea una seccion para mostrar resultados
    let resultados = document.createElement("div");
    resultados.setAttribute("id", "resultadosId");
    padre.appendChild(resultados);
}

/**
 * Funcion de respuesta para procesar la respuesta a la 
 * solicitud de agregarRevista. Despliega la tabla con el
 * objeto agregado. 
 */
function despliegaRevista() {
    // Limpia la seccion de resultados
    borraHijos("mainId");

    //Datos ficticios 
    let titulo = "Revista agregada";
    let revista = {isbn: "1234567891012", titulo: "Tú", editorial: "México", periodicidad: "Mensual", fecha: "07/10/2018", clasificacion: 'A'};
                     
    // Arreglo con los encabezados de la tabla de la lista de revistas
    let encabezados = ["Isbn", "Título", "Editorial", "Periodicidad", "Fecha", "Clasificación"];

    // Despliega la tabla con el objeto agregado
    despliegaObjeto("mainId", titulo, encabezados, revista) 
}

/**
 * Funcion que despliega la tabla con todas las revistas
 * registradas. 
 */
function despliegaRevistas() {
    // Limpia la seccion de resultados
    borraHijos("mainId");

    // Datos ficticios
    let titulo = "Lista de revistas";
    let revistas = [{isbn: "987898765601", titulo: "Vogue", editorial: "México", periodicidad: "Mensual", fecha: "12/11/2020", clasificacion: 'A'}, 
               {isbn: "098787656781", titulo: "Noticias", editorial: "Salamandra", periodicidad: "Anual", fecha: "30/10/2020", clasificacion: 'A'}, 
               {isbn: "176890975212", titulo: "Deporte", editorial: "Norma", periodicidad: "Semanal", fecha: "22/05/2022", clasificacion: 'B'}];
                     
    // Arreglo con los encabezados de la tabla de la lista de revistas
    let encabezados = ["Isbn", "Título", "Editorial", "Periodicidad", "Fecha", "Clasificación"];

    // Despliega la tabla con la lista de revistas
    despliegaTabla("mainId", titulo, encabezados, revistas);
}