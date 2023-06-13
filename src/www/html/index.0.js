
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"0","contenido":{"head":"<head>\n    <title>Democracia 2.0</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <script src=\"js/calo.js\"></script>\n    <script src=\"js/democracia20.cliente.js\"></script>\n    <style>\n      .static_windows_1 {\n        position: fixed; top: 0; bottom: 0; left: 0; right: 0;\n        background: url(\"img/hielos_1.png\");\n      }\n      .static_windows_2 {\n        display: table;\n        width: 100%;\n        height: 100%;\n      }\n      .static_windows_3 {\n        display: table-cell;\n        width: 100%;\n        height: 100%;\n        text-align: center;\n        vertical-align: middle;\n      }\n      .dialog_window_container_1 {\n        display: inline-block;\n        width: auto;\n      }\n      .dialog_window_container_2 {\n        width: 100%;\n      }\n    </style>\n    <style>\n    .estilo_migas_de_pan {}\n    .estilo_migas_de_pan > li {\n      display: inline-block;\n    }\n    .estilo_migas_de_pan > li > .link {\n      color: blue;\n    }\n    </style>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

const democracia20 = new window.Democracia20Comunicador( window.location.protocol + "//" + window.location.host );
const MigasDePan = Castelog.metodos.un_componente_vue2("MigasDePan",
  "<div class=\"MigasDePan Component\">"
 + "    <ul class=\"estilo_migas_de_pan\">"
 + "      <li v-for=\"(subseccion, subseccion_index) in seccion\" v-bind:key=\"'miga_de_pan_' + subseccion_index\">"
 + "        <span class=\"separador\" v-if=\"subseccion_index !== 0\"> » </span>"
 + "        <span class=\"link\"> {{ typeof subseccion === 'string' ? subseccion : subseccion.nombre }} </span>"
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
const PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <MigasDePan :app=\"app\" :seccion=\"['App','Inicio']\" />"
 + "    <ul>"
 + "      <li>"
 + "        <span class=\"link_active\">Inicio</span>"
 + "      </li>"
 + "      <li>"
 + "        <span class=\"link\">Votaciones</span>"
 + "      </li>"
 + "      <li>"
 + "        <span class=\"link\">Perfil</span>"
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
name:"Inicio",
component:PaginaDeInicio,
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