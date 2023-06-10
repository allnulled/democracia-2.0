module.exports = async function (req, reglas_arg = {}) {
    try {
        const autentificacion = await this.utilidades.autentificar_peticion(req);
        const nombres_de_grupos = autentificacion.grupos.map(grupo => grupo.nombre);
        const nombres_de_permisos = autentificacion.permisos.map(permiso => permiso.nombre);
        const reglas = Object.assign({}, { grupos: [], permisos: [] }, reglas_arg);
        let tiene_permiso = false;
        Comprobar_si_tiene_permiso: {
            if (reglas.usuarios && reglas.usuarios.length) {
                for(let index_usuario = 0; index_usuario < reglas.usuarios.length; index_usuario++) {
                    const nombre_de_usuario = reglas.usuarios[index_usuario];
                    if (autentificacion.usuario.nombre === nombre_de_usuario) {
                        tiene_permiso = "(usuario) " + nombre_de_usuario;
                        break Comprobar_si_tiene_permiso;
                    }
                    console.log(autentificacion.usuario.nombre, nombre_de_usuario);
                }
            }
            if (reglas.grupos && reglas.grupos.length) {
                console.log("Filtrando por grupos:", nombres_de_grupos, reglas.grupos);
                for (let index_grupo = 0; index_grupo < reglas.grupos.length; index_grupo++) {
                    const nombre_de_grupo = reglas.grupos[index_grupo];
                    console.log(nombre_de_grupo);
                    if (nombres_de_grupos.indexOf(nombre_de_grupo) !== -1) {
                        tiene_permiso = "(grupo) " + nombre_de_grupo;
                        break Comprobar_si_tiene_permiso;
                    }
                    console.log(nombre_de_grupo);
                }
            }
            if (reglas.permisos && reglas.permisos.length) {
                console.log("Filtrando por permisos:", nombres_de_permisos, reglas.permisos);
                for (let index_permiso = 0; index_permiso < reglas.permisos.length; index_permiso++) {
                    const nombre_de_permiso = reglas.permisos[index_permiso];
                    console.log(nombre_de_permiso);
                    if (nombres_de_permisos.indexOf(nombre_de_permiso) !== -1) {
                        tiene_permiso = "(permiso) " + nombre_de_permiso;
                        break Comprobar_si_tiene_permiso;
                    }
                }
            }
        }
        No_incluir_si_tiene_permiso: {
            if (tiene_permiso) {
                return true;
            }
            throw new Error("No incluído por falta de permisos");
        }
    } catch (error) {
        throw error;
    }
}