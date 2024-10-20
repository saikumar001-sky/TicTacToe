import { useState } from "react"
import "../../App.css"
import Button from "./Button"
function App() {
  const updateArray = () => {
    window.location.reload()
  }
  return (
    <>
    <h3>Want to play single</h3>
      <div>
        <button onClick={updateArray} className="restart__btn">Restart</button>
      </div>
      <div className="main__body">
        <Button />
      </div>
    </>
  )
}

export default App
