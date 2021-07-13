import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid";
import Button from "../elements/Button";

const List = (props) => {
  return (
    <Grid margin="auto">
      <ContentsWrap>
        <ContentsBox>adsfsdaf</ContentsBox>
        <Button is_float width="60px" height="60px" text="+"
        />
      </ContentsWrap>
    </Grid>
  );
};

const ContentsWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #636e72;
  margin: auto;
  margin-top: 40px;
  padding: 1px;
`;

const ContentsBox = styled.div`
  width: 70%;
  background-color: white;
  text-align: center;
  margin: auto;
  margin-top: 60px;
  padding: 40px;
`;

export default List;
