import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ComponentRoutes from "./Routes/ComponentRoutes";
import Header from "./Screens/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
          <div className="text-center">
            <ComponentRoutes />
          </div>
      </div>
    </Router>
  );
};

export default App;
