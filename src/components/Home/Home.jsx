import { useNavigate } from "react-router-dom"
import "./home.css"

export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="home__wrapper">
            <div className="hero__wrapper hero__wrapper__width">
                <h1 className="hero__title">Tic-Tac-Toe: A Classic Battle of Wits!</h1>
                <p>Challenge your mind and test your strategy in the ultimate Tic-Tac-Toe showdown! Whether you're up for a quick solo game or ready to take on friends, it's time to mark your X's and O's and claim victory.</p>
                <button onClick={()=>navigate("single")}>Sngle Player</button>
                <button onClick={()=>navigate("multiple")}>Multi Player</button>
            </div>
        </div>
    )
}