/**
 * Yargs Configuration
 */
const { demand } = require('yargs');

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        demand: false,
        alias: 'l',
        default: 10
    }
}

//Leer parametros usando Yargs
const argv = require('yargs')
    .command('listar', 'Print in the screen', opts)
    .command('crear', 'Create File', opts)
    .help()
    .argv;

module.exports = {
    argv
}

//console.log(argv);