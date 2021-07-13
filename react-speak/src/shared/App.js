import React from "react";
import Grid from "../elements/Grid";
import Header from "../elements/Header";
import Button from "../elements/Button";
import Text from "../elements/Text";

function App() {
  return (
    <React.Fragment>

      <Grid bg="#636e72">
        <Header bg="#636e72" padding="100px"/>
      </Grid>
    

      <Grid bg="#636e72" padding="20px" width="600px" margin="auto">
        <Text bold size="24px">test</Text>
      </Grid>
      <Button text="추가하기" width="300px" margin="12px auto"></Button>

    </React.Fragment>
  );
}

export default App;
