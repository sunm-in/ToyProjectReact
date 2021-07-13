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
          <Grid margin="auto">
            <Header bg="#636e72">
              <Text bold size="40px">
                항해99 한마디
              </Text>
            </Header>
          </Grid>
          <DetailWrap>
            <DetailInputBox>
              <Input></Input>
              <Grid is_flex width="400px" padding="60px">
                <Button width="20%" text="수정하기"></Button>
                <Button width="20%" text="삭제하기"></Button>
              </Grid>
            </DetailInputBox>
          </DetailWrap>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const DetailWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #636e72;
  margin: auto;
  margin-top: 40px;
  padding: 1px;
`;

const DetailInputBox = styled.div`
  width: 50%;
  height: 40%;
  background-color: white;
  margin: auto;
  margin-top: 60px;
  padding: 40px;
  & > Button{
      margin: 0px 0px 0px 120px;
  }
`;

export default SpeakDetail;
