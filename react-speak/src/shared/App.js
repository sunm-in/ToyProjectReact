import React from "react";
import Grid from "../elements/Grid";
import Header from "../elements/Header";
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
import Button from "../elements/Button";
import Text from "../elements/Text";
<<<<<<< Updated upstream

function App() {
  return (
    <React.Fragment>

      <Grid bg="#636e72">
        <Header bg="#636e72" padding="100px"/>
      </Grid>
    

      <Grid bg="#636e72" padding="20px" width="600px" margin="auto">
=======
import Input from "../elements/Input";
import styled from "styled-components";
import List from "../components/List";
function App() {
  return (
    <React.Fragment>
      <Grid width="80%" margin="auto">
        <Grid margin="auto">
          <Header bg="#636e72" padding="0px">
            <Text bold size="60px">
              항해99 한마디
            </Text>
          </Header>
          <List />
        </Grid>
      </Grid>

      {/* <Grid bg="#636e72" padding="20px" width="600px" margin="auto">
>>>>>>> Stashed changes
        <Text bold size="24px">test</Text>
      </Grid>
      <Button text="추가하기" width="300px" margin="12px auto"></Button> */}
    </React.Fragment>
  );
}

export default App;
