import React from "react";
import styled from "styled-components";
import Text from "./Text";
const Header = (props) => {

  const { bg, width, padding, height, margin, children } = props;


  const styles = {
    children: children,
    bg: bg,
    width: width,
    padding: padding,
    height: height,
    margin: margin,
  };
  return (
    <React.Fragment>
      <HeaderBox {...styles}>{children}</HeaderBox>
    </React.Fragment>
  );
};

Header.defaultProps = {
  children: null,
  bg: false,
  width: "100%",
  height: "30%",
  padding: "4px",
  margin: false,
};

const HeaderBox = styled.div`
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  width: ${(props) => props.width};
  box-sizing: border-box;
  height: 15%;
`;

export default Header;
