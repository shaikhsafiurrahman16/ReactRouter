import { BrowserRouter,Routes,Route,Link } from "react-router";
import  Home from "./myRouters/Home"
import  About from "./myRouters/About"
import Navbar from './myRouters/Navbar'
import Contact from "./myRouters/Contact"
import PageNotFound from "./myRouters/PageNotFound";
import Search from "./myRouters/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Link to="/home">Home</Link>
        <br />
        <Link to="/about">about</Link> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
