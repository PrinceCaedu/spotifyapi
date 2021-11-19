function printWin () {
    console.log( "Win" )
}

function printLose () {
    console.log( "lose" )

}

function printTie () {
    console.log( "Tie" )
}

const print = {
    win: printWin,
    lose: printLose,
    tie: printTie

}

module.exports = print