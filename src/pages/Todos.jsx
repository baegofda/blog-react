import React, { useRef, useState } from "react";
import styled from "styled-components";
import ToDoItem from "../components/ToDoItem";

const ToDos = () => {
  const inputRef = useRef();
  const [items, setItems] = useState([
    {
      id: 1,
      content: "hihi",
      isCompleted: true,
    },
  ]);

  const onClick = () => {
    setItems((items) => {
      const item = {
        content: inputRef.current.value,
        isCompleted: false,
      };
      const newItems = [...items, item];
      return newItems;
    });

    inputRef.current.value = "";
  };

  const onComplete = (id) => {
    // setItems((items) => {
    // 	items.find(item => item.id === id)
    // })
    // console.log("sss");
  };

  const onDelete = (id) => {
    // setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Wrapper>
      <Title>TODO</Title>
      <InputContainer>
        <Input ref={inputRef} placeholder="추가할 리스트를 입력하여 주세요 !" />
        <InputButton type="submit" onClick={onClick} alt="리스트 등록">
          추가하기
        </InputButton>
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
const InputContainer = styled.div`
  display: flex;
  width: 400px;
  height: 40px;
  margin-bottom: 30px;
`;
const Input = styled.input`
  margin-right: 5px;
  flex: 1;
`;
const InputButton = styled.button``;

export default ToDos;
