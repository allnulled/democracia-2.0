
const Democracia20Cliente = class { constructor( url_base ){ this.url_base = url_base; }
mostrar_error( error ){ console.log(error);
}
crear_url( ...args ){ let salida = this.base_url.replace( new RegExp( "\\/$",
"" ) );
for(let index = 0; index < args.length; index++) {const arg = args[ index ];
salida += "/" + arg.replace( new RegExp( "^\\/",
"" ) );}
return salida;
}
async autentificarse( nombre,
contrasenya ){ try { if(!(typeof nombre === 'string')) throw new Error("Error en fichero [-] en posición [869-903=25:9-25:43] cuando: " + "compruebo que nombre es tipo texto");
if(!(typeof contrasenya === 'string')) throw new Error("Error en fichero [-] en posición [904-952=25:44-26:48] cuando: " + "compruebo que contrasenya es tipo texto");
const resultado_1 = (await Castelog.metodos.una_peticion_http(this.crear_url( "/auth/entrar" ), "POST", { nombre,
contrasenya
}, null, null, null));
return resultado_1.data.respuesta.datos.autentificacion;
}catch(error) {
this.mostrar_error( error );} }
async seleccionar_dato( argumentos ){ try { if(!(typeof argumentos === 'object')) throw new Error("Error en fichero [-] en posición [1384-1423=36:9-36:48] cuando: " + "compruebo que argumentos es tipo objeto");
if(!(typeof argumentos.tabla === 'string')) throw new Error("Error en fichero [-] en posición [1424-1477=36:49-37:53] cuando: " + "compruebo que argumentos.tabla es tipo texto");
const resultado_1 = (await Castelog.metodos.una_peticion_http(this.crear_url( "/datos/seleccionar/dato" ), "POST", argumentos, null, null, null));
return resultado_1.data.respuesta.datos.seleccion;
}catch(error) {
this.mostrar_error( error );} }
async insertar_dato( argumentos ){ try { if(!(typeof argumentos === 'object')) throw new Error("Error en fichero [-] en posición [1895-1934=47:9-47:48] cuando: " + "compruebo que argumentos es tipo objeto");
if(!(typeof argumentos.tabla === 'string')) throw new Error("Error en fichero [-] en posición [1935-1988=47:49-48:53] cuando: " + "compruebo que argumentos.tabla es tipo texto");
if(!(typeof argumentos.dato === 'object')) throw new Error("Error en fichero [-] en posición [1989-2042=48:54-49:53] cuando: " + "compruebo que argumentos.dato es tipo objeto");
const resultado_1 = (await Castelog.metodos.una_peticion_http(this.crear_url( "/datos/insertar/dato" ), "POST", argumentos, null, null, null));
return resultado_1.data.respuesta.datos.insercion;
}catch(error) {
this.mostrar_error( error );} }
async actualizar_dato( argumentos ){ try { if(!(typeof argumentos === 'object')) throw new Error("Error en fichero [-] en posición [2457-2496=59:9-59:48] cuando: " + "compruebo que argumentos es tipo objeto");
if(!(typeof argumentos.tabla === 'string')) throw new Error("Error en fichero [-] en posición [2497-2550=59:49-60:53] cuando: " + "compruebo que argumentos.tabla es tipo texto");
if(!(typeof argumentos.id === 'number')) throw new Error("Error en fichero [-] en posición [2551-2602=60:54-61:51] cuando: " + "compruebo que argumentos.id es tipo número");
if(!(typeof argumentos.dato === 'object')) throw new Error("Error en fichero [-] en posición [2603-2656=61:52-62:53] cuando: " + "compruebo que argumentos.dato es tipo objeto");
const resultado_1 = (await Castelog.metodos.una_peticion_http(this.crear_url( "/datos/actualizar/dato" ), "POST", argumentos, null, null, null));
return resultado_1.data.respuesta.datos.actualizacion;
}catch(error) {
this.mostrar_error( error );} }
async eliminar_dato( argumentos ){ try { if(!(typeof argumentos === 'object')) throw new Error("Error en fichero [-] en posición [3073-3112=72:9-72:48] cuando: " + "compruebo que argumentos es tipo objeto");
if(!(typeof argumentos.tabla === 'string')) throw new Error("Error en fichero [-] en posición [3113-3166=72:49-73:53] cuando: " + "compruebo que argumentos.tabla es tipo texto");
if(!(typeof argumentos.id === 'number')) throw new Error("Error en fichero [-] en posición [3167-3218=73:54-74:51] cuando: " + "compruebo que argumentos.id es tipo número");
const resultado_1 = (await Castelog.metodos.una_peticion_http(this.crear_url( "/datos/eliminar/dato" ), "POST", argumentos, null, null, null));
return resultado_1.data.respuesta.datos.eliminacion;
}catch(error) {
this.mostrar_error( error );} }
};