import React from "react";
// apollo client
import { useQuery } from "@apollo/client";
// query
import { LAUNCHES_QUERY } from "../utils/queries";
//styled components
import styled from "styled-components";
//components
import Grid from "../components/Grid";

const Flights = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p>Loading...!</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Layout>
      <Title>
        <h1>SpaceX Flights</h1>
      </Title>
      <Grid data={data.launchesPast} />
    </Layout>
  );
};

export default Flights;

const Layout = styled.div`
  width: 95%;
  max-width: 120rem;
  margin: 0 auto;

  padding: 4rem 0;
`;
const Title = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 4rem;
    margin: 0;
  }
`;
