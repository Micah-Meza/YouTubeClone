// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCarPage from "./pages/AddCarPage/AddCarPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <YouTubePage />
      <Routes>
        <Route path="/" element={ <PrivateRoute> <HomePage /> </PrivateRoute> } />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addCar" element={<PrivateRoute><AddCarPage /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
