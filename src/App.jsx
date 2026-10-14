import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import FeaturedProjects from "./components/featuredProjects";
import Projects from "./pages/projects";
import Timeline from "./components/timeline";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <FeaturedProjects />
              <Timeline />
              <Contact />
            </>
          }
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;