import React from "react";
//styled
import styled from "styled-components";

type data = {
  name: string;
  launchTypeId: number;
  comment: string;
  commentId: string;
  date: string;
};

const ListItem: React.FC<data> = (data) => {
  const { name, comment, commentId, date } = data;
  return (
    <Item key={commentId}>
      <div>
        <h3>{name} </h3>
        <span>{date}</span>
      </div>
      <p>' {comment} '</p>
    </Item>
  );
};

export default ListItem;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0;
  gap: 0.3rem;
  position: relative;
  p {
    background-color: #fff;
    padding: 0.3rem;
    border-radius: 8px;
    font-size: 1.3rem;
    letter-spacing: 0.9px;
    color: #444;
    font-style: italic;
    font-weight: 300;
  }
  div {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    align-items: baseline;
    h3 {
      font-size: 1.5rem;
      color: #444;
    }
    span {
      font-style: italic;
    }
  }
`;
