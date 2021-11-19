const prompt = require( "./Prompt" )
const print = require( "./util" )

const options = [
    "rock",
    "paper",
    "scissor"
]

let wins = 0
let losses = 0



askToPlay()






async function askToPlay () {
    const response = await prompt( "\nPlay A Game? [y/n]" )
    if ( response === "y" ) {
        return main()
    } else {
        process.exit()
    }
}
async function main () {

    printScore()
    printOptions( options )
    const playerOption = await getPlayerOption()


    const aiOption = pickAiOption()

    pickWinner()

    async function getPlayerOption () {
        const playerMoveIndex = await prompt( "pick your move (1, 2 or 3)" )
        const playerOption = options[ playerMoveIndex - 1 ]
        console.log( playerOption + "<----------------------------")
        if( !isOptionValid( playerOption ) ) {
            console.log( "There are only 3 options dumbass..." )
            return main()
        }
        
        return playerOption
    }

    function printOptions ( opts ) {
        for ( let i = 0; i < opts.length; i++ ) {
            console.log( `${ i + 1 } - ${ opts[ i ] }` )
        }

    }

    function printScore () {
        console.log( `\nWins: ${ wins } - Losses: ${ losses }\n` )
    }



    function isOptionValid ( playerOption ) {

        if ( !options.includes( playerOption ) ) {
            return false
            //process.exit()
        }
        return true

    }

    function pickAiOption () {
        const randomIndex = Math.floor( Math.random() * options.length )
        const aiOption = options[ randomIndex ]

        console.log( "AI throws " + aiOption + "!!" )

        return aiOption
    }

    function pickWinner () {
        const winOne = playerOption === options[ 0 ] && aiOption === options[ 2 ]
        const winTwo = playerOption === options[ 1 ] && aiOption === options[ 0 ]
        const winThree = playerOption === options[ 2 ] && aiOption === options[ 1 ]
        const tie = playerOption === aiOption

        if ( tie ) {
            print.tie()
            return askToPlay()
        }

        if ( winOne || winTwo || winThree ) {
            print.win()
            wins++
        } else {
            print.lose()
            losses++
        }

        askToPlay()

    }
}