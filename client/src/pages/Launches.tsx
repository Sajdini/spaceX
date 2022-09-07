import React from "react";
// apollo client
import { useQuery } from "@apollo/client";
// query
import { LAUNCHES_QUERY } from "../utils/queries";
//styled components
import { Layout, Title } from "../utils/mutuals";
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
