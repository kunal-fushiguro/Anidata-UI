import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Example from "./pages/Example";
// bas url = https://anidata-api.onrender.com/api/v1/test

const App = () => {
  return (
    <div className="bg-black text-white w-screen h-screen flex justify-center items-center font-bold flex-col">
      <div className="w-full h-[8%] flex justify-center items-center">
        <Navbar />
      </div>
      <div className="w-full h-[92%] flex justify-center items-center">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/docs" Component={Docs} />
          <Route path="/example" Component={Example} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
