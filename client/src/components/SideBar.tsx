import React from "react";
import styled from "styled-components";
import Input from "./Input";
type Props = {
  id: number;
};

const SideBar: React.FC<Props> = ({ id }) => {
  return (
    <Container>
      <Input id={id} />
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  padding: 1rem;
  background-color: #eaeaea;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
