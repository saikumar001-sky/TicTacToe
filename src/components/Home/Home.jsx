import "./home.css"
export default function Home() {
    return (
        <div className="home__wrapper">
            <div className="hero__wrapper">
                <h1 className="hero__title">Tic-Tac-Toe: A Classic Battle of Wits!</h1>
                <p>Challenge your mind and test your strategy in the ultimate Tic-Tac-Toe showdown! Whether you're up for a quick solo game or ready to take on friends, it's time to mark your X's and O's and claim victory.</p>
                <button>Single Player</button>
                <button>Multiplayer</button>
            </div>
        </div>
    )
}