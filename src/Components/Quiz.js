import React, { useState, useContext } from 'react'
import { QuizContext } from '../Help/Context'
import Questions from '../Help/Question'
import "../App.css"

function Quiz() {

    const { score, setScore, setGameState } = useContext(QuizContext)
    const [currQuestion, setCurrQuestion] = useState(0)
    const [count, setCount] = useState(1)
    const [optionChoosen, setOptionChoosen] = useState("")



    function nextQuestion() {
        if (Questions[currQuestion].ans == optionChoosen) {
            setScore(score + 1)
        }
        setCurrQuestion(currQuestion + 1)
        setCount(count+1)
    }


    function finishQuiz() {
        if (Questions[currQuestion].ans == optionChoosen) {
            setScore(score + 1);
        }
        setGameState("endScreen");
    }

    return (
        <div className="Quiz">
            <div className="onlyQues">
               <span><h1> Q{count}.  {Questions[currQuestion].ques}</h1></span>
            </div>
            <div className="option style">
                <button onClick={() => setOptionChoosen("ansA")}>
                    {Questions[currQuestion].A}
                </button>
                <button onClick={() => setOptionChoosen("ansB")}>
                    {Questions[currQuestion].B}
                </button>
                <button onClick={() => setOptionChoosen("ansC")}>
                    {Questions[currQuestion].C}
                </button>
                <button onClick={() => setOptionChoosen("ansD")}>
                    {Questions[currQuestion].D}
                </button>
            </div>

            <div className="finalButton">

                {(currQuestion == Questions.length - 1) ? (
                    <button onClick={finishQuiz} id="submit">
                        Submit!
                    </button>
                ) : (
                    <button onClick={nextQuestion} id="nextQuestion">
                        Next
                    </button>
                )}
            </div>




            {/* <button onClick={nextQuestion}>Next Question</button> */}
        </div>
    )
}

export default Quiz