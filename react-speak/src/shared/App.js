import React from "react";
import {Route} from "react-router-dom";
import SpeakMain from "../pages/SpeakMain";
import SpeakDetail from "../pages/SpeakDetail";
import SpeakWrite from "../pages/SpeakWrite";

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact component={SpeakMain}/>
      <Route path="/detail" exact component={SpeakDetail}/>
      <Route path="/write" exact component={SpeakWrite}/>
    </React.Fragment>
  );
}
export default App;
