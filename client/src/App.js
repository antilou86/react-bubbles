import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import BubblePage from "./components/BubblePage";
import FormikLogin from "./components/Login";
import "./styles.scss";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={props => <FormikLogin props={props} />} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path='/bubble-page' component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;
