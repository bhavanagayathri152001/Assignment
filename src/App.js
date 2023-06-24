import "./App.css";
import { Route, Routes } from "react-router-dom";
import LeftPanel from "./components/LeftPanel";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Information from "./components/Information";
import Guide from "./components/Guide";

const App = () => (
  <div className="app-container">
    <LeftPanel />
    <div className="responsive-container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/information" element={<Information />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
    </div>
  </div>
);

export default App;
