import { useState } from "react"
import "../../App.css"
import Button from "./Button"
import { useNavigate } from "react-router-dom"
function App() {
    const navigate=useNavigate()
    const updateArray = () => {
        window.location.reload()
    }
    return (
        <div className="multi__wrapper">
            <div className="hero__wrapper play__wrapper__width">
                <h1 className="hero__title">Tic-Tac-Toe: Single Player!</h1>
                <p>Grab a friend and see who can outsmart the other in this timeless two-player game! Take turns placing your 😀’s and 💗’s, and if you need a fresh start, just click the 'Restart' button to play again.</p>
                <button onClick={updateArray}>Start New Game</button>
                <button onClick={() => navigate("/")}>Back</button>
            </div>
            <div className="main__body">
                <Button />
            </div>
        </div>
    )
}

export default App