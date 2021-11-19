const prompt = require( "./Prompt" )

const options = [
    "rock",
    "paper",
    "scissor"
]

main()

async function main () {

    printOptions()
    const playerOption = await getPlayerOption()

    isOptionValid()

    const aiOption = pickAiOption()
    console.log( "ai chose", aiOption )

    const winOne = playerOption === options[ 0 ] && aiOption === options[ 2 ]
    const winTwo = playerOption === options[ 1 ] && aiOption === options[ 0 ]
    const winThree = playerOption === options[ 2 ] && aiOption === options[ 1 ]
    const tie = playerOption === aiOption


    pickWinner()

    process.exit()

    async function getPlayerOption(){
        const playerMoveIndex = await prompt( "pick your move (1, 2 or 3)" )
        const playerOption = options[playerMoveIndex-1]
        return playerOption
    }

    function printOptions(){
        for( let i = 0; i < options.length; i++ ){
            console.log(`${i+1} - ${options[i]}`)
        }
        
    }

    function printWin () {
        console.log( "Win" )
    }

    function printLose () {
        console.log( "lose" )

    }

    function printTie () {
        console.log( "Tie" )
    }

    function isOptionValid () {

        if ( !options.includes( playerOption ) ) {

            console.log( "invalid option" )
            process.exit()
        }

    }

    function pickAiOption () {
        const randomIndex = Math.floor( Math.random() * options.length )
        const aiOption = options[ randomIndex ]
        return aiOption
    }

    function pickWinner () {
        if ( tie ) {
            printTie()
            process.exit()
        }

        if ( winOne || winTwo || winThree ) {
            printWin()
        } else {
            printLose()
        }

    }
}