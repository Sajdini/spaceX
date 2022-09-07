import React, { useState } from "react";

// styled components
import styled from "styled-components";
import { Title } from "../utils/mutuals";

const Input = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  return (
    <FormContainer>
      <Title>
        <h2 style={{ fontSize: "2rem" }}>Place your comment</h2>
      </Title>
      <Form id="form">
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Send</button>
      </Form>

      <textarea
        id="comment"
        form="form"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
    </FormContainer>
  );
};

export default Input;
const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Form = styled.form`
  display: flex;
  justify-content: flex-start;
`;
