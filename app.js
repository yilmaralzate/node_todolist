const argv = require('yargs').argv;

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear nota nueva');
        break;

    case 'borrar':
        console.log('Borrar nota');
        break;

    case 'actualizar':
    console.log('Actualizar datos de nota');
    break;
    
    case 'listar':
        console.log('Mostrar todas las notas');
        break;

    default:
        console.log('Comando invalido!'); 
        break;
}