module.exports = async function (nombre, correo, contrasenya, otros = "{}") {
    try {
        this.utilidades.tracear("this.utilidades.autorization.accion.registrarse");
        const { comprueba } = this.dependencias.instancia;
        Validar_parametros: {
            comprueba.que(nombre, "nombre", "el parámetro «nombre» debe ser un texto «al registrarse»").es_texto();
            comprueba.que(nombre, "nombre", "el parámetro «nombre» debe tener más de 1 caracter «al registrarse»").tiene_longitud_mayor_que(1);
            comprueba.que(contrasenya, "contrasenya", "el parámetro «contrasenya» debe ser un texto «al registrarse»").es_texto();
            comprueba.que(contrasenya, "contrasenya", "el parámetro «contrasenya» debe tener más de 5 caracteres «al registrarse»").tiene_longitud_mayor_que(5);
            comprueba.que(correo, "correo", "el parámetro «correo» debe ser un texto «al registrarse»").es_texto();
            comprueba.que(correo, "correo", "el parámetro «correo» debe tener más de 5 caracteres «al registrarse»").tiene_longitud_mayor_que(5);
            comprueba.que(otros, "otros", "el parámetro «otros» debe ser un texto «al registrarse»").es_texto();
            comprueba.que(otros, "otros", "el parámetro «otros» debe ser un jsonable «al registrarse»").es_jsonable();
            comprueba.que(otros, "otros", "el parámetro «otros» debe tener menos de 500 caracteres «al registrarse»").tiene_longitud_menor_que(500);
        }
        let nombre_formateado = undefined;
        let contrasenya_formateado = undefined;
        let correo_formateado = undefined;
        let otros_formateado = undefined;
        Formatear_parametros: {
            nombre_formateado = nombre;
            contrasenya_formateado = contrasenya;
            correo_formateado = correo;
            otros_formateado = JSON.parse(otros);
        }
        Ingresar_usuario_no_registrado_en_base_de_datos: {
            
        }
    } catch (error) {
        this.utilidades.error("this.utilidades.autorization.accion.registrarse", error);
        throw error;
    }
};