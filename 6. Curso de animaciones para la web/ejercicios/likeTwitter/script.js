// guardamos en una constante al elemento
const like = document.querySelector(".js-like");

// creamos el escuchador de eventos para cuando haga click
like.addEventListener("click", (event)=>{
    // añadimos la clase que empezará la animación
    like.classList.toggle("is-liked");
})