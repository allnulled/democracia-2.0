Próxima tanda frontend:

[ ] PaginaDeAplicaciones
[ ] PaginaDeProblemas
[ ] PaginaDeSoluciones
[ ] PaginaDeImplementaciones
[ ] MigasDePan
[ ] ExploradorDeTabla
[ ] FormularioDeTabla

-----

Próxima tanda backend:

[ ] Si lo he entendido bien, consiste en hookear las operaciones de los ficheros:
  [ ] ./src/autoapi/04.datos/01.utilidades/accion/desde_peticion/actualizar_dato.js 
  [ ] ./src/autoapi/04.datos/01.utilidades/accion/desde_peticion/eliminar_dato.js 
  [ ] ./src/autoapi/04.datos/01.utilidades/accion/desde_peticion/insertar_dato.js 
  [ ] ./src/autoapi/04.datos/01.utilidades/accion/desde_peticion/seleccionar_dato.js
 ...sobreentendiendo que esta capa de seguridad no interesa aplicarla a nivel de lógica, solo a nivel de contenedor web.
   ...porque a nivel de lógica usaríamos directamente la función en sí contra la autorización concreta y llos permisos deseados.
   ...en verdad no, te interesa tener conciencia de que te estás saltando permisos en cada operación, no que esa conducta sea la de por defecto.
   ...por lo cual, habría que cambiar estos ficheros de aquí en lugar de los aneriores:
  [ ] ./src/autoapi/04.datos/01.utilidades/accion/actualizar_dato.js 
  [ ] ./src/autoapi/04.datos/01.utilidades/accion/eliminar_dato.js 
  [ ] ./src/autoapi/04.datos/01.utilidades/accion/insertar_dato.js 
  [ ] ./src/autoapi/04.datos/01.utilidades/accion/seleccionar_dato.js
 ...para que los permisos se puedan aplicar a las operaciones automáticas de datos:
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
        al: ["seleccionar", "insertar", "actualizar", "eliminar"],
        // incluir: {},
        excluir: {usuarios:["ok"]},
        antes_de_aceptado: [{evento:"interventor"},{evento:"interventor"},{evento:"interventor"}],
        despues_de_aceptado: [{evento:"interventor"},{evento:"interventor"},{evento:"interventor"}],
        antes_de_rechazado: [{evento:"interventor"},{evento:"interventor"},{evento:"interventor"}],
        despues_de_rechazado: [{evento:"interventor"},{evento:"interventor"},{evento:"interventor"}],
      }
[ ] Documentar el cliente de JavaScript para navegador en otra guía. Cliente para el frontend. axios o fetch.

-----