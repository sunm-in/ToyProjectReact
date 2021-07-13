import React from "react";
import styled from "styled-components";

const Header = (props) => {
  const { bg, width, padding } = props;

  const styles = {
    bg: bg,
    width: width,
    padding: padding,
  };
  return (
    <React.Fragment>
      <HeaderBox {...styles}></HeaderBox>
    </React.Fragment>
  );
};

Header.defaultProps = {
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
