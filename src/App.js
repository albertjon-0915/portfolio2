import "./App.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Error from "./pages/error";
import Login from "./pages/login";
import Register from "./pages/register";
import Projects from "./pages/works";
import scrollToTop from "./scrollTop";

function App() {
     return (
          <Router>
               <Navbar />
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/works" element={<Projects />} />
                    <Route path="/logout" element={<Home />} />
                    <Route path="/*" element={<Error />} />
               </Routes>
          </Router>
     );
}

export default App;
