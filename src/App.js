import React from 'react';
// import PortfolioContainer from "./components/PortfolioContainer";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;


// import React from "react";
// import PortfolioContainer from "./components/PortfolioContainer";

// const App = () => <PortfolioContainer />;

// export default App;
