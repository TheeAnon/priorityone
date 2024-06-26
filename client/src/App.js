import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Podcasts from "./pages/podcast/index";
import CreatePodcast from "./pages/podcast/create";
import ImageCropProvider from "./components/crop/ImageCropProvider.jsx";

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
        <Route
          path="/podcast/create"
          element={
            <ImageCropProvider>
              <CreatePodcast />
            </ImageCropProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
