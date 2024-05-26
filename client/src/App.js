import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {["/contact", "/contact-us"].map((path) => (
          <Route path={path} element={<Contact />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
