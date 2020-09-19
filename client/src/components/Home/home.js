import React from "react";
import { Link } from 'react-router-dom';

function Home() {
   return (
      <div id="navbar">
         <button className="btn-primary"><Link to="/login">Login!</Link></button>
         <button className="btn-primary"><Link to="/signup">Sign Up!</Link></button>
         <button className="btn-primary"><Link to="/search">Continue as Guest!</Link></button>
      </div>
   );
}

export default Home; 