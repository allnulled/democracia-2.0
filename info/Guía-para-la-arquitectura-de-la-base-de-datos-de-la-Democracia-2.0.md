# Guía para la arquitectura de la base de datos de la Democracia 2.0

Este documento sirve para el proyecto de Democracia 2.0 porque define el esquema que debe seguir el fichero JSON que proporciona el diseño de la arquitectura de datos, tanto en cuanto a **máquinas/sistemas** o `hardware` como en **tablas/columnas** o `software`.

## Índice

1. [El constructor de bases de datos gráfico](#el-constructor-de-bases-de-datos-grafico).
2. [El esquema de datos](#el-esquema-de-datos).
     2.1. [Campos para atributos de tabla](#campos-para-atributos-de-tabla).
     2.3. [Campos para atributos de columna](#campos-para-atributos-de-columna).
3. [Ejemplo](#ejemplo).

## El constructor de bases de datos gráfico

Para usar la aplicación de construcción de arquitecturas de bases de datos, puedes ir aquí:

- [https://allnulled.github.io/constructor-de-bases-de-datos-de-castelog/](https://allnulled.github.io/constructor-de-bases-de-datos-de-castelog/)

## El esquema de datos

Estos campos se rellenan según la aplicación, y luego puedes `Guardar` y puedes `Descargar » Exportar` a un fichero JSON. El cual puedes emplazar directamente en el `src/XX.datos/XX.esquema/arquitectura.calo-db.json` del proyecto y al levantarse, el servidor se volverá a adaptar a este esquema JSON desde el `this.datos` principalmente.

### Campos para atributos de tabla

En el JSON lo encontrarás en *esquema » {tabla} » atributos_de_tabla*. Sus claves-valor significativos son:

| Campo | Tipo | Detalles | Ejemplos |
| ----- | ---- | -------- | -------- |
| tiene_prioridad | Número | Número de la prioridad de la tabla. Se usará para el `CREATE TABLE` de sql. (Sí, un royo.) | Por ejemplo, si `Trabajador` depende de `Usuario`, podríamos poner: `100` porque el `Usuario` se crea antes siempre. |
| tiene_clave_foranea | Texto especial | Texto en formato `{columna_propia}={tabla}.{columna}` especificando la clave foránea. Se usará para el `FOREIGN KEY` de sql. | Por ejemplo, si quisiéramos añadirle una «imagen_de_grupo» a la tabla `Grupo`, podríamos poner: `imagen_de_grupo=Imagen.id` |
| tiene_constrictores | Texto especial | Texto en formato `{columna 1} + {columna 2} + {columna 3}; {columna 4} + {columna 5}`. Se usará para el `MULTIPLE KEY` de sql. | Por ejemplo, si quisiéramos crear una clave múltiple para una región hipotética de subterritorios de 4 niveles de un país, podríamos poner: `id_pais + id_region_1 + id_region_2 + id_region_3 + id`. O podríamos poner: `id_region_3 + id` para basar la clave en el nivel anterior y el actual. |
| tiene_conexion | Texto especial | Texto en formato `{Maquina}.{Proyecto}.{Conexion}`. Se usará para el `this.conexion.instancia.segun_tabla(tabla)` de la autoapi. | Este parámetro es solo opcional e inocuo. En versiones posteriores, puede significar algo. |

### Campos para atributos de columna

En el JSON lo encontrarás en *esquema » {tabla} » columnas » {columna} » atributos_de_columna*. Sus claves-valor significativos son:

| Campo | Tipo | Detalles | Ejemplos |
| ----- | ---- | -------- | -------- |
| es_tipo | Texto | Texto especificando el tipo. Abierto. | `texto`, `texto largo`, `numero entero`, ... |
| es_tipo_en_sql | Texto | Texto especificando el tipo en SQL. Se usará para la columna de sql. | `varchar(255)`, `int(10)`, ... |
| es_tipo_formulario | Texto | Texto especificando el tipo para formularios. | Por ejemplo, un número entero puede querer poder representarse como `campo de numero` o como `deslizador de numero`. Luego, con `Castelog` puedes especificar el front correspondiente para dichos tipos en el formulario con tu fórmula personalizada con `vue.js`. |
| es_unico | Boolean | `si` si debe ser campo único. Se usará para el `UNIQUE` de sql. | `si`, `no` |
| es_por_defecto | Texto | Valor por defecto. Se usará para el `DEFAULT` de sql. | `si`, `no` |
| es_autoincremental | Boolean | `si` si debe ser campo autoincremental. Se usará para el `AUTOINCREMENT` de sql. | `si`, `no` |
| es_clave_primaria | Boolean | `si` si debe ser campo clave_primaria. Se usará para el `PRIMARY KEY` de sql. | `si`, `no` |

## Ejemplo

Esto es un ejemplo de JSON representando una arquitectura:

```js
{
  "infraestructura": [
    {
      "tipo": "máquina",
      "nombre": "Maquina_unica",
      "descripcion": "",
      "url": "",
      "puerto_de_url": 80,
      "identificador_unico": "",
      "proyectos": [
        {
          "tipo": "proyecto",
          "nombre": "Proyecto_unico",
          "descripcion": "",
          "ruta_de_url": "/",
          "identificador_unico": "",
          "conexiones": [
            {
              "tipo": "conexión",
              "nombre": "Conexion_unica",
              "descripcion": "",
              "usuario_de_base_de_datos": "",
              "contrasenia_de_base_de_datos": "",
              "url_de_base_de_datos": "",
              "puerto_de_base_de_datos": "",
              "nombre_de_base_de_datos": "",
              "identificador_unico": "",
              "esta_mostrando_detalles": false
            }
          ],
          "esta_mostrando_detalles": false
        }
      ],
      "esta_mostrando_detalles": false
    }
  ],
  "esquema": {
    "{Tabla}": {
      "tipo": "tabla",
      "nombre": "Usuario",
      "descripcion": "",
      "identificador_unico": "",
      "ruta_de_url_de_tabla": "/",
      "atributos_de_tabla": {
        "tiene_clave_foranea": "si"
      },
      "columnas": {
        "nombre": {
          "tipo": "columna",
          "nombre": "nombre",
          "descripcion": "",
          "identificador_unico": "",
          "ruta_de_url_de_columna": "/",
          "atributos_de_columna": {
            "es_tal": "so",
            "es_cual": ""
          },
          "tipo_de_dato": "texto",
          "es_identificador": false,
          "es_clave_unica": false,
          "es_clave_foranea": false,
          "es_columna_virtual": false,
          "tiene_valor_por_defecto": null,
          "esta_mostrando_detalles": true
        },
        "contrasenya": {
          "tipo": "columna",
          "nombre": "contrasenya",
          "descripcion": "",
          "identificador_unico": "",
          "ruta_de_url_de_columna": "/",
          "atributos_de_columna": {},
          "tipo_de_dato": "texto",
          "es_identificador": false,
          "es_clave_unica": false,
          "es_clave_foranea": false,
          "es_columna_virtual": false,
          "tiene_valor_por_defecto": null,
          "esta_mostrando_detalles": false
        },
        "correo": {
          "tipo": "columna",
          "nombre": "correo",
          "descripcion": "",
          "identificador_unico": "",
          "ruta_de_url_de_columna": "/",
          "atributos_de_columna": {},
          "tipo_de_dato": "texto",
          "es_identificador": false,
          "es_clave_unica": false,
          "es_clave_foranea": false,
          "es_columna_virtual": false,
          "tiene_valor_por_defecto": null,
          "esta_mostrando_detalles": false
        }
      },
      "esta_mostrando_detalles": true
    },
    "Grupo": {
      "tipo": "tabla",
      "nombre": "Grupo",
      "descripcion": "",
      "identificador_unico": "",
      "ruta_de_url_de_tabla": "/",
      "atributos_de_tabla": {},
      "columnas": {
        "nombre": {
          "tipo": "columna",
          "nombre": "nombre",
          "descripcion": "",
          "identificador_unico": "",
          "ruta_de_url_de_columna": "/",
          "atributos_de_columna": {},
          "tipo_de_dato": "texto",
          "es_identificador": false,
          "es_clave_unica": false,
          "es_clave_foranea": false,
          "es_columna_virtual": false,
          "tiene_valor_por_defecto": null,
          "esta_mostrando_detalles": true
        },
        "descripcion": {
          "tipo": "columna",
          "nombre": "descripcion",
          "descripcion": "",
          "identificador_unico": "",
          "ruta_de_url_de_columna": "/",
          "atributos_de_columna": {},
          "tipo_de_dato": "texto",
          "es_identificador": false,
          "es_clave_unica": false,
          "es_clave_foranea": false,
          "es_columna_virtual": false,
          "tiene_valor_por_defecto": null,
          "esta_mostrando_detalles": true
        }
      },
      "esta_mostrando_detalles": true
    },
    "Permiso": {
      "tipo": "tabla",
      "nombre": "Permiso",
      "descripcion": "",
      "identificador_unico": "",
      "ruta_de_url_de_tabla": "/",
      "atributos_de_tabla": {},
      "columnas": {
        "nombre": {
          "tipo": "columna",
          "nombre": "nombre",
          "descripcion": "",
          "identificador_unico": "",
          "ruta_de_url_de_columna": "/",
          "atributos_de_columna": {},
          "tipo_de_dato": "texto",
          "es_identificador": false,
          "es_clave_unica": false,
          "es_clave_foranea": false,
          "es_columna_virtual": false,
          "tiene_valor_por_defecto": null,
          "esta_mostrando_detalles": true
        },
        "descripcion": {
          "tipo": "columna",
          "nombre": "descripcion",
          "descripcion": "",
          "identificador_unico": "",
          "ruta_de_url_de_columna": "/",
          "atributos_de_columna": {},
          "tipo_de_dato": "texto",
          "es_identificador": false,
          "es_clave_unica": false,
          "es_clave_foranea": false,
          "es_columna_virtual": false,
          "tiene_valor_por_defecto": null,
          "esta_mostrando_detalles": true
        }
      },
      "esta_mostrando_detalles": true
    }
  }
}
```