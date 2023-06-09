
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
contrasenya ){ try { if(!(typeof nombre === 'string')) throw new Error("Error en fichero [-] en posición [630-664=17:9-17:43] cuando: " + "compruebo que nombre es tipo texto");
if(!(typeof contrasenya === 'string')) throw new Error("Error en fichero [-] en posición [665-713=17:44-18:48] cuando: " + "compruebo que contrasenya es tipo texto");
let resultado_1 = undefined;
let usuario = undefined;
let sesion = undefined;
let grupos = undefined;
let permisos = undefined;
hacer_peticion: {
const resultado_1 = (await Castelog.metodos.una_peticion_http(this.crear_url( "/auth/entrar" ), "POST", { nombre,
contrasenya
}, null, null, null));
console.log(resultado_1);}

extraer_datos: {
}

return { usuario,
sesion,
grupos,
permisos
};
}catch(error) {
this.mostrar_error( error );} }
};