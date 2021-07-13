import React from "react";
import styled from "styled-components";
import Grid from "./Grid";
import Text from "./Text";
const Input = (props) => {
  const { label, placeholder, type, margin, height, padding } = props;

  return (
    <React.Fragment>
      <Grid>
        <Text margin="0px">{label}</Text>
        <PostInput
          type={type}
          placeholder={placeholder}
          margin={margin}
          height={height}
          padding={padding}
        ></PostInput>
      </Grid>
    </React.Fragment>
  );
};

Input.defautlProps = {
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  margin: false,
};

const PostInput = styled.input`
  display: block;
  border: 1px solid #212121;
  width: 60%;
  padding: 12px 4px;
  box-sizing: border-box;
  margin: auto;
  height: 40%;
`;
export default Input;
