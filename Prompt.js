const readLine = require( "readline")


const rl = readLine.createInterface( {
    input: process.stdin,
    output: process.stdout,

})

function prompt( messageTouser ) {
    return new Promise( (  resolve, reject ) => {
        rl.question( messageTouser, answer => {
            resolve( answer)
        })
    })
}


module.exports = prompt