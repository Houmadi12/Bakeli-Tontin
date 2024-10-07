import React, { Component } from "react";
import Connexion from "./pages/Connexion";
import Navbar from "./composants/navbar";


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {/* <Connexion /> */}
        <Navbar type="Admin" />
      </div>
    );
  }
}

export default App;
