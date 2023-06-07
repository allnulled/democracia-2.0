# Guía para el desarrollador de la Democracia 2.0

A continuación se ofrece una explicación más detallada del funcionamiento de la aplicación, para usuarios avanzados en programación.

## Índice

1. [La ejecución](#la-ejecución)
2. [El ciclo de vida](#el-ciclo-de-vida)
3. [La carga de la API de Node.js](#la-carga-de-la-api-de-node.js)
  3.1. [El algoritmo de carga de la API de Node.js](#el-algoritmo-de-carga-de-la-api-de-node.js)
  3.2. [Ventajas del algoritmo de carga](#ventajas-del-algoritmo-de-carga)
  3.3. [Puntos importantes de la carga de la API de Node.js](#puntos-importantes-de-la-carga-de-la-api-de-node.js)
    - 3.3.1. [El fichero de configuraciones](#el-fichero-de-configuraciones)
    - 3.3.2. [El fichero de esquema de la base de datos](#el-fichero-de-esquema-de-la-base-de-datos)
    - 3.3.3. [El fichero de rutas](#el-fichero-de-rutas)
    - 3.3.4. [La carpeta de fiheros estáticos](#la-carpeta-de-ficheros-estáticos)
    - 3.3.5. [El fichero de la base de datos local](#el-fichero-de-la-base-de-datos-local)
    - 3.3.6. [El fichero del proceso del sistema](#el-fichero-del-proceso-del-sistema)


## La ejecución

En la [**ejecución**](#instalación-y-ejecución) se va a llamar al [`src/iniciar.js`](https://github.com/allnulled/democracia-2.0/blob/main/src/iniciar.js) del [**servidor de despliegue**](#).

A partir de ahí, la información del [**esquema de datos** en `src/autoapi/XX.datos/03.esquema/arquitectura.calo-db.json`](https://github.com/allnulled/democracia-2.0/blob/main/src/autoapi/XX.datos/03.esquema/arquitectura.calo-db.json) puede ser utilizada en cualquier momento.

## El ciclo de vida

El programa se inicia al ejecutarse, llamando a [`src/iniciar.js`](https://github.com/allnulled/democracia-2.0/blob/main/src/iniciar.js) como se decía. Pues éste, a su vez, cargará la **API de Democracia 2.0 para Node.js** del fichero [`src/democracia.js`](https://github.com/allnulled/democracia-2.0/blob/main/src/democracia.js), que puede ser importada para otras funciones, sin necesidad de desplegar el servidor.

En [`src/democracia.js`](https://github.com/allnulled/democracia-2.0/blob/main/src/democracia.js) lo único que se hace es importar la función de [`src/autoapi/XX.utilidades/importar_directorio_recursivamente.js`](https://github.com/allnulled/democracia-2.0/blob/main/src/autoapi/XX.utilidades/importar_directorio_recursivamente.js) y llamarse con el directorio [`src/autoapi`](https://github.com/allnulled/democracia-2.0/tree/main/src/autoapi) como parámetro único. Dado que esta función será la responsable de cargar toda la **API de Democracia 2.0 para Node.js**, se explica más en profundidad en la sección de [La carga de la API de Node.js](#la-carga-de-la-api-de-node.js).

Y aquí, se delega la carga de la **API de Democracia 2.0 para Node.js** a un único algoritmo, definido en unas 60 líneas. Esta poderosa función permite cargar una serie de tipos de fichero que importará de forma diferente `*.factoria.js`

Después de esto, [`src/iniciar.js`](https://github.com/allnulled/democracia-2.0/blob/main/src/iniciar.js) continúa la ejecución llamando a la función `this.servidor.instancia.iniciar()` que se encuentra en el fichero [`src/autoapi/XX.servidor/instancia.factoria.js`](#).

## La carga de la API de Node.js

La carga de la **API de Democracia 2.0 para Node.js** se produce aplicando el algoritmo de [`src/autoapi/XX.utilidades/importar_directorio_recursivamente.js`](https://github.com/allnulled/democracia-2.0/blob/main/src/autoapi/XX.utilidades/importar_directorio_recursivamente.js) sobre el directorio [`src/autoapi`](https://github.com/allnulled/democracia-2.0/blob/main/src/autoapi).

### El algoritmo de carga de la API de Node.js

Este algoritmo recursivo tiene la capacidad de construir un objeto javascript recursivamente basándose en el árbol de ficheros y carpetas al cual apunte su parámetro único. Esto significa que la misma estructura de ficheros y carpetas nos está explicando la estructuración de la **API de Democracia 2.0 para Node.js**, que encontraremos disponible en cualquier función mediante el `this` propio. Así, estamos diciendo que el `this` de la gran mayoría de las funciones que están definidas bajo `src/autoapi` es un objeto que tiene la misma estructura que los ficheros y carpetas bajo el directorio `src/autoapi`. O que `this` = `src/autoapi` y vivecersa.

En el algoritmo, los nombres de las carpetas permiten un número delante, para indicar el orden de carga de los directorios. Así, `src/autoapi/XX.dependencias` nos dice que `this.dependencias` se va a cargar antes que `src/autoapi/XX.utilidades` (o que `this.utilidades`, vaya).

En el algoritmo, los nombres de los ficheros permiten tanto un número delante, como un tipo de fichero detrás. Los tipos de fichero indican al algoritmo cómo debe importarse ese fichero. Así, pues, se definen estos tipos de fichero en el algoritmo:

  - `*.factoria.js`. Esta fórmula importará el módulo y lo llamará como una *función factoría*, y asignará el producto.
  - `*.clase.js`. Esta fórmula sería el equivalente a un `require` normal, lo único que se entiende que se proporcionará una clase directamente desde el módulo.
  - `*.prometedor.js`. Esta fórmula importará el módulo y lo llamará como una *función factoria*, y al producto le hará un `await`.
  - `*.promesa.js`. Esta fórmula importará el módulo normal, y al producto le hará un `await`.
  - `*.estatico.js`. Esta fórmula sería el equivalente a un `require` normal.

### Ventajas del algoritmo de carga

Las grandes ventajas de este algoritmo son:

  - **La estructura de directorios y ficheros refleja/explica la API.** Solo con ver la estructura de carpetas y ficheros, puedes ver cómo está hecha la API. Esto hace que puedas entender rápidamente cómo está hecha la API, qué orden de carga sigue, y en qué consiste cada punto de ésta sin necesidad de seguir con un debugador o cosas así el recorrido de la carga. Así, encontrar las cosas también será más sencillo.
  - **Intervenir en la API es rápido.** El algoritmo va a cargar siempre todo de la misma forma. Para extender la API, pues, solo tendrás que crear un nuevo fichero. Así, escalar el desarrollo se vuelve fácil.

Principalmente, estas son las grandes ventajas: **claridad y transparencia** por un lado, y **accesibilidad y escalabilidad** por el otro.


### Puntos importantes de la carga de la API de Node.js

Generalmente, la carga de la **API de Democracia 2.0 para Node.js** va a cargar ficheros JavaScript que compondrán objetos o funciones de la API. Normalmente, funciones técnicas y objetos agrupatorios de éstas. En éstos, hay algunos puntos que interesa tener claros, para poder modificar rápidamente y así personalizar el desarrollo.

#### El fichero de configuraciones

Este está en `src/autoapi/XX.configuraciones/configuraciones.json`. No obstante, se carga por su vecino `instancia.factoria.js`, dado que los ficheros `json` son ignorados por el algoritmo.

En este fichero `json` puedes encontrar las configuraciones globales de la aplicación. En otros proyectos, se usaría un fichero `.env`, típicamente. En este caso, no, porque los ficheros `json` permiten cambiar estos datos fácilmente desde programa.

Las configuraciones globales, aquí, especifican cosas como:

 - `APLICACION_ID`: el identificador de la aplicación. Este texto será usado en todas las respuestas `json` de peticiones al servidor de la aplicación de `express`.
 - `APLICACION_PROTOCOLO`: esta configuración permite servir la aplicación mediante `https` en lugar de `http`, y así encriptar la información que viaja por internet hasta el usuario.
 - `APLICACION_PUERTO`: esta configuración permite cambiar el puerto, que por defecto es el `10100`.
 - `BASE_DE_DATOS_TIPO`: esta configuración te permite especificar, en caso de ser `local`, que use `sqlite3` y un fichero local como base de datos, o `remota` para que use `mysql2` y un host, puerto y credenciales para el servidor `mysql` correspondiente.

Puede usarse para ampliar las configuraciones del proyecto y así personalizarlo desde estos parámetros globales.

> **Esto es importante:**: *el programa puede ser seguro y puede mejorarse, pero si alguien ajeno consigue ejecutar comandos contra la base de datos (local o remota) directamente, por vía de cualquier proceso del sistema, se salta toda la seguridad que pueda haber en el servidor.*

#### El fichero de esquema de la base de datos

Otro fichero importante es `src/autoapi/XX.datos/XX.esquema/arquitectura.calo-db.json`, también cargado por su vecino `instancia.factoria.js`.

En este fichero, se especifica la estructura de datos que va a seguir la base de datos SQL (sea `sqlite` o `mysql`), y también datos que van a interesar para la creación de una **HTTP REST API automática**. Para crear este fichero, puedes ir a **[Constructor de bases de datos de Castelog](https://github.com/allnulled/constructor-de-bases-de-datos-de-castelog)**, que permite **importar y exportar** estos tipos de ficheros. Aún y así, esta aplicación permite generar ficheros `json` con demasiada amplitud. Para conocer más sobre la estructura de datos que se espera en este fichero `json`, puedes ir a este otro documento de la documentación: **[Guía para la arquitectura de la base de datos de la Democracia 2.0](./Guía-para-la-arquitectura-de-la-base-de-datos-de-la-Democracia-2.0.md)**.

La aplicación y la documentación del párrafo anterior van unidas, y son muy importantes para un desarrollo más o menos cómodo de las aplicaciones que puedan derivarse de este proyecto, como marco de trabajo inicial. Y pueden aliviar mucha complejidad y tiempo en el desarrollo de nuevos proyectos. Vale la pena. También, por ello, se documentan en una guía aparte.

#### El fichero de rutas

Otro de los ficheros de especial interés es el de `src/autoapi/XX.servidor/rutas.js`. En él, se especifican las rutas del servidor, y los controladores/mediadores que van a intervenir en él. También, como los anteriores, este fichero se carga por su vecino `instancia.factoria.js`.

El fichero de rutas puede alterarse en tiempo de ejecución, y refrescarse llamando al método `this.servidor.instancia.actualizar_enrutador()`. Él se encargará de refrescar el cacheo de módulos propio de Node.js para con el fichero de rutas, y cambiar el enrutador de la aplicación `express`, todo en tiempo de ejecución.

Aunque, si vas a hacer esto, procura no tener fallos en el código que vayas a guardar en el fichero, y así no producir errores en la compilación de éste, sobre todo si vas a hacer cambios en tiempo de ejecución. Esto ya es aparte. Pero, al menos, tener la opción de cambiar rutas en tiempo de ejecución, es posible.

Además de esto, conviene conocer que uno de los controladores que se inicia de serie con la aplicación es el que sirve ficheros estáticos desde el directorio `src/www`. Que es el punto que se explica a continuación.

#### La carpeta de ficheros estáticos

Esta carpeta está en `src/www`. Esta carpeta va a servir los ficheros `html`, `css`, `js`, las imágenes, los vídeos, los sonidos, los documentos, etc. que se quieran dejar como recursos estáticos.

Por estáticos, se entiende: no son plantillas renderizadas con lógica del servidor, no son controladores JavaScript. Son ficheros estáticos, y su carga es sencilla, rápida, predecible. Mantenerlo así implica la ventaja de que estos ficheros puedan hospedarse en otro servidor (en PHP, Java, Ruby, Python, C/C++, etc.), y funcionar igual, sin problemas. Si fueran plantillas, por ejemplo, plantillas con `ejs` que es un framework que se carga en el proyecto, ya implicaría un tiempo de respuesta aleatorio, vinculado a la lógica de dichas plantillas. No es el caso.

También se puede usar como lugar para descargar eso: documentos, vídeos, sonidos, etc. de forma global.

Cabe destacar que la aplicación del usuario final, al fin y al cabo, se sirve desde aquí. No es una aplicación enfocada al SEO, porque usa `vue2`, simplemente, no hace falta explicar más si se sabe lo que se está haciendo. Y no se contempla en ningún caso una optimización para esto, porque sería en perjuicio del tiempo de respuesta del servidor. Si se quiere SEO, se tendrá que atacar desde otro lado. De hecho, se pueden subir documentos HTML sí optimizados para el SEO en este mismo directorio `src/www`. Pero las aplicaciones `vue2` no están pensadas para eso. Y la aplicación del cliente, se hace con `castelog + vue2`. Y `vue2`, pues eso, SEO no, JavaScript dinámico y cómodo para programar y escalar, sí. Si se entiende, esto no tiene por qué colisionar con estrategias para el SEO paralelas, gestionadas desde el mismo servidor, así como *landing pages*, y otras muchas cosas *superfancy* que, **en el proceso de democratizar el poder**, no influyen en nada, o no creo que debieran.

#### El fichero de la base de datos local

Este fichero es el de `src/datos_locales.sqlite3`, y guarda la base de datos cuando se usa `sqlite3` y no `mysql`. Puedes usar utilidades como `sqlitebrowser` o `mysqlworbench` o `phpmyadmin` para navegar y modificar la base de datos sin pasar por el programa de `Democracia 2.0`.

#### El fichero del proceso del sistema

Eset fichero es el de `src/pid.txt`. Este fichero contiene el número del proceso del sistema operativo que ha iniciado la aplicación.