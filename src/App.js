import Header from "./Components/header"
import Intro from "./Components/Intro"
import { Route, Routes } from "react-router"
import Home from "./Components/homePage"
import Details from "./Components/details"


const App = () => {

  return (
    <>
    <Header />
    <Intro />
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
    </>
  )
}
export default App

 