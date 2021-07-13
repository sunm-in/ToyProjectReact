import React from "react";
import Grid from "../elements/Grid";
import Header from "../elements/Header";
import Text from "../elements/Text";
import List from "../components/List";

const SpeakMain = () => {
  return (
    <React.Fragment>
      <Grid width="100%" bg="#b2bec3">
        <Grid width="80%" margin="auto">
          <Grid margin="auto">
            <Header bg="#636e72" padding="3px">
              <Text bold size="40px">
                항해99 한마디
              </Text>
            </Header>
            <List />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SpeakMain;
