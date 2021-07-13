import React from "react";
import Grid from "../elements/Grid";
import Header from "../elements/Header";
<<<<<<< Updated upstream


import Button from "../elements/Button";

=======
import Button from "../elements/Button";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          <Input/>
        </Grid>
      </Grid>


      <Grid bg="#636e72" padding="20px" width="600px" margin="auto">
=======
          <Header bg="#636e72" padding="5px">
            <Text bold size="60px">
              항해99 한마디
            </Text>
          </Header>
          <Grid>
            <List />
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid bg="#636e72" padding="20px" width="600px" margin="auto">
>>>>>>> Stashed changes
        <Text bold size="24px">test</Text>
      </Grid>
      <Button text="추가하기" width="300px" margin="12px auto"></Button>

    </React.Fragment>
  );
}

export default App;
