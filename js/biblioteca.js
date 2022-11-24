/**
 * biblioteca.js
 * 
 * Contiene las opciones y las funciones a llamar en los menús de la aplicación.
 * 
 * Karla Ximena Islas Cruz ID: 213090
 * Gabriel Francisco Piñuelas Ramos ID: 230626
 */

// Opciones del menu principal de la aplicacion 
let menuPrincipalItems = ["Catálogo de revistas", "Inventario de revistas"];

// Funciones que implementan las operaciones de las opciones del menu principal de la aplicacion 
let menuPrincipalFunciones = ["despliegaMenuRevistas()", 
                              "despliegaMenuInventario()"];

// Opciones del menu de las operaciones con las revistas                              
const menuRevistasItems = ["Agregar revista", "Actualizar revista",
                           "Eliminar revistas", "Consultar revistas",
                           "Página Inicial"];

// Funciones que implementan las operaciones con las revistas                         
const menuRevistasFunciones = ["capturaIsbn()", "", "", "despliegaRevistas()",  
                               "despliegaMenuPrincipal()"];

// Opciones del menu de las operaciones con el inventario de revistas  
const menuInventarioItems = ["Inventariar revista", "Desinventariar revista",
                             "Consultar inventario de revistas", "Página Inicial"];

// Funciones que implementan las operaciones con el inventario de revistas   
const menuInventarioFunciones = ["", "", "", "",  
                               "despliegaMenuPrincipal()"];

/**
 * Esta funcion despliega el menu principal de la aplicacion
 */
function despliegaMenuPrincipal() {
    // Limpia la seccion main
    borraHijos("mainId");
    
    // Limpia la seccion nav
    borraHijos("navId");
    despliegaMenu("navId", menuPrincipalItems, menuPrincipalFunciones);
}

/**
 * Esta funcion despliega el menu de las operaciones con las revistas
 */
function despliegaMenuRevistas() {
    // Limpia la seccion nav
    borraHijos("navId");
    despliegaMenu("navId", menuRevistasItems, menuRevistasFunciones);
}

/**
 * Esta funcion despliega el menu de las operaciones con el inventario de las revistas
 */
function despliegaMenuInventario() {
    // Limpia la seccion nav
    borraHijos("navId");
    despliegaMenu("navId", menuInventarioItems, menuInventarioFunciones);
}

