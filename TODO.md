[✔] Controlador estático

-------------------------------------------

Hechos acción, desde petición y test:

[x] agregar_permiso
[x] agregar_grupo
[x] agregar_usuario
[x] seleccionar_permiso_segun_nombre
[x] seleccionar_grupo_segun_nombre
[x] seleccionar_usuario_segun_nombre
[x] actualizar_grupo
[x] actualizar_permiso
[x] actualizar_usuario
[x] eliminar_grupo
[x] eliminar_permiso
[x] eliminar_usuario
[x] agregar_grupo_a_usuario (id_grupo, id_usuario)
[x] agregar_permiso_a_usuario (id_permiso, id_usuario)
[x] agregar_permiso_a_grupo (id_permiso, id_grupo)
[x] eliminar_grupo_a_usuario (id_grupo, id_usuario)
[x] eliminar_permiso_a_usuario (id_permiso, id_usuario)
[x] eliminar_permiso_a_grupo (id_permiso, id_grupo)

Próximos por hacer:

[x] autentificación
  [x] src/autoapi/XX.servidor/ayudante/factoria/autentificacion.js
  [x] src/autoapi/XX.servidor/mediador/factoria/autentificacion.js
  [x] src/autoapi/XX.utilidades/autentificar_peticion.js
  [x] src/autoapi/XX.utilidades/extraer_token_de_sesion_de_peticion.js
[x] métodos para filtrar por autentificación
  [x] src/autoapi/XX.servidor/ayudante/incluir_segun_autorizacion.js
  [x] src/autoapi/XX.servidor/ayudante/excluir_segun_autorizacion.js
  [x] src/autoapi/XX.servidor/mediador/incluir_segun_autorizacion.js
  [x] src/autoapi/XX.servidor/mediador/excluir_segun_autorizacion.js

[x] Proteger métodos para cambiar el auth con incluir: permiso: administrar autorizaciones

[x] seleccionar_grupo_de_usuario (id_grupo, id_usuario)
[x] seleccionar_permiso_de_usuario (id_permiso, id_usuario)
[x] seleccionar_permiso_de_grupo (id_permiso, id_grupo)

Próxima tanda backend:

[x] arquitectura.json debe influir en la creación de la bbdd.
  [x] src/autoapi/03.datos/05.inicializacion/02.inicializar_esquema_de_datos_para_tabla.js
  [x] src/autoapi/03.configuraciones/arquitectura.calo-db.json
[ ] arquitectura.json debe influir en los servicios de datos del servidor
  [x] habilitar todos los servicios de datos para cada tabla:
    [x] insertar_dato
    [x] actualizar_dato
    [x] eliminar_dato
    [x] seleccionar_dato
      [x] filtro
      [x] orden
      [x] pagina
      [x] elementos
      [x] texto

Próxima tanda backend:

[ ] Que los permisos se puedan aplicar a las operaciones automáticas de datos:
  [ ] a las operaciones se les puede aplicar «reglas de permisos» para:
    [ ] «seleccionar»
    [ ] «seleccionar uno»
    [ ] «insertar»
    [ ] «actualizar»
    [ ] «eliminar»
  [ ] a las operaciones anteriores + reglas de permisos se les puede asociar:
    [ ] eventos_antes_de_operar
    [ ] eventos_despues_de_operar
    La regla iría así:
      - Si el { usuario } en la { operación } cumple con las { reglas de permisos } entonces se aplican estos { eventos }.
      - Si el { usuario } en la { operación } no cumple con las { reglas de permisos } entonces se aplican estos otros { eventos }.
      {
        operaciones: ["seleccionar", "insertar", "actualizar", "eliminar"],
        reglas: {
          incluir: {},
          excluir: {
            usuarios:["ok"]
          },
        },
        afirmativo: {
          antes: [{evento:"interventor"},{evento:"interventor"},{evento:"interventor"}],
          despues: [{evento:"interventor"},{evento:"interventor"},{evento:"interventor"}]
        },
        negativo: {
          antes: [{evento:"interventor"}]
        }
      }
[ ] Documentar el cliente de JavaScript para navegador en otra guía. Cliente para el frontend. axios o fetch.

Próxima tanda frontend:

[ ] PaginaDeAplicaciones
[ ] PaginaDeProblemas
[ ] PaginaDeSoluciones
[ ] PaginaDeImplementaciones
[ ] MigasDePan
[ ] ExploradorDeTabla
[ ] FormularioDeTabla
