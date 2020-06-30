/*
 * File System & Yargs
 */

const multiply = require('./operations/Multiply.js');
const argv = require('./config/Yargs.js').argv;
const colors = require('colors');

//Leer parametro por consola
//let base = process.argv[2].split('=')[1]; //ejecutar: node app.js base = [valor]

let command = argv._[0]; //node App.js ${command} --base X --limit Y
//console.log(command);

switch (command) {
    case 'listar':
        console.log(`Listar Base: ${argv.base} ; Limite: ${argv.limit}`)

        multiply.listTable(argv.base, argv.limit)
            .then(data => console.log(data.rainbow))
            .catch(err => console.log(colors.red(err)));

        break;

    case 'crear':
        console.log(`Crear Base: ${argv.base} ; Limite: ${argv.limit}`)

        multiply.createFile(argv.base, argv.limit)
            .then(file => console.log(`File Created ${file}`.gray))
            .catch(err => console.log(colors.red(err)));
        break;

    default:
        console.log('Not reconized comand')

}

//console.log(multiply)