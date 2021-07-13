import React from "react";
import Grid from "../elements/Grid";
import Header from "../elements/Header";
import Text from "../elements/Text";

const SpeakMain = () => {
  return (
    <React.Fragment>
      <Grid bg="#636e72">
        <Header bg="#636e72" padding="40px">
          <Text bold size="60px">
            항해99 한마디
          </Text>
        </Header>
      </Grid>
    </React.Fragment>
  );
};

export default SpeakMain;
