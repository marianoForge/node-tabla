const fs = require('fs');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    await console.log('Tabla del:', base);
    let salida,
      consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.blue} ${base * i}\n`;
    }

    if (listar) {
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `Tabla del ${base} Creada`;
  } catch (error) {
    throw error;
  }
};

module.exports = { crearArchivo };
