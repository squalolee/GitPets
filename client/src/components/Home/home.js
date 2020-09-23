import React from "react";
import { Link } from 'react-router-dom';
import "./style.css"; 

function Home() {
   return (
      <div className="center" id="navbar">
         <button className="btn-primary"><Link to="/login">Login!</Link></button>
         <button className="btn-primary"><Link to="/signup">Sign Up!</Link></button>
         <button className="btn-primary"><Link to="/search">Continue as Guest!</Link></button>
      </div>
   );
}

export default Home; 