import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { color, bold, size, children, margin } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
  };

  return (
    <React.Fragment>
      <P {...styles}>{children}</P>
    </React.Fragment>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#f1f2f6",
  size: "14px",
  margin: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  text-align: center;
`;

export default Text;
