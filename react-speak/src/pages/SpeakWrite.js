import React from "react";
import styled from "styled-components";

import Grid from "../elements/Grid";
import Header from "../elements/Header";
import Input from "../elements/Input";
import Text from "../elements/Text";
import Button from "../elements/Button";

const SpeakWrite = (props) => {
  return (
    <React.Fragment>
      <WriteWrap>
        <Grid width="80%" margin="0px auto">
          <Grid>
            <Header bg="#636e72" padding="3px">
              <Text bold size="40px">
                항해99 한마디
              </Text>
            </Header>
          </Grid>
          <WriteBox>
            <Grid>
              <Input margin="50px auto" placeholder="텍스트를 입력해주세요." />
            </Grid>
            <Grid>
              <Button margin="0px auto" width="80px" text="추가하기"></Button>
            </Grid>
          </WriteBox>
        </Grid>
      </WriteWrap>
    </React.Fragment>
  );
};

const WriteWrap = styled.div`
  background-color: #b2bec3;
  width: 100%;
  height: 100%;
  padding: 0 0 5% 0;
`;

const WriteBox = styled.div`
  height: 100%;
  background-color: #636e72;
  padding: 10%;
  margin: 10% 0px;
  & Input {
      width: 100%;
      height: 200px;
      padding: 20px;
  }
`;

export default SpeakWrite;
