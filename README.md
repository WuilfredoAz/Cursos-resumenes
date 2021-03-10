# Cursos tomados

Este es un repositorio creado con la finalidad de guardar todos los apuntes físicos que he creado sobre los cursos que he tomado hasta el momento. Con el único fin de preservar dicho conocimiento y tenerlo más accesible.

## Listado
- [Curso de Git y GitHub](/1.%20Curso%20de%20GIt%20y%20GitHub)
- [Curso de Programación Básica](/2.%20Curso%20de%20Programacion%20Basica)
- [Curso de Desarrollo Web](3.%20Desarrollo%20Web)
- [Curso de Responsive Design](/4.%20Responsive%20Design)
- [Curso de CSS Grid Layout](/5.%20CSS%20Grid%20Layout)
- [Curso de Animaciones para la Web](/6.%20Curso%20de%20animaciones%20para%20la%20web)
- [Curso de HTML desde cero](/7.%20HTML%20desde%20cero)
- [Curso de CSS desde cero](/8.%20CSS%20desde%20cero)



## Buenas prácticas generales

* Preferir `<link>` sobre `@import` para usar hojas de estilos.

* Definir un `font-size` al elemento root (`html`) y hacerlo en `px`.

* Usar `box-sizing: border-box;`.

* Estandarizar los estilos iniciales de nuestra etiquetas HTML para todos los navegadores con:

    * <a href="#">Reset.css</a>
    * <a href="#">Normalize.css</a>
    * Definir uno propio

* Evitar el uso de selectores de etiquetas e indicadores y trabajar en su mayoria con clases.

* Maquetar bajo un enfoque Mobile First

* Escribir CSS pensando en reutilizar código (**DRY**).

* Tener precaución con los shorthand de CSS:

    * `padding, margin, font, background, border, border-radius`.
    * Prefiere `background-color: #fff;` sobre `background: #fff;`.

* Ordenar el código CSS en cada selector usando la fórmula **PC-TV**:

    * (**P**)osicionamiento: `display, float, position, top, left, right, bottom, clear, z-index`.
    * (**C**)aja o modelo de caja: `margin, padding, width, height, border`.
    * (**T**)extos: `font-family, font-size, line-height, color, text-align, text-decoration`.
    * (**V**)arios: `background-color, border-radius, outline, opacity`.

    EX de PC-TV

    ```css
    .ejemplo
    {
        /* Posicionamiento */
        position: fixed;
        bottom: 50%;
        right: 0;
        z-index: 7;

        /* Modelo de caja */
        height: 80vw;
        width: 80%;
        margin: 1rem;

        /* texto */
        font-size: 3rem;
        text-decoration: none;

        /* Varios */
        opacity: .5;
        background-color: #fff;
    }

    ```

* Otra forma de ordenar el código CSS en cada selector es ordenarlo alfabéticamente (ignorando los prefijos.).

    Ex de alfabéticamente
    ```css
    .ejemplo
    {
        background: red;
        border: 1px solid;
        border-radius: 4px;
            -moz-border-radius: 4px;
            -webkit-border-radius: 4px;
        color: black;
        text-align: center;
        text-indent: 2em;
    }
    ```

## Quiero contribuir
Si te interesa contribuir ya sea mandando parte de tus conocimientos para que aparezca en cualquier curso o para hacer una correción en alguno de ellos, bienvenido sea tu pull request 😎