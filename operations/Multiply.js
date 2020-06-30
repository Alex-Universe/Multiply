const fs = require('fs'); //Libreria nativa de Node


let createFile = async(base, limit = 10) => {
    if (!Number(base)) {
        throw new Error(`${base} is not valid number`);
    }

    let data = '';

    for (let i = 1; i <= limit; i++) {
        data += (`${base} x ${i} = ${base*i}\n`)
    }

    fs.writeFile(`outputs/table-${base}.txt`, data, (err) => {
        if (err) { throw new Error `Colud not create the file` }
    })

    return `outputs/table-${base}.txt`
}

let listTable = async(base, limit = 10 /*Default*/ ) => {
    if (!Number(base) || !Number(limit)) {
        throw new Error(`Not valid number`);
    }
    let data = ''
    for (let i = 1; i <= limit; i++) {
        data += `${base} x ${i} = ${base*i}\n`
    }

    return data
}

module.exports = {
    createFile, //hace publica la funcion createFile
    listTable
}

//console.log(module)