import Buy from "pages/Buy";
import Home from "pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AfterConnect from './pages/AfterConnect'
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/after-connect" element={<AfterConnect/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
