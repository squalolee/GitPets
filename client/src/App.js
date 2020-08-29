import React from 'react';
import './App.css';
import Search from "../src/components/Search/search";
import Nav from "../src/components/Nav/nav";
import Footer from "../src/components/Footer/footer"


function App() {
  return (
    <div>
      <h1>GitPets</h1>
      <Nav />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
