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
import SearchResultsPage from "./pages/YouTubePage/SearchResultsPage";

function App() {
  return (
    <div>
      <Navbar />
     
      <Routes>
        <Route path="/" element = {<SearchResultsPage/>} />
        <Route path="/user" element={<PrivateRoute><YouTubePage /></PrivateRoute>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
