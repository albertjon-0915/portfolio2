import "./App.scss";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Error from "./pages/error";
import Signup from "./pages/signup";

function App() {
     return (
          <Router>
               <Navbar />
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/logout" element={<Home />} />
                    <Route path="/*" element={<Error />} />
               </Routes>
          </Router>
     );
}

export default App;
