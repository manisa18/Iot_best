import React, { useContext } from 'react'
import { QuizContext } from '../Help/Context'
import "../App.css"

function MainMenu() {

    const { gameState, setGameState } = useContext(QuizContext)

    return (

        <div className="Menu startHome">
            {/* <button onClick="goToQuiz()">Start!!!</button> */}
            <button onClick={() => {
                setGameState("quiz");
            }}>Start!!!</button>
        </div>
    )
}

export default MainMenu