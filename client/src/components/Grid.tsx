import React from "react";
// styled component
import styled from "styled-components";
// components
import Card from "./Card";
// types
import { Launches } from "../utils/types";

type Props = {
  data: Launches[];
};

const Grid: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {data.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </Container>
  );
};

export default Grid;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  gap: 2rem;
`;
