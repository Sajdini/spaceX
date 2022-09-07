import React, { useState } from "react";
// styled
import styled from "styled-components";
// components
import Input from "./Input";
import Comments from "./Comments";
// date formater


type Props = {
  id: number;
};

const SideBar: React.FC<Props> = ({ id }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [reload, setReload] = useState(false);


  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) {
      alert("Please fill all information ");
      return;
    }
    try {
      const response = await fetch("http://localhost:4000/comments/new", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ name, comment, id}),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      alert(err);
    }
    setName("");
    setComment("");
    // this is purely cheating, as this is used only to trigger the useEffect in Comments components
    setReload((state) => !state);
  };

  return (
    <SideBarSection>
      <Container>
        <Input
          name={name}
          comment={comment}
          submitHandler={submitHandler}
          setName={setName}
          setComment={setComment}
        />
      </Container>
      <Container>
        <Comments id={id} reload={reload} />
      </Container>
    </SideBarSection>
  );
};

export default SideBar;

const SideBarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 54rem;
`;

const Container = styled.div`
  max-height: 100%;
  max-height: 33.9rem;
  padding: 1rem;
  background-color: #eaeaea;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  overflow: auto;
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(245, 242, 242, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(92, 94, 92);
    outline: 1px solid slategrey;
    position: relative;
  }
  ::-webkit-scrollbar {
    width: 0.5em;
    height: 10px;
  }
`;
