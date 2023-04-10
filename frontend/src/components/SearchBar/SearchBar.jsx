import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"
import axios from "axios";
//import { KEY } from "./src/localKey";
import useCustomForm from "../../hooks/useCustomForm";

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };
    
    useEffect(() => {
      const fetchVideos = async () => {
        try {
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchInput}&key=AIzaSyAfAZA99jrGQi7h38MTSMxZ-l5PJWRNFS0&part=snippet&type=video&maxResults=10`)
          setSearchInput(response.data)
        }
        catch (error) {
          console.log(error.response.data);
        }
      };
      fetchVideos();
    }, [`https://www.googleapis.com/youtube/v3/search?q=${searchInput}&key=AIzaSyAfAZA99jrGQi7h38MTSMxZ-l5PJWRNFS0&part=snippet&type=video&maxResults=10`]);


  return (
    <div className="SearchBar-Container">
      <FaSearch id="search-icon" />
      
      <input type="text" placeholder="Search here" onChange={e => setSearchInput(useCustomForm.handleInputChange)} value={searchInput} /><button type="submit">Search</button>

    </div>
  );
}
 
export default SearchBar;