import React from "react";
import {Route} from "react-router-dom";
import SpeakMain from "../pages/SpeakMain";
import SpeakDetail from "../pages/SpeakDetail";

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={SpeakMain}/>
      <Route path="/detail" exact component={SpeakDetail}/>
    </React.Fragment>
  );
}
export default App;
