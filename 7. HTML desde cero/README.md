# HTML desde cero

## Tabla de contenido
- [¿Qué es HTML?](#¿Qué-es-HTML?)
- [¿Cuál es el proceso de una especificación?](#¿Cuál-es-el-proceso-de-una-especificación?)
- [Anatomía de una etiqueta HTML (Sintaxis)](#Anatomía-de-una-etiqueta-HTML-(Sintaxis))
- [Estructura básica de un documento HTML](#Estructura-básica-de-un-documento-HTML)
- [Etiquetas de Sección](#Etiquetas-de-Sección)
    - [Etiqueta body](#Etiqueta-body)
    - [Etiqueta article](#Etiqueta-article)
    - [Etiqueta section](#Etiqueta-section)
    - [Etiqueta nav](#Etiqueta-nav)
    - [Etiqueta aside](#Etiqueta-aside)
    - [Etiquetas de Encabezados (h1-h6)](#Etiquetas-de-Encabezados-(h1-h6))
    - [Etiqueta header](#Etiqueta-header)
    - [Etiqueta footer](#Etiqueta-footer)
    - [Etiqueta address](#Etiqueta-address)
- [Etiquetas para grupos de contenido](#Etiquetas-para-grupos-de-contenido)
    - [Etiqueta p](#Etiqueta-p)
    - [Etiqueta hr](#Etiqueta-hr)
    - [Etiqueta pre](#Etiqueta-pre)
    - [Etiqueta blockquote](#Etiqueta-blockquote)
    - [Etiqueta main](#Etiqueta-main)
    - [Etiqueta div](#Etiqueta-div)
- [Etiquetas para texto](#Etiquetas-para-texto)
    - [Etiqueta a](#Etiqueta-a)
    - [Etiqueta em](#Etiqueta-em)
    - [Etiqueta strong](#Etiqueta-strong)
    - [Etiqueta small](#Etiqueta-small)
    - [Etiqueta s](#Etiqueta-s)
    - [Etiqueta span](#Etiqueta-span)
    - [Etiqueta q](#Etiqueta-q)
    - [Etiqueta sub](#Etiqueta-sub)
    - [Etiqueta sup](#Etiqueta-sup)
    - [Etiqueta br](#Etiqueta-br)
    - [Etiqueta wbr](#Etiqueta-wbr)
    - [Etiqueta abbr](#Etiqueta-abbr)
- [Semántica web](#Semántica-web)
    - [Atributo ID](#Atributo-ID)
    - [Atributo class](#Atributo-class)
    - [Atributo title](#Atributo-title)
    - [Atributo alt](#Atributo-alt)
    - [Atributo data](#Atributo-data)
    - [Atributo role](#Atributo-role)
    - [Outline en HTML5](#Outline-en-HTML5)
- [Microdatos](#Microdatos)
    - [Schema.org](#<p>Schema.org</p>)
        - [Pasos para agregar microdatos](#Pasos-para-agregar-microdatos)
    - [Open Graph](#Open-Graph)
    - [Twitter card](#Twitter-card)
- [Enlaces](#Enlaces)
    - [Algunos atributos](#Algunos-atributos)
        - [Atributo target](#Atributo-target)
        - [Atributo download](#Atributo-download)
- [Tipos de Rutas](#Tipos-de-Rutas)
    - [Rutas absolutas](#Rutas-absolutas)
    - [Rutas relativas](#Rutas-relativas)
    - [Rutas con marcadores](#Rutas-con-marcadores)
- [Listas](#Listas)
    - [Listas ordenadas (ol: ordered list)](#Listas-ordenadas-(ol:-ordered-list))
        - [Algunos atributos de las listas ordenadas](#Algunos-atributos-de-las-listas-ordenadas)
    - [Listas desordenadas (ul: unordered list)](#Listas-desordenadas-(ul:-unordered-list))
    - [Listas de definición](#Listas-de-definición)
    - [Listas anidadas](#Listas-anidadas)
- [Tablas](#Tablas)
    - [Notas](#Notas)
    - [Otras propiedades de personalización de las tablas](#Otras-propiedades-de-personalización-de-las-tablas)
- [Imágenes (img)](#Imágenes-(img))
    - [Otros atributos opcionales](#Otros-atributos-opcionales)
        - [Atributo width="n"](#Atributo-width="n")
        - [Atributo height="n"](#Atributo-height="n")
        - [Atributo srcset="ruta/imagen.png condición"](#Atributo-srcset="ruta/imagen.png-condición")
- [Imágenes (picture)](#Imágenes-(picture))
- [Imágenes (figure)](#Imágenes-(figure))
- [Video HTML5](#Video-HTML5)
- [Audio HTML5](#Audio-HTML5)
- [Formularios](#Formularios)
    - [Etiquetas usadas en los formularios](#Etiquetas-usadas-en-los-formularios)
    - [Etiqueta form](#Etiqueta-form)
    - [Etiqueta fieldset](#Etiqueta-fieldset)
    - [Etiqueta label](#Etiqueta-label)
    - [Etiquetas input's](#Etiquetas-input's)
        - [Tipos de input's](#Tipos-de-input's)
    - [Etiqueta select](#Etiqueta-select)
    - [Etiqueta textarea](#Etiqueta-textarea)
    - [Etiqueta datalist](#Etiqueta-datalist)
    - [Algunos atributos para los campos de los formularios](#Algunos-atributos-para-los-campos-de-los-formularios)
- [Acordeón en HTML5](#Acordeón-en-HTML5)
- [Modal en HTML5](#Modal-en-HTML5)
- [API HTML](#API-HTML)
- [Contenido embebido](#Contenido-embebido)
    - [Etiqueta embed](#Etiqueta-embed)
    - [Etiqueta object](#Etiqueta-object)
    - [Etiqueta iframe](#Etiqueta-iframe)
    - [Algunos tips para contenido embebido](#Algunos-tips-para-contenido-embebido)
- [Algunos links de interés](#Algunos-links-de-interés)

## ¿Qué es HTML?
Es el acrónimo de "Hyper Text Markup Lenguaje" lo que significa: Lenguaje de híper texto de marcado. Es el lenguaje que le indica a los navegadores y motores de búsqueda la estructura del documento.

Es importante recordar que **HTML NO ES UN LENGUAJE DE PROGRAMACIÓN**

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## ¿Cuál es el proceso de una especificación?
Una especificación hace referencia a la fase en la que se encuentra un módulo, feature o estándar. Las etapas son las siguientes:

- Working Draft (WD).
- Candidate Recommendation (CR).
- Proposed Recommendation (PR).
- Recommendation (REC).

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Anatomía de una etiqueta HTML (Sintaxis)
Existen dos tipos de etiquetas en HTML: las que tienen apertura y cierre y las vacías o self-closing.

- Las que tienen apertura y cierre:
    ```html
    <h1 id="titulo">Un buen título</h1>

    <!--
        Dónde:

        * <h1 id="titulo"> => Corresponde a la etiqueta de apertura

        * id="titulo" => Corresponde al atributo "ID"

        * "titulo" => Corresponde al valor del atributo "ID"

        * Un buen título => Corresponde al contenido de la etiqueta

        * </h1> => Corresponde a la etiqueta de cierre
    -->
    ```

- Las self-closing o vacías
    ```html
    <img src="foto.jpg" />
    <!--
        Dónde:

        * <img src="foto.jpg /> => Corresponde tanto a la etiqueta de apertura como la de cierre

        * src="foto.jpg" => Corresponde al atributo "Source"

        * "foto.jpg" => Corresponde al valor que usará el atributo src
    -->
    ```

Teniendo en cuenta lo anterior; las etiquetas estarían compuestas por:

`<nombreEtiqueta atributo="valor">Contenido de la etiqueta</nombreEtiqueta>`

>Nota: Los atributos pueden escribirse con comillas simples (') o dobles (").

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Estructura básica de un documento HTML
Un documento HTML básico está compuesto por las siguientes etiquetas:

```html
<!-- 1. Se le dice al navegador que se estará escribiendo en HTML -->
<!DOCTYPE html>
<!-- 2. Empezamos abriendo la etiqueta HTML -->
<html>
    <!-- 3. Usamos la etiqueta para metadatos -->
    <head>
        <!-- METADATOS DEL DOCUMENTO-->
        <!-- Metadatos para caracteres especiales -->
        <meta charset="utf-8" />
        <!-- Título de pestaña -->
        <title>Título a mostrar en la pestaña</title>
        <!-- Descripción de la página -->
        <meta name="description" content="Descripción de la página para los navegadores" />
    </head>
    <!-- 4. Creamos la etiqueta donde irá el contenido que se mostrará en pantalla -->
    <body>
        <!-- Aquí va el contenido -->
    </body>
</html>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Etiquetas de Sección
Son aquellas que dividen o hacen bloques (semánticamente hablando) de contenido en el documento HTML. Entre ellas están:

### Etiqueta `body`
Representa a todo el contenido HTML. Su sintaxis es la siguiente:

```html
<body>
    <!-- Contenido -->
</body>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Etiqueta `article`
Representa a un contenido completo o autónomo del HTML. Como regla general, cada `article` debería estar identificado con un encabezado (elemento `h1`-`h6`) dentro de sí mismo.

Su sintaxis es la siguiente:

```html
<article>
    <!-- Contenido -->
</article>
```

Cabe destacar que:

- Cada `article` podría tener su `h1` y estaría técnicamente correcto; pero en temas de SEO afectaría negativamente.

- Dentro de un `article` podría haber un `header`, un `footer`, un `section` y encabezados (elemento `h1`-`h6`).


<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Etiqueta `section`
Representa una división o parte del contenido del documento HTML. Su sintaxis es la siguiente:

```html
<section>
    <!-- Contenido -->
</section>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Etiqueta `nav`
Representa el elemento que encierra la navegación. Su sintaxis es la siguiente:

```html
<nav>
    <!-- Contenido -->
</nav>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Etiqueta `aside`
Es un contenido relativo (no principal) que puede no estar relacionado con lo que se ve. Su sintaxis es la siguiente:

```html
<aside>
    <!-- Contenido -->
</aside>
```


<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Etiquetas de Encabezados (`h1`-`h6`)
Representan los encabezados o títulos para las secciones. Existen 6 niveles, los cuales son:

```html
<h1><!-- texto --></h1>
<h2><!-- texto --></h2>
<h3><!-- texto --></h3>
<h4><!-- texto --></h4>
<h5><!-- texto --></h5>
<h6><!-- texto --></h6>
```

 Hay que tener en consideración lo siguiente al usarlos:

- El `h1` representa el encabezado más importante.

- Al usar diferentes tipos de encabezados, se usan descendentemente pero cuando bajamos un nivel dentro de una misma etiqueta. Ex:

```html
<!-- Ex correcto: -->
<section>
    <h2>Subtítulo</h2>
    <section>
        <h3>Subtítulo en otro nivel</h3>
    </section>
<section>

<!-- Ex incorrecto: -->
<section>
    <h2>Subtítulo</h2>
</section>
<h3>Otro Subtítulo</h3>
```

>El último ejemplo está mal porque no existe un titulo al mismo nivel del `h3` del cual sea subtítulo.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiqueta `header`
Representa un contenido introductorio para el padre más cercano. El `header` no necesariamente deber ser hijo directo de un `body`, es decir, podrá ser hijo de cualquiera de los elementos de sección anteriormente nombrados.

Su sintaxis es la siguiente:

```html
<header>
    <!-- Contenido -->
</header>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiqueta `footer`
Es el pie de página de un documento HTML. Su sintaxis es la siguiente:

```html
<footer>
    <!-- Contenido -->
</footer>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiqueta `address`
Es el contenedor para los datos de contacto. Su sintaxis es la siguiente:

```html
<address>
    <!-- Datos de contacto NADA MÁS (Ex: Dirección física) -->
</address>
```

>Nota: Este elemento no debe contener contenido que no este relacionado con datos del contacto.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Etiquetas para grupos de contenido

### Etiqueta `p`
Representa la etiqueta utilizada para bloques de textos o párrafos. Cabe destacar que las etiquetas  `small`, `strong`, `em`, `cite`, `dfn`, `code`, `data`, `br`, `span`, `i`, `b` deberían estar dentro de una etiqueta de bloque `p`.

Su sintaxis es la siguiente:

```html
<p><!-- Contenido --></p>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Etiqueta `hr`
Acrónimo de "horizontal rule" o línea horizontal. Su propósito semántico es el de representar un break o cambio de historia o transición a otro tema.

Su sintaxis es la siguiente:

```html
<hr />
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Etiqueta `pre`
Representa un bloque de texto preformateado, cuya estructura ya viene definida en el programa de donde se copió. Al insertar texto con esta etiqueta el navegador lo mostrará tal cual se muestra en la fuente original.

Su sintaxis es la siguiente:

```html
<pre>
    <!-- Contenido preformateado -->
</pre>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiqueta `blockquote`
Etiqueta utilizada para representar citas a nivel de bloque que semánticamente hablando vienen de otra fuente.

Su sintaxis es la siguiente:

```html
<blockquote>
    <!-- Contenido -->
</blockquote>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiqueta `main`
Representa el contenido principal del elemento `body`. La distribución básica para la que se usa es:

- `body`
    - `nav`
    - contenido
- `main`
    - contenido
- `footer`
    - contenido

Su sintaxis es la siguiente:

```html
<main>
    <!-- Contenido -->
</main>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Etiqueta `div`
Es un contenedor que no posee significado ni valor semántico. Se utiliza generalmente para manipular elementos mediante CSS o JavaScript.

Su sintaxis es la siguiente:

```html
<div>
    <!-- Contenido -->
</div>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Etiquetas para texto

### Etiqueta `a`
También llamada etiqueta de ancla o enlaces; representa un link o enlace.

Su sintaxis es la siguiente:
```html
<a href="ruta"><!-- Texto a mostrar --></a>
```

Al usarlo se recomienda tener en consideración qué:

- Los `a` normales (propios de la página/enlaces de navegación) no deberían de incluir una configuración en el atributo `target`.

- Los `a` que contengan links ajenos a nuestra página son recomendables utilizarlos con el atributo `target="_blank"` el cual permite la apertura del link pero en otra pestaña.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiqueta `em`
Se utiliza semánticamente para hacer "énfasis" a una palabra. Por defecto el navegador le aplica estilos de cursiva.

Su sintaxis es la siguiente

```html
<em><!-- Texto a hacer énfasis --></em>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiqueta `strong`
Se utiliza para hacer referencia a una palabra/bloque de texto con mayor importancia que el aplicado con un `em`. Por defecto el navegador le da estilos de negrita.

Su sintaxis es la siguiente:

```html
<strong><!-- Texto a hacer más énfasis --></em>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Etiqueta `small`
Se utiliza para representar texto que semánticamente no tiene mayor importancia. Ex: las letras pequeñas en una compra. Por defecto el navegador las muestra con un tamaño de fuente inferior.

Su sintaxis es la siguiente:

```html
<small><!-- Texto a con poca importancia --></small>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiqueta `s`
Se utiliza para hacer referencia a elementos que están en desuso o que ya expiraron en caso de estar hablando en el contexto de una venta.

Su sintaxis es la siguiente:
```html
<s><!-- Texto que expiró --></s>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiqueta `span`
Es una etiqueta de texto que no tiene significado ni valor semántico. Es el equivalente del `div` pero aplicado a etiquetas de textos.

Su sintaxis es la siguiente:

```html
<span><!-- Texto --></span>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiqueta `q`
Representa una cita al mismo nivel en el que se usa.

Su sintaxis es la siguiente:

```html
<q><!-- Texto a citar --></q>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiqueta `sub`
Etiqueta usada para representar un subíndice, es decir; letras ubicadas un poco más abajo del baseline.

Su sintaxis es la siguiente:

```html
<sub><!-- Texto abajo del baseline --></sub>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiqueta `sup`
Etiqueta usada para representar un superíndice, es decir; letras ubicadas un poco más arriba del baseline.

Su sintaxis es la siguiente:

```html
<sup><!-- Texto arriba del baseline --></sup>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiqueta `br`
Acrónimo de "break rule". Fuerza un salto de línea. Su sintaxis es la siguiente:

```html
<!-- Texto o contenido --> <br /> <!-- Texto o contenido -->
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiqueta `wbr`
Etiqueta utilizada para permitir un salto de línea inteligente a partir de donde se use la etiqueta. Es decir; el texto saltará de línea solo sí no tiene espacio para continuar. En cambio si el texto posee espacio suficiente, el mismo continuará en la misma línea.

Su sintaxis es la siguiente:

```html
<!-- Texto o contenido --><wbr /><!-- Texto o contenido -->
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiqueta `abbr`
Etiqueta usada para indicar el significado de una abreviación. De forma que si ocurre una búsqueda del término el navegador reconozca que está abreviado y sepa su significado.

Su sintaxis es la siguiente:

```html
<abbr title="Definición del acrónimo">Acrónimo</abbr>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Semántica web
Desde un principio las búsquedas web se han orientado en torno a encontrar coincidencias entre las palabras que se buscan y los resultados web. Hoy en día es posible mediante las etiquetas HTML darle semántica o significado para que los navegadores "sepan" de qué se está hablando y mostrar dicho resultado aunque no contenga las palabras claves que se escribieron al momento de la búsqueda si fuera el caso. Esto es posible mediante atributos HTML, entre los cuales están:



### Atributo `ID`
Es un identificador único e irrepetible de un elemento. Su sintaxis es la siguiente:

```html
<header id="main-header"></header>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Atributo `class`
Es una manera de identificar un elemento o grupos de elementos. Su principal diferencia del `ID` es que puede existir varios elementos con la misma clase. Ex:

```html
<ul class="menu">
    <li class="menu__elemento">Elemento 1</li>
    <li class="menu__elemento">Elemento 2</li>
    <li class="menu__elemento">Elemento 3</li>
</ul>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Atributo `title`
Se usa para proveer de información adicional a un determinado elemento en forma de un tooltip. Ex:

Código:
```html
<a href="https://www.google.co.ve" title="Ir a Google Venezuela">Google VE</a>
```
Vista previa: </br>
<a href="https://www.google.co.ve" title="Ir a Google Venezuela">Google VE</a>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Atributo `alt`
Usado en las etiquetas `img` se usa para darle una descripción de la imagen implementada. En términos de SEO es altamente recomendable que todas las `img` tengan su `alt`. Ex:

```html
<img src="img/dog.png" alt="Cachorro chow-chow" />
```
>Nota: El atributo `src` se usa para indicar la ruta de la imagen.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Atributo `data`
El atributo `data` puede ser implementado en cualquier etiqueta HTML. Se usa para indicar cualquier dato que se pueda necesitar el programador. Se usa anteponiendo la palabra reservada "`data`" seguidamente de un guión (-) y luego el nombre que se le quiera dar a ese atributo. Esta información puede ser usada después por JavaScript. Ex:

```html
<p class="js-precio" data-precio="20">$20</p>
```

En este ejemplo como se explicó en el texto anterior, no existe reglamentariamente el atributo "`data-precio`" pero fue el usado por el programador para identificar el precio.

**Nota:**<br>
Se puede manipular por JavaScript el valor del atributo `data`. Esto se hace mediante `dataset` seguido del nombre que se le dio al HTML. Ex:

```javascript
var precio = document.querySelector(".js-precio").dataset.precio;
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Atributo `role`
Indica al navegador el rol/función de dicho elemento HTML. Su uso se percibe en la accesibilidad, dado que de esta manera un navegador que lee una página web (para persona ciegas) podría saber cuál es el elemento que contiene el menú de navegación si se le es indicado de esta manera previamente. Ex:

```html
<nav role="navigation"></nav>
<main role="main"></main>
<footer role="footer"></footer>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Outline en HTML5
Es la estructura jerárquica/semántica del HTML, es decir, es la forma en la que un navegador encontrará y entenderá los elementos de una página web, generando una lista con los elementos web implementados.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Microdatos
Los microdatos son una forma de implementar metadatos en el contenido. Es decir, a través de los atributos personalizados permite saber qué cosa es cada elemento, mejorando enormemente la semántica en una web. Existen varias formas de darle microdatos a una web, entre ellas están:

### <p>Schema.org</p>
Es una organización cuya finalidad es crear esquemas de microdatos estructurados de los elementos que se muestran en internet.

Para crearlos se necesita de un scope, un esquema y las propiedades. Esto se expresa mejor en:

- `itemscope`: Representa el scope o elemento en particular al que se le darán los datos (El cual debe de confirmarse su existencia y propiedades aplicables en la página de schema).

- `itemtype`: Representa la url del schema en particular a utilizar.

- `itemprop`: Son las propiedades del elemento especificadas en el schema a utilizar.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Pasos para agregar microdatos

```html
<article>
    <h2>Zapato Deportivo</h2>
    <img src="shoes.png" alt="Zapato" />
    <p>Marca: <span>Nike</span></p>
    <p>Descripción: <span>Zapato Azul</span></p>
</article>
```

Dicho código, tanto semántica como técnicamente está correcto; pero un navegador aún no comprende por si solo que se está hablando de un zapato. Para eso hay que añadirle los microdatos, para decirle al buscador que es ese `article`.

Para eso se usa Schema.org. El cual define un conjunto de estándares para los microdatos. Se hace de la siguiente manera:

1. Se comienza añadiendo al elemento que identifica a la sección como el `itemscope` para especificar que será un conjunto de datos, seguido del tipo de datos (`itemtype="tipoURL"`). En este caso se comienza especificando que es un producto:

    ```html
    <article itemscope itemtype="http://schema.org/Product">
        <h2>Zapato Deportivo</h2>
        <img src="shoes.png" alt="Zapato" />
        <p>Marca: <span>Nike</span></p>
        <p>Descripción: <span>Zapato Azul</span></p>
    </article>
    ```

2. Seguidamente de haber declarado quién contendrá el conjunto de datos y haber declarado también el tipo de datos, se tiene que decir con `itemprop` los datos que contiene cada etiqueta HTML:

```html
<article itemscope itemtype="http://schema.org/Product">
    <h2 itemprop="name">Zapato Deportivo</h2>
    <img itemprop="img" src="shoes.png" alt="Zapato" />
    <p>Marca: <span itemprop="brand">Nike</span></p>
    <p>Descripción: <span itemprop="description">Zapato Azul"</span></p>
</article>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Open Graph
Son los microdatos que facebook acepta. Para usarlos solo se debe colocar el prefijo necesario en la etiqueta de apertura del HTML y copiar y rellenar las etiquetas listadas en la página de Open Graph. Ex:

```html
<!DOCTYPE html>
<html prefix="og:https://ogp.me/ns#">
    <head>
    <!-- Etiquetas Open Graph -->
    </head>
    <body>
    </body>
</html>
```
>Nota: Dado que no existen tantas como es el caso de schema.org se pueden sacar de un generador.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Twitter card
Es el equivalente de Open Graph pero de Twitter y sin necesidad de colocar prefijos en la etiqueta HTML.
>Nota: Dado que no existen tantas como es el caso de schema.org se pueden sacar de un generador.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Enlaces
Corresponde a un elemento al cual se le puede hacer click para que nos lleve a otro lugar del sitio web. Su sintaxis básica se expresa de la siguiente manera:

```html
<a href="ruta">Texto a mostrar en el enlace</a>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Algunos atributos

#### Atributo `target`
El cual permite indicar en donde se va a abrir dicho enlace, por defecto todos los links se abren en la misma pestaña, pero con un `targe="_blank"` se abrirá en una nueva pestaña. Ex:

```html
<a href="/" target="_blank">Ir a la raíz</a>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Atributo `download`
El cual permite descargar el recurso del link al que se hace click. Ex:

```html
<a ref="/imagen.png" download>Descargar imagen</a>
```
**Nota**: El atributo permite recibir un valor el cual representa el nombre con se descargará el archivo. Ex:

```html
<a href="/imagen.png" download="Manzanas">Descargar imagen</a>
```

De esta manera el archivo no se descargará con el nombre por defecto, es decir, "imagen" sino con el nombre de "Manzanas".

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Tipos de Rutas

### Rutas absolutas
Son aquellas que son únicas y que siempre llevarán al mismo destino. Éstas casi siempre comenzarán con un protocolo http, ftp, etc. Ex:

```html
<a href="https://www.google.co.ve">Google</a>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Rutas relativas
Son aquellas que están relacionadas a la ubicación del archivo actual. Ex:

Buscar en la carpeta raíz el archivo index.html:
```html
<a href="/">Home</a>
```

Buscar en la carpeta donde se está actualmente el archivo news.html:
```html
<a href="news.html">News</a>
```

Subir un nivel desde la carpeta donde se está y buscar el archivo about.html:
```html
<a href="../about.html">About</a>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Rutas con marcadores
Es posible ir a determinadas secciones del mismo documento HTML usando el ID de un elemento en conjunto con una etiqueta de ancla. Ex:

```html
<a href="#chapter1">Ir al Capitulo 1</a>
<h1 id="chapter1">Capitulo 1</a>
```

De esta forma a través de la etiqueta de ancla se podrá ir al encabezado (o cualquier elemento HTML) que contenga el ID utilizado en su atributo `href`.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Listas
En HTML existen 3 tipos de listas, las cuales son:

### Listas ordenadas (ol: ordered list)
Son aquellas que se usan cuando el orden de los elementos enlistados importa. Por defecto el navegador representa las viñetas de esta lista en forma de números y en orden ascendente. Ex:

```html
<ol>
    <li>Lunes</li>
    <li>Martes</li>
    <li>Miércoles</li>
</ol>

<!--
    Donde:

    <ol> => Corresponde a la etiqueta designada a las listas ordenadas.

    <li> => Corresponde a cada uno de los elementos que tendrá la lista.
 -->
```
Dicho ejemplo se aprecia visualmente de la siguiente manera:

<ol>
    <li>Lunes</li>
    <li>Martes</li>
    <li>Miércoles</li>
</ol>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Algunos atributos de las listas ordenadas

- Atributo `reversed`<br />
Sirve para que las viñetas aparezcan en forma inversa a como está. **OJO: Solo las viñetas no el contenido**. Ex:

    ```html
    <ol reversed>
        <li>Lunes</li>
        <li>Martes</li>
        <li>Miércoles</li>
    </ol>
    ```
    Dicho ejemplo se aprecia visualmente de la siguiente manera:

    <ol reversed>
        <li>Lunes</li>
        <li>Martes</li>
        <li>Miércoles</li>
    </ol>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Atributo `start`<br />
Sirve para indicar el número en el que empezará la lista. Ex:

    ```html
    <ol start="5">
        <li>Lunes</li>
        <li>Martes</li>
        <li>Miércoles</li>
    </ol>
    ```
    Dicho ejemplo se aprecia visualmente de la siguiente manera:

    <ol start="5">
        <li>Lunes</li>
        <li>Martes</li>
        <li>Miércoles</li>
    </ol>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Atributo `type`<br />
Sirve para cambiar el tipo de viñeta con el que aparecerá. Ex:

    ```html
    <ol type="A">
        <li>Lunes</li>
        <li>Martes</li>
        <li>Miércoles</li>
    </ol>
    ```
    Dicho ejemplo se aprecia visualmente de la siguiente manera:

    <ol type="A">
        <li>Lunes</li>
        <li>Martes</li>
        <li>Miércoles</li>
    </ol>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Atributo `value`<br />
Es un atributo de los elementos `<li>` que permiten cambiar forzadamente el número correspondiente a su enumeración. Ex:

    ```html
    <ol>
        <li value="4">Lunes</li>
        <li value="8">Martes</li>
        <li value="3">Miércoles</li>
    </ol>
    ```
    Dicho ejemplo se aprecia visualmente de la siguiente manera:

    <ol>
        <li value="4">Lunes</li>
        <li value="8">Martes</li>
        <li value="3">Miércoles</li>
    </ol>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Listas desordenadas (ul: unordered list)
Son aquellas que se usan cuando el orden de los elementos no importa en el listado. Por defecto el navegador representa las viñetas de la lista con puntos. Ex:

```html
<ul>
    <li>Pasear al perro</li>
    <li>Repasar HTML</li>
    <li>Conquistar el mundo</li>
</ul>

<!--
    Donde:

    <ul> => Corresponde a la etiqueta designada a las listas desordenadas.

    <li> => Corresponde a cada uno de los elementos que tendrá la lista.
-->
```
Dicho ejemplo se aprecia visualmente de la siguiente manera:

<ul>
    <li>Pasear al perro</li>
    <li>Repasar HTML</li>
    <li>Conquistar el mundo</li>
</ul>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Listas de definición
Son aquellas que son empleadas en glosarios, preguntas frecuentes, definiciones, etc. Ex:

```html
<dl>
    <dt>HTML</dt>
    <dd>Hyper Text Markup Lenguaje</dd>
</dl>

<!--
    Donde:

    <dl> => Corresponde a la etiqueta designada a las listas de definición. Acrónimo de "definition list".

    <dt> => Corresponde a la etiqueta que contiene  el término a definir. Acrónimo de "definition term".

    <dd> => Corresponde a la etiqueta que contiene la descripción del término. Acrónimo de "definition description".
-->
```

Dicho ejemplo se aprecia visualmente de la siguiente manera:

<dl>
    <dt>HTML</dt>
    <dd>Hyper Text Markup Lenguaje</dd>
</dl>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Listas anidadas
Es posible hacer listas anidadas de un mismo tipo o de diferentes tipos a la vez. Ex:

```html
<ol>
    <li>Lunes</li>
    <ul>
        <li>Pasear al perro</li>
        <li>Repasar HTML</li>
        <li>Conquistar el mundo</li>
    </ul>
    <li>Martes</li>
    <ol>
        <li>Lunes</li>
        <li>Martes</li>
        <li>Miércoles</li>
    </ol>
    <li>Miércoles</li>
    <dl>
        <dt>HTML</dt>
        <dd>Hyper Text Markup Lenguaje</dd>
    </dl>
</ol>
```
Dicho ejemplo se aprecia visualmente de la siguiente manera:

<ol>
    <li>Lunes</li>
    <ul>
        <li>Pasear al perro</li>
        <li>Repasar HTML</li>
        <li>Conquistar el mundo</li>
    </ul>
    <li>Martes</li>
    <ol>
        <li>Lunes</li>
        <li>Martes</li>
        <li>Miércoles</li>
    </ol>
    <li>Miércoles</li>
    <dl>
        <dt>HTML</dt>
        <dd>Hyper Text Markup Lenguaje</dd>
    </dl>
</ol>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Tablas
Sirven para mostrar contenido tabulado (como un Excel). Su sintaxis básica se escribe fila por fila de la siguiente manera:

```html
<table>
    <tr>
        <td>Nombre</td>
        <td>Apellido</td>
        <td>País</td>
    </tr>
    <tr>
        <td>Wuilfredo</td>
        <td>Azócar</td>
        <td>Venezuela</td>
    </tr>
    <tr>
        <td>Ezio</td>
        <td>Auditore</td>
        <td>Italia</td>
    </tr>
</table>

<!--
    Donde:

    <table> => Corresponde a la etiqueta designada para indicar que se creará una tabla.

    <tr> => Corresponde a una fila genérica sin valor semántico. Acrónimo de "table row".

    <td> => Corresponde a los valores que tendrán las columnas de dicha fila. Acrónimo de "table data".
-->
```

Dicho ejemplo se aprecia visualmente de la siguiente manera:

<div align="center">
    <table>
        <tr>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>País</td>
        </tr>
        <tr>
            <td>Wuilfredo</td>
            <td>Azócar</td>
            <td>Venezuela</td>
        </tr>
        <tr>
            <td>Ezio</td>
            <td>Auditore</td>
            <td>Italia</td>
        </tr>
    </table>
</div>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

Aunque en el ejemplo anterior la primera fila (donde se encuentra la palabra: "Nombre", "Apellido" y "País") representa la cabecera; para HTML no es así. Para representar este significado semánticamente en código se usa `<th></th>` en lugar de los `<td></td>` en la cabecera de la siguiente manera:

```html
<table>
    <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>País</th>
    </tr>
    <tr>
        <td>Wuilfredo</td>
        <td>Azócar</td>
        <td>Venezuela</td>
    </tr>
    <tr>
        <td>Ezio</td>
        <td>Auditore</td>
        <td>Italia</td>
    </tr>
</table>

<!--
    Donde:

    <th> => Corresponde a la etiqueta a utilizar cuando semánticamente se refiere a las columnas que conforman la cabecera de la tabla.
-->
```

Dicho ejemplo se aprecia visualmente de la siguiente manera:

<div align="center">
    <table>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>País</th>
        </tr>
        <tr>
            <td>Wuilfredo</td>
            <td>Azócar</td>
            <td>Venezuela</td>
        </tr>
        <tr>
            <td>Ezio</td>
            <td>Auditore</td>
            <td>Italia</td>
        </tr>
    </table>
</div>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

Si se quisiera hacer más semántico y añadirle elementos opcionales para identificar cuál es el encabezado, el cuerpo y el footer de la tabla, se puede usar: `thead`, `tbody` y `tfoot` respectivamente. Ex:

```html
<table>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>País</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Wuilfredo</td>
            <td>Azócar</td>
            <td>Venezuela</td>
        </tr>
        <tr>
            <td>Ezio</td>
            <td>Auditore</td>
            <td>Italia</td>
        </tr>
    </tbody>
    <tfooter>
        <tr>
            <td>Total de personas listadas:</td>
            <td>2</td>
        </tr>
    </tfoot>
</table>

<!--
    Donde:

    <thead> => Corresponde a la etiqueta a utilizar cuando semánticamente se debe identificar la cabecera de la tabla.

    <tbody> => Corresponde a la etiqueta a utilizar cuando semánticamente se debe identificar al contenido de la tabla en general.

    <tfooter> => Corresponde a la etiqueta a utilizar cuando semnánticamente se debe identificar al pie de la tabla o el resumen si fuese el caso.
-->
```

Dicho ejemplo se aprecia visualmente de la siguiente manera:

<div align="center">
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>País</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Wuilfredo</td>
                <td>Azócar</td>
                <td>Venezuela</td>
            </tr>
            <tr>
                <td>Ezio</td>
                <td>Auditore</td>
                <td>Italia</td>
            </tr>
        </tbody>
        <tfooter>
            <tr>
                <td>Total de personas listadas:</td>
                <td>2</td>
            </tr>
        </tfoot>
    </table>
</div>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Notas
- El `tfoot` podría estar antes del `tbody` y aun así el navegador lo mostraría después del mismo.

- Se puede tener varias filas en el `thead`

- De ser necesario se le puede dar semánticamente un título/nombre a la tabla haciendo uso de la etiqueta `<caption></caption>` de la siguiente manera:

```html
<table>
    <caption>Listado de personas</caption>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>País</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Wuilfredo</td>
            <td>Azócar</td>
            <td>Venezuela</td>
        </tr>
        <tr>
            <td>Ezio</td>
            <td>Auditore</td>
            <td>Italia</td>
        </tr>
    </tbody>
    <tfooter>
        <tr>
            <td>Total de personas listadas:</td>
            <td>2</td>
        </tr>
    </tfoot>
</table>

<!--
    Donde:

    <caption> => Corresponde a la etiqueta a utilizar cuando semánticamente se debe agregar un título o nombre a la tabla.
-->
```

Dicho ejemplo se aprecia visualmente de la siguiente manera:

<div align="center">
    <table>
        <caption>Listado de personas</caption>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>País</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Wuilfredo</td>
                <td>Azócar</td>
                <td>Venezuela</td>
            </tr>
            <tr>
                <td>Ezio</td>
                <td>Auditore</td>
                <td>Italia</td>
            </tr>
        </tbody>
        <tfooter>
            <tr>
                <td>Total de personas listadas:</td>
                <td>2</td>
            </tr>
        </tfoot>
    </table>
</div>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Otras propiedades de personalización de las tablas

- Hacer que una celda de la tabla ocupe más espacio (horizontal/filas): Se hace con `colspan="n"` donde `"n"` representa la cantidad de columnas. Ex:

    ```html
    <td colspan="2">Total de personas listadas:</td>
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Hacer que una celda de la tabla ocupe más espacios (Vertical/columnas): Se hace con `rowspan="n"` donde `"n"` representa la cantidad de filas a ocupar. Ex:

    ```html
    <td rowspan="2">Total de estudiantes</td>
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Agrupar un conjunto de columnas: Se hace con la etiqueta `<colgroup></colgroup>` seguidamente de la etiqueta `<col />` implementada tantas veces como cantidad de columnas exista. Ex:

    ```html
    <table>
        <caption>Listado de personas</caption>
        <colgroup>
            <col />
            <col style="background: #0154BE; color: #fff;" />
        </colgroup>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>País</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Wuilfredo</td>
                <td>Azócar</td>
                <td>Venezuela</td>
            </tr>
            <tr>
                <td>Ezio</td>
                <td>Auditore</td>
                <td>Italia</td>
            </tr>
        </tbody>
        <tfooter>
            <tr>
                <td>Total de personas listadas:</td>
                <td>2</td>
            </tr>
        </tfoot>
    </table>

    <!--
        Donde:

        <colgroup> => Corresponde a la etiqueta a utilizar cuando se va a iniciar a agrupar un conjunto de columnas.

        <col /> representa una columna en particular cuyo orden se da partiendo de izquierda a derecha.
    -->
    ```

Dicho ejemplo se aprecia visualmente de la siguiente manera:

<div align="center">
    <table>
        <caption>Listado de personas</caption>
        <colgroup>
            <col />
            <col style="background: #0154BE; color: #fff;" />
        </colgroup>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>País</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Wuilfredo</td>
                <td>Azócar</td>
                <td>Venezuela</td>
            </tr>
            <tr>
                <td>Ezio</td>
                <td>Auditore</td>
                <td>Italia</td>
            </tr>
        </tbody>
        <tfooter>
            <tr>
                <td>Total de personas listadas:</td>
                <td>2</td>
            </tr>
        </tfoot>
    </table>
</div>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

**Nota:**<br />
Para no colocar tantas etiquetas `<col />` como columnas haya en la tabla antes de llegar a la deseada, se puede usar el atributo `span` para indicar que columna es o abreviar (agrupar) varias columnas en una sola etiqueta `<col />`. Ex:

```html
<col span="4" />
<col style="background="yellow" />
```

De esta forma estamos abreviando lo siguiente:

```html
<col />
<col />
<col />
<col />
<col style="background="yellow" />
```

En dicho ejemplo se están aplicando un estilo de fondo a la 5<sup>ta</sup> columna.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Imágenes (`img`)
La etiqueta `<img />` se usa para insertar imágenes. Es un tipo de etiqueta self-closing la cual por lo general requiere solo 2 atributos el cual es `alt` (descripción de la imagen) y `src` (ruta de la imagen). Su sintaxis es la siguiente:

```html
<img src="img/foto.png" alt="Mi gran imagen" />

<!--
    Donde:

    src="" => Corresponde al atributo que indica la ruta donde se encuentra la imagen.

    "img/foto.png" => Es la ruta donde se encuentra la imagen.

    alt="" Corresponde al atributo que indica la descripción de la imagen.

    "Mi gran imagen" => Es la descripción que se le designó a la imagen.
-->
```
<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Otros atributos opcionales
Existen otros atributos que pueden ser aplicables a la etiqueta `<img />` entre los cuales están:

#### Atributo `width="n"`
Donde `"n"` representa un número entero el cual será el ancho de la imagen en pixeles. Ex:

```html
<img src="img/foto.png" alt="Mi gran imagen" width="500" />
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


#### Atributo `height="n"`
Donde `"n"` representa un número entero el cual será el alto de la imagen. Ex:

```html
<img src="img/foto.png" alt="Mi gran imagen" height="200" />
```
<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Atributo `srcset="ruta/imagen.png condición"`
Se usa para cambiar de imagen dependiendo de una condición en específico. Por ejemplo dado una determinada densidad de píxeles o dado el ancho de la imagen. Ex:

```html
<img
    srcset="img/foto2x.png 2x,
            img/foto3x.png 3x"
    src="img/foto.png"
    alt="Mi gran imagen"
/>

<!--
    Donde:

    srcset => Corresponde al atributo que espera la ruta de la imagen seguida de la condición para que se muestre dicha imagen.

    "img/foto2x.png 2x, img/foto3x.png" => Corresponde a la ruta designada de una imagen seguida de su condición, en este caso hay dos imágenes, por lo tanto dos rutas y dos condiciones.

    src="img/foto.png" => En este caso este atributo actúa como un fallback, es decir, es el que se mostrará si el navegador no soporta el atributo srcset.
 -->
```
>Nota: Cabe destacar que el uso de `srcset` no implica que se descarguen todas las imágenes al tiempo, solo la que cumple la condición será descargada y mostrada.

En dicho ejemplo el navegador mostrará la foto2x.png ante una densidad de píxeles <=2 y mostrará foto3x.png ante una densidad de píxeles > 2 y en caso de no soportar el atributo `srcset` mostrará foto.png.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

En el siguiente ejemplo se muestra una imagen de 500px de ancho solo si el viewport tiene 500px de ancho para mostrarla, si tiene más de 500px mostrará la de 800px:

```html
<img
    srcset="img/foto5w.png 500w,
            img/foto8w.png 800w"
    src="img/foto.png"
    alt="Mi gran imagen"
/>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Imágenes (`picture`)
Permite indicar qué imagen elegir dependiendo de las `mediaquerys` seleccionadas. Su sintaxis es la siguiente:

```html
<picture>
    <source srcset="img/foto1.png" media="(min-width: 800px)" />
    <source srcset="img/foto2.png" media="(min-width: 500px" />
    <img src="img/foto.png" alt="Imágenes responsive" />
</picture>

<!--
    Donde:

    <source /> => Corresponde a la etiqueta que se utiliza para indicar una imagen.

    srcset => Es el atributo de source donde se indica la ruta de la imagen.

    media => Es el atributo de source donde se indica la mediaquery/condición necesaria para que la imagen se muestre.
-->
```
**Nota:** En este ejemplo las `mediaquerys` están ordenadas descendentemente para que carguen todas las condiciones dado el caso de existir la posibilidad de redimensionar el navegador. Ya que el navegador al encontrar una condición que "coincida" deja de leer las demás etiquetas ignorándolas por completo. Colocándola de esta manera el navegador las lee todas y muestra solo la que coincida con la condición y deja abierta la posibilidad de mostrar otra imagen si hay una redimensión.

Las `mediaquerys` pueden ser tan específicas como se necesiten, es decir; se pueden usar orientaciones, densidad de píxeles, etc.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Imágenes (`figure`)
Es una etiqueta que permite resaltar un contenido que es independiente y destacado del resto del contenido. Es decir, por si solo representa algo. Es como un `article` pero para recursos multimedia.

Un uso correcto de un `figure` podría ser un párrafo explicativo junto a su imagen descriptiva y un incorrecto sería el mismo párrafo pero separado de su imagen, lo cual técnicamente podría estar correcto pero semánticamente hablando estaría mal por no usar la etiqueta `figure` cuando es debido.

Esta etiqueta puede ser usada para ilustraciones, diagramas, fotos, mostrar código, etc.

Puede ser empleada junto con un caption (título) a través de la etiqueta `figcaption` (opcional).

Algunos ejemplos de su uso:

- En código:
    ```html
    <figure>
        <figcaption>Listing 4. The primary API</figcaption>
        <pre>
            <code>
                interface PrimaryCore{
                    boolean verifyDataLine();
                    void sendData (in sequence byte>data);
                    void initSelfDestruct();
                }
            </code>
        </pre>
    </figure>
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- En imágenes
    ```html
    <figure>
        <img src="foto.png" alt="Motocicleta azul" />
        <figcaption>Motocicleta Deportiva</figcaption>
    </figure>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Video HTML5
Para insertar video en HTML5 se usa la etiqueta `<video></video>` de la siguiente manera:

```html
<video
    src="video/intro.mp4"
    width="1280"
    height="720"
    controls
    autoplay
    muted
    poster="video/poster/intro.jpg">
</video>

<!--
    Donde:

    controls => Corresponde al atributo que se necesita para que aparezca la interfaz del reproductor (botones de play, pause, línea de tiempo, etc).

    autoplay => Corresponde al atributo que indica que el video sea reproducido automáticamente a penas cargue.

    poster => Corresponde al atributo utilizado cuando se requiere configurar una determinada imagen como "caratula" o miniatura del video visible antes de que se reproduzca.

    loop => Corresponde al atributo que permite al video reproducirse en un loop (infinitas veces).

    muted => Corresponde al atributo que permite mutear al video por defecto.

    width => Corresponde el atributo al cual se le designa el ancho del video.

    height => Corresponde el atributo al cual se le designa el alto del video.

    src => Corresponde al atributo al cual se le designa la ruta del video.
-->
```
>Nota: Si no se declara el `width` y el `height` del video, este tomará las medidas originales del video.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Audio HTML5
Para insertar audio en HTML5 se usa la etiqueta `<audio></audio>` de la siguiente manera:

```html
<audio
    src="audio/background.mp3"
    controls
    autoplay>
</audio>

<!--
    Donde:

    controls => Corresponde al atributo que se necesita para que aparezca la interfaz del reproductor (botones de play, pause, línea de tiempo, etc).

    autoplay => Corresponde al atributo que indica que el audio sea reproducido automáticamente a penas cargue.

    src => Corresponde el atributo al cual se le designa la ruta del audio.
-->
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Formularios
Es la representación de un campo o conjunto de campos donde se pueden introducir una variada cantidad de datos, los cuales son enviados a un servidor para ser procesador según su programación. Un ejemplo de un formulario sería: un login, un chat, un registro, etc.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiquetas usadas en los formularios

#### Etiqueta `form`
Es la etiqueta que se usa para englobar todos los campos que contendrá el formulario. Su sintaxis es la siguiente:

```html
<form action="procesar.php" method="post">
    <!-- Etiqueta para llenar datos -->
    <!-- Botón para enviar los datos -->
</form>

<!--
    Donde:

    action => Es la pagina/ruta a donde irá a procesarse la información suministrada.

    method => Es la forma de enviar los datos.
 -->
```
<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Etiqueta `fieldset`
Es posible agrupar campos del formulario que pertenezcan a una determinada categoría, por ejemplo: agrupar nombre, apellido y cédula en un grupo llamado "datos personales". Esto se hace de la siguiente manera:

```html
<form>
    <fieldset>
        <legend>Datos personales</legend>
        <!-- input para nombre -->
        <!-- input para apellido -->
        <!-- input para cédula -->
    </fieldset>
    <!-- Botón para enviar los datos -->
</form>

<!--
    Donde:

    fieldset => Corresponde a la etiqueta a usar para agrupar el conjunto de campos.

    legend => Corresponde al título que obtendrá la agrupación de los campos.
-->
```
>Nota: Esta característica de los formularios es opcional.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Etiqueta `label`
Sirve para mostrar información o como etiqueta para englobar un `input` para mejorar la accesibilidad; para que al hacer click en él, el `input` gane el focus. Su sintaxis es la siguiente:

```html
<label for="nombre">Ingrese su nombre</label>

<!--
    Donde:

    for => Es el atributo que recibe el ID del input al cual se le quiere referir al hacer click.
-->
```

Es posible enlazar un label a un input a través de la siguiente manera:

```html
<!-- Usando el atributo for -->
<label for="nombre">Ingrese su nombre</label>
<input id="nombre" />

<!-- Encerrando el input dentro del label -->
<label>
    Ingrese su apellido
    <input />
</label>
```
<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Etiquetas `input's`
Son un conjunto de campos que se utilizan para recaudar diferentes tipos de datos. Cabe destacar que si no se le asigna un "tipo" este tomará su valor por defecto que es "texto" o sea:

```html
<!-- Este input -->
<input />
<!-- Es igual a este otro -->
<input type="text" />

<!-- Algunos atributos de los inputs -->
<!--
    name => Es el nombre con el que a nivel de servidor se identificará dicho campo.

    placeholder => Es un atributo que recibe un texto, el cual representa un "texto" de ayuda" para el usuario cuando visualiza el input.
-->

<!-- input con todos su atributos opcionales -->
<input type="text" name="nombre" placeholder="Ingrese su nombre" />
```
<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


##### Tipos de input's

- Submit <br />
    Es el tipo de `input` que se agrega para enviar el formulario al servidor.

    ```html
    <input type="submit" />

    <!-- Nota -->
    <!--
        El input de tipo submit hace exactamente lo mismo que la etiqueta button:
     -->
    <button>Enviar</button>
    ```
    **Notas:** <br />

    - Cabe destacar que el título en el caso de los `inputs` lo recibe a través del atributo `value`. Ex:

        ```html
        <input type="submit" value="Enviar rápido" />
        ```

    - No existe diferencias en cuanto a la funcionabilidad entre el `input` y el `button`.

    - Por defecto si no se le da un texto para mostrar al `input` dirá "Enviar" en el idioma que este el sistema operativo.

    - Es posible usar una imagen para enviar el formulario. Ex:

        ```html
        <input type="image" src="ruta/imagen.png" />
        ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Radio (Selección simple) <br />
Es el tipo de `input` que permite hacer una selección simple. Ex:

    ```html
    <input type="radio" name="gender" valor="Masculino" selected/>
    <input type="radio" name="gender" valor="Femenino"/>
    <input type="radio" name="gender" valor="Ocultar"/>

    <!--
        Donde:

        name => Corresponde al atributo que se usa para indicar que las opciones indicadas pertenecen al mismo grupo/misma categoría; que en este caso hace alusión al género. Además de indicar el nombre con el que se identificará este dato a nivel de backend.

        value => Es el texto que mostrará la opción.

        selected => Sirve para indicar que dicha opción aparecerá marcada por defecto.
    -->
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Checkbox (Selección múltiple) <br />
Es el tipo de `input` que permite realizar una selección múltiple. Su sintaxis es la siguiente:

    ```html
    <input type="checkbox" name="hobbies" value="Cantar" />
    <input type="checkbox" name="hobbies" value="Bailar" />
    <input type="checkbox" name="hobbies" value="Programar" checked />

    <!--
        Donde:

        name => Corresponde al atributo que se usa para indicar que las opciones indicadas pertenecen al mismo grupo/misma categoría que en este caso hace alusión a los hobbies, además de representar el nombre con el que se identificará este dato en el backend.

        value => Es el texto que mostrará la opción.

        checked => Sirve indicar que dicha opción aparecerá marcada por defecto.
    -->
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Color <br />
Es el tipo de `input` que permite seleccionar colores con la herramienta de selección de colores del sistema operativo. Su sintaxis es:

    ```html
    <input type="color" />
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Email <br />
Es el tipo de `input` que permite el ingreso de texto con formato de email. Es decir, valida que contenga [texto]@[dominio]. Su sintaxis es la siguiente:

    ```html
    <input type="email" />
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- URL <br />
Es el tipo de `input` que permite el ingreso de texto con formato de URL. Su sintaxis es la siguiente:

    ```html
    <input type="url" />
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Password <br />
Es un tipo de `input` que permite "ocultar" los datos al tipiar. Su sintaxis es la siguiente:

    ```html
    <input type="password" />
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Tel <br />
Es el tipo de `input` que se utiliza cuando se espera ingresar un número telefónico. En un computador cabe destacar que no tiene ninguna diferencia aparente pero si se accede desde un móvil, el teclado del mismo será diferente, es decir, serán solo números. Su sintaxis es la siguiente:

    ```html
    <input type="tel" />
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Search <br />
Es el `input` destinado a utilizarse cuando se espera recibir texto destinado a una búsqueda. Por defecto, depende del agente (navegador) donde se visualiza dado que no hay ningún cambio que le permita diferenciarse de otros tipos de `input`. Su sintaxis es la siguiente:

    ```html
    <input type="search" />
    ```
<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Date <br />
Es el `input` destinado a utilizarse cuando se requiere introducir una fecha a través de un widget creado por el agente (navegador). Su sintaxis es la siguiente:

    ```html
    <input type="date" />
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Time <br />
Es el `input` destinado a utilizarse cuando se requiere introducir una hora. Su sintaxis es la siguiente:

    ```html
    <input type="time" />
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Number <br />
Es el `input` utilizado para cuando se necesita realizar operaciones que solo involucren números. Por ejemplo: el campo de "números de unidades" de una compra. Su sintaxis es la siguiente:

    ```html
    <input type="number" />
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Range <br />
Es un slider tipo "subir y bajar volumen". Permite seleccionar un valor entre un determinado rango. Su sintaxis es la siguiente:

    ```html
    <input type="range"
           min="0"
           max="100"
           step="20"
           value="80" />

    <!--
        Donde:

        min => Corresponde al atributo que recibe el valor mínimo del rango.

        max => Corresponde al atributo que recibe el valor  máximo del rango.

        steps => Corresponde al atributo que indicará la cantidad de valores disponibles por defecto a utilizar. La fórmula es: max/steps. En este ejemplo serán un total de 5 valores posibles a utilizar en el rango (dado 100/20). Si no se usa esta propiedad el usuario podrá escoger cualquier valor dentro del rango.

        value => Corresponde al atributo que recibe el valor por defecto que tendrá el rango.
    -->
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- File <br />
Es el `input` que permite la selección de archivos mediante el widget del agente (navegador). Su sintaxis es la siguiente:

    ```html
    <input type="file" />
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- Reset <br />
Es un `input` que crea un botón para limpiar/borrar todos los campos implementados en el formulario. Su sintaxis es la siguiente:

    ```html
    <input type="reset" />
    ```
    >Nota: Por defecto si no se le agrega un texto al botón a través del atributo `value`, mostrará la palabra "restablecer" en el idioma que se encuentre el sistema operativo.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Etiqueta `select`
Es el elemento que permite desplegar una lista con un conjunto de opciones disponibles. Su sintaxis es la siguiente:

```html
<select name="pais">
    <optgroup label="América">
        <option value="arg">Argentina</option>
        <option value="col">Colombia</option>
        <option value="per">Peru</option>
        <option value="vzla">Venezuela</option>
    </optgroup>
    <optgroup label="Europa">
        <option value="esp">España</option>
    </optgroup>
</select>

<!--
    Donde:

    name => Corresponde al atributo que recibe el nombre con el que se identificará el valor de dicha selección a nivel de backend.

    option => Corresponde a la etiqueta utilizada para añadir elementos a la lista.

    value => Corresponde a un atributo de la etiqueta option el cual indica el valor correspondiente de una opción.

    ** Atributos opcionales **

    multiple => Corresponde a un atributo de la etiqueta select el cual permite la selección multiple en las opciones.

    optgroup => Es una etiqueta destinada recibir un grupo de opciones en caso de ser necesario mostrar las opciones agrupadas por categorías.

    label => Corresponde a un atributo de la etiqueta optgroup y recibe el nombre correspondiente de la agrupación a mostrar.
-->
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Etiqueta `textarea`
Se utiliza para que el usuario ingrese un texto más amplio. Su sintaxis es la siguiente:

```html
<textarea name="comentario"
          cols="30"
          row="10"
          minlenght="100"
          maxlenght="200">
</textarea>

<!--
    Donde:

    cols => Corresponde al atributo que recibe la cantidad de columnas visibles por defecto.

    row => Corresponde al atributo que recibe la cantidad de filas visibles por defecto.

    minlenght => Corresponde al atributo que recibe la cantidad mínima de caracteres permitidos por defecto.

    maxlenght => Corresponde al atributo que recibe la cantidad máxima de caracteres permitidos por defecto.
-->
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Etiqueta `datalist`
Es un conjunto de opciones que se enlistan igual que un `select` pero permite la escritura para la búsqueda de las opciones a través de un `input`. Su sintaxis es la siguiente:

```html
<input list="paises" />
<datalist id="paises">
    <option value="Argentina" />
    <option value="Ecuador" />
    <option value="España" />
</datalist>

<!--
    Donde:

    list => Corresponde a un atributo de la etiqueta input que recibe el ID del datalist al que se va a enlazar.

    option => Corresponde a la etiqueta utilizada para agregar elementos a la lista.

    value => Corresponde a un atributo de la etiqueta option el cual se encarga de recibir el valor que va a mostrar la lista y también a usar a nivel de backend.
-->
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Algunos atributos para los campos de los formularios
Entre algunos de los atributos que tienen los campos de los formularios están:

- `required`: Es el atributo que se le agrega a un campo para impedir su omisión (sea obligatorio) en el formulario.

- `disable`: Es el atributo que se le agrega a un campo para impedir su utilización (desactivarlo) dentro del formulario.

- `autofocus`: Es el atributo que se le agrega a un campo para que gane el focus por defecto.

- `readonly`: Es el atributo que se le agrega a un campo para indicar que el mismo será solo de lectura.

- `maxlenght`: Es el atributo que se le agrega a un campo para establecer el máximo de caracteres permitidos.

- `minlenght`: Es el atributo que se le agrega a un campo para establecer el mínimo de caracteres permitidos.

- `max`: Es el atributo que se le agrega a un campo para establecer el valor máximo permitido (en un campo numérico).

- `min`: Es el atributo que se le agrega a un campo para establecer el valor mínimo permitido (en un campo numérico).

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Acordeón en HTML5
A través de la siguiente etiqueta se puede crear una especie de "acordeón" nativo de HTML5:

```html
<details>
    <summary>Título del acordeón</summary>
    <p>Contenido del acordeón</p>
</details>
```

**Notas:**<br />
- Si no se coloca un título al acordeón (etiqueta `summary`) automáticamente se coloca el título "detalles" por defecto.

- El atributo que abre el acordeón es "`open`" el cual puede ser manipulado por JavaScript.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Modal en HTML5
Existe la posibilidad de crear un elemento similar a un "modal" de forma nativa usando solo etiquetas HTML. Ex:

```html
<dialog open>
    <!-- Contenido del modal -->
</dialog>
```
El atributo `open` es el encargado de abrir el modal, el cual si se omite impediría que el mismo aparezca desplegado por defecto. Sin embargo este atributo puede añadirse con JavaScript de la siguiente manera:

```html
<dialog class="js-modal">
    <h2>Título</h2>
    <p>Contenido</p>
</dialog>
<button class="js-btnAbrir">Abrir el modal</button>
<button class="js-btnCerrar">Cerrar el modal</button>

<script>
    const modal = document.querySelector(".js-modal");
    const abrir = document.querySelector(".js-btnAbrir");
    const cerrar = document.querySelector(".js-btnCerrar");

    abrir.addEventListener("click", ()=>{
        modal.setAttribute("open", "true");
    })

    cerrar.addEventListener("click", ()=>{
        modal.removeAttribute("open");
    })
</script>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


## API HTML
API es el acrónimo de Aplication Programming Interface, son un conjunto de datos, métodos y propiedades que se utilizan para un determinado fin. Entre las API's más comunes que hay están:

- DOM: Document Object Models -> Objetos en el documento.
- BOM: Browser Object Models -> Objetos en el navegador.
- Canvas: Dibujos con JavaScript.
- WebStorage: LocalStorage y SessionStorage -> Guardar datos es el navegador.
- Web Sockets: Comunicación bidireccional permanente entre el cliente y el servidor.
- Web Component: Permite crear componentes personalizados.
- Audio & Video.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Contenido embebido
Son etiquetas que permiten traer contenido de páginas externas a la nuestra. Ex:

### Etiqueta `embed`
Sirve para traer contenido externo que requiera un plugin. Su sintaxis es la siguiente:

```html
<embed src="" type="" />
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Etiqueta `object`
Sirve para traer contenido externo que requiera un plugin. Su principal diferencia con `embed` es que `object` permite tener hijos a los que se les asigna metadatos. Su sintaxis es la siguiente:

```html
<object data="" type="">
    <param name="" value ="" />
</object>
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Etiqueta `iframe`
Trae contenido que el navegador puede procesar por sí solo. Crea un contexto hijo del navegador (un navegador dentro de otro navegador). Su sintaxis es la siguiente:

```html
<iframe width="560" height="315" src="ruta.html" frameborder="0" allowfullscreen>
</iframe>
```
<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Algunos tips para contenido embebido

- Videos relacionados en Youtube: Para que los videos al finalizar muestren como "contenido recomendado" los videos que tiene el mismo canal/usuario hay que colocarle al final de la url que proporciona Youtube lo siguiente: `"?rel=0"`. Ex:

    https:www.youtube.com/embed/X4Lnsto_Q?rel=0

- Crear formularios embebidos: Es posible crear formularios que pueden ser insertados en una página sin necesidad de programar con <a href="https:www.wufoo.com">Wufoo</a>.

- Crear comentarios embebidos: Es posible crear un sistema de comentarios que pueda ser insertado en una página sin necesidad de programar con <a href="https:www.disqus.com">Disqus</a>.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Algunos links de interés
- <a href="https://schema.org">Microdatos: Schema.org</a>
- <a href="#">Microdatos: Open Graph</a>
- <a href="#">Microdatos: Twitter Card</a>
- <a href="#">Validador de microdatos (schema) de Google</a>
- <a href="#">Outliner HTML5</a>
- <a href="#">Atributo Rol en etiquetas</a>
- <a href="#">Algunos boiler place</a>
- <a href="#">Google custom search</a>
- <a href="#">W3C HTML validador</a>
- <a href="https://google.github.io/styleguide/htmlcssguide.xml">Style guide code by Google</a>
- <a href="html5doctor.com/element-index/">Etiquetas HTML</a>
- <a href="https://www.w3.org/developers">Herramientas para desarrolladores de la W3C</a>
- <a href="https://developer.mozilla.org/ar/docs/Web/HTML/Element">Por nombrar</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Por nombrar</a>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>