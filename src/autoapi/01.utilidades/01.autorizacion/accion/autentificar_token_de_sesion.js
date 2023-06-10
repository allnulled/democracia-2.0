const obtener_campos_de_autentificacion = function() {
    return `
                    Usuario.id as 'Usuario.id',
                    Usuario.nombre as 'Usuario.nombre',
                    Usuario.correo as 'Usuario.correo',
                    Grupo.id as 'Grupo.id',
                    Grupo.nombre as 'Grupo.nombre',
                    Grupo.detalles as 'Grupo.detalles',
                    Permiso.id as 'Permiso.id',
                    Permiso.nombre as 'Permiso.nombre',
                    Permiso.detalles as 'Permiso.detalles',
                    Sesion.id as 'Sesion.id',
                    Sesion.id_usuario as 'Sesion.id_usuario',
                    Sesion.token_de_sesion as 'Sesion.token_de_sesion'
    `;
};

const formatear_datos_de_sesion_brutos = function(datos_de_sesion_en_bruto = []) {
    const datos_de_sesion = {
        usuario: null,
        grupos: [],
        permisos: [],
        sesion: null,
    };
    for(let index = 0; index < datos_de_sesion_en_bruto.length; index++) {
        const fila = datos_de_sesion_en_bruto[index];
        Formatear_datos_de_usuario: {
            if(fila["Usuario.id"]) {
                if (datos_de_sesion.usuario) {
                    throw new Error("La autentificación se completó con más de 1 usuario");
                }
                datos_de_sesion.usuario = {
                    id: fila["Usuario.id"],
                    nombre: fila["Usuario.nombre"],
                    contrasenya: fila["Usuario.contrasenya"],
                    correo: fila["Usuario.correo"],
                    activado: fila["Usuario.activado"],
                };
            }
        }
        Formatear_datos_de_grupos: {
            if(fila["Grupo.id"]) {
                const id_grupo_1 = fila["Grupo.id"];
                let esta_incluida = false;
                for(let index_grupo = 0; index_grupo < datos_de_sesion.permisos.length; index_grupo++) {
                    const contrafila = datos_de_sesion.permisos[index_grupo];
                    const id_grupo_2 = contrafila.id;
                    if (id_grupo_1 === id_grupo_2) {
                        esta_incluida = true;
                    }
                }
                if(!esta_incluida) {
                    datos_de_sesion.grupos.push({
                        id: fila["Grupo.id"],
                        nombre: fila["Grupo.nombre"],
                        detalles: fila["Grupo.detalles"],
                    });
                }
            }
        }
        Formatear_datos_de_permisos: {
            if (fila["Permiso.id"]) {
                const id_grupo_1 = fila["Permiso.id"];
                let esta_incluida = false;
                for (let index_grupo = 0; index_grupo < datos_de_sesion.permisos.length; index_grupo++) {
                    const contrafila = datos_de_sesion.permisos[index_grupo];
                    const id_grupo_2 = contrafila.id;
                    if (id_grupo_1 === id_grupo_2) {
                        esta_incluida = true;
                    }
                }
                if (!esta_incluida) {
                    datos_de_sesion.permisos.push({
                        id: fila["Permiso.id"],
                        nombre: fila["Permiso.nombre"],
                        detalles: fila["Permiso.detalles"],
                    });
                }
            }
        }
        Formatear_datos_de_sesion: {
            if (fila["Sesion.id"]) {
                const id_grupo_1 = fila["Sesion.id"];
                let esta_incluida = false;
                for (let index_sesion = 0; index_sesion < datos_de_sesion.length; index_sesion++) {
                    const contrafila = datos_de_sesion[index_sesion];
                    const id_sesion_2 = contrafila.id;
                    if (id_sesion_1 === id_sesion_2) {
                        esta_incluida = true;
                    }
                }
                if (!esta_incluida) {
                    datos_de_sesion.sesion = {
                        id: fila["Sesion.id"],
                        id_usuario: fila["Sesion.id_usuario"],
                        token_de_sesion: fila["Sesion.token_de_sesion"],
                    };
                }
            }
        }
    }
    return datos_de_sesion;
};

module.exports = async function (token_de_sesion = false) {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.autentificar_token_de_sesion");
        const { comprueba } = this.dependencias.instancia;
        const { sanitizar_valor } = this.utilidades.datos.funcion;
        Validar_parametros: {
            comprueba.que(token_de_sesion, "token_de_sesion", "el parámetro «token_de_sesion» debe ser un texto al «autentificar_token_de_sesion»").es_texto();
        }
        let token_de_sesion_sanitizado = undefined;
        let campos_de_autentificacion = obtener_campos_de_autentificacion();
        let resultado_1, resultado_2;
        let datos_de_sesion = undefined;
        let db = undefined;
        Formatear_parametros: {
            token_de_sesion_sanitizado = sanitizar_valor(token_de_sesion);

        }
        Obtener_base_de_datos: {
            db = this.datos.conexion.instancia.segun_tabla("Sesion");
        }
        Seleccionar_usuario: {
            const sql = `
                SELECT ${campos_de_autentificacion}
                FROM Sesion
                LEFT JOIN Usuario ON Usuario.id = Sesion.id_usuario
                LEFT JOIN Permisos_por_usuario ON Permisos_por_usuario.id_usuario = Usuario.id
                LEFT JOIN Grupos_por_usuario ON Grupos_por_usuario.id_usuario = Usuario.id
                LEFT JOIN Permisos_por_grupo ON Permisos_por_grupo.id_grupo = Grupos_por_usuario.id_grupo
                LEFT JOIN Grupo ON Grupo.id = Grupos_por_usuario.id_grupo
                LEFT JOIN Permiso ON Permiso.id IN (Permisos_por_usuario.id_permiso, Permisos_por_grupo.id_permiso)
                WHERE Sesion.token_de_sesion = ${token_de_sesion_sanitizado};
            `;
            resultado_1 = await db.consultar(sql);
            if (resultado_1.length !== 1) {
                throw new Error("El «token_de_sesion» referido no está registrado en la base de datos al «autentificar_token_de_sesion»");
            }
            datos_de_sesion = formatear_datos_de_sesion_brutos(resultado_1);
        }
        return datos_de_sesion;
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.autentificar_token_de_sesion", error);
        throw error;
    }
};