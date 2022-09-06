import React from "react";
//styled components
import styled from "styled-components";
// apollo client
import { useQuery, gql } from "@apollo/client";
//react router
import { Link } from "react-router-dom";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
    }
  }
`;

const Flights = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  console.log(data);

  if (loading) return <p>Loading...!</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Layout>
      <Title>
        <h1>SpaceX Flights</h1>
      </Title>
      <Grid data={data} />
    </Layout>
  );
};

export default Flights;

const Layout = styled.div`
  max-width: 80%;
  margin: 0 auto;

  padding-top: 4rem;
`;
const Title = styled.div`
  text-align: center;

  h1 {
    font-size: 4rem;
    margin: 0;
  }
`;
