La notación BEM (Bloque, Elemento, Modificador) es una metodología para estructurar y nombrar clases en CSS de manera clara y escalable. Fue desarrollada por el equipo de Yandex, una empresa rusa de tecnología, con el objetivo de mejorar la mantenibilidad del código en proyectos grandes. BEM sigue un conjunto de reglas que establecen una sintaxis específica para nombrar clases, lo que facilita la identificación del propósito de cada estilo y evita conflictos entre ellos.

BEM no requiere la instalación de ninguna dependencia, ya que simplemente es una convención de nombres. Su estructura se basa en tres niveles:

Bloque (block): Representa un componente independiente que tiene significado por sí mismo, como un botón (.btn) o una tarjeta (.card).
Elemento (element): Es una parte de un bloque que no tiene sentido por sí solo y depende de él, como el icono dentro de un botón (.btn__icon) o el título dentro de una tarjeta (.card__title).
Modificador (modifier): Define una variante de un bloque o elemento, como un botón primario (.btn--primary) o una tarjeta destacada (.card--featured).
La sintaxis de BEM sigue este esquema:

bloque__elemento--modificador

Por ejemplo, una estructura básica en HTML vería así:

<button class="btn btn--primary">
  <span class="btn__icon">🔥</span>
  <span class="btn__text">Enviar</span>
</button>

y el CSS correspondiente:

.btn {
  padding: 10px 20px;
  background-color: #ccc;
  border: none;
  cursor: pointer;
}

.btn__icon {
  margin-right: 5px;
}

.btn--primary {
  background-color: #007BFF;
  color: #fff;
}

BEM es especialmente útil cuando los proyectos crecen, ya que evita la colisión de estilos y facilita la reutilización de componentes. Una vez explicada la base de la metodología BEM, veamos un ejemplo práctico.

Aplicar metodología BEM en un ejemplo real
Para casos un poco más complejos, es posible aplicar BEM a componentes como un menú de navegación. Esto permite desglosar cada parte del menú, desde la lista hasta los enlaces individuales, incluyendo modificadores para estados especiales.

Código HTML:

<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item nav__item--active">
      <a class="nav__link" href="#">Inicio</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="#">Servicios</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="#">Contacto</a>
    </li>
  </ul>
</nav>

Código CSS:

.nav {
  background-color: #f8f8f8;
  padding: 15px;
}

.nav__list {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav__item {
  position: relative;
}

.nav__item--active .nav__link {
  font-weight: bold;
}

.nav__link {
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}

.nav__link:hover {
  color: #007BFF;
}

En este caso:

Bloque: nav representa el contenedor principal del menú.
Elementos: nav__list, nav__item y nav__link definen la estructura interna.
Modificador: nav__item--active se utiliza para resaltar el elemento activo del menú.
Este ejemplo muestra cómo BEM permite descomponer componentes más complejos en partes identificables y fáciles de modificar.

Buenas prácticas para usar BEM
A continuación podemos ver algunas de las buenas practicas a seguir para que el código CSS sea limpio y fácil de mantener en proyectos a largo plazo.

1. Evita la redundancia en los nombres de clases
No es necesario incluir el nombre del bloque en el modificador si ya es evidente dentro del contexto. Por ejemplo:

Correcto:

.card--featured { /* Se entiende que es una variante de .card */ }

Incorrecto:

.card__card--featured { /* "card__card" es redundante */ }

2. No uses modificadores sin bloques o elementos
Los modificadores (--) siempre deben acompañar un bloque o un elemento, nunca deben usarse solos.

Correcto:

<button class="btn btn--large">Grande</button>

Incorrecto:

<button class="--large">Grande</button> <!-- No tiene un bloque asociado -->

3. Evita anidaciones profundas en CSS
Aunque BEM ayuda a organizar el CSS, abusar de la anidación puede dificultar el mantenimiento.

Correcto:

.card__title { font-size: 20px; }

Incorrecto:

.card .card__header .card__title { font-size: 20px; } /* Demasiada profundidad */

4. Usa nombres de clases descriptivos
Elige nombres que expliquen la función del elemento, no su apariencia.

Correcto:

.nav__item--active { font-weight: bold; }

Incorrecto:

.nav__item--red { color: red; } /* "red" describe la apariencia, no la función */

5. No abuses de los modificadores
Si un elemento necesita muchos modificadores, probablemente el diseño necesita una mejor estructura.

Correcto:

<button class="btn btn--primary">Enviar</button>

Incorrecto:

<button class="btn btn--primary btn--large btn--rounded btn--bold">Enviar</button>

(Demasiados modificadores pueden indicar que se necesita un nuevo bloque o una mejor organización).