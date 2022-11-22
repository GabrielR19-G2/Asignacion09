/* 
 * revistas.js
 * 
 * Contiene las funciones que implementan las operaciones
 * con las revistas
 * 
 * Karla Ximena Islas Cruz ID: 213090
 * Gabriel Francisco Piñuelas Ramos ID: 230626
 */

/**
 * Despliega un formulario para capturar el isbn de una revista.
 */
function capturaIsbn() {
    // Limpia la seccion main
    borraHijos("mainId");

    // Obten el elemento dentro del que se desplegara la tabla.
    let padre = document.getElementById("mainId");

    // Crea un titulo
    let titulo = document.createElement("h2");
    // Le agrega el texto al titulo
    titulo.innerHTML = "Captura ISBN de la revista";
    // Agrega el titulo a su elemento padre
    padre.appendChild(titulo); 
    
    // Crea un formulario
    let formulario = document.createElement("form");
    // Agrega el formulario a su elemento padre
    padre.appendChild(formulario);

    // Crea un layout tipo cuadricula
    let contenedorFormulario = document.createElement("div");
    // Establece el atributo class de la cuadricula
    contenedorFormulario.setAttribute("class", "contenedorFormulario");
    // Agrega la cuadricula al formulario
    formulario.appendChild(contenedorFormulario);

    // Crea celda para la etiqueta del ISBN
    let celdaEtiqISBN = document.createElement("div");
    // Establece el atributo class de la celda
    celdaEtiqISBN.setAttribute("class", "derecha");
    // Agrega la celda a la cuadricula 
    contenedorFormulario.appendChild(celdaEtiqISBN);
    
    // Crea una etiqueta del ISBN de la revista
    let etiqISBN = document.createElement("label");
    // Establece el atributo for de la etiqueta
    etiqISBN.setAttribute("for", "campoIsbnId");
    // Le agrega el texto a la etiqueta
    etiqISBN.innerHTML = "ISBN *";
    // Agrega la etiqueta a la celda 
    celdaEtiqISBN.appendChild(etiqISBN);
    
    // Crea celda para campo de texto para capturar el ISBN
    let celdaISBN = document.createElement("div");
    // Establece el atributo id de la celda
    celdaISBN.setAttribute("id", "celdaIsbnId");
    // Agrega la celda a la fila 
    contenedorFormulario.appendChild(celdaISBN);

    // Crea un campo de entrada de texto para capturar el ISBN
    let campoISBN = document.createElement("input");
    // Establece el atributo type del campo de entrada
    campoISBN.setAttribute("type", "text");
    // Establece el atributo id del campo de entrada
    campoISBN.setAttribute("id", "campoIsbnId");
    // Establece el atributo size del campo de entrada
    campoISBN.setAttribute("size", "13");
    campoISBN.setAttribute("title", "Trece dígitos");
    
    // Agrega la celda a la fila 
    celdaISBN.appendChild(campoISBN);

    // Crea una celda en blanco
    let celdaVacia = document.createElement("div");
    // Establece el atributo class del titulo
    celdaVacia.setAttribute("class", "span centrada");
    // Le agrega el texto al titulo
    celdaVacia.innerHTML = "&nbsp;";
    // Agrega el titulo a su elemento padre
    contenedorFormulario.appendChild(celdaVacia);

    // Crea una celda con boton enviar
    let celdaBoton = document.createElement("div");
    // Establece el atributo class de la tabla
    celdaBoton.setAttribute("class", "span centrada");
    // Agrega la tabla al formulario
    contenedorFormulario.appendChild(celdaBoton);

    // Crea un boton
    let boton = document.createElement("button");
    // Establece el atributo type del boton
    boton.setAttribute("type", "button");
    // Establece el nombre de la funcion
    boton.setAttribute("onclick", "capturaIsbn()");
    // Establece el texto del boton
    boton.innerHTML = "Enviar";
    // Agrega el boton
    celdaBoton.appendChild(boton);

    // Crea una celda en blanco
    let celdaVacia2 = document.createElement("div");
    // Establece el atributo class del titulo
    celdaVacia2.setAttribute("class", "span centrada");
    // Le agrega el texto al titulo
    celdaVacia2.innerHTML = "&nbsp;";
    // Agrega el titulo a su elemento padre
    contenedorFormulario.appendChild(celdaVacia2);

    // Crea una seccion para mostrar resultados
    let resultados = document.createElement("div");
    // Establece el atributo id de la seccion
    resultados.setAttribute("id", "resultadosId");
    // Agrega la celda a la fila 
    padre.appendChild(resultados);

}

/**
 * Despliega un formulario para capturar los datos de una revista.
 */
