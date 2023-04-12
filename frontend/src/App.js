// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import SearchResultsPage from "./pages/YouTubePage/SearchResultsPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCarPage from "./pages/AddCarPage/AddCarPage";
import { KEY } from "./localKey";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoCard from "./components/VideoCard/VideoCard";



function App() {
  
  return (
    <div>
      <Navbar />
      <SearchBar KEY={KEY} />
      <YouTubePage />
      <Routes>
        <Route path="/" />
        <Route path="/results" element={<SearchResultsPage />} />



      { /* <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
  <Route path="/addCar" element={<PrivateRoute><AddCarPage /></PrivateRoute>} />*/}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
