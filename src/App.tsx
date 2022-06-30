import React from "react";
import "./App.css";
import UserContainer from "./users/UserContainer";

// As a Functional Component (FC)
const App: React.FC = () => {
  return (
    <div className="App">
      <div className="app-container">
        <h2 className="app-title">User Card</h2>
        <UserContainer />
      </div>
    </div>
  );
};

export default App;
