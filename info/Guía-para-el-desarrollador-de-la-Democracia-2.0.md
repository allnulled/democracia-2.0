# Guía para el desarrollador de la Democracia 2.0

A continuación se ofrece una explicación más detallada del funcionamiento de la aplicación, para usuarios avanzados en programación.

## Índice

1. [La ejecución](#la-ejecución)
2. [El ciclo de vida](#el-ciclo-de-vida)
3. [La carga de la API de Node.js](#la-carga-de-la-api-de-node.js)
  3.1. [El algoritmo de carga de la API de Node.js](#el-algoritmo-de-carga-de-la-api-de-node.js)


## La ejecución

En la [**ejecución**](#instalación-y-ejecución) se va a llamar al [`src/iniciar.js`](https://github.com/allnulled/democracia-2.0/blob/main/src/iniciar.js) del [**servidor de despliegue**](#).

A partir de ahí, la información del [**esquema de datos** en `src/autoapi/03.datos/03.esquema/arquitectura.calo-db.json`](https://github.com/allnulled/democracia-2.0/blob/main/src/autoapi/03.datos/03.esquema/arquitectura.calo-db.json) puede ser utilizada en cualquier momento.

## El ciclo de vida

El programa se inicia al ejecutarse, llamando a [`src/iniciar.js`](https://github.com/allnulled/democracia-2.0/blob/main/src/iniciar.js) como se decía. Pues éste, a su vez, cargará la **API de Democracia 2.0 para Node.js** del fichero [`src/democracia.js`](https://github.com/allnulled/democracia-2.0/blob/main/src/democracia.js), que puede ser importada para otras funciones, sin necesidad de desplegar el servidor.

En [`src/democracia.js`](https://github.com/allnulled/democracia-2.0/blob/main/src/democracia.js) lo único que se hace es importar la función de [`src/autoapi/01.utilidades/importar_directorio_recursivamente.js`](https://github.com/allnulled/democracia-2.0/blob/main/src/autoapi/01.utilidades/importar_directorio_recursivamente.js) y llamarse con el directorio [`src/autoapi`](https://github.com/allnulled/democracia-2.0/tree/main/src/autoapi) como parámetro único. Dado que esta función será la responsable de cargar toda la **API de Democracia 2.0 para Node.js**, se explica más en profundidad en la sección de [La carga de la API de Node.js](#la-carga-de-la-api-de-node.js).

Y aquí, se delega la carga de la **API de Democracia 2.0 para Node.js** a un único algoritmo, definido en unas 60 líneas. Esta poderosa función permite cargar una serie de tipos de fichero que importará de forma diferente `*.factoria.js`

Después de esto, [`src/iniciar.js`](https://github.com/allnulled/democracia-2.0/blob/main/src/iniciar.js) continúa la ejecución llamando a la función `this.servidor.instancia.iniciar()` que se encuentra en el fichero [`src/autoapi/05.servidor/instancia.factoria.js`](#).

## La carga de la API de Node.js

La carga de la **API de Democracia 2.0 para Node.js** se produce aplicando el algoritmo de [`src/autoapi/01.utilidades/importar_directorio_recursivamente.js`](https://github.com/allnulled/democracia-2.0/blob/main/src/autoapi/01.utilidades/importar_directorio_recursivamente.js) sobre el directorio [`src/autoapi`](https://github.com/allnulled/democracia-2.0/blob/main/src/autoapi).

### El algoritmo de carga de la API de Node.js

Este algoritmo recursivo tiene la capacidad de construir un objeto javascript recursivamente basándose en el árbol de ficheros y carpetas al cual apunte su parámetro único. Esto significa que la misma estructura de ficheros y carpetas nos está explicando la estructuración de la **API de Democracia 2.0 para Node.js**, que encontraremos disponible en cualquier función mediante el `this` propio. Así, estamos diciendo que el `this` de la gran mayoría de las funciones que están definidas bajo `src/autoapi` es un objeto que tiene la misma estructura que los ficheros y carpetas bajo el directorio `src/autoapi`. O que `this` = `src/autoapi` y vivecersa.

En el algoritmo, los nombres de las carpetas permiten un número delante, para indicar el orden de carga de los directorios. Así, `src/autoapi/00.dependencias` nos dice que `this.dependencias` se va a cargar antes que `src/autoapi/01.utilidades` (o que `this.utilidades`, vaya).

En el algoritmo, los nombres de los ficheros permiten tanto un número delante, como un tipo de fichero detrás. Los tipos de fichero indican al algoritmo cómo debe importarse ese fichero. Así, pues, se definen estos tipos de fichero en el algoritmo:

  - `*.factoria.js`. Esta fórmula importará el módulo y lo llamará como una *función factoría*, y asignará el producto.
  - `*.clase.js`. Esta fórmula sería el equivalente a un `require` normal, lo único que se entiende que se proporcionará una clase directamente desde el módulo.
  - `*.prometedor.js`. Esta fórmula importará el módulo y lo llamará como una *función factoria*, y al producto le hará un `await`.
  - `*.promesa.js`. Esta fórmula importará el módulo normal, y al producto le hará un `await`.
  - `*.estatico.js`. Esta fórmula sería el equivalente a un `require` normal.
