import { BrowserRouter } from "react-router-dom";

import {
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Tech,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-red-900 opacity-60"></div>
          <Navbar />
          <Hero />
        </div>
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
