import React from "react";
import Grid from "../elements/Grid";
import Header from "../elements/Header";
import Button from "../elements/Button";
import Input from "../elements/Input";
import Text from "../elements/Text";
import styled from "styled-components";

const SpeakDetail = (props) => {
  return (
    <React.Fragment>
      <Grid bg="#b2bec3" width="100%">
          <Grid width="80%" margin="auto">
              <Grid>
                  <Header bg="#636e72">
                      <Text bold size="40px">항해99 한마디</Text>
                  </Header>
              </Grid>
              <Grid height="auto">
                  <Button width="15%" text="수정하기"></Button>
                  <Button width="15%" text="삭제하기"></Button>
                  <Input></Input>
              </Grid>
          </Grid>
      </Grid>
    </React.Fragment>
  );
};

const DetailWrap = styled.div`

`;

export default SpeakDetail;
