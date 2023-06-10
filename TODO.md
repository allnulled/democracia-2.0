[✔] Controlador estático

-------------------------------------------

[ ] Sistema de autentificación
  [ ] Falta los métodos:
    [ ] autentificar_peticion. Como controlador. Y como método.
    [ ] autentificar_token_de_sesion. Como método.
    [ ] Pero para testearlos, tendrás que acabar y testear antes los métodos: (:P)
      [ ] src/autoapi/01.utilidades/01.autorizacion/accion/desde_peticion/agregar_grupo_a_usuario.js
      [ ] src/autoapi/01.utilidades/01.autorizacion/accion/desde_peticion/agregar_grupo.js
      [ ] src/autoapi/01.utilidades/01.autorizacion/accion/desde_peticion/agregar_permiso_a_grupo.js
      [ ] src/autoapi/01.utilidades/01.autorizacion/accion/desde_peticion/agregar_permiso_a_usuario.js
      [ ] src/autoapi/01.utilidades/01.autorizacion/accion/desde_peticion/agregar_permiso.js
      [ ] src/autoapi/01.utilidades/01.autorizacion/accion/desde_peticion/agregar_usuario.js
      [ ] src/autoapi/01.utilidades/01.autorizacion/accion/desde_peticion/actualizar_grupo.js
      [ ] src/autoapi/01.utilidades/01.autorizacion/accion/desde_peticion/actualizar_permiso.js
      [ ] src/autoapi/01.utilidades/01.autorizacion/accion/desde_peticion/actualizar_usuario.js
      [ ] src/autoapi/01.utilidades/01.autorizacion/accion/desde_peticion/eliminar_grupo.js
      [ ] src/autoapi/01.utilidades/01.autorizacion/accion/desde_peticion/eliminar_permiso.js
      [ ] src/autoapi/01.utilidades/01.autorizacion/accion/desde_peticion/eliminar_usuario.js
      [ ] src/autoapi/01.utilidades/01.autorizacion/accion/desde_peticion/eliminar_permiso_a_usuario.js
      [ ] src/autoapi/01.utilidades/01.autorizacion/accion/desde_peticion/eliminar_permiso_a_grupo.js
      [ ] Los cuales dependen de los métodos:
        [ ] src/autoapi/01.utilidades/01.autorizacion/accion/agregar_grupo_a_usuario.js
        [ ] src/autoapi/01.utilidades/01.autorizacion/accion/agregar_grupo.js
        [ ] src/autoapi/01.utilidades/01.autorizacion/accion/agregar_permiso_a_grupo.js
        [ ] src/autoapi/01.utilidades/01.autorizacion/accion/agregar_permiso_a_usuario.js
        [ ] src/autoapi/01.utilidades/01.autorizacion/accion/agregar_permiso.js
        [ ] src/autoapi/01.utilidades/01.autorizacion/accion/agregar_usuario.js
        [ ] src/autoapi/01.utilidades/01.autorizacion/accion/actualizar_grupo.js
        [ ] src/autoapi/01.utilidades/01.autorizacion/accion/actualizar_permiso.js
        [ ] src/autoapi/01.utilidades/01.autorizacion/accion/actualizar_usuario.js
        [ ] src/autoapi/01.utilidades/01.autorizacion/accion/eliminar_grupo.js
        [ ] src/autoapi/01.utilidades/01.autorizacion/accion/eliminar_permiso.js
        [ ] src/autoapi/01.utilidades/01.autorizacion/accion/eliminar_usuario.js
        [ ] src/autoapi/01.utilidades/01.autorizacion/accion/eliminar_permiso_a_usuario.js
        [ ] src/autoapi/01.utilidades/01.autorizacion/accion/eliminar_permiso_a_grupo.js
      [ ] Y además, tendrás que escribir las líneas para los controladores de dichos métodos.
      [ ] Y además, capar el uso de estos métodos a usuarios que tengan el permiso de «administrar sistema de autorizaciones».
        [ ] Lo cual te obliga a crear un seeder por defecto cuando se crea la base de datos.
          [ ] Que cree un permiso de «administrar sistema de autorizaciones»
          [ ] Que cree un grupo de «administradores del sistema de autorizaciones» y le asigne este permiso
          [ ] Que cree un usuario «administrador principal» y le asigne a este grupo
        [ ] Y entonces sí, puedes hacer el test de «autentificar_token_de_sesion».
        [ ] Porque de otra forma te vas a encontrar haciendo guarradas para hacer rodeos a esto,
            que al final, lo vas a tener que hacer igual, porque se hará un panel de administración 
            de toda esta historia de las «autorizaciones del sistema democrático». No hay rodeos.

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


[ ] seleccionar_grupo_de_usuario (id_grupo, id_usuario)
[ ] seleccionar_permiso_de_usuario (id_permiso, id_usuario)
[ ] seleccionar_permiso_de_grupo (id_permiso, id_grupo)

[ ] autentificación
  [ ] src/autoapi/XX.servidor/ayudante/autentificar_peticion.js
  [ ] src/autoapi/XX.servidor/mediador/autentificar_peticion.js
  [ ] src/autoapi/XX.utilidade/autentificar_peticion.js
[ ] métodos para filtrar por autentificación
  [ ] src/autoapi/XX.servidor/ayudante/incluir_segun_autorizacion.js
  [ ] src/autoapi/XX.servidor/ayudante/excluir_segun_autorizacion.js
  [ ] src/autoapi/XX.servidor/mediador/incluir_segun_autorizacion.js
  [ ] src/autoapi/XX.servidor/mediador/excluir_segun_autorizacion.js

[ ] Proteger métodos para cambiar el auth con incluir: grupo:administradores de autorizaciones

Próxima tanda:

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
