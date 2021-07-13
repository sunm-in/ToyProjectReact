import React from "react";
import Grid from "../elements/Grid";
import Header from "../elements/Header";
import Button from "../elements/Button";
import Text from "../elements/Text";
import List from "../components/List";
import Input from "../elements/Input";

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
export default App;
