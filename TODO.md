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
  [ ] src/autoapi/XX.servidor/mediador/incluir_segun_autorizacion.js
  [ ] src/autoapi/XX.servidor/mediador/excluir_segun_autorizacion.js

[x] Proteger métodos para cambiar el auth con incluir: grupo:administradores de autorizaciones

[ ] seleccionar_grupo_de_usuario (id_grupo, id_usuario)
[ ] seleccionar_permiso_de_usuario (id_permiso, id_usuario)
[ ] seleccionar_permiso_de_grupo (id_permiso, id_grupo)

Próxima tanda backend:

[ ] arquitectura.json debe influir en la creación de la bbdd.
  [ ] src/autoapi/03.datos/05.inicializacion/02.inicializar_esquema_de_datos_para_tabla.js
  [ ] src/autoapi/02.configuraciones/arquitectura.calo-db.json

[ ] datos
  [ ] insertar
  [ ] seleccionar
    [ ] filtro
    [ ] orden
    [ ] pagina
    [ ] elementos
  [ ] actualizar
  [ ] eliminar
  [ ] insertar_elemento
  [ ] actualizar_elemento
  [ ] eliminar_elemento
  [ ] seleccionar_elementos

Próxima tanda frontend:

[ ] PaginaDeAplicaciones
[ ] BreadcrumbComponente
[ ] PaginaDeProblemas
[ ] PaginaDeSoluciones
[ ] PaginaDeImplementaciones
[ ] ExploradorDeVotaciones
[ ] ExploradorDeVotacion