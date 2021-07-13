import React from "react";
import {Route} from "react-router-dom";
import SpeakMain from "../pages/SpeakMain";

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={SpeakMain}/>
    </React.Fragment>
  );
}
export default App;
