import React from "react";
import styled from "styled-components";

import Grid from "../elements/Grid";
import Header from "../elements/Header";
import Text from "../elements/Text";
import Button from "../elements/Button";

import { useDispatch, useSelector } from "react-redux";
import speak, { addListDB } from "../redux/modules/speak";

const SpeakWrite = (props) => {
  const dispatch = useDispatch();

  const content_ref = React.useRef();
  const nickname_ref = React.useRef();
  const title_ref = React.useRef();
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
              <input
                margin="50px auto"
                placeholder="텍스트를 입력해주세요."
                ref={nickname_ref}
              />
              <input
                margin="50px auto"
                placeholder="텍스트를 입력해주세요."
                ref={content_ref}
              />
              <input
                margin="50px auto"
                placeholder="텍스트를 입력해주세요."
                ref={title_ref}
              />
            </Grid>
            <ButtonBox>
              <Button
                margin="30px auto"
                width="80px"
                text="추가하기"
                _onClick={() => {
                  let input_text = {
                    nickname: nickname_ref.current.value,
                    content: content_ref.current.value,
                    title: title_ref.current.value
                  };
                  dispatch(addListDB(input_text));
                  console.log(input_text)
                }}
              ></Button>
            </ButtonBox>
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
  & input {
    width: 100%;
    height: 50px;
  }
`;

const ButtonBox = styled.div`
  width: 100px;
  margin: 0px auto;
`;

export default SpeakWrite;