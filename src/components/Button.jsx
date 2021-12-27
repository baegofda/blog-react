import React from "react";
import styled from "styled-components";

const Button = ({ type, name, onClick }) => {
  return (
    <Btn type={type} onClick={onClick}>
      {name}
    </Btn>
  );
};

const Btn = styled.button`
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
