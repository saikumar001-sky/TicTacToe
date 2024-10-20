import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import SinglePlay from "./components/singlePlayer/SinglePlay"
import MultiPlay from "./components/multiPlayer/MultiPlay"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/single" element={<SinglePlay />}></Route>
        <Route path="/multiple" element={<MultiPlay />}></Route>
      </Routes>
    </>
  )
}

export default App
