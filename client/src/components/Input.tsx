import React from "react";

// styled components
import styled from "styled-components";
import { Title } from "../utils/mutuals";

type Props = {
  name: string;
  comment: string;
  submitHandler: (e: React.FormEvent) => void;
  setName: (name: string) => void;
  setComment: (comment: string) => void;
};

const Input: React.FC<Props> = ({
  submitHandler,
  name,
  comment,
  setName,
  setComment,
}) => {
  return (
    <FormContainer>
      <Title>
        <h2 style={{ fontSize: "2rem" }}>Place your comment</h2>
      </Title>
      <Form id="form" onSubmit={submitHandler}>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Your name"
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
        placeholder="Your comment"
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
  margin-bottom: 1rem;
  textarea {
    border: none;
    border-radius: 8px;
    padding: 0.8rem;
    outline: none;
    transition: all 300ms;
    :active,
    :focus {
      background-color: #ddd;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
  input {
    border: none;
    border-radius: 8px;
    padding: 0.8rem;
    outline: none;
    transition: all 300ms;
    :active,
    :focus {
      background-color: #ddd;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
  }
  button {
    border-radius: 8px;
    padding: 0.8rem 2rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgb(209, 213, 219) 0px 0px 0px 1px inset;
    cursor: pointer;
    transition: all 300ms;
    :active {
      transform: scale(90%);
    }
  }
`;
