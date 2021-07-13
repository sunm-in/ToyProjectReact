import React from "react";
import styled from "styled-components";
import Text from "./Text";
const Header = (props) => {
  const { bg, width, padding, children } = props;

  const styles = {
    children: children,
    bg: bg,
    width: width,
    padding: padding,
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
  padding: "4px",
};

const HeaderBox = styled.div`
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  width: ${(props) => props.width};
  box-sizing: border-box;
`;

export default Header;
