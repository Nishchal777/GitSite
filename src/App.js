import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Program from "./pages/Program";
import Membership from "./pages/membership";
import Testimonials from "./pages/Testimonials";
import LoginForm from "./pages/LoginForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/LoginForm" element={<LoginForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
