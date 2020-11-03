import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
