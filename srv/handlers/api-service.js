const cds = require('@sap/cds');

const { Proyectos } = cds.entities;
module.exports = cds.service.impl((srv) => {

    srv.on('crearProyecto', async (req) => {


        let datos = req.data;
        datos.technology = datos.technology.toUpperCase();
        datos.difficulty = datos.difficulty.toUpperCase();

        const resultado = await logicaNegocio(datos);

        if (resultado == null)
            req.reject(405, 'Logica de negocio no encontrada;')


        let { ID: nuevoID } = await SELECT.one.from(Proyectos).columns('max(ID) as ID');

        if (typeof nuevoID !== 'number')
            nuevoID = 0;
        else
            nuevoID++;


        const CQNinsert = {
            INSERT: {
                into: { ref: ['Proyectos'] },
                entries: [
                    { ID: nuevoID, MD: resultado, technology: datos.technology, difficulty: datos.difficulty }]
            }
        }

        await cds.run(CQNinsert);

        await req.reply(`Se ha creado el proyecto con el ID ${nuevoID}.`);

    });

});

const logicaNegocio = (datos) => {

    let res;

    switch (datos.technology) {
        case 'HTML':

            switch (datos.difficulty) {
                case 'ALTO':
                    res = 3;
                    break;
                default:
                    res = 1;
                    break;
            }

            break;

        case 'CSS':
            switch (datos.difficulty) {
                case 'ALTO':
                    res = 3;
                    break;
                default:
                    res = 1;
                    break;
            }
            break;

        case 'JAVA':
            switch (datos.difficulty) {
                case 'BAJO':
                    res = 1;
                    break;
                case 'MEDIO':
                    res = 3;
                    break;
                case 'ALTO':
                    res = 3
                    break;
            }
            break;

        case 'SAPUI5':
            switch (datos.difficulty) {
                case 'BAJO':
                    res = 1;
                    break;
                case 'MEDIO':
                    res = 3;
                    break;
                case 'ALTO':
                    res = 3
                    break;
            }
            break;

        case 'JAVASCRIPT':
            switch (datos.difficulty) {
                case 'BAJO':
                    res = 1;
                    break;
                case 'MEDIO':
                    res = 3;
                    break;
                case 'ALTO':
                    res = 5
                    break;
            }
            break;
    }

    return res;

}