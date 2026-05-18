import { BrowserRouter, Route, Routes } from "react-router-dom";
import ISSTracker from "./pages/ISSTracker";
import Navbar from "./components/Navbar";
import AboutISS from "./pages/AboutIss";
import CameraView from "./pages/CameraView";
import AstronautsInfo from "./pages/AstronautsInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ISSTracker />} />
        <Route path="/cameraView" element={<CameraView />} />
        <Route path="/astronautsInfo" element={<AstronautsInfo />} />
        <Route path="/aboutIss" element={<AboutISS />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
