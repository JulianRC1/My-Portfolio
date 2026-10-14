import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import FeaturedProjects from "./components/featuredProjects";
import Projects from "./pages/projects";

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
            </>
          }
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;