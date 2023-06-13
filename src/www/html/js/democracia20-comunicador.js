
const Democracia20Comunicador = class { constructor( url_base ){ this.url_base = url_base; }
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
contrasenya ){ try { if(!(typeof nombre === 'string')) throw new Error("Error en fichero [-] en posición [873-907=25:9-25:43] cuando: " + "compruebo que nombre es tipo texto");
if(!(typeof contrasenya === 'string')) throw new Error("Error en fichero [-] en posición [908-956=25:44-26:48] cuando: " + "compruebo que contrasenya es tipo texto");
const resultado_1 = (await Castelog.metodos.una_peticion_http(this.crear_url( "/auth/entrar" ), "POST", { nombre,
contrasenya
}, null, null, null));
return resultado_1.data.respuesta.datos.autentificacion;
}catch(error) {
this.mostrar_error( error );} }
async seleccionar_dato( argumentos ){ try { if(!(typeof argumentos === 'object')) throw new Error("Error en fichero [-] en posición [1388-1427=36:9-36:48] cuando: " + "compruebo que argumentos es tipo objeto");
if(!(typeof argumentos.tabla === 'string')) throw new Error("Error en fichero [-] en posición [1428-1481=36:49-37:53] cuando: " + "compruebo que argumentos.tabla es tipo texto");
const resultado_1 = (await Castelog.metodos.una_peticion_http(this.crear_url( "/datos/seleccionar/dato" ), "POST", argumentos, null, null, null));
return resultado_1.data.respuesta.datos.seleccion;
}catch(error) {
this.mostrar_error( error );} }
async insertar_dato( argumentos ){ try { if(!(typeof argumentos === 'object')) throw new Error("Error en fichero [-] en posición [1899-1938=47:9-47:48] cuando: " + "compruebo que argumentos es tipo objeto");
if(!(typeof argumentos.tabla === 'string')) throw new Error("Error en fichero [-] en posición [1939-1992=47:49-48:53] cuando: " + "compruebo que argumentos.tabla es tipo texto");
if(!(typeof argumentos.dato === 'object')) throw new Error("Error en fichero [-] en posición [1993-2046=48:54-49:53] cuando: " + "compruebo que argumentos.dato es tipo objeto");
const resultado_1 = (await Castelog.metodos.una_peticion_http(this.crear_url( "/datos/insertar/dato" ), "POST", argumentos, null, null, null));
return resultado_1.data.respuesta.datos.insercion;
}catch(error) {
this.mostrar_error( error );} }
async actualizar_dato( argumentos ){ try { if(!(typeof argumentos === 'object')) throw new Error("Error en fichero [-] en posición [2461-2500=59:9-59:48] cuando: " + "compruebo que argumentos es tipo objeto");
if(!(typeof argumentos.tabla === 'string')) throw new Error("Error en fichero [-] en posición [2501-2554=59:49-60:53] cuando: " + "compruebo que argumentos.tabla es tipo texto");
if(!(typeof argumentos.id === 'number')) throw new Error("Error en fichero [-] en posición [2555-2606=60:54-61:51] cuando: " + "compruebo que argumentos.id es tipo número");
if(!(typeof argumentos.dato === 'object')) throw new Error("Error en fichero [-] en posición [2607-2660=61:52-62:53] cuando: " + "compruebo que argumentos.dato es tipo objeto");
const resultado_1 = (await Castelog.metodos.una_peticion_http(this.crear_url( "/datos/actualizar/dato" ), "POST", argumentos, null, null, null));
return resultado_1.data.respuesta.datos.actualizacion;
}catch(error) {
this.mostrar_error( error );} }
async eliminar_dato( argumentos ){ try { if(!(typeof argumentos === 'object')) throw new Error("Error en fichero [-] en posición [3077-3116=72:9-72:48] cuando: " + "compruebo que argumentos es tipo objeto");
if(!(typeof argumentos.tabla === 'string')) throw new Error("Error en fichero [-] en posición [3117-3170=72:49-73:53] cuando: " + "compruebo que argumentos.tabla es tipo texto");
if(!(typeof argumentos.id === 'number')) throw new Error("Error en fichero [-] en posición [3171-3222=73:54-74:51] cuando: " + "compruebo que argumentos.id es tipo número");
const resultado_1 = (await Castelog.metodos.una_peticion_http(this.crear_url( "/datos/eliminar/dato" ), "POST", argumentos, null, null, null));
return resultado_1.data.respuesta.datos.eliminacion;
}catch(error) {
this.mostrar_error( error );} }
};
if((!(typeof window === 'undefined'))) {
window.Democracia20Comunicador = Democracia20Comunicador;
}
if((!(typeof global === 'undefined'))) {
global.Democracia20Comunicador = Democracia20Comunicador;
}