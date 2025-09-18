import { BrowserRouter,Routes,Route,Link } from "react-router";
import  Home from "./myRouters/Home"
import  About from "./myRouters/About"
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/home">Home</Link>
        <br />
        <Link to="/about">about</Link>
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
