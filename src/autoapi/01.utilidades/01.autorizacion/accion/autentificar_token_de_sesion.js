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
                    Sesion.token_de_sesion as 'Sesion.token_de_sesion'
    `;
};

const formatear_datos_de_sesion_brutos = function(datos_de_sesion_en_bruto = []) {
    const datos_de_sesion = {
        usuario: undefined,
        grupos: [],
        permisos: [],
        sesion: undefined,
    };
    for(let index = 0; index < datos_de_sesion_en_bruto.length; index++) {
        const fila = datos_de_sesion_en_bruto[index];
        Formatear_datos_de_usuario: {

        }
        Formatear_datos_de_grupos: {
    
        }
        Formatear_datos_de_permisos: {
    
        }
        Formatear_datos_de_sesion: {
    
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
            datos_de_sesion = formatear_datos_de_sesion_brutos(resultado_1[0]);
        }
        return {
            autentificacion: datos_de_sesion,
            resultado: [resultado_1]
        };
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.autentificar_token_de_sesion", error);
        throw error;
    }
};