function capturaRevista() {
    // Limpia la seccion main
    borraHijos("mainId");

    // Obten el elemento dentro del que se desplegara la tabla.
    let padre = document.getElementById("mainId");

    // Crea un titulo
    let titulo = document.createElement("h2");
    // Le agrega el texto al titulo
    titulo.innerHTML = "Captura Revista";
    // Agrega el titulo a su elemento padre
    padre.appendChild(titulo); 

    // Crea un formulario
    let formulario = document.createElement("form");
    // Agrega el formulario a su elemento padre
    padre.appendChild(formulario);

    // Crea un layout tipo cuadricula
    let contenedorFormulario = document.createElement("div");
    // Establece el atributo class de la tabla
    contenedorFormulario.setAttribute("class", "contenedorFormulario");
    // Agrega la tabla al formulario
    formulario.appendChild(contenedorFormulario);

    // Crea celda para la etiqueta del ISBN
    let celdaEtiqISBN = document.createElement("div");
    // Establece el atributo class de la celda
    celdaEtiqISBN.setAttribute("class", "derecha");
    // Agrega la celda a la fila 
    contenedorFormulario.appendChild(celdaEtiqISBN);

    // Crea una etiqueta del ISBN de la revista
    let etiqISBN = document.createElement("label");
    // Establece el atributo for de la etiqueta
    etiqISBN.setAttribute("for", "campoIsbnId");
    // Le agrega el texto a la etiqueta
    etiqISBN.innerHTML = "ISBN *";
    // Agrega la etiqueta a la celda 
    celdaEtiqISBN.appendChild(etiqISBN);

    // Crea celda para campo de texto para capturar el ISBN de la revista
    let celdaISBN = document.createElement("div");
    // Establece el atributo id de la celda
    celdaISBN.setAttribute("id", "celdaIsbnId");
    // Agrega la celda a la fila 
    contenedorFormulario.appendChild(celdaISBN);

    // Crea un campo de entrada de texto para capturar el ISBN
    let campoISBN = document.createElement("input");
    // Establece el atributo type del campo de entrada
    campoISBN.setAttribute("type", "text");
    // Establece el atributo id del campo de entrada
    campoISBN.setAttribute("id", "campoIsbnId");
    // Establece el atributo size del campo de entrada
    campoISBN.setAttribute("size", "13");
    campoISBN.setAttribute("title", "Trece d&iacute;gitos");
    // Establece el atributo readonly del campo de entrada
    campoISBN.setAttribute("readonly", "readonly");
    campoISBN.setAttribute("value", isbn);
    // Agrega la celda a la fila 
    celdaISBN.appendChild(campoISBN);

    // Crea celda para la etiqueta del nombre
    let celdaEtiqNombre = document.createElement("div");
    // Establece el atributo class de la celda
    celdaEtiqNombre.setAttribute("class", "derecha");
    // Agrega la celda a la fila 
    contenedorFormulario.appendChild(celdaEtiqNombre);

    // Crea una etiqueta del titulo de la revista
    let etiqTitulo = document.createElement("label");
    // Establece el atributo for de la etiqueta
    etiqTitulo.setAttribute("for", "campoTituloId");
    // Le agrega el texto a la etiqueta
    etiqTitulo.innerHTML = "Título *";
    // Agrega la etiqueta a la celda 
    celdaEtiqNombre.appendChild(etiqTitulo);

    // Crea celda para campo de texto para capturar el titulo de la revista
    let celdaTitulo = document.createElement("div");
    // Establece el atributo id de la celda
    celdaTitulo.setAttribute("id", "celdaTituloId");
    // Agrega la celda a la fila 
    contenedorFormulario.appendChild(celdaTitulo);

    // Crea un campo de entrada de texto para capturar el título de la revista
    let campoTitulo = document.createElement("input");
    // Establece el atributo type del campo de entrada
    campoTitulo.setAttribute("type", "text");
    // Establece el atributo id del campo de entrada
    campoTitulo.setAttribute("id", "campoTituloId");
    // Establece el atributo size del campo de entrada
    campoTitulo.setAttribute("size", "20");
    // Establece el atributo maxlength del campo de entrada
    campoTitulo.setAttribute("maxlength", "20");
    // Establece el atributo title del campo de entrada
    campoTitulo.setAttribute("title", "M&aacute;ximo 20 caracteres");
    // Agrega la celda a la fila 
    celdaTitulo.appendChild(campoTitulo);

    // Crea una celda en blanco
    let celdaVacia = document.createElement("div");
    // Establece el atributo class del titulo
    celdaVacia.setAttribute("class", "span centrada");
    // Le agrega el texto al titulo
    celdaVacia.innerHTML = "&nbsp;";
    // Agrega el titulo a su elemento padre
    contenedorFormulario.appendChild(celdaVacia);

    // Crea una celda con boton enviar
    let celdaBoton = document.createElement("div");
    // Establece el atributo class de la tabla
    celdaBoton.setAttribute("class", "span centrada");
    // Agrega la tabla al formulario
    contenedorFormulario.appendChild(celdaBoton);

    // Crea un boton
    let boton = document.createElement("button");
    // Establece el atributo type del boton
    boton.setAttribute("type", "button");
    // Establece el nombre de la funcion

    boton.setAttribute("onclick", "");
    // Establece el texto del boton
    boton.innerHTML = "Enviar";
    // Agrega el boton
    celdaBoton.appendChild(boton);

    // Crea una celda en blanco
    let celdaVacia2 = document.createElement("div");
    // Establece el atributo class del titulo
    celdaVacia2.setAttribute("class", "span centrada");
    // Le agrega el texto al titulo
    celdaVacia2.innerHTML = "&nbsp;";
    // Agrega el titulo a su elemento padre
    contenedorFormulario.appendChild(celdaVacia2);

    // Crea una seccion para mostrar resultados
    let resultados = document.createElement("div");
    // Establece el atributo id de la seccion
    resultados.setAttribute("id", "resultadosId");
    // Agrega la celda a la fila 
    padre.appendChild(resultados);

}
/**
 * Despliega los datos de una revista.
 */
function despliegaRevista() {
//Despliega datos ficticios.
}
/**
 * Despliega la lista de revistas.
 */
function despliegaRevistas() {
//Despliega datos ficticios.
}