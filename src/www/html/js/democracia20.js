
window.Democracia20 = class { constructor( url_base ){ this.url_base = url_base; }
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
contrasenya ){ try { if(!(typeof nombre === 'string')) throw new Error("Error en fichero [-] en posición [646-680=21:9-21:43] cuando: " + "compruebo que nombre es tipo texto");
if(!(typeof contrasenya === 'string')) throw new Error("Error en fichero [-] en posición [681-729=21:44-22:48] cuando: " + "compruebo que contrasenya es tipo texto");
const resultado_1 = (await Castelog.metodos.una_peticion_http(this.crear_url( "/auth/entrar" ), "POST", { nombre,
contrasenya
}, null, null, null));
return resultado_1.data.respuesta.datos.autentificacion;
}catch(error) {
this.mostrar_error( error );} }
async seleccionar_dato( argumentos ){ try { if(!(typeof argumentos === 'object')) throw new Error("Error en fichero [-] en posición [1114-1153=31:9-31:48] cuando: " + "compruebo que argumentos es tipo objeto");
if(!(typeof argumentos.tabla === 'string')) throw new Error("Error en fichero [-] en posición [1154-1207=31:49-32:53] cuando: " + "compruebo que argumentos.tabla es tipo texto");
const resultado_1 = (await Castelog.metodos.una_peticion_http(this.crear_url( "/datos/seleccionar/dato" ), "POST", argumentos, null, null, null));
return resultado_1.data.respuesta.datos.seleccion;
}catch(error) {
this.mostrar_error( error );} }
async insertar_dato( argumentos ){ try { if(!(typeof argumentos === 'object')) throw new Error("Error en fichero [-] en posición [1581-1620=41:9-41:48] cuando: " + "compruebo que argumentos es tipo objeto");
if(!(typeof argumentos.tabla === 'string')) throw new Error("Error en fichero [-] en posición [1621-1674=41:49-42:53] cuando: " + "compruebo que argumentos.tabla es tipo texto");
if(!(typeof argumentos.dato === 'object')) throw new Error("Error en fichero [-] en posición [1675-1728=42:54-43:53] cuando: " + "compruebo que argumentos.dato es tipo objeto");
const resultado_1 = (await Castelog.metodos.una_peticion_http(this.crear_url( "/datos/insertar/dato" ), "POST", argumentos, null, null, null));
return resultado_1.data.respuesta.datos.insercion;
}catch(error) {
this.mostrar_error( error );} }
async actualizar_dato( argumentos ){ try { if(!(typeof argumentos === 'object')) throw new Error("Error en fichero [-] en posición [2097-2136=52:9-52:48] cuando: " + "compruebo que argumentos es tipo objeto");
if(!(typeof argumentos.tabla === 'string')) throw new Error("Error en fichero [-] en posición [2137-2190=52:49-53:53] cuando: " + "compruebo que argumentos.tabla es tipo texto");
if(!(typeof argumentos.id === 'number')) throw new Error("Error en fichero [-] en posición [2191-2242=53:54-54:51] cuando: " + "compruebo que argumentos.id es tipo número");
if(!(typeof argumentos.dato === 'object')) throw new Error("Error en fichero [-] en posición [2243-2296=54:52-55:53] cuando: " + "compruebo que argumentos.dato es tipo objeto");
const resultado_1 = (await Castelog.metodos.una_peticion_http(this.crear_url( "/datos/actualizar/dato" ), "POST", argumentos, null, null, null));
return resultado_1.data.respuesta.datos.actualizacion;
}catch(error) {
this.mostrar_error( error );} }
async eliminar_dato( argumentos ){ try { if(!(typeof argumentos === 'object')) throw new Error("Error en fichero [-] en posición [2669-2708=64:9-64:48] cuando: " + "compruebo que argumentos es tipo objeto");
if(!(typeof argumentos.tabla === 'string')) throw new Error("Error en fichero [-] en posición [2709-2762=64:49-65:53] cuando: " + "compruebo que argumentos.tabla es tipo texto");
if(!(typeof argumentos.id === 'number')) throw new Error("Error en fichero [-] en posición [2763-2814=65:54-66:51] cuando: " + "compruebo que argumentos.id es tipo número");
const resultado_1 = (await Castelog.metodos.una_peticion_http(this.crear_url( "/datos/eliminar/dato" ), "POST", argumentos, null, null, null));
return resultado_1.data.respuesta.datos.eliminacion;
}catch(error) {
this.mostrar_error( error );} }
};