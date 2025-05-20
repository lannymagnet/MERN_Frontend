import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rules from "../pages/Rules/Rules";
import Quiz from "../pages/Quiz/Quiz";
import Home from "../pages/Home/Home";
import Admin from "../pages/Admin/Admin";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}
