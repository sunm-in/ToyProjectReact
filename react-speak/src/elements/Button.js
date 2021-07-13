import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {text, children, _onClick, is_float, margin, width, padding} = props;

    const styles = {
        margin: margin,
        width: width,
        padding: padding,
    }

    return(
        <React.Fragment>
        
        </React.Fragment>
    );
}

Button.defaultProps = {
    shape: "circle",
    text: false,
    children: null,
    _onClick: () => {},
    is_float: false,
    margin: false,
    width: "100%",
    padding: "12px 0px",
}

const ElButton = styled.button`
    
`;

export default Button;