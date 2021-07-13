import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, children, _onClick, is_float, margin, width, padding, right } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    right: right,
  };

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  shape: "circle",
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
  padding: "12px 0px",
  right: false,
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #f1f2f6;
  color: #636e72;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  cursor: pointer;
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #f1f2f6;
  color: #636e72;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 13%;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;
export default Button;
