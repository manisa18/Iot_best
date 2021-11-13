import React, { useContext} from 'react'
import { QuizContext} from "../Help/Context"
import Questions from '../Help/Question'
import "../App.css"

function EndScreen(){
    const {score, setScore, setGameState} = useContext(QuizContext)
    
    function restart(){
        setScore(0)
        setGameState("menu")
    }
    
    return(
        <div className="EndScreen startHome">
            <h1>SCORE</h1>
            <h2>{score} / {Questions.length}</h2>
            <button onClick={restart}>Home</button>
        </div>
    )
}

export default EndScreen