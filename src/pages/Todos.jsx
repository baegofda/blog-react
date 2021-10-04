import React, { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import ToDoItem from "../components/ToDoItem";

const ToDos = () => {
  const inputRef = useRef();
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    setItems((items) => {
      const item = {
        id: Date.now(),
        content: inputRef.current.value,
        isCompleted: false,
      };
      const newItems = [...items, item];
      return newItems;
    });
    setInputText("");
    inputRef.current.focus();
  };

  const onComplete = (id) => {
    setItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      })
    );
  };

  const onDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <Wrapper>
      <Title>TODO</Title>
      <InputContainer>
        <Input
          ref={inputRef}
          value={inputText}
          type="text"
          onChange={onChange}
          placeholder="추가할 리스트를 입력하여 주세요 !"
        />
        <Button type="submit" name="추가하기" onClick={onClick} />
      </InputContainer>
      <ul>
        {items.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-top: 150px;
`;
const Title = styled.h1`
  margin-bottom: 50px;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;
const InputContainer = styled.form`
  display: flex;
  width: 400px;
  height: 40px;
  margin-bottom: 20px;
`;
const Input = styled.input`
  margin-right: 5px;
  background-color: transparent;
  border: 0;
  outline: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  flex: 1;
`;

export default ToDos;
