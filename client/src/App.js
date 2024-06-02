import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Podcasts from "./pages/podcasts";
import CreatePodcast from "./pages/create/podcasts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {["/contact", "/contact-us"].map((path) => (
          <Route path={path} element={<Contact />} />
        ))}
        {["/about", "/about-us"].map((path) => (
          <Route path={path} element={<About />} />
        ))}
        {["/podcast", "/podcasts"].map((path) => (
          <Route path={path} element={<Podcasts />} />
        ))}
        {["/create/podcast", "/create/podcasts"].map((path) => (
          <Route path={path} element={<CreatePodcast />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
