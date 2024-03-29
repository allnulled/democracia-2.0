
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"0","contenido":{"head":"<head>\n    <title>Democracia 2.0</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <script src=\"js/calo.js\"></script>\n    <script src=\"js/democracia20-comunicador.js\"></script>\n    <style>\n      .static_windows_1 {\n        position: fixed; top: 0; bottom: 0; left: 0; right: 0;\n        background-color: #0d293a;\n      }\n      .static_windows_2 {\n        display: table;\n        width: 100%;\n        height: 100%;\n      }\n      .static_windows_3 {\n        display: table-cell;\n        width: 100%;\n        height: 100%;\n        text-align: center;\n        vertical-align: middle;\n      }\n      .dialog_window_container_1 {\n        display: inline-block;\n        width: auto;\n      }\n      .dialog_window_container_2 {\n        width: 100%;\n      }\n    </style>\n    <style>\n\n    .link {\n      color: blue;\n      cursor: pointer;\n    }\n    .link:hover {\n      text-decoration: underline;\n      text-shadow: 0 0 1px blue;\n    }\n\n    .MigasDePan {\n      padding: 5px;\n      border: 1px solid #333;\n      box-shadow: 0 0 4px black;\n      background-color: #E0E0E0;\n    }\n    .MigasDePan ul.estilo_migas_de_pan {\n      margin: 0;\n      padding: 0;\n    }\n    .MigasDePan ul.estilo_migas_de_pan > li {\n      display: inline-block;\n    }\n    .MigasDePan ul.estilo_migas_de_pan > li > .link {}\n\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

const democracia20 = new window.Democracia20Comunicador( window.location.protocol + "//" + window.location.host );
const MigasDePan = Castelog.metodos.un_componente_vue2("MigasDePan",
  "<div class=\"MigasDePan Component\">"
 + "    <ul class=\"estilo_migas_de_pan\">"
 + "      <li v-for=\"(subseccion, subseccion_index) in seccion\" v-bind:key=\"'miga_de_pan_' + subseccion_index\">"
 + "        <span class=\"separador\" v-if=\"subseccion_index !== 0\"> » </span>"
 + "        <span class=\"link\" v-if=\"typeof subseccion === 'string'\" v-on:click=\"() => $router.history.push('/' + subseccion.toLowerCase())\"> {{ subseccion }} </span>"
 + "        <span class=\"link\" v-else-if=\"typeof subseccion === 'object'\" v-on:click=\"() => $router.history.push(subseccion.link)\"> {{ subseccion.nombre }} </span>"
 + "      </li>"
 + "    </ul>"
 + "  </div>",
  function(component) {return { props:{ app:{ type:Object,
required:true
},
seccion:{ type:Array,
required:true
}
},
data() {try {
return { error:undefined,
otros:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ mostrar_error:function( error ) {try {
this.error = error;
setTimeout( () => {try {
this.error = undefined;
} catch(error) {
console.log(error);
throw error;
}

},
5000 );
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);
const PaginaDeLogin = Castelog.metodos.un_componente_vue2("PaginaDeLogin",
  "<div class=\"PaginaDeLogin Component\">"
 + "    <div class=\"static_windows_1\">"
 + "      <div class=\"static_windows_2\">"
 + "        <div class=\"static_windows_3\">"
 + "          <div class=\"dialog_window_container_1\">"
 + "            <div class=\"dialog_window_container_2\">"
 + "              <div class=\"window\" style=\"text-align:left;\">"
 + "                <div class=\"title-bar\">"
 + "                  <div class=\"title-bar-text\">Democracia 2.0</div>"
 + "                </div>"
 + "                <div class=\"window-body\" style=\"position:relative;\">"
 + "                  <table>"
 + "                    <tr style=\"\">"
 + "                      <td class=\"width:100%;\"><label>Nombre:</label></td>"
 + "                      <td><input type=\"text\" v-model=\"nombre\" /></td>"
 + "                    </tr>"
 + "                    <tr style=\"\">"
 + "                      <td><label>Contraseña:</label></td>"
 + "                      <td><input type=\"password\" v-model=\"contrasenya\" /></td>"
 + "                    </tr>"
 + "                    <tr style=\"\">"
 + "                      <td colspan=\"100\">"
 + "                        <button style=\"width:100%;\" v-on:click=\"() => autentificarse()\">Entrar</button>"
 + "                      </td>"
 + "                    </tr>"
 + "                  </table>"
 + "                  <div v-if=\"error\">"
 + "                    <div class=\"\">{{ error.name }}: {{ error.message }}</div>"
 + "                  </div>"
 + "                </div>"
 + "                <div class=\"status-bar\">"
 + "                  <div class=\"status-field\"></div>"
 + "                  <div class=\"status-field\" style=\"text-align: right; font-size:9px; white-space: nowrap;\">Si no, puedes entrar como <a href=\"#\" v-on:click=\"() => autentificarse_como_ciudadano_de_prueba()\">ciudadano de prueba</a>.</div>"
 + "                </div>"
 + "              </div>"
 + "            </div>"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ app:{ type:Object,
required:true
}
},
data() {try {
return { autenticacion:undefined,
nombre:undefined,
contrasenya:undefined,
error:undefined,
otros:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ mostrar_error:function( error ) {try {
this.error = error;
setTimeout( () => {try {
this.error = undefined;
} catch(error) {
console.log(error);
throw error;
}

},
5000 );
} catch(error) {
console.log(error);
throw error;
}

},
autentificarse:async function() {try {
const respuesta = (await democracia20.autentificarse( this.nombre,
this.contrasenya ));
console.log(respuesta);
this.autenticacion = { nombre:this.nombre,
contrasenya:this.contrasenya
};
} catch(error) {
this.mostrar_error( error );}
},
autentificarse_como_ciudadano_de_prueba:async function() {try {
this.nombre = "administrador";
this.contrasenya = "admin-no-mucho";
return this.autentificarse(  );
} catch(error) {
this.mostrar_error( error );}
}
},
watch:{ autenticacion:function( nuevo_valor ) {try {
this.app.autenticacion = nuevo_valor;
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);
const PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <MigasDePan :app=\"app\" :seccion=\"['🏛']\" />"
 + "    <ul>"
 + "      <li>"
 + "        <span class=\"link_active\">Inicio</span>"
 + "      </li>"
 + "      <li>"
 + "        <span class=\"link\" v-on:click=\"() => $router.history.push('/votaciones')\">Votaciones</span>"
 + "      </li>"
 + "      <li>"
 + "        <span class=\"link\" v-on:click=\"() => $router.history.push('/problemas')\">Problemas</span>"
 + "      </li>"
 + "      <li>"
 + "        <span class=\"link\" v-on:click=\"() => $router.history.push('/soluciones')\">Soluciones</span>"
 + "      </li>"
 + "      <li>"
 + "        <span class=\"link\" v-on:click=\"() => $router.history.push('/implementaciones')\">Implementaciones</span>"
 + "      </li>"
 + "    </ul>"
 + "  </div>",
  function(component) {return { props:{ app:{ type:Object,
required:true
}
},
data() {try {
return { error:undefined,
otros:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ mostrar_error:function( error ) {try {
this.error = error;
setTimeout( () => {try {
this.error = undefined;
} catch(error) {
console.log(error);
throw error;
}

},
5000 );
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);
const PaginaDeVotaciones = Castelog.metodos.un_componente_vue2("PaginaDeVotaciones",
  "<div class=\"PaginaDeVotaciones Component\">"
 + "    <MigasDePan :app=\"app\" :seccion=\"['🏛','Votaciones']\" />"
 + "    <ul>"
 + "      <li>"
 + "        <span class=\"link\" v-on:click=\"() => $router.history.push('/')\">Volver</span>"
 + "      </li>"
 + "    </ul>"
 + "  </div>",
  function(component) {return { props:{ app:{ type:Object,
required:true
}
},
data() {try {
return { error:undefined,
otros:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ mostrar_error:function( error ) {try {
this.error = error;
setTimeout( () => {try {
this.error = undefined;
} catch(error) {
console.log(error);
throw error;
}

},
5000 );
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);
const PaginaDeProblemas = Castelog.metodos.un_componente_vue2("PaginaDeProblemas",
  "<div class=\"PaginaDeProblemas Component\">"
 + "    <MigasDePan :app=\"app\" :seccion=\"['🏛','Problemas']\" />"
 + "    <ul>"
 + "      <li>"
 + "        <span class=\"link\" v-on:click=\"() => $router.history.push('/')\">Volver</span>"
 + "      </li>"
 + "    </ul>"
 + "  </div>",
  function(component) {return { props:{ app:{ type:Object,
required:true
}
},
data() {try {
return { error:undefined,
otros:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ mostrar_error:function( error ) {try {
this.error = error;
setTimeout( () => {try {
this.error = undefined;
} catch(error) {
console.log(error);
throw error;
}

},
5000 );
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);
const PaginaDeSoluciones = Castelog.metodos.un_componente_vue2("PaginaDeSoluciones",
  "<div class=\"PaginaDeSoluciones Component\">"
 + "    <MigasDePan :app=\"app\" :seccion=\"['🏛','Soluciones']\" />"
 + "    <ul>"
 + "      <li>"
 + "        <span class=\"link\" v-on:click=\"() => $router.history.push('/')\">Volver</span>"
 + "      </li>"
 + "    </ul>"
 + "  </div>",
  function(component) {return { props:{ app:{ type:Object,
required:true
}
},
data() {try {
return { error:undefined,
otros:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ mostrar_error:function( error ) {try {
this.error = error;
setTimeout( () => {try {
this.error = undefined;
} catch(error) {
console.log(error);
throw error;
}

},
5000 );
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);
const PaginaDeImplementaciones = Castelog.metodos.un_componente_vue2("PaginaDeImplementaciones",
  "<div class=\"PaginaDeImplementaciones Component\">"
 + "    <MigasDePan :app=\"app\" :seccion=\"['🏛','Implementaciones']\" />"
 + "    <ul>"
 + "      <li>"
 + "        <span class=\"link\" v-on:click=\"() => $router.history.push('/')\">Volver</span>"
 + "      </li>"
 + "    </ul>"
 + "  </div>",
  function(component) {return { props:{ app:{ type:Object,
required:true
}
},
data() {try {
return { error:undefined,
otros:{ 
}
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ mostrar_error:function( error ) {try {
this.error = error;
setTimeout( () => {try {
this.error = undefined;
} catch(error) {
console.log(error);
throw error;
}

},
5000 );
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);
const App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <PaginaDeLogin :app=\"mismo\" v-if=\"typeof autenticacion === 'undefined'\" style=\"z-index: 9999;\" />"
 + "    <div v-else>"
 + "      <router-view :app=\"mismo\"></router-view>"
 + "    </div>"
 + "  </div>",
  function(component) {return { data() {try {
return { autenticacion:undefined,
mismo:this
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {
},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/login",
name:"Login",
component:PaginaDeLogin,
props:{ 
}
},
{ path:"/",
alias:"/🏛",
name:"Inicio",
component:PaginaDeInicio,
props:{ 
}
},
{ path:"/votaciones",
name:"PaginaDeVotaciones",
component:PaginaDeVotaciones,
props:{ 
}
},
{ path:"/problemas",
name:"PaginaDeProblemas",
component:PaginaDeProblemas,
props:{ 
}
},
{ path:"/soluciones",
name:"PaginaDeSoluciones",
component:PaginaDeSoluciones,
props:{ 
}
},
{ path:"/implementaciones",
name:"PaginaDeImplementaciones",
component:PaginaDeImplementaciones,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");