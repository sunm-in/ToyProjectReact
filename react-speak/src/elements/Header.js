import React from "react";
import styled from "styled-components";

const Header = (props) => {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  const { bg, width, padding } = props;
=======
  const { bg, width, padding, children, height, margin } = props;
>>>>>>> Stashed changes
=======
  const { bg, width, padding, children, height, margin } = props;
>>>>>>> Stashed changes

  const styles = {
    bg: bg,
    width: width,
    padding: padding,
    height: height,
    margin: margin,
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
