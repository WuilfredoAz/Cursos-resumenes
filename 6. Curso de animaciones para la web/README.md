# Curso de Animaciones para la Web

## Tabla de Contenido
- [¿Qué son las transiciones en la Web?](#¿Qué-son-las-transiciones-en-la-Web?)
- [Sintaxis de las transiciones](#Sintaxis-de-las-transiciones)
    - [`transition-property: [valor];`](#transition-property:-[valor];)
    - [`transition-duration: [valor];`](#transition-duration:-[valor];)
    - [`transition-delay: [valor];`](#transition-delay:-[valor];)
    - [`transition-timing-function: [valor];`](#transition-timing-function:-[valor];)
    - [`transition: [valor]`](#transition:-[valor])
- [Transformaciones](#Transformaciones)
    - [Rotar elementos - `transform: rotate()`](#Rotar-elementos---transform:-rotate())
    - [Mover elementos - `transform: translate()`](#Mover-elementos---transform:-translate())
    - [El punto de transformación de las perspectivas](#El-punto-de-transformación-de-las-perspectivas)
    - [Escalar elementos - `transform: scale()`](#Escalar-elementos---transform:-scale())
    - [Sesgar elementos - `transform: skew()`](#Sesgar-elementos---transform:-skew())
- [Punto de transformación](#Punto-de-transformación)
- [Animaciones](#Animaciones)
    - [¿Cómo crear una animación?](#¿Cómo-crear-una-animación?)
        - [Pro tips](#Pro-tips:)
    - [Propiedades aplicables a las animaciones](#Propiedades-aplicables-a-las-animaciones)
        - [Delay en las animaciones](#Delay-en-las-animaciones)
        - [Iteración de las animaciones](#Iteración-de-las-animaciones)
        - [Aceleración de las animaciones](#Aceleración-de-las-animaciones)
        - [Sentido de la animación](#Sentido-de-la-animación)
        - [Estado final de la animación](#Estado-final-de-la-animación)
        - [Estado general de la animación](#Estado-general-de-la-animación)
        - [Sintaxis abreviada de las Animaciones](#Sintaxis-abreviada-de-las-Animaciones)
    - [Animaciones múltiples](#Animaciones-múltiples)
- [La Curva de Bezier](#La-Curva-de-Bezier)
- [Optimizar lo que se renderiza con `will-change`](#Optimizar-lo-que-se-renderiza-con-will-change)
    - [¿Cómo se usa?](#¿Cómo-se-usa?)
    - [¿Cómo saber si mi optimización tiene resultado?](#¿Cómo-saber-si-mi-optimización-tiene-resultado?)
- [Animaciones y JavaScript](#Animaciones-y-JavaScript)
- [Animaciones con `element.animate`](#Animaciones-con-element.animate)
    - [Importante](#Importante)
    - [¿Cómo usar `element.animate`?](#¿Cómo-usar-element.animate?)
    - [Algunos métodos de `element.animate`](#Algunos-métodos-de-element.animate)
- [De After Effects a CSS](#De-After-Effects-a-CSS)
    - [Sheetah](#Sheetah)
        - [Instalación](#Instalación)
        - [Uso](#Uso)
        - [Pro Tip](#Pro-Tip)
        - [Declarando las animaciones en CSS](#Declarando-las-animaciones-en-CSS)
        - [Algunos ejemplos](#Algunos-ejemplos)
    - [Bodymoving](#Bodymoving)
        - [Instalación](#Instalación-b)
        - [Uso](#Uso-b)
        - [Declarando las animaciones en CSS](#Declarando-las-animaciones-en-CSS-b)
        - [Algunos ejemplos](#Algunos-ejemplos-b)
- [Anotaciones generales](#Anotaciones-generales)
- [Contadores CSS](#Contadores-CSS)
- [Links de Interés](#Links-de-Interés)


## ¿Qué son las transiciones en la Web?
Consiste en generar la sensación de que algo se mueve. Pasando de un estado "A" a un estado "B" y donde la *transición* o *animación* es el puente entre ambos estados.

Las transiciones son parte de las interfaces ya que a través de ellas se le da *feedback* al usuario de lo que está pasando, mejorando el engagement con el usuario. Ex: un loading.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


## Sintaxis de las transiciones

### `transition-property: [valor];`
Es donde se especifica como `[valor]` la propiedad o propiedades que se desean animar. Ex:

```css
.elementoAnimado
{
    transition-property: width, height;
}
```

>**Nota**: Si no se especifica qué propiedades se requiere animar, es decir, omitimos esta propiedad, CSS animará **TODAS** las propiedades animables del objeto.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### `transition-duration: [valor];`
Es donde se especifica como `[valor]` el tiempo que durará la transición. Se puede especificar en segundos (s) o milisegundos (ms). Ex:

```css
.elementoAnimado
{
    transition-duration: 1s;
}
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### `transition-delay: [valor];`
Es donde se especifica como `[valor]` el tiempo que se esperará **antes** de que ocurra la transición. Se puede especificar en segundos (s) o milisegundos (ms). Ex:

```css
.elementoAnimado
{
    transition-delay: 1000ms;
}
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### `transition-timing-function: [valor];`
Es donde se especifica como `[valor]` la aceleración con la que se visualizará la transición, permitiéndole dar un toque más natural al movimiento. Ex:

```css
.elementoAnimado
{
    transition-timing-function: ease;
}
```

Entre los `[valores]` que puede tomar esta propiedad están:

- `ease`: Es el valor por defecto. Especifica un efecto de transición con un inicio lento, luego rápido y finaliza lento.

- `ease-in`: Especifica un efecto de transición con un inicio lento.

- `ease-out`: Especifica un efecto de transición con un final lento.

- `ease-in-out`: Especifica un efecto de transición con un inicio y final lento.

- `linear`: Especifica un efecto de transición con la misma velocidad de principio a fin.

- `steps(n, start)`: Especifica un efecto de transición en "`n`" cantidad de intervalos. Donde si por ejemplo son 5 intervalos será= 100% duración / 5 intervalos, entonces cambiará de estado en cada 20% de la duración de forma lineal y equitativa (sin aceleraciones).

- `cubic-bezier(n,n,n,n)`: Permite definir una curva de aceleración personalizada según los parámetros de la función.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### `transition: [valor]`
Corresponde a un shorthand donde se pueden usar algunas o todas las propiedades antes nombradas. Ex:

```css
.elementoAnimado
{
    /*
    transition: [property] [duration] [delay] [timing]
    */
    transition: width: 1s;
}
```

>**Nota**: No es necesario el uso de TODAS las propiedades. Se pueden omitir las que no se necesiten. Por ejemplo en este caso se omitió el `[delay]` y el `[timing]` pero CSS los agrega automáticamente con sus valores por defecto que son "0ms" para el `[delay]` y "ease" para el `[timing]`.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Transformaciones
Es la propiedad *más famosa* a la hora de realizar animaciones permitiendo escalar (`scale`), mover (`translate`), rotar (`rotate`) y sesgar (`skew`) un elemento. Ex:

```css
.elementoAnimado
{
    transform: rotate(5deg) skew(10deg) translate(100px) scale(1.5);

    /*
    rotar => rotate()
    sesgar => skew()
    mover => translate()
    escalar => scale()
    */
}
```

>**NOTA IMPORTANTE**: Es importante recalcar que la **aceleración por hardware** se activa cuando se usa esta propiedad (`transform`). Bien sea usándola desde CSS (como en el ejemplo anterior) o por JavaScript como puede ser el caso de `elementoHTML.style.transform= "translateX(30px);"` Ya que en ambos casos se está accediendo a la propiedad `transform` de CSS y para el navegador le es indiferentes desde donde se establece dicha propiedad.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Rotar elementos - `transform: rotate()`
Es el `[valor]` que permite rotar a un elemento. Entre sus características están:

- Su unidad de medida son los "`deg`" (ángulos) o `"turn"` (vueltas).

- Los números positivos se mueven en sentido de las agujas del reloj.

- Los números negativos se mueven en sentido contrario a las agujas del reloj.

- Para rotar en el **eje X** específicamente se usa: `rotateX();`.

- Para rotar en el **eje Y** específicamente se usa: `rotateY();`.

- Para rotar en el **eje Z** específicamente se usa: `rotateZ();`. Este es el eje por defecto en el que se mueve.

- Todas las transformaciones anteriores se pueden usar en conjunto (al mismo tiempo).

- Para rotar en **3D** específicamente se usa: `rotate3d([x],[y],[z], [ndeg]);` en donde para activar un eje se coloca "1". Por ejemplo:

    ```css
    .elementoAnimado
    {
        transform: rotate3d(1,0,0, 10deg);
    }
    ```
    >En dicho ejemplo solo estamos rotante el eje X 10grados.



A continuación se muestran ejemplos del comportamiento de un posible elemento al cual se le ha aplicado dicha transformación:

<style>
    .contenedor
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 40px auto;
        padding: 20px 0;
    }
    .contenedor.perspectiva
    {
        perspective: 150px;
    }
    .cuadrado
    {
        box-sizing: border-box;
        width: 100px;
        height: 100px;
        border-radius: 5px;
        background-image: linear-gradient(#4686f8, #165acf);
        border: 2px solid #ccc;
        color: #fff;
        font-family: "Roboto";
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .3s;
        margin-right: 50px;
        margin-bottom: 50px;
        text-align: center;
    }

    .cuadrado:last-child
    {
        margin: 0;
    }

    .rotate:first-of-type:hover
    {
        transform: rotate(45deg);
    }
    .rotate:nth-child(2):hover
    {
        transform: rotate(-45deg);
    }
    .rotate:nth-child(3):hover
    {
        transform: rotateX(45deg);
    }
    .rotate:nth-child(4):hover
    {
        transform: rotateY(45deg);
    }
    .rotate:nth-child(5):hover
    {
        transform: rotateZ(45deg);
    }
    .rotate:nth-child(6):hover
    {
        transform: rotateX(45deg) rotateY(45deg) rotateZ(45deg);
    }
    .rotate:nth-child(7):hover
    {
        transform: rotate3d(1,1,1, 45deg);
    }
    .rotate:nth-child(8):hover
    {
        transform: rotate(1turn);
    }
</style>

<div class="contenedor">
    <div class="cuadrado rotate">rotate(45deg)</div>
    <div class="cuadrado rotate">rotate(-45deg)</div>
    <div class="cuadrado rotate">rotateX(45deg)</div>
    <div class="cuadrado rotate">rotateY(45deg)</div>
    <div class="cuadrado rotate">rotateZ(45deg)</div>
    <div class="cuadrado rotate">rotateX(45deg) </br> rotateY(45deg) </br> rotateZ(45deg)</div>
    <div class="cuadrado rotate">rotate3d(1, 1, 1, 45deg)</div>
    <div class="cuadrado rotate">rotate(1turn)</div>
</div>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Mover elementos - `transform: translate()`
Es el `[valor]` que permite mover a un elemento en cualquiera de sus ejes X, Y, Z. Entre sus características están:

- Se pueden usar tanto números negativos como positivos, además de cualquier unidad de medida, como por ejemplo: `em`, `rem`, `vh`, etc.

- Para mover un elemento en el **eje X** específicamente se usa: `translateX();` o también: `translate();`.

- Para mover un elemento en el **eje Y** específicamente se usa: `translateY()`.

- *Shorthand* para mover un elemento tanto en el **eje X** y el **eje Y**: `translate(X,Y);`.

- Para mover todos los ejes (3D) podemos hacer uso de `translate3d(X,Y,Z);` (se requiere perspectiva previamente declarada).

- Para mover un elemento en el **eje Z** específicamente se usa: `translateZ();` (se requiere perspectiva previamente declarada).

Para mover un elemento en el **eje Z** se le debe dar un contexto 3d al canvas u objeto para que de esta forma obtenga dicha perspectiva.

Esto se hace dándole al .padre del elemento la propiedad "`perspective`" seguida de la dimensión (en este caso hace referencia a la profundidad la cual debe ser SIEMPRE MAYOR a la declarada en el .hijo con la propiedad `translateZ()`). Ex:

```css
.padre
{
    perspective: 150px;
}

.hijo
{
    transform: translateZ(45px);
}
```

A continuación se muestran ejemplos del comportamiento de un posible elemento al cual se le ha aplicado dicha transformación:

<style>
    .translate:first-of-type:hover
    {
        transform: translate(45px);
    }
    .translate:nth-child(2):hover
    {
        transform: translate(-45px);
    }
    .translate:nth-child(3):hover
    {
        transform: translateY(45px);
    }
    .translate:nth-child(4):hover
    {
        transform: translateY(-45px);
    }
    .translate:nth-child(5):hover
    {
        transform: translate(45px, 45px);
    }
    .translate:nth-child(6):hover
    {
        transform: translateZ(45px);
    }
    .translate:nth-child(7):hover
    {
        transform: translate3d(45px, 45px, 45px);
    }
</style>

<div class="contenedor perspectiva">
    <div class="cuadrado translate">translate(45px)</div>
    <div class="cuadrado translate">translate(-45px)</div>
    <div class="cuadrado translate">translateY(45px)</div>
    <div class="cuadrado translate">translateY(-45px)</div>
    <div class="cuadrado translate">translate(45px, 45px)</div>
    <div class="cuadrado translate">translateZ(45px) </br> perspectiva en el centro</div>
    <div class="cuadrado translate">translate3d(45px, 45px, 45px)</div>
</div>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### El punto de transformación de las perspectivas

Cabe destacar que el *punto de transformación*  de cualquier perspectiva está configurado para empezar en el centro de X y Y.

Para cambiar esto, hay que hacer uso de "`perspective-origin`" en el .padre y ajustarlo con algunos de los siguientes valores por defecto. Ex:

```css
.padre
{
    /* previamente */
    perspective: 350px;


    perspective-origin: [valor];

    /*
    [valor] podría ser:

    - center
    - left
    - right
    - bottom
    - top
    - combinaciones, ex: left top | right top
    - valores en X y Y: 10px 30px
    */
}


.hijo
{
    transform: translateZ(100px);
}
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Escalar elementos - `transform: scale()`
Es el `[valor]` que permite escalar a un elemento. Entre sus características están:

- Sus unidades de medida más frecuentes son 0 y 1 donde 0=0%, y 1=100% de su tamaño real.

- Para escalar un elemento en **X y Y simultáneamente** se usa: `scale(X, Y);`.

- Para escalar un elemento homogéneamente se usa: `scale(n);`

- Para escalar un elemento 3D se usa: `scale3d(X,Y,Z);`. (Para que se note el resultado el objeto debe ser 3D).

A continuación se muestran ejemplos del comportamiento de un posible elemento al cual se le ha aplicado dicha transformación:

<style>
    .scale:first-of-type:hover
    {
        transform: scale(.5);
    }
    .scale:nth-child(2):hover
    {
        transform: scale(1.5);
    }
    .scale:nth-child(3):hover
    {
        transform: scale(1, .5);
    }
    .scale:nth-child(4):hover
    {
        transform: scale(.5, 1);
    }
    .scale:nth-child(5):hover
    {
        transform: scale(1.5, .5);
    }
</style>
<div class="contenedor">
    <div class="cuadrado scale">scale(.5)</div>
    <div class="cuadrado scale">scale(1.5)</div>
    <div class="cuadrado scale">scaleY(1, .5)</div>
    <div class="cuadrado scale">scaleY(.5, 1)</div>
    <div class="cuadrado scale">scale(1.5, .5)</div>
</div>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Sesgar elementos - `transform: skew()`
Es el `[valor]` que permite sesgar a un elemento, es decir, inclinar los elementos hacia los lados. Entre sus características están:

- Sus unidades de medida son "`deg`" (ángulos).

- Para sesgar un elemento en **X y Y simultáneamente** se usa: `skew(X, Y);`.

- Para sesgar un elemento en el **eje X** se usa: `skewX();` o también `skew();`.

- Para sesgar un elemento en el **eje Y** se usa: `skewY();`.

A continuación se muestran ejemplos del comportamiento de un posible elemento al cual se le ha aplicado dicha transformación:


<style>
    .skew:first-of-type:hover
    {
        transform: skew(45deg);
    }
    .skew:nth-child(2):hover
    {
        transform: skew(-45deg);
    }
    .skew:nth-child(3):hover
    {
        transform: skew(45deg, 45deg);
    }
    .skew:nth-child(4):hover
    {
        transform: skewY(45deg);
    }
    .skew:nth-child(5):hover
    {
        transform: skewX(45deg);
    }
</style>

<div class="contenedor">
    <div class="cuadrado skew">skew(45deg)</div>
    <div class="cuadrado skew">skew(-45deg)</div>
    <div class="cuadrado skew">skew(45deg, 45deg)</div>
    <div class="cuadrado skew">skewY(45deg)</div>
    <div class="cuadrado skew">skewX(45deg)</div>
</div>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Punto de transformación
Hace referencia al punto que toman de referencia los elementos HTML para iniciar la animación con respecto a un punto imaginario para realizar un determinado movimiento (*como el punto de transformación de After Effects*).

Para hacer uso de él se debe usar la propiedad "`transform-origin`" en el elemento requerido, **NO** directamente en el evento que desencadena la animación como podría ser el caso de un `hover` o al declarar una animación, porque se vería raro. Ex:

```css
.elementoAnimado
{
    transition: .3s;
}

.elementoAnimado.conPunto
{
    /* transform-origin: X Y */
    transform-origin: top;
}

.elementoAnimado:hover
{
    transform: rotate(45deg);
}
```

<style>
    .elementoAnimado
    {
        transition: .3s;
    }

    .elementoAnimado.conPunto
    {
        /* transform-origin: X Y */
        transform-origin: top;
        position: relative;
    }

    .conPunto::before,
    .conPunto::after
    {
        content: "";
        display: block;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        top: -5px;
    }

    .conPunto::after
    {
        height: 20px;
        width: 20px;
        background-color: transparent;
        border: 1px solid red;
        top: -11px;
    }

    .elementoAnimado:hover
    {
        transform: rotate(45deg);
    }
</style>

<div class="contenedor">
    <div class="cuadrado elementoAnimado">Sin punto</div>
    <div class="cuadrado elementoAnimado conPunto">Con punto</div>
</div>

Nótese como el elemento que se le ha configurado el Punto de Transformación (el que contiene el punto rojo) rota diferente, puesto que su movimiento tiene en cuenta el Punto de Transformación situado en el medio de la parte superior del elemento.

Los valores predeterminados de "`transform-origin`" son X=50% y Y=50%, que hacen referencia al centro del elemento. Ex:


<style>
    .puntoCentro
    {
        position: relative;
    }

    .puntoCentro::before
    {
        content: "";
        display: inline-block;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .puntoCentro::after
    {
        content: "";
        display: inline-block;
        border-radius: 50%;
        height: 20px;
        width: 20px;
        border: 1px solid red;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
</style>

<div class="contenedor">
    <div class="cuadrado elementoAnimado puntoCentro"></div>
</div>

Sin embargo este punto puede cambiar tanto en porcentaje (%) para X y Y o a través del uso de sus valores predeterminados como son: `top`, `left`, `right`, `bottom`. o el uso de ambas combinadas. Ex:

```css
.elementoAnimado
{
    transform-origin: top left;
}
```

Gráficamente el punto estaría ubicado en la siguiente posición:


<style>
    .puntoModificado
    {
        position: relative;
        transform-origin: top left;
    }

    .puntoModificado::before
    {
        content: "";
        display: inline-block;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 1;
        left: -5px;
        top: -5px;
    }

    .puntoModificado::after
    {
        content: "";
        display: inline-block;
        border-radius: 50%;
        height: 20px;
        width: 20px;
        border: 1px solid red;
        position: absolute;
        z-index: 1;
        left: -11px;
        top: -11px;
    }
</style>

<div class="contenedor">
    <div class="cuadrado elementoAnimado puntoModificado"></div>
</div>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Animaciones
Son formas de animar elementos dentro de CSS que permiten englobar todas las propiedades animables para crear animaciones mucho más complejas.

Su sintaxis básica contiene lo siguiente:

```css
.elementoAnimado
{
    /* Nombre de Animación */
    animation-name: nombreAnimacion;

    /* Tiempo de Animación (s, ms) */
    animation-duration: .3ms;
}
```

Las animaciones pueden declararse al momento de cargar el elemento o cuando ocurre un cambio, Ex: durante un `hover`.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### ¿Cómo crear una animación?
Las animaciones se crean primeramente haciendo uso de la palabra reservada de CSS "`@keyframes`" seguidamente del nombre de la animación, donde dentro de ella se colocarán los estados que es donde irán las propiedades que se van a animar. Tal como la siguiente sintaxis:

```css
@keyframes nombreAnimacion
{
    /* Estado inicial */
    0%
    {
        /* Propiedades a animar */
        opacity: 0;
    }
    /* Estado final */
    100%
    {
        /* Propiedades a animar */
        opacity: 1;
    }
}
```
>**Nota:** Pueden haber tanto estados sean necesarios, siempre y cuando este en el intervalo de 0%-100%.

>**Nota2:** Si no se declara los estados de 0% o 100% se generarán automáticamente utilizando los valores establecidos para el elemento, es decir; los declarado en su respectiva regla CSS.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Pro tips:
En las animaciones que solo tienen 2 estados (0% y 100%) se puede usar las siguientes palabras reservadas en lugar del porcentaje, ex:

```css
@keyframes nombreAnimacion
{
    from /*0%*/
    {
        opacity: 0;
    }
    to /*100%*/
    {
        opacity: 1;
    }
}
```
Se debe tener en cuenta que es posible colocar valores en el centro, es decir; entre `from` y `to` de necesitarse, dado que `from` representa el 0% y `to` el 100%. Si se requiere otro estado (por ejemplo el 50%) se colocaría de la siguiente manera:

```css
@keyframes nombreAnimacion
{
    from
    {
        opacity: 0;
    }
    50%
    {
        opacity: .5;
    }
    to
    {
        opacity: 1;
    }
}
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

Se puede reducir el código de los keyframes e las animaciones en donde queramos usar los mismos valores con una "`,`" en lugar de repetir el código con un % diferente. Ex:

Sin reducir:
```css
@keyframes animado
{
    0%
    {
        opacity: 0;
    }
    40%
    {
        opacity: 1;
    }
    60%
    {
        opacity: 1;
    }
    100%
    {
        opacity: 0;
    }
}
```

Reducido:
```css
@keyframes animado
{
    0%, 100%
    {
        opacity: 0;
    }
    40%, 60%
    {
        opacity: 1;
    }
}
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### Propiedades aplicables a las animaciones

- #### Delay en las animaciones
    Es el tiempo que se esperará antes de que la animación se reproduzca. Puede expresarse en segundos (`s`) o milisegundos (`ms`). Su declaración es la siguiente:

    ```css
    .elementoAnimado
    {
        animation-delay: 1s;
    }
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- #### Iteración de las animaciones
    Se refiere al número de veces que la animación se ejecutará, generalmente se usa con su valor "`infinite`". Se expresa a través de números enteros positivos. Su declaración es la siguiente:

    ```css
    .elementoAnimado
    {
        animation-iteration-count: 2;
    }
    ```
<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- #### Aceleración de las animaciones
    Se refiere a la propiedad utilizada para alterar la curva de aceleración de la animación. (Tiene los mismos valores por defecto que las transiciones). Su declaración es la siguiente:

    ```css
    .elementoAnimado
    {
        animation-timing-function: ease;
    }
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- #### Sentido de la animación
    Se refiere a alterar la forma en que empieza la animación, es decir; si comienza en el estado de 0% o el de 100%. Su valor por defecto es "`normal`". Es útil a la hora de reutilizar la animación pero en sentido contrario.

    Se puede usar el valor "`alternate`" para indicar que sea lo opuesto al valor declarado.

    Su declaración es la siguiente:

    ```css
    .elementoAnimado
    {
        animation-direction: reverse;
    }
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- #### Estado final de la animación
    A través de la siguiente propiedad se indica el estado final del elemento animado luego que termina la animación.

    Por ejemplo: si un elemento tiene una animación con 2 estados, en el cual el primero (0%) su opacidad es de "1" y el último estado (100%) su opacidad es de "0" normalmente al terminar la animación el elemento seguirá teniendo la opacidad de 1 (aún cuando el último valor en la animación es de 0). Con esta propiedad configuramos esto.

    Su declaración es la siguiente:

    ```css
    .elementoAnimado
    {
        animation-fill-mode: [valor];
    }
    ```

    Donde `[valor]` podrá ser:

    - `forwards`: Indica que el elemento se quede con las propiedades que se le declara en el último estado de la animación.

    - `backwards`: Indica que el elemento se quede con las propiedades que se le declara en el primer estado de la animación.

    - `both`: Con este valor la animación seguirá las reglas de los dos valores anteriores pero en secuencia.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


- #### Estado general de la animación
    A través de la siguiente propiedad se puede configurar el estado general de la animación, es decir; si la animación está pausada o reproduciéndose. Su valor predeterminado es `running` que es igual a `play`.

    Su declaración es la siguiente:

    ```css
    .elementoAnimado
    {
        animation-play-state: paused;
    }
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

- #### Sintaxis abreviada de las Animaciones
    Las animaciones también tienen una sintaxis abreviada en la cual se puede establecer todas las propiedades anteriores pero en una sola declaración, ayudando así a la minificación del código. La cual es "`animation`" y se usa de la siguiente manera:

    ```css
    .elementoAnimado
    {
        animation: crazy 4s ease-in .5s 12 backwards;
    }

    /*
        Donde:

        crazy => corresponde al nombre de la animación (animation-name)

        4s => corresponde a la duración de la animación (animation-duration)

        ease-in => corresponde a la aceleración de la animación (animation-timing-function)

        5s => corresponde al delay de la animación (animation-delay)

        12 => corresponde a la cantidad de veces que la animación se repetirá (animation-iteration-count)

        backwards => corresponde al estado que tendrá el elementoAnimado después de terminar la animación (animation-fill-mode)
    */
    ```

    >**Nota:** Se pueden incluir todos los valores anteriormente descritos o solo los valores requeridos a utilizar por la animación.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Animaciones múltiples
Es posible incluir varias animaciones a un solo elemento. Y es para eso que existen las sintaxis especificas, para incluir varias animaciones.  Se hace la siguiente manera:

```css
.elementoAnimado
{
    animation-name: animacionUno, animacionDos;
    animation-duration: 1s, 2s;
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite;
}
```

Donde:

- La animación "animacionUno" tiene una duración de 1s, una curva de aceleración lineal y se repetirá infinitas veces.

- La animación "animacionDos" tiene una duración de 2s, una curva de aceleración de tipo `ease-in-out` y también se repetirá infinitas veces.

De esta misma manera se puede configurar todas las propiedades de las animaciones para hacer algo más personalizado y siempre teniendo en cuenta:

- Para separar los valores de animaciones se debe usar "`,`".

- Si no se declara dos valores (como es el caso de la `animation-iteration-count`) todas las animaciones tomarán ese único valor declarado en dicha propiedad.


<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


## La Curva de Bezier
Es una función de CSS que permite establecer la forma en la que acelera una animación. Su sintaxis es la siguiente:

```css
.elementoAnimado
{
    animation-timing-function: cubic-bezier([ix], [iy], [fx], [fy])
}
```

Donde:

- `[ix]`, `[iy]` (los primeros dos valores): representan las coordenadas del punto que va a hacer fuerza al principio tanto en X y Y.

- `[fx]`, `[fy]` (los dos últimos valores): representan las coordenadas que hacen fuerza en los puntos finales tanto en X y Y.

Los valores por defecto de CSS en cualquier propiedad que modifique la aceleración de la animación (como podría ser `animation-timing-function` para las animaciones y `transition-timing-function` para las transiciones) son representados en la Curva de Bezier de la siguiente manera:

- `ease` --> `cubic-bezier(25,1,25,1)`
- `linear` --> `cubic-bezier(0,0,1,1)`
- `ease-in` --> `cubic-bezier(42,0,1,1)`
- `ease-out` --> `cubic-bezier(0,0,58,1)`
- `ease-in-out` --> `cubic-bezier(42,0,58,1)`

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


## Optimizar lo que se renderiza con `will-change`
Al declarar una animación el navegador no sabe qué propiedades serán modificadas con dicha animación  antes de que la ejecute. Es por eso que al ejecutar una animación el navegador "dibuja" o "repinta" toda la zona afectada para aplicar los cambios que se han declarado en las animaciones.

Sin embargo usando la propiedad "`will-change`" le podemos *avisar* al navegador cuál será la propiedad que cambiará para que no "dibuje" o *renderize* toda la zona afectada nuevamente, optimizando así recursos de memoria y que la animación sea más fluida.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### ¿Cómo se usa?
Para usarlo, en el elemento que espera ser animado hay que usar la propiedad `will-change` y agregarle como `[valor]` la propiedad que va a ser animada. Ex:

```css
.elementoAnimado
{
    will-change: transform;
}
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


### ¿Cómo saber si mi optimización tiene resultado?
Google Chrome a través de sus *Developers Tools*, tiene un apartado donde podemos afectas a las animaciones o el renderizado.

La forma de encontrarlo es ir al inspector de elementos > customize and controls dev > animation o rendering (dependiendo del caso).

En el caso del *rendering* para ver los *repintados* activamos la propiedad "paint flashing" y provocamos que la animación se active bien sea con un `hover` o activándola. Notaremos que se repinta cuando se tiñe de verde nuestro elemento o área afectada.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


## Animaciones y JavaScript
En ocasiones se requerirá que una animación termine o empiece estando vinculada con otra o esperando un cambio previamente de otra animación. Es posible detectar dichos estados (tanto el inicio de una animación como el final) con eventos de JavaScript. Se hace de la siguiente manera:

```js
// Previamente capturado el elemento que esta siendo animado
const elementoAnimado = document.querySelector(".js-elementoAnimado");

// Escuchador de eventos para cuando inicie la animacion
elementoAnimado.addEventListener("animationstart", funcion);

// Escuchador de eventos para cuando finalice la animacion
elementoAnimado.addEventListener("animationend", funcion);

// Escuchador de eventos que detecta las iteraciones de la animacion
elementoAnimado.addEventListener("animationiteration", funcion);

// Aplicar una nueva animacion con JavaScript
elementoAnimado.style.animationName = "nuevaAnimacionUno, nuevaAnimacionDos";

// Aplicar una nueva duracion a una animacion con JavaScript
elementoAnimado.style.animationDuration = "3s";
```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Notas
- Si hay varias animaciones el evento se disparará en cuando termine la más corta.

- Para capturar el nombre de una animación se usa "`animationName`".

- Es importante recalcar que a través del uso de `elementoAnimado.style` bien sea para agregar animaciones o estilos generales, los mismos serán aplicados como *estilos en línea* es decir, serán aplicados dentro de la misma etiqueta HTML del elemento lo que significa que por especificidad sobrescribirán cualquier estilo anterior y harán ver el código más difícil de lo que en realidad es.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


## Animaciones con `element.animate`
`element.animate` es una API relativamente nueva que permite aplicar animaciones a un elemento a través de JavaScript.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Importante
- Al ser un feature nuevo el soporte al (01/2020) **NO ES TOTAL NINGÚN NAVEGADOR**, ni siquiera en Chrome. Solo algunos tienen soporte parcial.

- Aun no es posible establecer a gusto los estados/keyframes (0%,10%,12%, etc) a través de esta API.

    Los keyframes resultantes son distribuidos (en duración) equitativamente en el tiempo y si se llegará a necesitar personalizarlos con esta API lo que se recomienda hacer es crear varias animaciones y concatenarlas según se desee.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### ¿Cómo usar `element.animate`?
Se usa a través de la siguiente sintaxis:

```js
element.animate([{keyframeUno}, {keyframeDos}], {opciones})
```

Si se le aplican datos reales quería de la siguiente manera:

```js
elementoAnimado.animate(
    [
        // keyframe 0%
        {
            transform: "translateY(0)"
        },
        // keyframe 100%
        {
            transform: "translateY(100px)"
        }
    ],
    {
        // opciones configurables de las animaciones
        duration: 1000, // animation-duration (ms)
        delay: 500, // animation-delay (ms)
        direction: "alternate", //animation-direction
        easing: "linear", // animation-timing-function
        iterations: Infinity, // animation-iterations-count
        fill: "forwards", // animation-fill-mode

        // Nueva opciones de la API
        // Regular el keyframe en el cual queremos empezar (0=0% y 1=100%)
        iterationStart: .5,

        // Tiempo en ms que el elemento esperará antes de terminar la animación
        endDelay: 500
    }
)
```
>**Nota:** Nótese que para configurar que la animación se repitiera infinitas veces se está utilizando la palabra reservada de JavaScript `Infinity` y no se está usando un string con dicha palabra.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Algunos métodos de `element.animate`
En caso de necesitarse pausar, reproducir, parar, aumentar o disminuir la velocidad de la animación existen métodos de la propiedad `element.animate` que permiten realizar dichas funcionabilidades:

#### Pro tips
Es importante recalcar que para acceder a estos métodos cómodamente desde otra función, la animación debe ser declarada dentro de una *variable* de JavaScript Ex:

```js
const animacion = elementoAnimado.animate([{keyframeUno}, {keyframeDos}], {opciones});

// Reproducir la animacion
animacion.play();

// Pausar la animacion
animacion.pause();

// Parar/cancelar la animacion
animacion.cancel();

// Aumentar o disminuir la velocidad de la animacion (valor por defecto = 1)
animation.playbackRate= (suma o resta)

// Cambiar la direccion de la animacion a reversa
animacion.reverse();

```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


#### Importante:

Si no se usa el método para ir en reversa desde la declaración de la animación y se aplica dicho método en algún momento la animación irá en sentido contraria al igual que la duración hasta llegar a 0 segundos. Es decir:

- Se declara una animación con `element.animate` **que se reproduzca infinitas veces** y que se encuentre pausada.
- Se reproduce la animación con su respectivo método.
- Se espera 10 segundos.
- Al estar en el 10 segundo se aplica el método para ir en reversa.
- La animación irá en reversa el mismo tiempo que duro hasta que se uso el método de "`reverse`", es decir: **ira por 10 segundos** en reversa y luego se detendrá pero **NO IRÁ EN SENTIDO CONTRARIO INFINITAMENTE** como ha de esperarse.

Esto solo se cumplirá si no se declara la animación en *reversa* desde un principio.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## De After Effects a CSS
Existen dos *plugins* que permiten exportar las animaciones que son realizadas en After Effects para llevarlas a CSS. Ellos son:

### Sheetah
Es un plugin para After Effects que permite exportar las animaciones realizadas en sprites sheets que podemos usar para simular animaciones con CSS.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Instalación
Una vez <a href="./plugins/sheetah_v2.4.2.zip">descargado</a> se deben de copiar los archivos dentro de la siguiente ruta:

    Program Files\Adobe\Adobe After Effects CC 2017\Support Files\Scripts\ScriptUI Panels

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Uso
Resumen del <a href="https://youtu.be/pGW9JRfzO3A" title="After Effects Spritesheet para Unity by Pili Gallardo (06:41)">tutorial</a>: Una vez en nuestra composición de After Effects, nos vamos a:

    vetana/sheetah.jsx

Seleccionamos el formato y elegimos la opción de "save spritesheet".

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Pro Tip
Para exportarlo en sentido horizontal debemos marcar la casilla "distrib" y en las dimensiones, colocamos en las columnas el ancho de la composición * cant. de frames y en rows lo dejamos en "auto".

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Declarando las animaciones en CSS

- Para las animaciones cuyos sprites (secuencia de imágenes) este en **horizontal** y se requiera que se reproduzca **UNA SOLA VEZ** debemos recordar lo siguiente:

    - Cuando contamos los `steps` para el `timing-function` siempre debemos omitir el primer fotograma. Quedando entonces una especie de fórmula que sería:

            steps = cantidad de fotogramas - 1

        Ejemplo: Si nuestra imagen tiene 10 fotogramas, nuestro timing sería de: `steps(9);`.

    - En los keyframes de la animación podemos usar `left` o `right` para movernos en lugar de las dimensiones
        >**Nota:** No olvidar añadirle el `fill-mode: forwards`.

- Para las animaciones cuyos sprites (secuencia de imágenes) este en **horizontal** y se requiera que se reproduzca **de forma INFINITA** debemos recordar lo siguiente:

    - Cuando contamos los `steps` para el `timing-function` **NO SE OMITE** el primer fotograma. Ejemplo: Si nuestra imagen tiene 10 fotogramas, nuestro `timing` será de `steps(10)`.

    - En los keyframes de la animación debemos de usar la dimensión de la imagen en lugar de `left` o `right` Ejemplo: Si la imagen mide 2900px de ancho en el último keyframe colocamos: `background-position: -2900px 0;`

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Algunos ejemplos

- <a href="./ejercicios/cardAnimada/">Card animada</a>
- <a href="./ejercicios/spritesSheet/">Demostración de los tipos de animaciones con SpriteSheet</a>
- <a href="./ejercicios/likeTwitter/">Like de Twitter</a>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

### Bodymoving
Es un plugin para After Effects que permite exportar las animaciones realizadas en formato SVG que para insertarlas en nuestro código. (OJO: NO TODAS LAS PROPIEDADES USADAS EN AFTER EFFECS SON SOPORTADAS). Revisar información en <a href="https://airbnb.design/lottie/" target="_blank">Lottie</a>

#### Instalación-b
Una vez <a href="./plugins/bodymovin_v5.6.6.zip">descargado</a> el plugin, se deben seguir los siguientes pasos:

  - Instalar primero el <a href="https://aescripts.com/learn/zxp-installer/">aescripts + aeplugins zxp installer (setup)"</a>
  - Abrir el "ZXP Installer"
  - Arrastrar el Plugin "bodymovin" al "ZXP Installer"
  - Hacer clic en "OK"
  - Ir a AE > Editar > Preferencias > General > Permitir que las secuencias de comandos puedan escribir y acceder a la red
  - Aceptar

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Uso-b
Resumen del <a href="https://youtu.be/EM2vUFgr28s" title="ANIMACIONES SVG para WordPress y ELEMENTOR con After Effects - Tutorial Efectos Visuales #4 by La máquina del Branding (21:22)">tutorial</a>:

  - Comprobamos su instalación en Adobe After Effects a través de ventana > extensiones > bodymovin.
  - Seleccionamos la composición que queremos exportar.
  - Clic en render.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

#### Declarando las animaciones en CSS-b

- Tomamos el archivo JSON que generó el plugin de After Effects y lo colocamos en nuestro proyecto.
- Asignamos un contenedor para nuestra animación y le asignamos una clase o ID para identificarlo por JavaScript.
- Añadimos el siguiente `<script>` a nuestro proyecto que servirá de "reproductor" para que la animación se reproduzca. <a href="https://cdnjs.com/libraries/bodymovin">script aquí</a> (se coloca antes de cerrar el `body`).
- Creamos otro `<script>` donde estableceremos la configuración de la animación:
    ```js
    var animation = bodymovin.loadAnimation({
        //establecemos el contenedor donde se renderizara
        container: document.getElementById("ELEMENTO"),
        //Formato de renderizado
        renderer: "svg",
        //Si es loop
        loop: true,
        //Si comienza en autoplay
        autoplay: true,
        //la ruta de dicha animacion (la ruta del archivo JSON que genere con AE)
        path: "animation/animacion.json"
    })
    ```

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


#### Algunos ejemplos-b
Tuve problemas al intentar instalar este plugin con el .NetFramework que no me permitía instalar el ZXP Installer correctamente lo que provocaba que el plugins no se instalará correctamente y funcionara, por ende no pude probarlo y crear ejemplos para mostrar.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>


## Anotaciones generales

- Para ocultar un elemento y a la vez sea cargado sin necesidad de usar `display: none;` se puede usar un `opacity: 0;` junto con un `visibility: hidden;`.

- Para hacer animaciones con un pseudoelemento este debe tener un `display` **DIFERENTE** de `inline`.

- Es buena práctica en CSS usar doble dos puntos (::) para los pseudoelementos `before` y `after` y solo dos puntos (:) para las pseudoclases `hover`, `active`, etc.

- Se puede colocar el valor de un atributo HTML como contenido de una etiqueta mediante CSS. Esto es posible mediante la función de CSS `attr([atributo])`.

    El atributo que generalmente se usa es el de "`data-count`" en el cual mediante JavaScript le podemos asignar un valor a través de:
    ```html
    <div class="elemento"></div>
    ```
    ```css
    .elemento::before
    {
        content: attr(data-count);
    }
    ```
    ```js
    const = elemento = document.querySelector(".elemento");

    //obtener el valor
    elemento.getAttribute("data-count");

    //establecer un atributo
    elemento.setAttribute("data-count" operacion o nuevo valor)
    ```

    Puede darse el caso de que se necesite convertir el valor del atributo de string a número para usarlo en JavaScript, esto se hace usando la siguiente función:

    ```js
    Number([variable/valor]);
    ```

    También puede darse el caso que no se pueda convertir a número porque el elemento es indefinido. Esto se soluciona con la siguiente declaración:

    ```js
    Number(elemento.getAttribute("data-count")) || 0;
    ```

    En dicha declaración estamos convirtiendo a número el valor del atributo "`data-count`" el cual a su vez si se encuentra vacio o es indefinido se le asigna el valor de 0 (cero).

- Para el control de versiones con React, lo iniciamos en la carpeta raíz del proyecto y omitimos con `.gitignore` la carpeta "`node_modules`".

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Contadores CSS
Son contadores de elementos (similares a los que traen las listas `ol`). Se utilizan de la siguiente manera:

Primero declaramos al elemento que va a resetear cada contador. Es decir, en este caso cada `ol` tendrá un contador reiniciado para sí mismo (no continuará donde quedó el anterior):

```css
.ol-contador-css
{
    /* quitamos el contador por defecto para que se vea el nuestro */
    list-style: none;

    counter-reset: nombreDelContador;
}
```

Luego sumamos +1 en cada elemento para que la lista tenga un orden:

```css
.ol-contador-css li::before
{
    counter-increment: nombreDelContador;
    content: counter(nombreDelContador)". ";
}
```
>**Nota:** Usando el `before` o `after` podemos ubicar el contador adelante o detrás de el texto.

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>

## Links de Interés



- <a href="https://www.w3schools.com/css/css3_animations.asp" target="_blank">CSS Animations by W3Schools</a>

- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function" target="_blank">transition-timing-function by MDN</a>

- <a href="https://css-tricks.com/almanac/properties/a/animation/" target="_blank">Animation by CSS Tricks</a>

- <a href="https://css-tricks.com/almanac/properties/t/transform/" target="_blank">Transform by CSS Tricks</a>

- <a href="https://cssanimation.rocks/es/transition-vs-animation/" target="_blank">Transiciones vs. Animaciones</a>

- <a href="https://www.youtube.com/watch?v=AmtuzkiB2Yo&t=755s" target="_blank">Tutorial animaciones</a>

- <a href="https://cssreference.io/transitions/" target="_blank">Transitions by CSS Reference</a>

- <a href="https://css-playground.com/view/38/css-transforms" target="_blank">CSS Transform</a>

- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale3d" target="_blank">scale3d() by MDN</a>

- <a href="https://developer.mozilla.org/es/docs/Web/CSS/animation" target="_blank">Animations by MDN</a>

- <a href="https://alligator.io/css/animation-shorthand/" target="_blank">CSS Animation Shorthand Property</a>

- <a href="https://cubic-bezier.com/" target="_blank">Creación y visualización de funciones de Cubic Bezier</a>

- <a href="https://developers.google.com/web/fundamentals/design-and-ux/animations/animations-and-performance?hl=es" target="_blank">Animations and Performance by Google</a>

- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties" target="_blank">Propiedades animables by MDN</a>

- <a href="https://lottiefiles.com/" target="_blank">Lottie Download</a>

- <a href="https://airbnb.design/lottie/" target="_blank">Lottie</a>

- <a href="https://itnext.io/creating-css-animations-using-sprite-sheet-47e2b7a3793c" target="_blank">Creating CSS Animations using sprite sheet</a>

<div align="right">
    <small>
        <a href="#tabla-de-contenido">
            🡡 volver al inicio
        </a>
    </small>
</div>