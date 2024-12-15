import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Lendings from "./components/Lendings";
import _404 from "./components/_404";

export default function App() {
  return (
<Router>
    <div className="h-screen flex">
      <SideBar />
      <main className="flex flex-col flex-grow">
        <Navbar />
<Routes>
              <Route path="/" element={<Lendings />} />
              <Route path="/lendings" element={<Lendings />} />
              <Route path="*" element={<_404 />} />
            </Routes>
      </main>
    </div>
</Router>
  );
}
