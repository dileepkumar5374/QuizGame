import React from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Quiz />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
