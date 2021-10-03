import React from "react";
import styled from "styled-components";

const ToDoItem = ({ item, onComplete, onDelete }) => {
  return (
    <Item>
      <CheckBox
        type="checkbox"
        defaultChecked={item.isCompleted}
        onChange={onComplete(item.id)}
      />
      <Content isCompleted={item.isCompleted}>{item.content}</Content>
      <button type="button" onClick={onDelete(item.id)}>
        삭제하기
      </button>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CheckBox = styled.input`
  width: 20px;
  height: 100%;
  margin-right: 5px;
`;

const Content = styled.p`
  margin-right: 5px;
  line-height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.11);
  flex: 1;

  ${({ isCompleted }) =>
    isCompleted &&
    `
  text-decoration:line-through
  `}
`;

export default ToDoItem;
