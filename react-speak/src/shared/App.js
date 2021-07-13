import React from "react";
import Grid from "../elements/Grid";
import Header from "../elements/Header";
import Button from "../elements/Button";
import Text from "../elements/Text";
<<<<<<< HEAD
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
    </React.Fragment>
  );
}
=======
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
          <Input />
        </Grid>
      </Grid>

      <Grid bg="#636e72" padding="20px" width="600px" margin="auto"></Grid>
    </React.Fragment>
  );
}

>>>>>>> 3347b3ad2a5e56eedd5f9189f9cd7104a4065cdf
export default App;
