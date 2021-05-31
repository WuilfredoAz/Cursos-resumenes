// Capturamos los elementos que usaremos
// Capturamos al boton
$boton = document.querySelector(".js-btn");
// Capturamos a la ventana
$ventana = document.querySelector(".js-ventana");
// Capturamos a la campana
$campana = document.querySelector(".js-bell");
// Capturamos al elemento que tiene el contador
$numero = document.querySelector(".js-contador");


// Creamos el escuchador de eventos para cuando haga click en el boton
$boton.addEventListener("click",()=>{
    if($ventana.classList.contains("ocultar")===true)
    {
        $ventana.classList.remove("ocultar");
        $campana.classList.remove("notify");
    }
    $ventana.classList.add("mostrar");

    // Guardamos en variable al contador de notificaciones
    const contador = Number($numero.getAttribute("data-count")) || 0;
    $numero.setAttribute("data-count", contador + 1);
})

// Creamos el escuchador de eventos  que animara la campana despues que la ventana aparezca
$ventana.addEventListener("animationend", ()=>{
    $campana.classList.add("notify");
})

// Creamos el escuchador de ventos que ocultara la animacion despues de que la campana termine
$campana.addEventListener("animationend",()=>{
    $ventana.classList.remove("mostrar");
    $ventana.classList.add("ocultar");
})

