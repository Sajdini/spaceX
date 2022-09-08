import React from "react";
//react router
import { Link, useParams } from "react-router-dom";
// apollo
import { useQuery } from "@apollo/client";
// query
import { LAUNCH_QUERY } from "../utils/queries";
//styled components
import styled from "styled-components";
import { Layout } from "../utils/mutuals";
//components
import Main from "../components/Main";
import SideBar from "../components/SideBar";


const Launch = () => {
  const { id } = useParams();
  const idNumber = Number(id);
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { id: idNumber },
  });

  if (loading) return <p>Loading...!</p>;
  if (error) return <p>Error :(</p>;

  return (
    <GridLayout>
      <Main {...data.launch} />
      <SideBar id={idNumber} />
    </GridLayout>
  );
};

export default Launch;

const GridLayout = styled(Layout)`
  display: grid;
  grid-template-columns: 70fr 30fr;
  grid-column-gap: 2rem;

  @media (max-width: 50em) {
    grid-template-columns: 1fr;
    grid-row-gap: 3rem;
  }
`;
