import React from "react";
// styled component
import styled from "styled-components";
// components
import Card from "./Card";

const Grid = () => {
  return (
    <Container>
      <Card data={item} />
    </Container>
  );
};

export default Grid;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(20rem 1fr));
  column-gap: 1rem;
  row-gap: 2rem;
`;
