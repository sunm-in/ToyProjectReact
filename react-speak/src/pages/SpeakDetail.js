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
                <Input placeholder="여기에 입력해주세요"></Input>
                <Button width="15%" text="수정하기"></Button>
                <Button width="15%" text="삭제하기"></Button>
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
  height: 10%;
  background-color: white;
  margin: auto;
  margin-top: 60px;
  padding: 10%;
  & > Button {
    margin: -10% -32% -10% 34.5%;
  }
`;

export default SpeakDetail;