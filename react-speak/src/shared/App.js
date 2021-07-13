import React from "react";
import Grid from "../elements/Grid";
import Header from "../elements/Header";
import Text from "../elements/Text";
import Input from "../elements/Input";
import styled from "styled-components";
function App() {
  return (
    <React.Fragment>
      <Grid margin="auto">
        <Header bg="#636e72" padding="40px">
          <Text bold size="60px">
            항해99 한마디
          </Text>
        </Header>
        <Grid margin="auto">
          <Input/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
