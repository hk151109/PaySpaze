import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Index from "./Pages/Index";
import Welcome from "./Pages/Welcome";
import AuthPage from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import ForgetPwPage from "./Pages/ForgetPw";
import ResetPwPage from "./Pages/ResetPw";
import PaymentPage from "./Pages/PaymentPage";
import Navbar from "./Components/Navbar";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>

      {/* Routes define page components */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/AuthpPage" element={<AuthPage />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/ForgetPw" element={<ForgetPwPage />} />
        <Route path="/ResetPw/:token" element={<ResetPwPage />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
