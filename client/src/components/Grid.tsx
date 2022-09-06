import React from "react";
// styled component
import styled from "styled-components";
// components
import Card from "./Card";
// types
import { Data } from "../utils/types";

type TProps = {
  data: Data[];
};

const Grid: React.FC<TProps> = ({ data }) => {
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
