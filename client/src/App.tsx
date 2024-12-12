import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="h-screen flex">
      <SideBar />
      <main className="flex flex-col flex-grow">
        <Navbar />
      </main>
    </div>
  );
}
