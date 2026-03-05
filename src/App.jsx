import { Route, Routes } from "react-router-dom";
import "./App.css";
import Background from "./components/Background";
import Navbar from "./components/layouts/Navbar";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import OtpVerify from "./components/pages/OtpVerify";
import CreateProfile from "./components/pages/CreateProfile";

function App() {
  return (
    <>
      <div className="h-screen" style={{ width: "100%", position: "relative" }}>
        <Background
          particleColors={["#000"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/otp" element={<OtpVerify/>}/>
            <Route path="/profiecreate" element={<CreateProfile/>}/>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
