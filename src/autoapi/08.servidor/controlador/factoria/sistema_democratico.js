
module.exports = function( configuraciones = { 
} ) {try {
const { tracear, responder_como_error, responder_como_exito
} = this.utilidades;
const { implementaciones_clasificadas, implementaciones_elegidas, implementaciones_propuestas, implementaciones, problemas_clasificados, problemas_elegidos, problemas_propuestos, problemas, soluciones_clasificadas, soluciones_elegidas, soluciones_propuestas, soluciones, votaciones
} = this.servidor.ayudante.democracia.interfaz;
tracear( "this.servidor.controlador.factoria.sistema_democratico" );
return async ( peticion,
respuesta,
siguiente ) => {try {
tracear( "this.servidor.controlador.factoria.sistema_democratico (controlador)" );
const subruta = peticion.url;
let resultado = { 
};
if(subruta.startsWith( "/interfaz/inicio" )) {
resultado = (await inicio( peticion,
respuesta,
siguiente ));
}
else if(subruta.startsWith( "/interfaz/votaciones" )) {
resultado = (await votaciones( peticion,
respuesta,
siguiente ));
}
else if(subruta.startsWith( "/interfaz/problemas_propuestos" )) {
resultado = (await problemas_propuestos( peticion,
respuesta,
siguiente ));
}
else if(subruta.startsWith( "/interfaz/problemas_clasificados" )) {
resultado = (await problemas_clasificados( peticion,
respuesta,
siguiente ));
}
else if(subruta.startsWith( "/interfaz/problemas_elegidos" )) {
resultado = (await problemas_elegidos( peticion,
respuesta,
siguiente ));
}
else if(subruta.startsWith( "/interfaz/problemas" )) {
resultado = (await problemas( peticion,
respuesta,
siguiente ));
}
else if(subruta.startsWith( "/interfaz/soluciones_propuestas" )) {
resultado = (await soluciones_propuestas( peticion,
respuesta,
siguiente ));
}
else if(subruta.startsWith( "/interfaz/soluciones_clasificadas" )) {
resultado = (await soluciones_clasificadas( peticion,
respuesta,
siguiente ));
}
else if(subruta.startsWith( "/interfaz/soluciones_elegidas" )) {
resultado = (await soluciones_elegidas( peticion,
respuesta,
siguiente ));
}
else if(subruta.startsWith( "/interfaz/soluciones" )) {
resultado = (await soluciones( peticion,
respuesta,
siguiente ));
}
else if(subruta.startsWith( "/interfaz/implementaciones_propuestas" )) {
resultado = (await implementaciones_propuestas( peticion,
respuesta,
siguiente ));
}
else if(subruta.startsWith( "/interfaz/implementaciones_clasificadas" )) {
resultado = (await implementaciones_clasificadas( peticion,
respuesta,
siguiente ));
}
else if(subruta.startsWith( "/interfaz/implementaciones_elegidas" )) {
resultado = (await implementaciones_elegidas( peticion,
respuesta,
siguiente ));
}
else if(subruta.startsWith( "/interfaz/implementaciones" )) {
resultado = (await implementaciones( peticion,
respuesta,
siguiente ));
}
else {
responder_como_error( new Error( "El sistema democrático no reconoció la ruta «${subruta}»" ),
peticion,
respuesta );
}
return responder_como_exito( resultado,
peticion,
respuesta );
} catch(error) {
console.log(error);
throw error;
}

};
} catch(error) {
console.log(error);
throw error;
}

}