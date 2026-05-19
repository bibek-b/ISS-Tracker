import { BrowserRouter, Route, Routes } from "react-router-dom";
import ISSTracker from "./pages/ISSTracker";
import Navbar from "./components/Navbar";
import AboutISS from "./pages/AboutIss";
import CameraView from "./pages/CameraView";
import AstronautsInfo from "./pages/AstronautsInfo";
import LearnTerms from "./pages/LearnTerms";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ISSTracker />} />
        <Route path="/cameraView" element={<CameraView />} />
        <Route path="/astronautsInfo" element={<AstronautsInfo />} />
        <Route path="/aboutIss" element={<AboutISS />} />
        <Route path="/learnTerms" element={<LearnTerms />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
